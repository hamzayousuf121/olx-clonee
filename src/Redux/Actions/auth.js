import firebase from "../../config/firebase";

export function googleLogin(history) {
  return (dispatch) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    Signin(dispatch, history, provider);
  };
}
export function facebookLogin(history) {
  return (dispatch) => {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    Signin(dispatch, history, provider);
  };
}
export function githubLogin(history) {
  return (dispatch) => {
    var provider = new firebase.auth.GithubAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    Signin(dispatch, history, provider);
  };
}

function Signin(dispatch, history, provider) {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function ({ user }) {
      const userInfo = {
        name: user.displayName,
        email: user.email,
        imageUrl: user.photoURL,
        uid: user.uid,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      };
      firebase
        .database()
        .ref("/")
        .child(`users/${user.uid}`)
        .set(userInfo)
        .then(() => console.log("User Add SuccessFully"));
      dispatch({ type: "SETUSER", payload: userInfo });
      history.push("/posts");
    })
    .catch((error) => {
      console.log(error);
    });
}

export const checkUser = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user != null) {
        const userInfo = {
          name: user.displayName,
          email: user.email,
          imageUrl: user.photoURL,
          uid: user.uid,
        };
        dispatch({ type: "SETUSER", payload: userInfo });
      }
    });
  };
};

export const signOut = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch({ type: "SIGNOUT" });
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };
};

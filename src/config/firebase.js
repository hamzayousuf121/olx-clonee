import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCH9lix6WQTKrKIeLHR_iEBnt1foYT1Zkk",
  authDomain: "olx-clonee.firebaseapp.com",
  databaseURL: "https://olx-clonee.firebaseio.com",
  projectId: "olx-clonee",
  storageBucket: "olx-clonee.appspot.com",
  messagingSenderId: "1047381091746",
  appId: "1:1047381091746:web:daf7b33f9294a831e8fefb",
  measurementId: "G-1Q5DL21TXJ"
};
firebase.initializeApp(config);
export default firebase;
// import firebase from './new'

// class Firebase {
//   constructor() {
//     // firebase.initializeApp(config);
//     this.auth = App.auth();
//     // this.database = App.database();
//     this.store = App.firestore();
//     this.storage = App.storage();
//     this.fire = App.firestore;
//   }

//   // *** Auth API ***
//   doCreateUserWithEmailAndPassword = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password);
 
//   doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);

//   doSignOut = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("Projects");
//     this.auth.signOut();
//   };

//   doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
//   doPasswordUpdate = (password) =>
//     this.auth.currentUser.updatePassword(password);

//   createUser = (currentUserId, data) =>
//     this.store.collection("users").doc(currentUserId).set(data);
//   getUser = (currentUserId) =>
//     this.store.collection("users").doc(currentUserId);
//   updateUserInfo = (currentUserId, data) =>
//     this.store
//       .collection("users")
//       .doc(currentUserId)
//       .set(data, { merge: true });

//   uploadImage = async (filename, file) => {
//     const storage = this.storage.ref().child(filename);
//     await storage.put(file);
//     const url = await storage.getDownloadURL();
//     return url;
//   };

//   createNewProject = (data) =>
//     this.store.collection("projects").doc(data.projectId).set(data);

//   qurey = async (email) => {
//     try {
//       let data;
//       await this.store
//         .collection("users")
//         .where("email", "==", email)
//         .get()
//         .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             // console.log(doc.id, ' => ', doc.data());
//             data = doc.id;
//           });
//         });
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   timeStamp = () => firebase.firestore.Timestamp.now().seconds;

//   getUserData = async (currentUserId) => {
//     try {
//       const user = await this.store
//         .collection("users")
//         .doc(currentUserId)
//         .get()
//         .then((doc) => {
//           // console.log(doc.id, 'doc, id')
//           let data = { ...doc.data() };
//           data.id = doc.id;
//           return data;
//         });
//       return user;
//     } catch (error) {
//       console.log(error.message, " error message");
//     }
//   };

//   getProjectData = async () => {
//     try {
//       const data = await this.store
//         .collection("projects")
//         .get()
//         .then(function (querySnapshot) {
//           const arr = [];
//           querySnapshot.forEach(function (doc) {
//             // doc.data() is never undefined for query doc snapshots
//             //  console.log(doc.id, " => ", doc.data());
//             arr.push(doc.data());
//           });
//           return arr;
//         });
//       return data;
//     } catch (error) {
//       console.log(error, "error");
//     }
//   };

//   deleteProject = async (projectId, userId) => {
//     try {
//       let user = await this.getUserData(userId);
//       console.log(firebase.firestore.Timestamp.now().seconds);
//       // let filteredList = user.projects.filter(val => val !== projectId)
//       // await this.newProjectId(userId,filteredList);
//       if (user.projectId === projectId) {
//         await this.store
//           .collection("users")
//           .doc(userId)
//           .update({ projectId: firebase.firestore.FieldValue.delete() });
//       }
//       let deletedProject = await this.store
//         .collection("projects")
//         .doc(projectId)
//         .update({
//           deleted: true,
//           active: false,
//           deletedAt: firebase.firestore.Timestamp.now().seconds,
//         });
//       console.log(deletedProject, " deletedProject");
//       return deletedProject;
//     } catch (error) {
//       console.log(error, "error");
//       throw error;
//     }
//   };

//   updateUserProjects = (userId, arry) => {
//     // debugger
//     try {
//       this.store.collection("users").doc(userId).update({
//         projects: arry,
//       });
//     } catch (error) {
//       return error;
//     }
//   };

//   getSingleProjectData = async (projectId) => {
//     try {
//       const data = await this.store
//         .collection("projects")
//         .doc(projectId)
//         .get()
//         .then((doc) => doc.data());
//       return data;
//     } catch (error) {
//       console.log(error, "error");
//     }
//   };

//   updateProjectUsers = (projectId, arry) => {
//     // debugger
//     try {
//       this.store.collection("projects").doc(projectId).update({
//         users: arry,
//       });
//     } catch (error) {
//       return error;
//     }
//   };

//   getRoleUsers = async (projectId, roles) => {
//     try {
//       let roleData;
//       await this.store
//         .collection("projects")
//         .doc(projectId)
//         .collection("roles")
//         .where("roleName", "==", roles)
//         .get()
//         .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             //  console.log(doc.id, ' => ', doc.data());
//             let data = { ...doc.data() };
//             data.id = doc.id;
//             roleData = data;
//           });
//         });
//       return roleData;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   getRoles = async (projectId) => {
//     try {
//       let rolesArry = [];
//       await this.store
//         .collection("projects")
//         .doc(projectId)
//         .collection("roles")
//         .get()
//         .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             // console.log(doc.id, ' => ', doc.data());
//             let data = { ...doc.data() };
//             data.id = doc.id;
//             rolesArry.push(data);
//             // roleData = data
//           });
//           // console.log(rolesArry)
//         });
//       return rolesArry;
//     } catch (error) {
//       console.log(error, " error");
//     }
//   };

//   updateRoleUsers = async (projectId, id, array) => {
//     try {
//       await this.store
//         .collection("projects")
//         .doc(projectId)
//         .collection("roles")
//         .doc(id)
//         .update({
//           Users: array,
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   updateProjectPendingRegistration = (projectId, arry) => {
//     // debugger
//     try {
//       this.store.collection("projects").doc(projectId).update({
//         pendingRegistrations: arry,
//       });
//     } catch (error) {
//       return error;
//     }
//   };
//   user = (uid) => this.store.collection("users").where("uid", "==", uid);
//   users = () => (this.users = this.store.collection("users"));
// }
// export default new Firebase();

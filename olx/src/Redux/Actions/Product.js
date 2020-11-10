import firebase from "../../config/firebase";

export const getAllProducts = () => {
    return(dispatch) => {
    firebase.database().ref('/').child('products').on('child_added', 
    (snapshots) => {
        var data = snapshots.val();
        dispatch({type: 'SETPRODUCT', payload:data})
    })
}
}
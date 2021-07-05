import firebase from "../../config/firebase";

export const getAllProducts = () => {
    return(dispatch) => {
    firebase.database().ref('/').child('products').get()
    .then((snapshot) => {
        if (snapshot.exists()) {
            var data = snapshot.val();
            console.log(Object.values(data))
            dispatch({type: 'SETPRODUCT', payload:Object.values(data)})
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    
}
}
//   export const filterCategory = (category) => {
//     return(dispatch) => {
//      dispatch({type: 'FILTERCATEGOR', payload: category})
//    }
//   }
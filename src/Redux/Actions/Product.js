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

export const getCategory = () => {
    return(dispatch) => {
    firebase.database().ref('/').child('products').limitToLast(12).on('child_added', 
    (snapshots) => {
        var data = snapshots.val();
        dispatch({type: 'SETCATEGORY', payload:data})
    })
   }
  }

  export const filterCategory = (category) => {
    return(dispatch) => {
     dispatch({type: 'FILTERCATEGORY', payload: category})
    // console.log("Filter Category Called", category)
   }
  }
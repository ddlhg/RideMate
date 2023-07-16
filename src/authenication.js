// import React,{useEffect} from 'react';
// import * as firebaseui from 'firebaseui';
// import 'firebaseui/dist/firebaseui.css';
// import firebase from 'firebase/compat/app';
// import Login from './components/Login/Login';

// const authentication = (props) => {
//     useEffect(()=>{
//         const ui = firebaseui.auth.AuthUI.getInstance()|| new firebaseui.auth.AuthUI(props.auth);
//         ui.start(".firebase-auth-container",{
//             signInOptions:[
//                 {
//                     provider:firebase.auth.EmailAuthProviderAuthProvider.PROVIDER_ID,
//                     signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
//                     requireDisplayName:true
//                 }
                
//             ],
//             signInSuccessUrl:'',
            
//         });
//     },[props.auth]);
//     return (
//         <div>authentication</div>
//     )
// }

// export default authentication
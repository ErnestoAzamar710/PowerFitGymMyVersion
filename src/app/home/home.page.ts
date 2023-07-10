import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, 
        signInWithEmailAndPassword} from "firebase/auth";
import { environment } from 'src/environments/environment';
//import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor() {}
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig = {
    apiKey: "AIzaSyCszlbjqmxk1zwh2WxJMun6c86cx70WoBA",
    authDomain: "powerfitgym-c0d29.firebaseapp.com",
    databaseURL: "https://powerfitgym-c0d29-default-rtdb.firebaseio.com",
    projectId: "powerfitgym-c0d29",
    storageBucket: "powerfitgym-c0d29.appspot.com",
    messagingSenderId: "343925545332",
    appId: "1:343925545332:web:c47ca06661c805d94c7421",
    measurementId: "G-97BVSL5EMS"
  };

  ngOnInit(){}

  loginGoogle(){
    const app = initializeApp(environment.firebase);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        const uemail = user.email;
        const uid = user.uid;
        console.log(user,uid);
        if(uemail != "asanchezazamar@gmail.com"){
          window.location.href = '/usuario' + '?w1=' +uid;
        }
        else{
          window.location.href = '/administrador' + '?w1=' +uid;
        }
        
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
}

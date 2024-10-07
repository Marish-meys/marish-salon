
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import {getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
  

  const firebaseConfig = {
    apiKey:"AIzaSyBEuOz_oBKSAFzTtB64lQqWDWYKjATGu_o",
    authDomain: "marish-salon-spa.firebaseapp.com",
    projectId: "marish-salon-spa",
    storageBucket: "marish-salon-spa.appspot.com",
    messagingSenderId: "691431815805",
    appId: "1:691431815805:web:450eea2288e4d0c8010f14"};
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function showMessage(messsage,divId) {
  var MessageDiv=document.getElementById(divId);
  mesageDiv.style.display='block';
  messageDiv.innerHTML=message;
  messageDiv.style.opacity=1;
  setTimeout(function(){
    messageDiv.style.opacity=0;

  },5000);

  
}

  const signUP=document.getElementById('submit signUp');
  signUp.addEventListener('click',(event)=>{
    event.preventDefault();
   const email=document.getElementById('rEmail').value;
   const password=document.getelemrntById('rpassword').value;
   const firstName=document.getElementById('fname').value;
   const lastName=document.getElementById('lName').value;

   const auth=getAuth();
   const db=getFirestore();

   createUserWithEmailAndPassword(auth,email,password)
   .then((userCredential)=>{
    const user=userCredential.users;
    const userData={
        email:email,
        firstName:firstName,
        lastName:lastName,
    };
    showMessag('Account created succesfully','signUpMessage')
    const docRef=doc(db, "users", user.uid);
    setDoc(docRef,uerData)
    .then(()=>{
      window.location.href='index.html';
    })
    .catch((error)=>{
      console.error("error writting document",error);

    });
    })
    .catch((erroe)=>{
      const errorCode=error.code;
      if (errorCode=='auth/email-already-in-use'){
        showMessage("Email Address AlreadyExist !!!", "signUpMessage");

      }
      else{
        showMessage("unable to create user","signUpMessage");
      }
    })
  
  });
  const signIn=document.getElementById('submitSigIn');
  SignIn.addEventListener('click',(event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();
    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signInMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='homepage.html';

  })
  .catch((error)=>{
    const errorCode=error.code;
    if(errorCode==='auth/invalid-credential'){
        showMessage('Incorrect Email or Password', 'signInMessage');
    }
    else{
        showMessage('Account does not Exist', 'signInMessage');

    }
  })
});
const SignIn=document.getElementById('submitSignIn');
signIn.addEventListener('click',(event)=>{
  event.preventDefault();
  const email=document.getElementById('email').value
  const password=document.getElementById('password').value
  const auth=getAuth();
  signInWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    showMessage('login is succcessfull','signInMessage');
    const user=userCredential.user;
    localStorage.setItem('loggedInUserId',user.uid);
    window.location.href='homepage.html';
  })
  .catch((error)=>{
    const errorCode=error.code;
    if(errorCode==='Auth/inavalid-credential'){
      showMessage('Incorrect Email or password','signInMessage');
      window.location.href='homepage.html';
    }
    else{
      showMessage('Account does not Exist',)
    }
  })
})
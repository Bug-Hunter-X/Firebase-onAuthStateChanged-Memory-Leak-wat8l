import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; //Import your firebase auth configuration

let unsubscribe;

export const authStateChanged = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log('User is signed in:', uid);
      // Perform actions based on user authentication state
    } else {
      // User is signed out
      // Perform actions based on user authentication state
    }
  });
  return unsubscribe;
};

export const cleanupAuth = () => {
  if(unsubscribe){
    unsubscribe();
  }
};

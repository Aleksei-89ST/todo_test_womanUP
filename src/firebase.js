import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
 

const firebaseConfig = {
  apiKey: "AIzaSyCixZ1ENFdHTTFO1OMLMoROWfr5laX05GM",
  authDomain: "womanup-9cfe0.firebaseapp.com",
  projectId: "womanup-9cfe0",
  storageBucket: "womanup-9cfe0.appspot.com",
  messagingSenderId: "596844670266",
  appId: "1:596844670266:web:17270daefeef4c7c073403"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};
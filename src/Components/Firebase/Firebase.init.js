import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInitializing = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitializing
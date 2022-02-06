import { FirebaseApp } from "@firebase/app";
import {
  Auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  updateCurrentUser,
} from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { fireBaseHelper } from "../App";

export default class AuthenticationHelper {
  auth: Auth;

  public signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(this.auth, email, password);
  };

  public login = async (email: string, password: string) => {
    let userCredentials = await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    let userData = (
      await getDoc(
        doc(
          collection(fireBaseHelper.firestore, "users"),
          userCredentials.user.uid
        )
      )
    ).data();

    return userData !== undefined && userData["isAdmin"] === true;
  };

  public resetPassword = (email: string) => {
    return sendPasswordResetEmail(this.auth, email);
  };

  public updateName = (name: string) => {
    return updateProfile(this.auth.currentUser!, { displayName: name });
  };

  public triggerUpdate() {
    return updateCurrentUser(this.auth, this.auth.currentUser);
  }

  constructor(firebaseInstance: FirebaseApp) {
    this.auth = getAuth(firebaseInstance);
  }
}

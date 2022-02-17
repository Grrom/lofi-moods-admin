import { FirebaseApp } from "@firebase/app";
import {
  Auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  updateCurrentUser,
  signOut,
} from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { fireBaseHelper } from "../App";
import AlertHelper from "../helpers/alert-helper";
import Helpers from "../helpers/helpers";

export default class AuthenticationHelper {
  auth: Auth;

  public signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(this.auth, email, password);
  };

  public login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(this.auth, email, password);
    return this.isAdmin();
  };

  public isAdmin = async () => {
    if (this.auth.currentUser !== null) {
      let userData = (
        await getDoc(
          doc(
            collection(fireBaseHelper.firestore, "users"),
            this.auth.currentUser.uid
          )
        )
      ).data();

      if (userData !== undefined && userData["isAdmin"] !== true) {
        AlertHelper.infoAlert(
          "Sorry, This account does not have admin privileges, Please contact a super admin to request admin access."
        );
        signOut(this.auth);
        return false;
      }
      return userData !== undefined && userData["isAdmin"] === true;
    } else {
      console.log("no user");
      return false;
    }
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
    // document.cookie = `rememberAdmin=; expires=${new Date()}`;
    console.log("hehe");
    console.log(Helpers.getCookie("rememberAdmin"));
    // signOut(this.auth);
    if (Helpers.getCookie("rememberAdmin") !== "true") {
      signOut(this.auth);
    }
  }
}

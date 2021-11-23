import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initializationFirebase from "../Pages/Login/Firebase/firebase.init";

// Called initialize Firebase App
initializationFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  // Create New User Page by Register____________________
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name);
        // Send Name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        // Redirect Register to home page_____________
        history.replace("/");
        // Good Job Alert
        swal("Good job!", "Account Create successfully", "success");
      })
      .catch((error) => {
        swal("Something Wrong!!", `${error.message}`, "error");
      })
      .finally(() => setIsLoading(false));
  };

  //   SignIn Email Password Previous Account__________________
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Redirect Login page
        const destination = location?.state?.from || "/";
        history.replace(destination);
        swal("Good job!", "Login Successfully", "success");
      })
      .catch((error) => {
        swal("Something Wrong!", `${error.message}`, "error");
      })
      .finally(() => setIsLoading(false));
  };

  //  Check Admin?_________________
  useEffect(() => {
    // setIsLoading(true);
    fetch(`https://fierce-scrubland-09393.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.isAdmin);
      })
      .finally(() => setIsLoading(false));
  }, [user?.email]);

  // Observe User State
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed();
  }, []);

  // Save User to Database
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://fierce-scrubland-09393.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // Sign Out User
  const logOut = () => {
    setIsLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        swal("Done", "Logout successfully", "success");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  // Return Developer caller function
  return {
    user,
    registerUser,
    loginUser,
    admin,
    token,
    logOut,
    isLoading,
  };
};
export default useFirebase;

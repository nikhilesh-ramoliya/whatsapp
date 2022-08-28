import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async (setUser, user) => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        setUser(res.user) // add alert for success // add ui functionalities on successful login
    } catch (error) {
        console.log(error); // add alert for error
    }
}

export const logout = (setUser) => {
    signOut(auth);
    setUser(null);
}

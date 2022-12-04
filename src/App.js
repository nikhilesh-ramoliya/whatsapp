/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';
import app from "./firebase/Firebase_config";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth"

//!---------------------------------------------------------
//!---------------------------------------------------------
import axios from './axios';
import LoginPage from './firebase/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [user, setUser] = useState();



  //! for sign in with google and sign out
  //*---------configuration of firebase-----------------
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //*-------------------signin-----------------
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithRedirect(auth, googleProvider);
      setUser(res.user) // add alert for success // add ui functionalities on successful login
    } catch (error) {
      console.log(error); // add alert for error
    }
  }
  //*-------------------logout-----------------
  const logout = () => {
    signOut(auth);
    setUser(null);
  }
  //! for sign in with google and sign out

  useEffect(() => {
    //*----------stay logined------------------
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else setUser(null);
    })
    //*----------------------------------------
    // eslint-disable-next-line
  }, [])

  console.log({ user });

  return (
    <div className="App">
      <Routes>
        <Route path='/whatsapp/' element={
          user ? (<div className="app_body">
            <Sidebar />
            <Chat user={user.displayName} logout={logout} />
          </div>) : (<LoginPage logout={logout} signInWithGoogle={signInWithGoogle} />)
        } />
        <Route path='/whatsapp/login' element={
          <LoginPage logout={logout} signInWithGoogle={signInWithGoogle} />
        } />
      </Routes>
    </div>
  );
}

export default App;

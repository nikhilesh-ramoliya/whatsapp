import React from 'react'
import "./LoginPage.css"
function LoginPage({logout, signInWithGoogle}) {
  

    return (
        <div>
            <button className='googlebutton' onClick={signInWithGoogle}>sign in with google</button>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default LoginPage
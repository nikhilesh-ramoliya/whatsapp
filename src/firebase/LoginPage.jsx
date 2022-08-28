import React from 'react'
function LoginPage({logout, signInWithGoogle}) {
  

    return (
        <div className='Loginpage'>
            <button className='googlebutton' onClick={signInWithGoogle}>sign in with google</button>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default LoginPage
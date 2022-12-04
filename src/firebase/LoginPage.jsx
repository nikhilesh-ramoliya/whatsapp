import { Button } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
function LoginPage({ logout, signInWithGoogle }) {
    return (
        <div >
            <Button variant='contained' startIcon={<GoogleIcon />} color='error' onClick={signInWithGoogle}>sign in with google</Button>
        </div>
    )
}

export default LoginPage
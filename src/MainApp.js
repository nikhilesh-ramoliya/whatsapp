import { Chat } from '@mui/icons-material'
import React from 'react'
import Sidebar from './Sidebar/Sidebar'

function MainApp() {
    return (
        <div className="App">
            <div className='app_body'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default MainApp
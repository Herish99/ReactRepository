import {createBrowserRouter } from 'react-router-dom'
import Models from './Models'
import ModelE from './ModelE'
import ModelX from './ModelX'
import ModelY from './ModelY'
import MainHeader from './component/Header'
import Logo from './Logo'


const router = createBrowserRouter([
    {
        path: '/',
        element:<><MainHeader/><Logo/></>
    },
    {
        path: '/models',
        element:<><MainHeader/><Models/></>
    },
    {
        path: '/modele',
        element:<><MainHeader/><ModelE/></>
    },
    {
        path: '/modelx',
        element:<><MainHeader/><ModelX/></>
    },
    {
        path: '/modely',
        element:<><MainHeader/><ModelY/></>
    }
])

export default router;
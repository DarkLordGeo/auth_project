import React from 'react'
import { Route, Routes } from 'react-router'
import type { RoutesInterface } from './routes'
import Login from '../pages/Login'
import Register from '../pages/Register'

interface MainRouteProps {
    route: RoutesInterface[]
}
// import { useState } from 'react'



const Router: React.FC<MainRouteProps> = ({ route }) => {

    return (
        <Routes>
            {/* {route.map((route) => ( */}
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />

            {/* ))} */}
        </Routes>
    )
}

export default Router

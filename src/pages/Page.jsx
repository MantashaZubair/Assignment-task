import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import PageNotFound from './PageNotFound'


const Page = () => {
  return (
    <>
        <Routes>
            <Route path="/" element ={<Dashboard/> }/>
            <Route path="/Home" element ={<Navigate to="/" />}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </>
  )
}

export default Page
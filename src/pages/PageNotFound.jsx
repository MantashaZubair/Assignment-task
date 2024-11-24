import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Dashboard.css";
import Header from '../components/Header';
const PageNotFound = () => {
  return (
  
     <>
     <div className="dashboard">
      <div className="dashboard-header">
        <Header />
      </div>
       <div className="pnf">
            <h1 className='pnf-title'>404</h1>
            <h2 className='pnf-heading'>Oops! Page Not Found</h2>
            <Link to ="/" className="pnf-btn">Go Back</Link>
       </div>
       </div>
       </>


  )
}

export default PageNotFound
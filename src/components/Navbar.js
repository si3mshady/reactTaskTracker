import React from 'react'
import Navbar from  'react-bootstrap/Navbar'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
export default function Nav() {
    return (
        <Navbar style={{backgroundColor:'black'}}>
        
        <Navbar.Brand href="#home"
        style={{color:'green',fontSize:'20px'}}


        >Elliott "El Alquimista" Arnold's <br/>
        React<bold style={{fontSize:"30px"}}>Trac</bold>
        <AccessTimeIcon style={{color:"orange"}} fontSize="large" />
        <bold style={{fontSize:"30px"}}>ER</bold>
               
        
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar> 
      
      )
}
//https://www.myfonts.com/WhatTheFont/result
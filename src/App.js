
import './App.css';
import React, {useContext, useState} from 'react'

import Mesa from './components/Mesa'
import Navbar from './components/Navbar'
import Note from './components/Note'
import {EntriesContext} from './index'
import CreateTask from './components/CreateTask'
// const entries = useContext(EntriesContext)


function App() {

  const [entries,setEntries] = useState([])


  const removeEntry = (id) => {
    const filteredList =  entries.filter((entry, index) => index !== id)

    setEntries(previousValues => { return  [...filteredList]})
  }

  
 

  const addEntry = (entry) => {    
    console.log(entry)
    setEntries(previousValues => {
      return [...previousValues,entry]
      
    }
      )
       
  }
  
  return (
   
    <>
      <Navbar/>
      <CreateTask addTask={addEntry}/>
        {entries.map((e, index) =>   <Note values={e} removeEntry={removeEntry} index={index} />)}
      {/* <Mesa /> */}
    </>
  );
}

export default App;
// color scheme black white and green
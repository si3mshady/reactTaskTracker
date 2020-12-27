import React from 'react'
import entries from '../EntriesContext'
import '../App.css'
export default function Note({values, index, removeEntry}) {
    return (

      
            <div className='note'>
                
                    <h1>{values.title}</h1>
                    <p>{values.notepad}</p>
                    
                    
               
                
                <button 
                onClick={() => removeEntry(index)}
                style={{background: 'orange'}}>Delete</button>
          
            
        </div>
    )
}




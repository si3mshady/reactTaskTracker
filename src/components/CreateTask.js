import React, {useState} from 'react'



export default function CreateTask({addTask}) {
    const [entry,setEntry] = useState({
        title: '',
        notepad: ''
    })

    


    const handleChange = (event) => {
        
        const {name,value} =  event.target

        setEntry(previousEntries => {
            // console.log(previousEntries)
            return {
                ...previousEntries,
                [name]:value
            }
        })
    }
    
    // must have a function on the back end that uses the click event to
    // stop the page from reloading in addition to passing state back to the use
    // top level app to render the results 
    const submitTask = event => {
        
        addTask(entry)
        event.preventDefault()

    }
           
             
         
    
    return (
        <>
        <div style={{background: 'greenyellow'}}>        
            
            <form style={{background: 'black'}} 
            > 
            
            <input style={{background: 'black', color: 'orange'}}
             onChange={handleChange} type="text"
            value={entry.title}
            placeholder="Title" name='title' />      

            <textarea style={{float:'left'}} rows="3"
            onChange={handleChange}
            value={entry.notepad}
             placeholder="Enter new task" name='notepad'/>
            <button onClick={submitTask} >Add</button>
               
            </form> 
        </div>
        </>
    )
}


//Mistakes I was making  when using hooks and forms - getting input data
// forms must have on change listeners, forms use onsubmit listeners 
// 1.) When forms always use controlled  inputs by setting the  value attribute for each input element
// 2.) When using the setter functions from use state, always use the previous values 
//which is exposed via the function, this is always added or spread on top of the current value when 
// setting state 
// 3. Event event.target exposes  {name,value} when setting key value pairs
// use the patten    [name]:value  when setting dynamically the
// 4. The setter functions must have a return statement inside 
// 5. Each component  should handle state in each function **********
// 6. The spread operator takes an iterable, and creates a new iterateble filled
// with the elements of the array being spread, so if it is an array of strings, then
// you will be spreading each string into a new array, if it is an array of objects, then
// you will be spreading objects individuallt into a new array! 
//7. Know when to use OnClick vs. Onsubmit, -> 
 // must have a function on the back end that uses the click event to
    // stop the page from reloading in addition to passing state back to the use
    // top level app to render the results 
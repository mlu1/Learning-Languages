import {useState} from 'react'

const Content =()=>{
    const [name,setName] = useState('Mluleki')
    const [count,setCount] = useState(0)
    
    const handleNameChange = () => {
        const names = ['Bob','Kevin','Mluleki'];
        const int = Math.floor(Math.random()*3)
        setName(names[int])
    }

    const  handleClick = () =>{
        setCount(count+1) 
        setCount(count+1)
        console.log(count);  
    }

    const  handleClick2 = () =>{
        console.log(count)  
   }
    
    return( <main>
                <p onDoubleClick={handleClick}>Hello {name}!</p>
                <button onClick={handleNameChange}> Change name</button>
                <button onClick={handleClick}> Click it!</button>
                <button onClick={handleClick2}> Click it!</button>
            </main>
        )
} 
export default Content
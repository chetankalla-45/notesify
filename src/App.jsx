import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { X } from "lucide-react";
function App() {
  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")

  const [task, setTask] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title,detail})
    setTask(copyTask)
    setTitle('')
    setDetail('')
  }

  const deleteNote=(index)=>{
    const copyTask=[...task]
    copyTask.splice(index,1);
    setTask(copyTask)
  }


  return (
    <>
    <div className="h-screen lg:flex  bg-black text-white  ">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex lg:w-1/2 p-10 flex-col gap-5">
        <h1 className="text-3xl font-bold mb-5">Add notes</h1>
       <input 
       className="px-5 outline-none  py-2 border-2 rounded text-black"
       type="text" 
       placeholder="Enter notes heading" 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          // console.log(title)
        }}
       />
       <textarea 
        className="px-5  py-2 border-2 rounded h-20 text-black"
       type="text" 
       placeholder="Enter notes content" 
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}
       />
       <button type="submit"
        className="text-white active:scale-95 bg-blue-500 h-12 rounded hover:bg-blue-600 transition-colors duration-300 "
       >Add note</button>

      </form>
      <div
      className="lg:border-l lg:w-1/2 p-10">
        <h1 className="text-3xl font-bold mb-5">Your notes</h1>
        <div className="py-5 flex flex-wrap gap-5 h-[90%] overflow-auto ">
        {/* <div className="h-56 w-40 bg-white  p-5 m-2 rounded"> */}
          {task.map(function(elem,index){
            return (<div
              key={index}
              className="note-bg relative h-56 w-40 p-5 m-2 rounded text-black flex flex-col overflow-hidden"
            >
              <h2 className="absolute top-6 right-3 p-1 rounded-full text-xs"
              onClick={()=>deleteNote(index)}
              ><X size={16} /></h2>
              <h1 className="text-xl pu-3 leading-snug font-bold">{elem.title}</h1>
              <p className="mt-2 leading-tight font-medium text-gray-600">
                {elem.detail}
              </p>
          </div>
          )
          })}
        {/* </div> */}
        
        </div>
      </div>
    </div>
    </>
  )
}

export default App

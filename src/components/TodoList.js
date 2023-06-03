import React ,{useEffect, useState} from 'react'
import CreateTask from '../popup/CreateTask'
import Todo from './Todo';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList,setTaskList]=useState([])
    const toggle = () => {
        setModal(!modal)
    }
    useEffect(()=>{
        let arr = localStorage.getItem("taskList")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])
    const saveTask = (obj) => {
        let tempList = taskList
        tempList.push(obj)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }
    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    const updatedListArray = (obj,index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
      }
  return (
    <>
        <div className='header text-center'>
           <h3>Your List</h3>
           <button className='btn btn-primary mt-3' onClick={()=>setModal(true)}>Create Task</button>
        </div>
        <div className='task-list'>
           {taskList.map((each,index)=>{
            return (<div key={index}>
            <Todo taskObj={each} index={index} deleteTask={deleteTask} updatedListArray={updatedListArray}/>
            </div>)
           }
           )}
        </div>
        <CreateTask toggle={toggle} modal={modal} saveTask={saveTask}/>
    </>
  )
}

export default TodoList
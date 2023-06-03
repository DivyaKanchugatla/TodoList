import React,{useState} from 'react'
import EditTask from '../popup/EditTask'

const Todo = ({taskObj,index,deleteTask,updatedListArray}) => {
  
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal)
  }
  const updateTask = (obj) => {
    updatedListArray(obj,index)
  }
  const handleDelete = () => {
    deleteTask(index)
   }

  const colors = [
    {primaryColor:"#5D93E1",
  secondaryColor:"#ECF3FC"},
  {
    primaryColor:"#F9D288",
    secondaryColor:"#FEFAFl"
  },
  {
    primaryColor:"#5DC250",
    secondaryColor:"#F2FAFl"
  },
  {
    primaryColor:"#F48687",
    secondaryColor:"#FDFlFl"
  },
  {
    primaryColor:"#B964F7",
    secondaryColor:"#F3FOFD1"
  },
  ]
  const primaryColor = colors[index%5].primaryColor
  
  return (
    
    <div className='task-container' style={{backgroundColor:"black",color:"white",borderTopColor:primaryColor}}>
          <div className='name-description'>
            <span style={{color:primaryColor}} >
              {taskObj.Name}
            </span>
            <p>{taskObj.Description}</p>
            </div>
            <div className='icons'>
                <i className='far fa-edit' style={{color:primaryColor,cursor:"pointer"}} onClick={()=>setModal(true)}/>
                <i className='fas fa-trash-alt' style={{color:primaryColor,cursor:"pointer"}} onClick={handleDelete}/>
            </div> 
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>     
     </div>
    
    
  )
}

export default Todo

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Main = () => {


    const [todo, settodo] = useState("");

    const [todos, settodos] = useState([]);


  let addvalue=(e)=>{
       settodo(e.target.value)

    }

    let handleAdd=()=>{  

     if(todo==""){
        alert("Invalid Input")
     }else{

        
     settodos([...todos,{id:uuidv4(),todo,iscompleted:false}])
     
      settodo("")




     }


    }

   

    let handleEdit=(e,item,id)=>{  
         console.log(item)

         settodo(item.todo)
        
         let newtodos=todos.filter((item)=>{
         
   
            return item.id!==id
          })
          settodos(newtodos)
    }


    let handleDelete=(e,id,item)=>{  

      console.log(item)

      if(item.iscompleted== false){
       
      let ans= prompt("are you sure want to delete type yes or no");
      
      if(ans=="yes"){
             let newtodos=todos.filter((item)=>{
         
        
        return item.id!==id
      })

      settodos(newtodos)


      }
 
    
      }else{


            let newtodos=todos.filter((item)=>{
        
       
       return item.id!==id
     })

     settodos(newtodos)

      }



    }

    let handelcheckbox=(e)=>{
        let id=e.target.name
        let index=todos.findIndex((item)=>{
            return item.id===id
        })
       let newtodos=[...todos]
       newtodos[index].iscompleted=! newtodos[index].iscompleted
       settodos(newtodos)
    }

  return (
    <div className='w-[90vw] rounded-2xl m-auto mt-[25px] max-h-max min-h-[80vh] bg-purple-300'>
        
        <h1 className='text-[30px] flex justify-center font-[500] w-full  p-[20px]' >Add a Todo</h1>
      
      <div className='w-full m-auto flex items-center justify-center'>
                <input onChange={addvalue} value={todo}  type='text' placeholder='add a task' className='bg-white p-[5px] m-[20px] border-none outline-none rounded-2xl w-[70vw] h-[40px]' />
           <button onClick={handleAdd} className='w-[70px] bg-black text-white  rounded-2xl h-[40px]'> Save</button>
      </div>


           <h1 className='text-[30px] font-[500] w-[full] flex justify-center p-[20px]' >Your Tasks</h1>

           {todos.length===0 && <div className=' flex justify-center max-h-max min-h-[30px]  text-[13px] md:text-[25px] w-full  items-center font-[500]'>Add Task To  Display Here </div>}
      
          {todos.map((item,index)=>{

            return (  <div key={index} className=' mt-[20px] w-full gap-[10px]  items-center justify-center flex'>
  <input className='w-[30px] ' name={item.id} onChange={handelcheckbox} type="checkbox"  />
<div   className={ ` ${item.iscompleted?"line-through" :""}  max-h-max  w-[500px]  overflow-scroll md:text-[25px]  min-h-[10vh] flex items-center text-[15px] font-[500] ` } > {item.todo} </div> <button onClick={(e)=>{
    handleEdit(e,item,item.id)
}} className='md:w-[70px] bg-black text-white text-[10px]  md:text-[15px] w-[100px] h-[24px] rounded-2xl md:h-[40px]'>Edit</button>  <button onClick={(e)=>{
    handleDelete(e,item.id,item)

    
}} className='md:w-[70px] bg-black text-white w-[100px] h-[24px] text-[10px]  md:text-[15px] rounded-2xl  md:h-[40px]'>Delete</button>
                
            </div>
            
            

            
           )

          })}

         </div>
  )
}

export default Main
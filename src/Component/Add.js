import React,{useState,useEffect} from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { Icon } from 'react-icons-kit'


import {plus} from 'react-icons-kit/feather/plus'


function Add(){
    const [modal, setmodal] = useState(false)

    const getTodosFromLS=()=>{
        const data = localStorage.getItem('Todos');
        if(data){
            return JSON.parse(data);
        }
        else{
            return []
        }
    }
    const [todoValue, setTodoValue]=useState('');
    const [todos, setTodos]=useState(getTodosFromLS());
    const handleSubmit=(e)=>{
      

        const date = new Date();
        const time = date.getTime();
        

        
        let todoObject={
          ID: time,
          TodoValue:todoValue,
          completed: false
        } 
        setTodos([...todos,todoObject]);
        setTodoValue('');
        
    }
        // saving data to local storage
        useEffect(() => {
            localStorage.setItem('Todos',JSON.stringify(todos));
        }, [todos])
    return(
    <div><Modal
    size='lg'
    isOpen={modal}
    toggle={() => setmodal(!modal)}
    >
        <ModalHeader>
            Add Task
        </ModalHeader>
        <ModalBody>
  
            <div className="form">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-and-button">
                  <input type='text' placeholder="Add a Item" required
                  onChange={(e)=>setTodoValue(e.target.value)} value={todoValue}/>
                  <div className='button'>
                    <button type="submit" toggle={() => setmodal(!modal)}>
                      Add
                    </button>
                  </div>
                </div>
              </form>
              
            </div>
          
            
        </ModalBody>
    </Modal>
        <button className='btn mt-3' id='button' onClick={() => setmodal(true)}>
      <div style={{backgroundColor:'green'}}> <Icon icon={plus} size={20}/>
      </div>  </button>
    </div>
    )
}

export default Add;
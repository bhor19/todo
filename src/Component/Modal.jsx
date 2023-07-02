import React,{useState,useEffect} from 'react'
import { Form } from "./Form";
import MyModal from './ShowModal';
import { Icon } from 'react-icons-kit'


import {plus} from 'react-icons-kit/feather/plus'

function Modal(){
    

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

    const[showModal,SetshowModal] = useState(false);
    const closeModal = () => SetshowModal(false);

const handleCloseButton =(
    <button className='modle-btn' onClick={closeModal}>
        Add
    </button>
);
const mainmodal =(
    <MyModal closeModal={closeModal} handleCloseButton={handleCloseButton}>
       hjftgngvnjm gh
            </MyModal>
);
    return(
    <div>
        
        <button className='btn mt-3' id='button' onClick={() => SetshowModal(true)}>
        <Icon icon={plus} size={20}/>
        </button>
        {showModal && mainmodal}
        <p>
      gbd bhdfh
        </p>
    </div>
    )
}

export default Modal;
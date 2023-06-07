import React, { useState } from 'react'
import './Modal.css'
import NiceModal, { useModal } from '@ebay/nice-modal-react'

const [price, setPrice] = useState("")
const [description, setDescription] = useState("")
const [title, setTitle] = useState ("")

const modal = useModal

const Modal = () => {
  return (
    <div className='modal'>
    <img className='img' src="" alt=""/>
    <h1>{title}</h1>
{action === "save" && (
<div>
     <label className='label' > Name</label>
    <input 
    type="text" 
    required 
    value={title} 
    onChange={(e => setTitle(e.target.value))} 
    className='custom-input1'/>
    </div>
&&(
      <div>
    <label className='label'> Price </label>
    <input 
    type="text" 
    required 
    value={price}
     onChange={(e) => setPrice(e.target.value)} 
     className='custom-input1'/>
    </div>
)
    &&(
 <div>
     <label className='label'>Description </label>
    <textarea className='textarea' typeof='text' 
    rows={4} cols={40} 
    required  
    value={description}
     onChange={(e) => setDescription(e.target.value
      )}/>
    </div>
    )
    &&(
  <div>
    <label className='label'> Image </label>
   <div className='img-box1'>

    <div className=' w-full flex flex-col items-center justify-center cursor-pointer'>
    <div className='w-full h-full flex flex-col items-center' >
    <img src={image1} alt='' width="20px"/>
    <div>Attach an image </div>
    </div>
    <input className="w-0 h-0"
    type="file"
    name="uploadimage"
    accept="image/*" 
  
    />
    </div>
    </div>
    </div>
    )

)}
    
   
   <div className="btn2" >
   <button name={action}
    type="button" 
    className="custom-btn2"
    onClick={()=>{
        if (action === "save") {
            if (title, description, price){
                modal.resolve(title, description, price);
                modal.log("Item saved")
            }else{
                console.log("Note is empty")
            }
        } else {
            modal.resolve();
            modal.remove();
            console.log("Item removed")
        }
    }}
    >Create</button>

    <button name='cancel'
    onClick={()=>{
        modal.remove();
    }}
    ></button>
   </div>

 
    </div>
  )
}

export default Modal
import React, { useState } from 'react'
import './CreateMenu.css'
import image1 from '../assets/gallery.png'
import image7 from '../assets/Image (2).png'
import LeftComponent from './LeftComponent'
import CreateComponent from './subComponents/CreateComponent'



const CreateMenu = () => {

    const [imageAsset, setImageAsset] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [fields, setFields] = useState(false)
    const [alertStatus, setAlertStatus] = useState("danger")
    const [msg, setMsg] = useState(null)
    const [title, setTitle] = useState("")

  return (
    <div className='Hero'>
    <div className='Hero-left'>
      <LeftComponent /></div>
    <div className='Hero-right'>
      <div className='admin'>
        <div><span>My orders.</span></div>
        <div className='box'>
          <div className='profile'>
            <div>admin</div>
            <div>admin@gmail.com</div>
          </div>
          <img src={image7} alt='' />
        </div>


      </div>
      <div className='container'>
    
      <div className='Order-details1'>
  
      <div>Create Menu.</div>
      <form>
      <div>
       <label className='label' > Name</label>
      <input 
      type="text" 
      required 
      value={title} 
      onChange={(e => setTitle(e.target.value))} 
      className='custom-input1'/>
      </div>
      <div>
       <label className='label'>Description </label>
      <textarea className='textarea' typeof='text' 
      rows={4} cols={40} 
      required  
      value={description}
       onChange={(e) => setDescription(e.target.value
        )}/>
      </div>
      <div>
      <label className='label'> Price </label>
      <input 
      type="text" 
      required 
      value={price}
       onChange={(e) => setPrice(e.target.value)} 
       className='custom-input1'/>
      </div>
      <div><label className='label'> Image </label></div>
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
    
     <div className="btn2" >
     <button type="button" className="custom-btn2" >Create</button>
     </div>
  
   </form>  
  
  </div>

     
      </div>

    </div>
  </div>
  )
}

export default CreateMenu
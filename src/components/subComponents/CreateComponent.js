import React from 'react'
import './CreateComponent.css'
import image1 from '../../assets/gallery.png'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'



const CreateComponent = () => {

const { handleSubmit, control } = useForm();

const onSubmit = (data) => {
  console.log(data);
};

  return (
    <div className='Order-details'>
   
    <div>Create Menu.</div>
    <form>
    <div>
     <label className='label'> Name</label>
    <input type="text" className='custom-input'/>
    </div>
    <div>
     <label className='label'>Description </label>
    <textarea rows={4} cols={40} />
    </div>
    <div>
    <label className='label'> Price </label>
    <input type="text" className='custom-input'/>
    </div>
    <div><label className='label'> Image </label></div>
   <div className='img-box'>
   
   <img src={image1} alt=''/>
   <div>Attach an image </div>
   </div>
   <Link to = "/dashboard">
   <div><input type={"submit"} className='custom-btn' value="Create"/></div>
    </Link>
    </form>
   
    </div>
  )
}

export default CreateComponent
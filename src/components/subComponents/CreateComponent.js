import React, { useState } from 'react'
import './CreateComponent.css'
import image1 from '../../assets/gallery.png'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Loader from './Loader'



const CreateComponent = () => {

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    console.Console.log(imageFile)
    const storageRef = ref(storage,)
  }
  const deleteImage = () => {}
  const saveDetails = () => {}

  const [imageAsset, setImageAsset] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")

 

  

const { handleSubmit, control } = useForm();

const onSubmit = (data) => {
  console.log(data);
};

  return (
    <div className='Order-details'>
   
    <div>Create Menu.</div>
    <form>
    <div>
     <label className='label' > Name</label>
    <input type="text" required value={title} onChange={(e => setTitle(e.target.value))} className='custom-input'/>
    </div>
    <div>
     <label className='label'>Description </label>
    <textarea typeof='text' rows={4} cols={40} required  value={description} onChange={(e) => setDescription(e.target.value
      )}/>
    </div>
    <div>
    <label className='label'> Price </label>
    <input type="text" required value={price} onChange={(e) => setPrice} className='custom-input'/>
    </div>
    <div><label className='label'> Image </label></div>
   <div className='img-box'>
   {isLoading ? (
    <Loader/> )
    :(
       <>
   {!imageAsset ? (
    <>
    <img src={image1} alt=''/>
    <div>Attach an image </div>
    <input type='file' name='uploadimage' accept='image/*'  className='img-input' onChange={uploadImage}/>
    </> 
    ) : ( <>
      <div classname="img-asset">
      <img src= {imageAsset} alt="upload image"/>
      </div>
      </>
    )}
   </>
   )}
  
   </div>

   <div className="btn2" >
   <button type="button" className="custom-btn" onClick={saveDetails}>Create</button>
   </div>
  
    </form>
   
    </div>
  )
}

export default CreateComponent
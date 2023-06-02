import React, { useState } from 'react'
import './CreateComponent.css'
import image1 from '../../assets/gallery.png'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import { storage } from '../../firebase.config'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { getAllFoodItems, saveItem } from '../../utils/fireBAseFunctions'
import { actionType } from '../../context/reducer'
import { useStateValue } from '../../context/StateProvider'

import {DeleteFontIcon} from '@react-md/material-icons'




const CreateComponent = () => {


  const [imageAsset, setImageAsset] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [fields, setFields] = useState(false)
  const [alertStatus, setAlertStatus] = useState("danger")
  const [msg, setMsg] = useState(null)
  const [title, setTitle] = useState("")
 
  const [{foodItems}, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
       (snapshot) => {
const uploadProgress =
(snapshot.bytesTransferred / snapshot.
totalBytes) * 100;
    },
    (error)=>{
console.log(error);
setFields(true);
setMsg("Error while uploading : Try Again");
setAlertStatus('danger');
setTimeout(() =>{
  setFields(false)
  setIsLoading(false)
},4000);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        setImageAsset(downloadURL);
        setIsLoading (false);
        setFields(true);
        setMsg('image uploaded successfully');
        setAlertStatus('success');
        setTimeout(() => {
           setFields(false)
        },4000);
       })
    })
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, 
      imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null)
      setIsLoading(false)
      setFields(true);
      setMsg('image deleted successfully');
      setAlertStatus("success");
      setTimeout(() => {
         setFields(false)
      },4000);
    })
  }

  const saveDetails = () => {
    setIsLoading(true);
    try{
      if((!title || !description || !imageAsset || !price )){
        setFields(true);
        setMsg("Required fields cant be empty failed");
        setAlertStatus('danger');
        setTimeout(() =>{
          setFields(false)
          setIsLoading(false)
        },4000);
      }else{
        const data = {
          id : `${Date.now()}`,
          title : title,
          imageURL : imageAsset,
          Description : description,
          qty : 1,
          price : price
        }
        saveItem(data)
        setIsLoading (false);
        setFields(true);
        setMsg('Data uploaded successfully');
        clearData();
        setAlertStatus("success");
        setTimeout(() => {
           setFields(false)
         
        },4000);
      }
        

    } catch  (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try Again");
      setAlertStatus('danger');
      setTimeout(() =>{
        setFields(false)
        setIsLoading(false)
      },4000);
  }

  fetchData()
};
 
const clearData = () => {
  setTitle("");
  setImageAsset(null);
  setDescription("");
  setPrice("");
};

const fetchData = async () => {
  await getAllFoodItems().then((data) =>{
    dispatch({
      type : actionType.SET_FOOD_ITEMS,
      footItems : data
    });
  });
};
  


  return (
    <div className='Order-details'>
    {fields && (
      <p className={`w-full p-2 rounded-lg text-center text-lg font-semibold 
      ${alertStatus === "danger"
      ? "bg-red-500 text-red-800"
      : "bg-emerald-400 text-emerald-800"
    }` }>
      {msg}
      </p>
    )}

    <div>Create Menu.</div>
    <form>
    <div>
     <label className='label' > Name</label>
    <input 
    type="text" 
    required 
    value={title} 
    onChange={(e => setTitle(e.target.value))} 
    className='custom-input'/>
    </div>
    <div>
     <label className='label'>Description </label>
    <textarea typeof='text' 
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
     className='custom-input'/>
    </div>
    <div><label className='label'> Image </label></div>
   <div className='img-box'>
   {isLoading ? (
    <Loader/> 
   ) : ( 
    <> 
   {!imageAsset ? (
    <> 
    <div className='w-full flex flex-col items-center justify-center cursor-pointer'>
    <div className='w-full h-full flex flex-col items-center' >
    <img src={image1} alt='' width="20px"/>
    <div>Attach an image </div>
    </div>
    <input className="w-0 h-0"
    type="file"
    name="uploadimage"
    accept="image/*" 
    onChange={uploadImage} 
    />
    </div>
     </>
     ) : (
      <> 
       <div className="relative h-full">
      <img src= {imageAsset} alt="upload image"
      className= "w-full h-full object-cover"
      />
      <button 
      type="buttton" 
      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl
       cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out" 
      onClick={deleteImage}
      >
      <DeleteFontIcon/>
      </button>
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
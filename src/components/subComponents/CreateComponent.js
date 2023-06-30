import React, { useState } from 'react';
import './CreateComponent.css';
import image1 from '../../assets/gallery.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateComponent = () => {
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState('danger');
  const [msg, setMsg] = useState(null);
  const [title, setTitle] = useState('');
  const [menuImage, setMenuImage] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
   const [error, setError] = useState('');

   const navigate= useNavigate

   const handleDeleteImage = () => {
     setImageAsset(null);
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     // Create a FormData object to store the form data
     const formData = new FormData();
     formData.append('name', title);
     formData.append('description', description);
     formData.append('menuImage', imageAsset);
     formData.append('price', price);
 
     try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
       // Make the API request
       const response = await axios.post('https://restaurant.patadesign.com/api/v1/menu/create', formData, {
        headers: {
          'Authorization': `Bearer ${token}` // Pass the token in the headers
        },
       });
 
       console.log('Response:', response.data);
 
       // Reset the form fields and loading state
       setImageAsset(null);
       setTitle('');
       setDescription('');
       setPrice('');
       setMenuImage('');
     } catch (error) {
       console.error('Error:', error);
       setError('An error occurred while creating the menu. Please try again.');
     navigate('/menuList')
     
     }
   };
 
   const handleImageUpload = (e) => {
     const file = e.target.files[0];
 
     if (!file) {
       // No file selected, handle the error
       return;
     }
 
     const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Add more allowed file types if needed
     if (!allowedTypes.includes(file.type)) {
       // Invalid file type, handle the error
       return;
     }
 
     setImageAsset(file);
   };
 
   console.log('name:', title);
   console.log('description:', description);
   console.log('price:', price);
   console.log('imageUrl:', menuImage);

  return (
    <div className='Order-details'>
      {fields && (
        <p
          className={`w-full p-2 rounded-lg text-center text-lg font-semibold 
      ${alertStatus === 'danger' ? 'bg-red-500 text-red-800' : 'bg-emerald-400 text-emerald-800'}`}
        >
          {msg}
        </p>
      )}

      <div>Create Menu.</div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='label'>Name</div>
          <input
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='custom-input'
          />
        </div>
        <div>
          <div className='label'>Description</div>
          <textarea
            typeof='text'
            rows={4}
            cols={40}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <div className='label'>Price</div>
          <input
            type='text'
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='custom-input'
          />
        </div>
        <div>
          <label className='label'>Image</label>
        </div>
        {imageAsset ? (
          <div className="img-box">
            <div className="image-container">
              <img src={URL.createObjectURL(imageAsset)} alt="Uploaded Image" className="uploaded-image" />
              <button type="button" className="delete-image" onClick={handleDeleteImage}>
                Delete
              </button>
            </div>
          </div>
        ) : null}

        {!imageAsset && (
          <div className="img-box">
            <div className="upload-placeholder">
              <img src={image1} alt="" className="placeholder-image" />
              <div>Attach an image</div>
            </div>
            <input className="w-0 h-0" type="file" name="uploadimage" accept="image/*" onChange={handleImageUpload} />
          </div>
        )}

        <div className='btn2'>
          <button type='submit' className='custom-btn'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateComponent;

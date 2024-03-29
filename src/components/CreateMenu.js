import React, { useState } from 'react';
import './CreateMenu.css';
import image1 from '../assets/gallery.png';
import image7 from '../assets/Image (2).png';
import LeftComponent from './LeftComponent';
import CreateComponent from './subComponents/CreateComponent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateMenu = () => {
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [alertStatus, setAlertStatus] = useState('danger');
  const [msg, setMsg] = useState(null);
  const [title, setTitle] = useState('');
  const [menuImage, setMenuImage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const [fields, setFields] = useState(false);

  const navigate= useNavigate()

  const handleDeleteImage = () => {
    setImageAsset(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
setIsLoading(true);
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
        }
      });

      console.log('Response:', response.data);

      // Reset the form fields and loading state
      setImageAsset(null);
      setTitle('');
      setDescription('');
      setPrice('');
      setMenuImage('');
      setLoading(false); // Stop loading
       // Show success message
       setMsg('Menu created successfully');
       setAlertStatus('success');
       setFields(true);
       setTimeout(() => {
         setFields(false);
         setMsg(null);
       }, 3000);
       window.location.reload(true); // Refresh the page
    } catch (error) {
      console.error('Error:', error);

      setError('Attarch image.');
      setTimeout(() => {
        setFields(false);
        setMsg(null);
      }, 3000);
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
    <div className='Hero'>
      <div className='Hero-left'>
        <LeftComponent />
      </div>
      <div className='Hero-right'>
        <div className='admin'>
          <div>
            <span>My orders.</span>
          </div>
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
            <form onSubmit={handleSubmit}>
              <div>
                <div className='label'>Name</div>
                <input
                  type='text'
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='custom-input1'
                />
              </div>
              <div>
                <div className='label'>Description</div>
                <textarea
                  className='textarea'
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
                  type='number'
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className='custom-input1'
                />
              </div>
              <div>
                <label className='label'>Image</label>
              </div>
              {imageAsset ? (
                <div className='img-box1'>
                  <div className='image-container'>
                    <img src={URL.createObjectURL(imageAsset)} alt='Uploaded Image' className='uploaded-image' />
                    <button type='button' className='delete-image' onClick={handleDeleteImage}>
                      Delete
                    </button>
                  </div>
                </div>
              ) : null}

              {!imageAsset && (
                <div className='img-box1'>
                  <div className='upload-placeholder'>
                    <img src={image1} alt='' className='placeholder-image' />
                    <div>Attach an image</div>
                  </div>
                  <input className='w-0 h-0' type='file' name='uploadimage' accept='image/*' onChange={handleImageUpload} />
                </div>
              )}

              <div className='btn2'>
                <button type='submit'
                 className='custom-btn2'
                 disabled={loading} value={loading ? " Loading..." : "Create"}>
                 {loading ? " Loading..." : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;

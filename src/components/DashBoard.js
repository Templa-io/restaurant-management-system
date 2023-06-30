import React, { useState } from 'react';
import './DashBoard.css';
import image1 from '../assets/Rectangle 121.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashBoard = (props) => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState(props.menuData || []);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [imageAsset, setImageAsset] = useState(null);
  const [menuImage, setMenuImage] = useState('');
  const [showDashboard, setShowDashboard] = useState(true); // New state variable
  

  const handleDelete = async (id) => {
    try {
      // ...
      // Your existing handleDelete code here
      // ...
    } catch (error) {
      setError('Error deleting menu');
      console.log('Error deleting menu:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTitle(props.name);
    setDescription(props.description);
    setPrice(props.price);
    setMenuImage(props.imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form submitted');

    if (!imageAsset) {
      setError('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('menuImage', imageAsset);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `https://restaurant.patadesign.com/api/v1/menu/${props.id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Menu updated successfully');
      } else {
        setError('Error updating menu');
        console.log('Error updating menu:', response.statusText);
      }

      setImageAsset(null);
      setTitle('');
      setDescription('');
      setPrice('');
      setMenuImage('');
      setIsEditing(false);
      setShowDashboard(true);
    } catch (error) {
      setError('Error updating menu');
      console.log('Error updating menu:', error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return;
    }

    setImageAsset(file);
  };

  const handleDeleteImage = () => {
    setImageAsset(null);
  };

  return (
    <div>
      {isEditing ? (
        <div className='Active-orders'>
       
            <div className='Order-details1'>
              <div>Edit Menu.</div>
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
                  {imageAsset ? (
                    <div className='img-box1'>
                      <div className='image-container'>
                        <img
                          src={URL.createObjectURL(imageAsset)}
                          alt='Uploaded Image'
                          className='uploaded-image'
                        />
                        <button type='button' className='delete-image' onClick={handleDeleteImage}>
                          Delete
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className='img-box1'>
                      <div className='upload-placeholder'>
                        <img src={image1} alt='' className='placeholder-image' />
                        <div>Attach an image</div>
                      </div>
                      <input
                        className='w-0 h-0 mx-auto'
                        type='file'
                        name='menuImage'
                        accept='image/*'
                        onChange={handleImageUpload}
                      />
                    </div>
                  )}
                </div>
                <div className='btn2'>
                  <button type='submit' className='custom-btn2'>
                    Update
                  </button>
                </div>
              </form>
            </div>
          
        </div>
      ) : (
        showDashboard && (
        <div className='Dish-section2'>
          <img src={props.imageUrl} alt='' />
          <div className='Span-section1'>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>${props.price}</div>
            <div className='Dish-btn'>
              <div className='edit-btn cursor-pointer' onClick={handleEdit}>
                Edit
              </div>
              <div className='delete-btn cursor-pointer' onClick={() => handleDelete(props.id)}>
                Delete
              </div>
            </div>
          </div>
        </div>
      )
      )}
    </div>
  );
};

export default DashBoard;

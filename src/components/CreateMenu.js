import React, { useState } from 'react'
import './CreateMenu.css'
import image1 from '../assets/gallery.png'
import image7 from '../assets/Image (2).png'
import LeftComponent from './LeftComponent'
import CreateComponent from './subComponents/CreateComponent'
import axios from 'axios'



const CreateMenu = () => {
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [alertStatus, setAlertStatus] = useState('danger');
  const [msg, setMsg] = useState(null);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleDeleteImage = () => {
    setImageAsset(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform input format validation
    if (isNaN(parseFloat(price))) {
      setError('Price must be a valid number.');
      return;
    }

    if (title.length < 3 || title.length > 50) {
      setError('Title length must be between 3 and 50 characters.');
      return;
    }

    if (description.length < 10 || description.length > 200) {
      setError('Description length must be between 10 and 200 characters.');
      return;
    }

    // Reset the error state
    setError('');

    // Prepare the data to be sent
    const requestData = {
      name: title,
      description: description,
      menuImage: imageAsset,
    };

    try {
      setIsLoading(true);

      // Make the API request
      const response = await axios.post('http://34.230.46.179:8080/api/v1/menu/create', requestData);
      console.log('Response:', response.data);

      // Reset the form fields and loading state
      setImageAsset(null);
      setTitle('');
      setDescription('');
      setPrice('');
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setError('An error occurred while creating the menu. Please try again.');
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
      <form onSubmit={handleSubmit}>
      <div>
       <div className='label' > Name</div>
      <input 
      type="text" 
      required 
      value={title} 
      onChange={(e => setTitle(e.target.value))} 
      className='custom-input1'/>
      </div>
      <div>
       <div className='label'>Description </div>
      <textarea className='textarea' typeof='text' 
      rows={4} cols={40} 
      required  
      value={description}
       onChange={(e) => setDescription(e.target.value
        )}/>
      </div>
      <div>
      <div className='label'> Price </div>
      <input 
      type="text" 
      required 
      value={price}
       onChange={(e) => setPrice(e.target.value)} 
       className='custom-input1'/>
      </div>
      <div><label className='label'> Image </label></div>
      {imageAsset ? (
              <div className="img-box1">
                <div className="image-container">
                  <img src={URL.createObjectURL(imageAsset)} alt="Uploaded Image" className="uploaded-image" />
                  <button type="button" className="delete-image" onClick={handleDeleteImage}>
                    Delete
                  </button>
                </div>
              </div>
            ) : null}

            {!imageAsset && (
              <div className="img-box1">
                <div className="upload-placeholder">
                  <img src={image1} alt="" className="placeholder-image" />
                  <div>Attach an image</div>
                </div>
                <input className="w-0 h-0" type="file" name="uploadimage" accept="image/*" onChange={handleImageUpload} />
              </div>
            )}
    
    
     <div className="btn2" >
     <button type="button" className="custom-btn2" onClick={handleSubmit}>Create</button>
     </div>
  
   </form>  
  
  </div>

     
      </div>

    </div>
  </div>
  )
}

export default CreateMenu
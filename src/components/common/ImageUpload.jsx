import React, { useState, useRef } from 'react';
import { CameraIcon } from '@heroicons/react/24/outline';

const ImageUpload = ({ onImageUpload, className = '' }) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setImage(imageUrl);
        if (onImageUpload) onImageUpload(imageUrl);
        // Save to localStorage
        localStorage.setItem('profileImage', imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  // Load saved image on component mount
  React.useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setImage(savedImage);
      if (onImageUpload) onImageUpload(savedImage);
    }
  }, [onImageUpload]);

  return (
    <div className={`relative group cursor-pointer ${className}`}>
      {image ? (
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500">
          <img 
            src={image} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => fileInputRef.current.click()}
          >
            <CameraIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      ) : (
        <div 
          className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => fileInputRef.current.click()}
        >
          <CameraIcon className="w-12 h-12 text-white" />
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
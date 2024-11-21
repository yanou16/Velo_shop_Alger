import React from 'react';
import { Camera } from 'lucide-react';

interface PhotoUploadProps {
  photoUrl: string;
  onPhotoChange: (url: string) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ photoUrl, onPhotoChange }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onPhotoChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <Camera className="w-8 h-8 text-gray-400" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-600">
            Upload a professional photo (optional)
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Recommended: Square image, professional appearance
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoUpload;
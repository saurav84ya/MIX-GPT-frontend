import React, { useEffect, useState } from 'react';
import { FaCamera, FaEdit, FaTrash, FaKey, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../store/authSlice';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: 'https://via.placeholder.com/150',
  });
  const [newProfileImage, setNewProfileImage] = useState(null);

  const suggestions = ['Change Password', 'Change Email', 'Settings', 'Logout'];

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleDeleteAccount = () => {
    alert('Account deleted');
  };

  const handleDeletePrompts = () => {
    alert('All prompts deleted');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInfoUpdate = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, profileImage: newProfileImage || userInfo.profileImage });
    setIsEditing(false);
    alert('Information updated');
  };



  const dispatch = useDispatch()

  const [userData , setUserData] = useState(null)

  // console.log("userData" ,userData)

  const {user} = useSelector((state) => state.authSlice)


  useEffect(() => {
    if(userData == null){
    dispatch(getUserData(user?.email))
      .then((data) => {
        // console.log("data" ,data)
        setUserData({
          name : data?.payload.user.name,
          email : data?.payload.user.email,
          profileUrl : data?.payload.user.profileUrl,
          id :data?.payload.user._id
        })
      })
    
    }
  },[])

  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Profile Section */}
        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            <img
              src="https://www.flaticon.com/free-icon/user-profile_10337609" 
              // alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
            <label
              htmlFor="profileImage"
              className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-700"
            >
              <FaCamera />
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* User Information Section */}
        <div className="text-center mb-8">
          {isEditing ? (
            <form onSubmit={handleInfoUpdate}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex justify-between gap-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Update Info
                </button>
                <button
                  type="button"
                  onClick={handleEditClick}
                  className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{userData?.name}</h2>
              <p className="text-gray-600 mb-4">{userData?.email}</p>

              <div className="flex justify-center gap-6">
                <button
                  onClick={handleDeleteAccount}
                  className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                >
                  <FaTrash /> Delete Account
                </button>
                <button
                  onClick={handleDeletePrompts}
                  className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                >
                  <FaTrash /> Delete All Prompts
                </button>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={handleEditClick}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  <FaEdit /> Edit Info
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Suggestions List */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h3>
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <span className="text-gray-600">{item}</span>
              <FaEdit className="text-blue-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

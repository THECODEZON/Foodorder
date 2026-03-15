import React, { useState } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHistory, FaHeart, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { toast } from 'react-toastify';

const UserProfile = ({ onClose }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
    onClose();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUser size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">{user?.name || 'User'}</h3>
              <p className="text-gray-600">{user?.email || 'user@example.com'}</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaEnvelope className="text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{user?.email || 'user@example.com'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaPhone className="text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">6267093990</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaMapMarkerAlt className="text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-600">Default Address</p>
                  <p className="font-medium">Flat No. 302, Shanti Residency, Gurugram</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'orders':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Order History</h3>
            <div className="space-y-3">
              {[1, 2, 3].map(order => (
                <div key={order} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">Order #{1000 + order}</p>
                      <p className="text-sm text-gray-600">Delivered on {order + 10}/01/2024</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      Delivered
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <img src="/api/placeholder/50/50" alt="Food" className="w-12 h-12 rounded object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mixed Pasta & Soup</p>
                      <p className="text-sm text-gray-600">2 items • ₹{250 + order * 50}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'favorites':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Favorite Items</h3>
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <div className="flex gap-4">
                  <img src="/api/placeholder/60/60" alt="Food" className="w-16 h-16 rounded object-cover" />
                  <div className="flex-1">
                    <p className="font-medium">Pancakes</p>
                    <p className="text-sm text-gray-600">Fluffy and delicious</p>
                    <p className="text-yellow-500 font-semibold">₹120</p>
                  </div>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Order Again
                  </button>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex gap-4">
                  <img src="/api/placeholder/60/60" alt="Food" className="w-16 h-16 rounded object-cover" />
                  <div className="flex-1">
                    <p className="font-medium">Pasta Carbonara</p>
                    <p className="text-sm text-gray-600">Italian classic</p>
                    <p className="text-yellow-500 font-semibold">₹180</p>
                  </div>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Order Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive order updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">SMS Notifications</p>
                  <p className="text-sm text-gray-600">Get delivery updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                </label>
              </div>
              
              <button className="w-full p-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-yellow-500">My Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex h-[calc(90vh-80px)]">
          {/* Sidebar */}
          <div className="w-48 bg-gray-50 p-4 border-r">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'profile' ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200'
                }`}
              >
                <FaUser />
                <span>Profile</span>
              </button>
              
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'orders' ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200'
                }`}
              >
                <FaHistory />
                <span>Orders</span>
              </button>
              
              <button
                onClick={() => setActiveTab('favorites')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'favorites' ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200'
                }`}
              >
                <FaHeart />
                <span>Favorites</span>
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'settings' ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200'
                }`}
              >
                <FaCog />
                <span>Settings</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors mt-auto"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

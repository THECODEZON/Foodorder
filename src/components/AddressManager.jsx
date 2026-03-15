import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaMapMarkerAlt } from 'react-icons/fa';

const AddressManager = ({ onClose, onSelectAddress }) => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      address: '123 Main Street, Apt 4B, New York, NY 10001',
      phone: '+1 234-567-8900',
      isDefault: true
    },
    {
      id: 2,
      name: 'Office',
      address: '456 Business Ave, Floor 12, New York, NY 10002',
      phone: '+1 234-567-8901',
      isDefault: false
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    isDefault: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingAddress) {
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id 
          ? { ...formData, id: editingAddress.id }
          : formData.isDefault ? { ...addr, isDefault: false } : addr
      ));
    } else {
      const newAddress = {
        ...formData,
        id: Date.now()
      };
      
      if (formData.isDefault) {
        setAddresses(addresses.map(addr => ({ ...addr, isDefault: false })));
      }
      
      setAddresses([...addresses, newAddress]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', address: '', phone: '', isDefault: false });
    setShowForm(false);
    setEditingAddress(null);
  };

  const handleEdit = (address) => {
    setFormData(address);
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-yellow-500">Manage Addresses</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Add Address Button */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="w-full mb-6 bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
          >
            <FaPlus /> Add New Address
          </button>
        )}

        {/* Address Form */}
        {showForm && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">
              {editingAddress ? 'Edit Address' : 'Add New Address'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Address Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., Home, Office"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Street Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows="3"
                  placeholder="Enter your complete address"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isDefault"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="isDefault" className="text-gray-700">
                  Set as default address
                </label>
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  {editingAddress ? 'Update' : 'Save'} Address
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Address List */}
        <div className="space-y-3">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`border rounded-lg p-4 ${address.isDefault ? 'border-yellow-500 bg-yellow-50' : 'border-gray-300'}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FaMapMarkerAlt className="text-yellow-500" />
                    <span className="font-semibold">{address.name}</span>
                    {address.isDefault && (
                      <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-1">{address.address}</p>
                  <p className="text-gray-500 text-sm">{address.phone}</p>
                </div>
                <div className="flex gap-2">
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefault(address.id)}
                      className="text-blue-500 hover:text-blue-600 text-sm"
                    >
                      Set Default
                    </button>
                  )}
                  <button
                    onClick={() => handleEdit(address)}
                    className="text-yellow-500 hover:text-yellow-600"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Select Address Button */}
        {onSelectAddress && (
          <div className="mt-6 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                const defaultAddress = addresses.find(addr => addr.isDefault);
                if (defaultAddress && onSelectAddress) {
                  onSelectAddress(defaultAddress);
                }
                onClose();
              }}
              className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Select Default Address
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressManager;

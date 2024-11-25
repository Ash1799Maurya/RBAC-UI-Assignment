
import React, { useState } from 'react';

const UserForm = ({ onSave, initialData = {}, roles = [], onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '', 
    status: 'Active',
    ...initialData,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label className="block mb-2 text-sm font-medium">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="block w-full mb-4 border rounded-md px-2 py-1"
        required
      />
      <label className="block mb-2 text-sm font-medium">Role</label>
      <input
        type="text"
        name="role"
        value={formData.role}
        onChange={handleInputChange}
        className="block w-full mb-4 border rounded-md px-2 py-1"
        placeholder="Enter new role"
        required
      />
      <label className="block mb-2 text-sm font-medium">Status</label>
      <select
        name="status"
        value={formData.status}
        onChange={handleInputChange}
        className="block w-full mb-4 border rounded-md px-2 py-1"
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default UserForm;

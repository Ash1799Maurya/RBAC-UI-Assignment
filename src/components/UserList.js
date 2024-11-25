import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users, onEdit, onDelete, onAdd }) => {
  return (
    <div className="user-list p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Users</h2>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Role</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${
                      user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                  <span className="text-sm text-gray-700">{user.status}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <button
                  className="mr-2 bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-600"
                  onClick={() => onEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired, 
};

export default UserList;

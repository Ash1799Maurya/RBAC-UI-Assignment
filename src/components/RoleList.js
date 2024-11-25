
import React from 'react';

const RoleList = ({ roles = [], onEdit, onDelete }) => {

  if (!Array.isArray(roles)) {
    roles = [];
  }

  return (
    <div className="role-list">
      <h2 className="text-2xl font-semibold mb-4">Roles</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="border px-4 py-2">{role.name}</td>
              <td className="border px-4 py-2">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${
                    role.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                ></span>
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => onEdit(role)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(role.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
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

export default RoleList;

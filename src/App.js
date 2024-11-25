import React, { useEffect, useState } from 'react';
import { mockApi } from './api/MockApi';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import Modal from './components/Modal';
import UserForm from './components/UserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentRole, setCurrentRole] = useState(null);


  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    const storedRoles = localStorage.getItem('roles');
    
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    if (storedRoles) {
      setRoles(JSON.parse(storedRoles));
    }
  }, []);

  const handleAddUser = () => {
    setCurrentUser(null);
    setUserModalOpen(true);
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setUserModalOpen(true);
  };

  const handleSaveUser = async (userData) => {
    const existingRole = roles.find((role) => role.name === userData.role);
    let role;

    if (existingRole) {
      role = existingRole;
    } else {
      role = await mockApi.addRole({ name: userData.role, status: 'Active' });
      setRoles((prevRoles) => {
        const newRoles = [...prevRoles, role];
        localStorage.setItem('roles', JSON.stringify(newRoles)); 
        return newRoles;
      });
    }

    const newUser = await mockApi.addUser({
      ...userData,
      roleId: role.id,
    });

    setUsers((prevUsers) => {
      const newUsers = [...prevUsers, newUser];
      localStorage.setItem('users', JSON.stringify(newUsers)); 
      return newUsers;
    });
    setUserModalOpen(false);
  };

  const handleDeleteUser = async (id) => {
    await mockApi.deleteUser(id);
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); 
  };

  const handleDeleteRole = async (id) => {
    await mockApi.deleteRole(id);
    const updatedRoles = roles.filter((role) => role.id !== id);
    setRoles(updatedRoles);
    localStorage.setItem('roles', JSON.stringify(updatedRoles)); 
  };

  return (
    <div className="app">
      <h1 className="text-3xl font-bold mb-6">RBAC Admin Dashboard</h1>
      <div className="mb-6">
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
        >
          Add User
        </button>
      </div>
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
      <RoleList roles={roles} onEdit={() => {}} onDelete={handleDeleteRole} />
      <Modal isOpen={isUserModalOpen} onClose={() => setUserModalOpen(false)} title={currentUser ? 'Edit User' : 'Add User'}>
        <UserForm initialData={currentUser} roles={roles} onSave={handleSaveUser} onClose={() => setUserModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default App;

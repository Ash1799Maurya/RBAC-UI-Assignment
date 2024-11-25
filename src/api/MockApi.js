const users = [
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'User', status: 'Inactive' }, 
  ];
  
  const roles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'User', permissions: ['Read'] }, 
  ];
  
  export const mockApi = {
    fetchUsers: () => Promise.resolve(users),
    fetchRoles: () => Promise.resolve(roles),
    addUser: (user) => Promise.resolve({ ...user, id: users.length + 1 }),
    updateUser: (updatedUser) => Promise.resolve(updatedUser), 
    deleteUser: (id) => Promise.resolve(id), 
    addRole: (role) => Promise.resolve({ ...role, id: roles.length + 1 }),
    updateRole: (updatedRole) => Promise.resolve(updatedRole),
    deleteRole: (id) => Promise.resolve(id),
  };
  
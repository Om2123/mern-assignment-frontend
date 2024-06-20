import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddUser() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);

    const handleAddUser = async () => {
        try {
            const newUser = { name, age: Number(age), email };
            await axios.post('https://mongoback-os71mz32b-jimmya1421s-projects.vercel.app/newUser', newUser);
            setName('');
            setAge('');
            setEmail('');
            fetchUsers();
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://mongoback-os71mz32b-jimmya1421s-projects.vercel.app/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container">
            <h1>Add User</h1>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input 
                type="number" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
            />
            <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button onClick={handleAddUser}>Add User</button>
            <h2>List of Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.name} - {user.email} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddUser;

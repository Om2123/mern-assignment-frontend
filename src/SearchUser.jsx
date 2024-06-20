import React, { useState } from 'react';
import axios from 'axios';

function SearchUsers() {
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://mongoback-os71mz32b-jimmya1421s-projects.vercel.app/users/search/${name}`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div>
            <h1>Search Users</h1>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name to search"
            />
            <button onClick={handleSearch}>Search</button>
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

export default SearchUsers;

import React, { useState } from 'react';

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ id: Date.now().toString(), username });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="mb-4 p-2 border rounded text-black"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginComponent;
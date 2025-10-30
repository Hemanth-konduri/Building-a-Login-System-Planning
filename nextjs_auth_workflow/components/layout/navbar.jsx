import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">LMS</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded">
            Account
          </button>
          <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
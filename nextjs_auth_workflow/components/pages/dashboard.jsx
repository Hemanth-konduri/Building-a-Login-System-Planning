import React from 'react';

const Dashboard = ({ role, user }) => {
  const isAdmin = role === 'admin';
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Blue Navbar */}
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

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-black">
            {isAdmin ? 'Admin Dashboard' : 'Student Dashboard'}
          </h1>
          <p className="text-gray-600 mb-6">
            {isAdmin 
              ? 'Welcome to the admin panel. Manage users, courses, and system settings from here.'
              : 'Welcome to your learning portal. Access your courses, grades, and academic progress here.'
            }
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl text-black font-semibold mb-2">
                Welcome {isAdmin ? 'Admin' : 'Student'}!
              </h2>
              <p className="text-black">
                {isAdmin 
                  ? 'You have full access to manage the learning management system.'
                  : 'This is your student dashboard. Here you can find your enrolled courses, grades, and profile information.'
                }
              </p>
            </div>
            
            {isAdmin ? (
              <>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl text-black font-semibold mb-2">User Management</h2>
                  <p className="text-gray-600 mb-3">Total registered users</p>
                  <div className="text-black space-y-2">
                    <div className="flex justify-between">
                      <span>Students:</span>
                      <span className="font-semibold">25</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Admins:</span>
                      <span className="font-semibold">3</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl text-black font-semibold mb-2">System Stats</h2>
                  <div className="text-black space-y-2">
                    <div className="flex justify-between">
                      <span>Active Sessions:</span>
                      <span className="font-semibold text-green-600">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Server Status:</span>
                      <span className="font-semibold text-green-600">Online</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl text-black font-semibold mb-2">My Courses</h2>
                  <p className="text-gray-600 mb-3">You are enrolled in 4 courses</p>
                  <ul className="text-black space-y-1">
                    <li>• Mathematics 101</li>
                    <li>• Computer Science 201</li>
                    <li>• Physics 150</li>
                    <li>• English Literature</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl text-black font-semibold mb-2">Recent Grades</h2>
                  <p className="text-gray-600 mb-3">Latest assignment results</p>
                  <div className="text-black space-y-2">
                    <div className="flex justify-between">
                      <span>Math Quiz 3</span>
                      <span className="font-semibold text-green-600">A-</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CS Project</span>
                      <span className="font-semibold text-green-600">B+</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
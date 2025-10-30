import React from 'react';

const MainLayout = ({ children, navbar, sidebar }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {navbar}
      <div className="flex">
        <div className="hidden md:block">
          {sidebar}
        </div>
        <main className="flex-1 p-6 overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
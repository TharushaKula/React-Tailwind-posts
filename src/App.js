import logo from './logo.svg';
import './App.css';
import React from 'react';
import posts from './posts.json';

function App() {
  return (
    <div className="App grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {posts.map((post, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-500">{post.date}</span>
            <a href="#" className="text-blue-500 hover:underline cursor-pointer">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
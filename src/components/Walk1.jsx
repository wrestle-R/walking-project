import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Walk1 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Simple header with back link */}
      <Link 
        to="/"
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft size={24} />
        <span>Back to Walks</span>
      </Link>

      {/* Placeholder content */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Walk 1</h1>
        <h2 className="text-xl text-gray-600 mb-6">Bandra to Santacruz</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            Distance: 4.2 kilometers
          </p>
        </div>

        <div className="text-gray-500">
          Further details coming soon...
        </div>
      </div>
    </div>
  );
};

export default Walk1;
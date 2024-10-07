import React, { useState } from 'react';

function App() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (subject) => {
    setSelected(subject);
    // Here you would typically navigate to a new page or load new content
    console.log(`Selected: ${subject}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center mb-6">SAT Tutoring App</h1>
                <p className="text-2xl font-bold text-center">What would you like to strengthen?</p>
                <div className="flex justify-center space-x-4 mt-6">
                  <button
                    onClick={() => handleSelect('Math')}
                    className={`px-4 py-2 rounded-md ${
                      selected === 'Math' ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-700'
                    } hover:bg-cyan-400 transition-colors duration-300`}
                  >
                    Math
                  </button>
                  <button
                    onClick={() => handleSelect('English')}
                    className={`px-4 py-2 rounded-md ${
                      selected === 'English' ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-700'
                    } hover:bg-cyan-400 transition-colors duration-300`}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
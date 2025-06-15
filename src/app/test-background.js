'use client';

import { useState } from 'react';

export default function TestBackground() {
  const [testResult, setTestResult] = useState('A');

  const backgroundImagePath = `/img/bunny_result_${testResult}_backgroud.png`;

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="mobile-frame">
        <div className="relative w-full h-full bg-gradient-to-br from-purple-400 to-pink-500">
          <img
            src={backgroundImagePath}
            alt={`Test Result ${testResult} Background`}
            className="absolute inset-0 w-full h-full object-cover"
            onLoad={() => {
              console.log('✅ Background image loaded successfully:', backgroundImagePath);
            }}
            onError={(e) => {
              console.log('❌ Background image failed to load:', backgroundImagePath);
              e.target.style.display = 'none';
            }}
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-8">背景圖片測試</h1>
            <p className="text-xl mb-4">當前測試：結果 {testResult}</p>
            <p className="text-lg mb-4">圖片路徑：{backgroundImagePath}</p>
            
            <div className="flex flex-wrap justify-center gap-2">
              <button 
                onClick={() => setTestResult('A')}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                測試結果A
              </button>
              <button 
                onClick={() => setTestResult('B')}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
              >
                測試結果B
              </button>
              <button 
                onClick={() => setTestResult('C')}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
              >
                測試結果C
              </button>
              <button 
                onClick={() => setTestResult('D')}
                className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded"
              >
                測試結果D
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
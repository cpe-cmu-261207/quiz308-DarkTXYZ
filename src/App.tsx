import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBlock from './data/CommentBlock'

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/1.png"></img>
            <span className='font-semibold text-lg text-white'>Pawaret Dilokwuttisit 630610748</span>
          </div>

          {/* status message */}
          <p className='text-white'>เหงาจัง อยากมีแฟนครับ</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-300'>24 คน</p>
          </div>

        </div>

        {/* comments section */}
        <div className="">
          <CommentBlock/>
        </div>

      </div>
    </div>
  );
}

export default App;
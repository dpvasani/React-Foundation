import { useState } from 'react'
import dpvasaniImage from './assets/Dpvasani.jpg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="relative h-[400px] w-[300px] rounded-md">
    <img
  src={dpvasaniImage}
  alt="Darshan Vasani"
  className="z-0 h-full w-full rounded-md object-cover"
/>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">Darshan Vasani</h1>
        <p className="mt-2 text-sm text-gray-300">
            Its Very Personal<br />
          Come Back Is <span className='text-violet-800'>Bloody Personal</span>
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>
    </>
  )
}

export default App

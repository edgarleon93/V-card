import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
<div class="grid py-10 place-items-center h-screen w-screen ">

  <div className="container grid grid-cols-12	h-full">

    <div className=" col-span-10 sm:col-span-11">
      <h1 className=" lg:text-9xl lg:leading-[6.5rem] md:text-8xl md:leading-[4.5rem] text-6xl leading-[3rem] font-medium text-start overscroll-contain">CREATIVE <br />DEVELOPER</h1>
    </div>
    <div className=" col-span-2 sm:col-span-1 ">
      <a className=" lg:text-2xl md:text-2xl font-medium text-end hover:overline items-center tracking-[12px]">About</a>
    </div>

    <div className="col-span-12 sm:col-span-12">
      <div class="photo my-6 bg-no-repeat bg-contain	md:w-1/2 "> <img src="/src/image/photo.png" alt="" /> </div>
    </div>

    <div className="  col-span-2 place-items-start h-50 ">
        <img className='border border-black' src="/src/image/arrow.svg " alt="" />
    </div>
    <div className=" col-span-10 h-50">
        <div className="col-span-7 h-50"></div>
        <h1 className="col-span-10 lg:text-9xl lg:leading-[6.5rem] md:text-8xl md:leading-[4.5rem] text-6xl leading-[3rem] font-medium text-end ">PRINGUET <br /> EDGAR</h1>

    </div>
    {/* <div className=" col-span-7 h-50"> */}
        {/* <h1 className="col-span-10 lg:text-9xl lg:leading-[6.5rem] md:text-8xl md:leading-[4.5rem] text-6xl leading-[3rem] font-medium text-end ">PRINGUET <br /> EDGAR</h1> */}
    {/* </div> */}
    
  </div>
  
</div>   
  )
}

export default App

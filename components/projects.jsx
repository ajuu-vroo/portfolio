import { useState } from "react"

function Projects({title,content,techArray,sourceCode,liveCode,projectThumbnail}) {
  const [active, setActive] = useState(false);
  const [activate,setActivate] = useState(true);
  return (
    <div className='w-full h-96 bg-gradient-to-br from-gray-700/10 to-gray-500/10 flex flex-col items-center rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden selection:bg-[#6fb5b64e]' onClick={() => {setActive(true); 
    if(activate=== false)setActivate(true)}}>
      {active && activate && (<div className='absolute h-full w-full top-0 bg-black/90 animate-drop'>
        <div className='text-white m-10 space-y-4 font-lato'>
          <h1 className='font-bold -ml-6'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>Technologies used:</h1>
          {techArray.map((item,index)=>{
            return <h1 key={index}>{'⦿'+ ' ' + item}</h1>
          })}
          {/* <h1>⦿ NextJs<br /> ⦿ TailwindCSS</h1> */}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white hover:text-green-50 absolute right-2 top-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setActivate(false)} >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12"/>
        </svg>
        <div className='mt-32 ml-4 space-x-3 lg:space-x-10 lg:ml-9'>
          <a href={sourceCode} target="_blank">
          <button className='border-2 border-white text-white w-36 h-10 rounded-full hover:bg-white hover:text-black font-semibold transition-all'>Source Code</button>
          </a>
          <a href={liveCode} target="_blank">
          <button className='border-2 border-white text-white w-36 h-10 rounded-full hover:bg-white hover:text-black font-semibold transition-all'>Live Code</button>
          </a>

        </div>
      </div>)}
      
      <div>
        <img src={projectThumbnail} className='h-44 w-72 object-cover pt-2' />
      </div>
      <div className='flex-col flex items-center group '>
        <h1 className='text-gray-200 group-hover:text-green-400 mt-3 text-2xl font-lato font-semibold transition'>
          {title}
        </h1>
        <h1 className='text-gray-400 text-center mt-4'>
          {content}
        </h1>
      </div>
    </div>
  )
}

export default Projects


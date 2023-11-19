import React from 'react'

interface FooterProps {
   visitCount: number;
 }

const Footer: React.FC<FooterProps> = ({ visitCount }) => {
  return (
    <div className='bg-black w-full footer flex flex-col justify-center items-center py-10'>
      <div className="visit-box text-white font-mono">
      We've got {visitCount} visitors until now!
      </div>
      <div className="text-white font-mono">
         Made with <span className='text-red-500'>❤</span> by Farzaneh
      </div>
    </div>
  )
}

export default Footer
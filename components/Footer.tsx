import React from 'react'

const Footer = () => {
  return (
    <footer className={`bg-gray-800 text-white flex items-center justify-center py-4`}>
      <div className={`flex items-center gap-4`}>
        <span>{`© ${new Date().getFullYear()} 10x Club`}</span>
        <span>{`All Rights Reserved`}</span>
      </div>
    </footer>
  )
}
export default Footer

import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`${className} max-w-[1200px] py-2 mx-auto `}>
      {children}
    </div>
  )
}

export default Container

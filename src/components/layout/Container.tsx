import React from "react"

type ContainerType = React.FC<{
  className?: string
}>
const adminContainer: ContainerType = ({ className, children }) => {
  return (
    <div
      className={`w-full max-w-4xl md:max-w-2xl lg:max-w-2xl mx-auto p-5 ${className}`}
    >
      {children}
    </div>
  )
}

export default adminContainer

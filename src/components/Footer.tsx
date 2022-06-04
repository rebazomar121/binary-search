import React from "react"
import { AiFillGithub } from "react-icons/ai"
const Footer = () => {
  return (
    <a className="w-full" href="https://github.com/rebazomar121">
      <div
        className="bg-gray-100
             text-xl
             text-center
             fixed
             inset-x-0
             bottom-12
             w-full max-w-4xl md:max-w-2xl lg:max-w-2xl  p-3
                rounded-lg
             "
      >
        <h1 className="flex text-center text-2xl ">
          <span>
            <AiFillGithub className=" m-2" />
          </span>
          <span className="m-1">RebazOmar121</span>
        </h1>
      </div>
    </a>
  )
}

export default Footer

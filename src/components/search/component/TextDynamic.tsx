import React from "react"

type TextDynamicType = React.FC<{
  colorChangerTimer: number
}>
const TextDynamic: TextDynamicType = ({ colorChangerTimer }) => {
  return (
    <h1
      className={` text-center duration-700 text-2xl ${
        colorChangerTimer === 400
          ? "text-gray-500"
          : colorChangerTimer === 300
          ? "text-gray-400"
          : colorChangerTimer === 200
          ? "text-gray-300"
          : colorChangerTimer === 100
          ? "text-gray-200"
          : colorChangerTimer === 200
          ? "text-gray-100"
          : "text-gray-300"
      } `}
    >
      Please Type Something
    </h1>
  )
}

export default TextDynamic

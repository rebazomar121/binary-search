import React from "react"

type BinaryLiType = React.FC<{
  binarySearchData: any
}>
const BinaryLi: BinaryLiType = ({ binarySearchData }) => {
  if (
    binarySearchData?.length === 0 ||
    binarySearchData === null ||
    binarySearchData === undefined
  )
    return <></>

  return (
    <li className="text-center">
      <h1 className="text-center font-semibold max-auto text-2xl sm:m-12 mb-8  ">
        {
          <span className="border-b-[0.4rem] border-purple-400 p-2">
            {binarySearchData?.first_name} - {binarySearchData?.last_name}
          </span>
        }
      </h1>
    </li>
  )
}

export default BinaryLi

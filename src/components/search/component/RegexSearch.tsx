import React, { useState } from "react"

type RegexSearchType = React.FC<{
  regexSearchData: any
}>
const RegexSearch: RegexSearchType = ({ regexSearchData }) => {
  const [showNames, setShowNames] = useState<number>(20)

  // show more name
  const showMoreName = () => {
    setShowNames(showNames + 20)
  }

  if (
    regexSearchData?.length === 0 ||
    regexSearchData === null ||
    regexSearchData === undefined
  )
    return <></>

  return (
    <ul>
      {regexSearchData?.slice(0, showNames)?.map((item, index) => {
        return (
          <li key={item?.id || index} className="text-center">
            <h1 className="text-center font-semibold max-auto text-2xl sm:m-12 mb-8  ">
              {
                <span className="border-b-[0.4rem] border-purple-400 p-2">
                  {item?.first_name} - {item?.last_name}
                </span>
              }
            </h1>
          </li>
        )
      })}

      {regexSearchData?.length < 0 ? (
        <h1 className="text-center text-2xl font-semibold">Nothing Found</h1>
      ) : (
        ""
      )}

      {regexSearchData?.length > showNames && (
        <button
          className="bg-purple-400 text-white font-semibold p-2 rounded-full"
          onClick={showMoreName}
        >
          Show More
        </button>
      )}
    </ul>
  )
}

export default RegexSearch

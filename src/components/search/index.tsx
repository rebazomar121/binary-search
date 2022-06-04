import React, { useState, useEffect } from "react"
import data from "../../data/data.json"

import BinarySearch from "./component/BinaryLi"
import TextDynamic from "./component/TextDynamic"
import RegexSearch from "./component/RegexSearch"

type dataType = React.FC<{
  id: number
  first_name: string
  last_name: string
}>

const Search = () => {
  const [search, setSearch] = useState("")
  const [colorChangerTimer, setColorChangerTimer] = useState<number>(400)
  const [baseData, setBaseData] = useState<dataType[] | any[]>(data)
  const [binarySearchData, setBinarySearchData] = useState<dataType[] | any>()
  const [showSearchResult, setShowSearchResult] = useState<boolean>(false)
  const [currentSearch, setCurrentSearch] = useState<"binary" | "regex">(
    "binary"
  )
  const [placeHolderInput, setPlaceHolderInput] = useState<string>(
    "Search by id like 4 or 51"
  )
  useEffect(() => {
    const timer = setTimeout(() => {
      if (colorChangerTimer === 0) setColorChangerTimer(400)
      else setColorChangerTimer(colorChangerTimer - 100)
    }, 400)
    return () => clearTimeout(timer)
  }, [colorChangerTimer])

  // import data to state
  useEffect(() => {
    if (setBaseData !== undefined) return
    setBaseData(data)
  }, [baseData])

  //binary Search
  const searchEngine = (target, start, end) => {
    if (start > end) return -1
    const mid = Math.floor((start + end) / 2)
    if (target == baseData[mid].id) return setBinarySearchData(baseData[mid])
    if (target < baseData[mid].id) return searchEngine(target, start, mid - 1)
    if (target > baseData[mid].id) return searchEngine(target, mid + 1, end)
  }

  useEffect(() => {
    if (search === "" && currentSearch === "binary") {
      setShowSearchResult(false)
      setBinarySearchData(undefined)
    }
    if (search !== "" && currentSearch === "binary") {
      searchEngine(Number(search), 0, baseData.length - 1)
      setShowSearchResult(true)
    }

    if (search === "" && currentSearch === "regex")
      return setShowSearchResult(false)
    if (search !== "" && currentSearch === "regex") {
      HandleToSearch(search)
      setShowSearchResult(true)
    }
  }, [search])

  const swapToRegex = (target: string) => {
    if (target === "regex") {
      setCurrentSearch("regex")
      setPlaceHolderInput("Search by name like dude or John")
      setSearch("")
      setBinarySearchData([])
      setShowSearchResult(false)
      setAfterSearch([])
    }
    if (target === "binary") {
      setCurrentSearch("binary")
      setPlaceHolderInput("Search by id like 4 or 51")
      setSearch("")
      setBinarySearchData([])
      setShowSearchResult(false)
      setAfterSearch([])
    }
  }

  // const [isSearch, setIsSearch] = useState(false)
  let currentData: any = []
  const [afterSearch, setAfterSearch] = useState<any[]>()

  const HandleToSearch = async (text: string) => {
    try {
      if (text === "") {
        setAfterSearch([])
        setShowSearchResult(false)
        return
      }
      setShowSearchResult(true)
      baseData?.forEach((item: any) => {
        var result = item.first_name.match(text)
        if (
          result === null ||
          result === undefined ||
          result.length === 0 ||
          result["0"] === ""
        )
          return
        currentData.push(item)
        setAfterSearch(currentData)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-full mt-12">
        <h1 className="text-center font-semibold max-auto text-2xl sm:m-12 mb-8  ">
          <span className="border-b-[0.4rem] border-purple-400 p-2">
            Type Name to Search
          </span>
        </h1>

        <div className="m-6 text-center">
          <button
            className={` m-1 text-white p-3 rounded-lg ${
              currentSearch === "binary" ? "bg-purple-400" : "bg-gray-400"
            }`}
            onClick={() => swapToRegex("binary")}
          >
            Binary Search
          </button>

          <button
            className={` m-1 text-white p-3 rounded-lg ${
              currentSearch === "regex" ? "bg-purple-400" : "bg-gray-400"
            }`}
            onClick={() => swapToRegex("regex")}
          >
            Regex Search
          </button>
        </div>

        <input
          onChange={(e: any) =>
            // searchEngine(e.target.value, 0, baseData.length - 1)
            setSearch(e.target.value)
          }
          onPaste={(e: any) =>
            // searchEngine(e.target.value, 0, baseData.length - 1)
            setSearch(e.target.value)
          }
          value={search}
          className="text-center border-2 w-full p-3 rounded-lg border-purple-500  placeholder-purple-200 active:ring-1 ring-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 duration-300"
          type="text"
          placeholder={`${placeHolderInput}`}
        />
        <div className="mt-3">
          {showSearchResult === false ? (
            <TextDynamic colorChangerTimer={colorChangerTimer} />
          ) : (
            ""
          )}
        </div>

        <ul>
          {showSearchResult === false ? (
            ""
          ) : (
            <BinarySearch binarySearchData={binarySearchData || undefined} />
          )}
        </ul>

        {showSearchResult === false ? (
          ""
        ) : (
          <RegexSearch regexSearchData={afterSearch || undefined} />
        )}
      </div>
    </>
  )
}

export default Search

import Lottie from "react-lottie"
import DataLoading from "../../lotties/an1.json"

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: DataLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  //d26cef

  return (
    <>
      <div className="h-screen w-full bg-[#d14bf6df]">
        <div className="rounded-full">
          <Lottie options={defaultOptions} height={280} width={280} />
        </div>
      </div>
    </>
  )
}
export default Loading

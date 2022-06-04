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

  return (
    <>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </>
  )
}
export default Loading

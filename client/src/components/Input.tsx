import { useEffect, useState } from "preact/hooks"
import { MicroIcon, RecordingIcon, WaveIcon } from "./icons"
// import "regenerator-runtime"
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition"
import { useController, useKeyDown } from "../hooks"
import { TextMessage } from "../model/utils/Messages"

const Input = () => {
  const controller = useController()

  const [recording, setRecording] = useState<boolean>(false)
  const [input, setInput] = useState<string>("")
  const [time, setTime] = useState(null)

  // not used // deprecated on all browsers except chrome
  // const { browserSupportsSpeechRecognition } = useSpeechRecognition()

  // timer on audio input
  useEffect(() => {
    if (time == null) return
    else if (time === 60) {
      setRecording(false)
      setTime(null)
    }

    const intervalId = setInterval(() => {
      setTime(time + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [time])

  const toggleRecording = () => {
    if (recording) {
      setTime(null)
      // SpeechRecognition.stopListening()
      console.log("finish recording")
    } else {
      setTime(0)
      // SpeechRecognition.startListening({ continuous: true, language: "en-US" })
      console.log("start recording")
    }
    setRecording((prev) => !prev)
  }

  useKeyDown(() => {
    if (input.length > 0) {
      const message = new TextMessage(input)
      // call async processin of user text input
      controller.processTextMessage(message)
      setInput("")
    }
  }, ["Enter"])

  return (
    <div
      class={`w-auto pl-7 pr-5 overflow-hidden flex justify-between items-center h-[48px] mx-4 my-2 bg-lightMain rounded-md transition-all`}
    >
      {/* {browserSupportsSpeechRecognition ? ( */}
        <>
          <div
            class={` flex flex-row ${
              recording ? "opacity-100! animate-pulse" : "w-0"
            } transition-opacity duration-1000 opacity-0 shadow`}
          >
            <Waveveveve />
          </div>

          {recording ? (
            <div class="flex items-center gap-[12px]">
              <span class="font-mono text-[#8E8E9E] font-thin">
                00:{time < 10 ? "0" + time : time}
              </span>
              <div
                onClick={toggleRecording}
                class={"cursor-pointer animate-spin"}
              >
                <RecordingIcon />
              </div>
            </div>
          ) : (
            <>
              <input
                value={input}
                onInput={(e) => setInput(e.currentTarget.value)}
                type="text"
                class="bg-lightMain outline-none w-full mr-auto"
              />
              <MicroIcon onClick={toggleRecording} class={`cursor-pointer`} />
            </>
          )}
        </>
      {/* ) : (
        <span>Browser doesn't support speech recognition.</span>
      )} */}
    </div>
  )
}

const Waveveveve = () => (
  <>
    <WaveIcon />
    <WaveIcon />
    <WaveIcon />
    <WaveIcon />
    <WaveIcon />
    <WaveIcon />
    <WaveIcon />
  </>
)

export default Input

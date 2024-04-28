import { useState } from "preact/hooks"
import { JSX } from "preact/jsx-runtime"
import { useController, useSubscribe } from "../hooks"
import { General, LLM, Plugins } from "./settings-pages"

type Page = {
  label: string
  jsx: JSX.Element
}

const pages: Page[] = [
  { label: "General", jsx: <General /> },
  { label: "Plugins", jsx: <Plugins /> },
  { label: "LLM", jsx: <LLM /> },
]

const Settings = () => {
  const [currentPage, setCurrentPage] = useState<Page>(pages[0])

  return (
    <div class={"w-full h-screen flex flex-col bg-dark px-[25px] py-[35px]"}>
      <Control
        currentPage={currentPage}
        changePage={(page) => setCurrentPage(page)}
      />
      {currentPage.jsx}
      <div class="flex h-full flex-col justify-end">
        <Buttons />
      </div>
    </div>
  )
}

type ControlProps = { currentPage: Page; changePage: (page: Page) => void }
const Control = (props: ControlProps) => {
  return (
    <div class="flex flex-row text-[20px] ">
      {pages.map((p) => (
        <span
          onClick={() => props.changePage(p)}
          class={`cursor-pointer w-[110px] px-4 py-2 border-b border-b-solid border-b-1 transition-all duration-200 ease-out ${
            props.currentPage.label == p.label
              ? "font-bold border-b-green text-green"
              : ""
          }`}
        >
          {p.label}
        </span>
      ))}
    </div>
  )
}

const Buttons = () => {
  const state = useSubscribe("reset config")
  const controller = useController()

  const resetSettings = () => {
    state.config.addProperty("nickname", "")
    state.config.addProperty("prompt", "")
    controller.notifySubscribers()
  }
  return (
    <div class="flex gap-2 text-[20px] font-bold">
      <button class="px-[40px] py-[12px] hover:bg-opacity-80 bg-green transition-all duration-300 ease-out rounded-md">
        Update Setting
      </button>
      <button
        onClick={resetSettings}
        class="px-[40px] py-[12px] hover:bg-gray-200 hover:bg-opacity-20 transition-all duration-300 ease-out rounded-md"
      >
        Reset
      </button>
    </div>
  )
}

export default Settings

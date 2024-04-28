import { render } from "preact"

import "./style.css"
import MainWindow from "./pages/MainWindow.js"
import Settings from "./pages/Settings.js"
import { useState } from "preact/hooks"
import Navbar from "./components/Navbar"
// import 'regenerator-runtime'
import { getController } from "./injector"

// injects a controller object on the page
document["controller"] = getController()

export function App() {
  // settings page state
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)

  return (
    <main class="bg-main text-white">
      <div class={`w-full flex flex-row ${isSettingsOpen ? "gap-[15px]" : ""}`}>
        <Navbar
          isSettingsOpen={isSettingsOpen}
          toggleSettings={() => setIsSettingsOpen((prev) => !prev)}
        />
        {isSettingsOpen ? <Settings /> : <MainWindow />}
      </div>
    </main>
  )
}

render(<App />, document.getElementById("app"))

import { BackIcon, SettingsIcon } from "./icons"

type NavbarProps = { isSettingsOpen: boolean; toggleSettings: () => void }
const Navbar = (props: NavbarProps) => (
  <div class="w-[150px] min-w-[150px] h-screen p-2 bg-dark text-[13px]">
    <div
      onClick={props.toggleSettings}
      class="flex justify-start pl-3 gap-3 items-center w-full h-[45px] border border-solid border-1 border-border rounded-md cursor-pointer"
    >
      {props.isSettingsOpen ? (
        <>
          <BackIcon />
          <span>Go Back</span>
        </>
      ) : (
        <>
          <SettingsIcon />
          <span>Settings</span>
        </>
      )}
    </div>
  </div>
)

export default Navbar

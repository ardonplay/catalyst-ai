import Input from "../components/Input"
import Recomendations from "../components/Recomendations"
import { useSubscribe } from "../hooks"
import { TextMessage } from "../model/utils/Messages"

const MainWindow = () => {
  // subscribe MainWindow on model
  // state updated after each call of `notifySubscriber`
  const state = useSubscribe("MainWindow")

  return (
    <div class={"w-full flex flex-col"}>
      {/* render promotion info while there is no history */}
      {state.history.length === 0 && <Recomendations />}
      {state.history.length > 0 && (
        <div class="h-[660px] overflow-y-auto flex flex-col">
          {state.history.map((m, i) =>
            i % 2 === 0 ? (
              <UserMessage message={m} />
            ) : (
              <BotMessage message={m} />
            )
          )}
        </div>
      )}
      <Input />
    </div>
  )
}

const BotMessage = (props: { message: TextMessage }) => (
  <div class="w-full py-8 px-16 text-left bg-lightMain">
    {props.message.getText()}
  </div>
)

const UserMessage = (props: { message: TextMessage }) => (
  <div class="w-full py-8 px-16 text-right">{props.message.getText()}</div>
)

export default MainWindow

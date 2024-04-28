import { ContrastIcon, FlashIcon } from "./icons"

const examples = [
  `“Explain quantum computing in simple terms” →`,
  `"“Tell me about the weather for tomorrow?” →`,
  `“How do I make an HTTP request in Javascript?” →`,
]

const capabilities = [
  `Remembers what user said earlier in the conversation`,
  `The ability to receive a voice response`,
  `Calling a weather or system plugin`,
]

const Recomendations = () => {
  return (
    <div class="flex gap-4 mx-auto my-auto text-[13px]">
      <Column title="Examples" icon={<ContrastIcon />} prompts={examples} />
      <Column
        title="Capabilities"
        icon={<FlashIcon />}
        prompts={capabilities}
      />
    </div>
  )
}

type ColumnProps = {
  title: string
  icon: any
  prompts: string[]
}
const Column = (props: ColumnProps) => {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-[15px] text-center">
        <h2 class="text-[17px]">{props.title}</h2>
        <div class="mx-auto">{props.icon}</div>
      </div>

      {props.prompts.map((p) => (
        <div class="flex text-center items-center w-[230px] h-[65px] bg-lightMain rounded">
          {p}
        </div>
      ))}
    </div>
  )
}

export default Recomendations

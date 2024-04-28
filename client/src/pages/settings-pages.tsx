import { useState } from "preact/hooks"
import { useSubscribe } from "../hooks"

export const General = () => (
 <div class="flex flex-col gap-[24px] mt-[50px]">
   <div class="flex flex-col gap-[10px] text-[16px]">
     <span>Language</span>
     <select class="px-4 border border-1 border-solid border-white bg-border w-[520px] h-[50px] rounded-md text-[14px]">
       <option>English</option>
     </select>
   </div>
   <div class="flex flex-col gap-[10px]">
     <span>Theme</span>
     <select class="px-4 border border-1 border-solid border-white bg-border w-[520px] h-[50px] rounded-md text-[14px]">
       <option>Open AI Chat theme</option>
     </select>
   </div>
 </div>
)

export const Plugins = () => {
 const [pluginStatus1, setPluginStatus1] = useState(true)
 const [pluginStatus2, setPluginStatus2] = useState(true)

 return (
   <div class="flex flex-col gap-[24px] mt-[50px] text-[16px]">
     <div class="flex flex-row gap-[15px]">
       <div
         onClick={() => setPluginStatus1((prev) => !prev)}
         class={`flex ${
           !pluginStatus1 ? "justify-end" : "justify-start"
         } items-center px-1.5 w-[50px] h-[30px] border border-1 border-solid border-white rounded-full transition-all duration-200 ease-linear`}
       >
         <div
           class={`w-[16px] h-[16px] border border-1 border-solid border-white rounded-full ${
             pluginStatus1 ? "bg-white" : ""
           }`}
         ></div>
       </div>
       <div>
         <span>System control plugin</span>
         <p>Supporting line text lorem ipsum dolor sit amet, consectetur.</p>
       </div>
     </div>
     <div class="flex flex-row gap-[15px]">
       <div
         onClick={() => setPluginStatus2((prev) => !prev)}
         class={`flex ${
           !pluginStatus2 ? "justify-end" : "justify-start"
         } items-center  px-1.5 w-[50px] h-[30px] border border-1 border-solid border-white rounded-full transition-all duration-200 ease-linear`}
       >
         <div
           class={`w-[16px] h-[16px] border border-1 border-solid border-white rounded-full ${
             pluginStatus2 ? "bg-white" : ""
           }`}
         ></div>
       </div>
       <div>
         <span>Weather plugin</span>
         <p>Supporting line text lorem ipsum dolor sit amet.</p>
       </div>
     </div>
   </div>
 )
}

export const LLM = () => {
 const state = useSubscribe("LLM")

 return (
   <div class="flex flex-col gap-[24px] mt-[50px]">
     <div class="flex flex-col gap-[10px] text-[16px]">
       <span>Choose LLM</span>
       <select class="px-4 border border-1 border-solid border-white bg-border w-[520px] h-[50px] rounded-md text-[14px]">
         <option>LLM Name</option>
       </select>
     </div>
     <div class="flex flex-col gap-[10px]">
       <span>Nickname</span>
       <input
         onInput={(e) =>
           state.config.addProperty("nickname", e.currentTarget.value)
         }
         value={state.config.getPropertyValue("nickname")}
         placeholder={"Your nickname (Optional)"}
         class="px-4 border border-1 border-solid border-white bg-border w-[520px] h-[50px] rounded-md text-[14px]"
       />
     </div>

     <div class="flex flex-col gap-[10px]">
       <span>Global prompt</span>
       <textarea
         onInput={(e) =>
           state.config.addProperty("prompt", e.currentTarget.value)
         }
         value={state.config.getPropertyValue("prompt")}
         placeholder={"Your global prompt (Optional)"}
         class="p-4 border border-1 border-solid border-white bg-border w-[520px] h-[120px] rounded-md text-[14px]"
       />
     </div>
   </div>
 )
}


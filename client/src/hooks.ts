import { useEffect, useState } from "preact/hooks";
import { Controller } from "./model/Controller";
import { State, Subscriber } from "./model/utils/Subscriber";

export const useKeyDown = (callback: () => void, keys: string[]) => {
 const onKeyDown = (event) => {
  const wasAnyKeyPressed = keys.some((key) => event.key === key);
  if (wasAnyKeyPressed) {
   event.preventDefault();
   callback();
  }
 };

 useEffect(() => {
  self.addEventListener('keydown', onKeyDown);
  return () => {
   self.removeEventListener('keydown', onKeyDown);
  };
 }, [onKeyDown]);
};

export const useController = (): Controller => {
 return document["controller"]
}


export const useSubscribe = (name: string): State | undefined => {
 console.log('useSubscribe')
 const controller = useController()
 const [data, setData] = useState<State>(controller.getState())

 const [subscriber, setSubscriber] = useState<Subscriber>({
  update(updated) {
   setData(updated)
  },
  getName() {
   return name
  },
 })

 useEffect(() => {
  controller.subscribe(subscriber)
 }, [])

 return data
}
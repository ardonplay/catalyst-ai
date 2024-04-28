export class AudioMessage {
 private content: any

 constructor(audio: any) {
  this.content = audio
 }
 
 public getAudio() : any {
  return this.content
 }
}

export class TextMessage {
 private content: string

 constructor(text: string) {
  this.content = text
 }
 
 public getText() : string {
  return this.content
 }

 public add(text: string) {
  this.content += text
 }
}

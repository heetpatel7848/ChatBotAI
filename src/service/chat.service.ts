import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  consersation = new Subject<Message[]>()
  messageMap: any = {
    "hi": "hello",
    "Hi": "Hello",
    "who are you": "My name is ChatBotAI",
    "Who are you": "My name is ChatBotAI",
    "What is Angular": "Angular is a framewrok",
    "what is angular": "Angular is a framewrok",
    "default": "I can't understand. Can you please repeat or write some other question"
  }

  getBotAnswer(msg: any) {
    const userMessage = new Message('user', msg);
    this.consersation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.consersation.next([botMessage]);
    },
      1500)
  }

  getBotMessage(question: any) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}

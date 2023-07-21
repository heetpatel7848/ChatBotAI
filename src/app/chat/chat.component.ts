import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from 'src/service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [];
  value !: string;

  constructor(private _chat: ChatService) { }

  ngOnInit(): void {
    this._chat.consersation.subscribe((val) => {
      this.messages = this.messages.concat(val)
    });
  }

  sendMessage() {
    this._chat.getBotAnswer(this.value);
    this.value = ''
  }

}

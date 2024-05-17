import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMqttMessage, IMqttServiceOptions, MqttModule, MqttService } from 'ngx-mqtt';
import { ChatModule } from './chat/chat.module';
import { ChatComponent } from "./chat/chat.component";
import { HaderComponent } from "./components/hader/hader.component";

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 183,
  protocol: "wss",
  path: '',
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ChatModule, ChatComponent, HaderComponent]
})
export class AppComponent {
  title = 'chat-app';
  chatList = [
    {
      id: 1,
      chatIcon: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg",
      chatTitle: "Robo Cop",
      lastMessage: "Hey, you're arrested!",
      lastMessageTime: "13:21"
    },
    {
      id: 2,
      chatIcon: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg",
      chatTitle: "Robo Cop 1",
      lastMessage: "Hey, Good Mornig!",
      lastMessageTime: "01:22"
    },

  ]

  
 
}

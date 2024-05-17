import { Component, OnDestroy } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  providers: [MqttService],

  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnDestroy {
  message: string | undefined;

  constructor(private mqttService: MqttService) {}

  ngOnInit() {
    // Subscribe to a topic
    this.mqttService.observe('presence').subscribe((message: IMqttMessage) => {
      console.log('in message', message);
      this.message = message.payload.toString();
      this.sendMessage()
    });
  }

  sendMessage() {
    // Publish a message to a topic
    this.mqttService.unsafePublish('presence', 'Hello, MQTT!');
  }

  public ngOnDestroy() {
    this.mqttService.disconnect();
  }
}

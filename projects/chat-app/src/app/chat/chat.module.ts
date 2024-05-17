import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMqttServiceOptions, MqttModule, MqttService, MqttServiceConfig } from 'ngx-mqtt';
import { ChatComponent } from './chat.component';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '127.0.0.1',
  port: 1884,
  protocol: "ws",
  path: '',
};



@NgModule({
  declarations: [],
  imports: [
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    CommonModule,
    ChatComponent
  ]
})
export class ChatModule { }

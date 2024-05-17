import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { IMqttMessage, IMqttServiceOptions, MqttModule, MqttService as mService } from "ngx-mqtt";
import { Subscription } from 'rxjs';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 183,
  protocol: "wss",
  path: '',
};

@Injectable({
  providedIn: 'root'
})
export class MqttService {
  private subscription: Subscription;
  public message: string | undefined;

  constructor(private _mqttService: mService) {
    this.subscription = this._mqttService.observe('').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

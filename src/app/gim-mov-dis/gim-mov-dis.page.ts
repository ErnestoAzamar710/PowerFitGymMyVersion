import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gim-mov-dis',
  templateUrl: './gim-mov-dis.page.html',
  styleUrls: ['./gim-mov-dis.page.scss'],
})
export class GimMovDisPage implements OnInit {
  public minutes: number = 4;
  public seconds: number = 0;
  private timer: any;
  private date = new Date();
  
  public show: boolean = true;
  public disabled: boolean = false;
  public animate: boolean = false;
  constructor() {}
  ngOnInit(): void {
  }

  increment(type:'M' | 'S') {

    if (type === 'M') {
      if (this.minutes >= 59) return;
      this.minutes += 1;
    }
    else {
      if (this.seconds >= 59) return;
      this.seconds += 1;
    }
  }
  decrement(type: 'M' | 'S') {
    if (type === 'M') {
      if (this.minutes <= 0) return;
      this.minutes -= 1;
    }
    else {
      if (this.seconds <= 0) return;
      this.seconds -= 1;
    }
  }
  updateTimer() {
    this.date.setMinutes(this.minutes);
    this.date.setSeconds(this.seconds);
    this.date.setMilliseconds(0);
    const time = this.date.getTime();
    this.date.setTime(time - 1000);  //---

    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();

    if (this.date.getMinutes() === 0 &&
      this.date.getSeconds() === 0) {
      //stop interval
      clearInterval(this.timer);
      this.animate = true;
      setTimeout(() => {
        this.stop();
      }, 5000);

    }
  }

  start() {
    if (this.minutes > 0 || this.seconds > 0) {

      this.disabled = true;
      this.show = false;  //hide btn + and -
      this.updateTimer();

      if(this.seconds > 0){
        this.timer = setInterval(() => {
          this.updateTimer();
        }, 1000);
      }     
    }
  }

  stop() {    
    this.disabled = false;
    this.show = true;
    this.animate = false;
    clearInterval(this.timer);
  }

  reset() {
    this.minutes = 4;
    this.seconds = 0;
    this.stop();
  }
  homeUsu(){
    window.location.href = '/usuario'
  }
}

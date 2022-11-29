import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
color:string;
content:string
constructor(){
  this.color='red'
  this.content='mycontent '
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
img1:string
img2:string
img3:string
img4:string
img5:string
img6:string
img7:string
img8:string
img9:string
img10:string
img11:string
img12:string
constructor(){
  this.img1='../../../assets/images/camera/1.jpg'
  this.img2='../../../assets/images/camera/2.jpg'
  this.img3='../../../assets/images/camera/3.jpg'
  this.img4='../../../assets/images/laptop/1.jpg'
  this.img5='../../../assets/images/laptop/2.jpg'
  this.img6='../../../assets/images/laptop/3.jpg'
  this.img7='../../../assets/images/men clothes/1.jpg'
  this.img8='../../../assets/images/men clothes/2.jpg'
  this.img9='../../../assets/images/men clothes/4.jpg'
  this.img10='../../../assets/images/mobile phones/2.jpg'
  this.img11='../../../assets/images/mobile phones/4.jpg'
  this.img12='../../../assets/images/mobile phones/6.jpg'
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

visible:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
onView(){
  this.visible = !this.visible;
}
toContact(){
  document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
}
toHome(){
  document.getElementById('home')?.scrollIntoView({behavior:'smooth'})
}
toServices(){
  document.getElementById('skills')?.scrollIntoView({behavior:'smooth'})
}

toAbout(){
  document.getElementById('about')?.scrollIntoView({behavior:'smooth'})
} 
}

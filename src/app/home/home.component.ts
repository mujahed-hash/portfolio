import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  responsiveOptions;
  products: any[]=[
    {
      text:"Angular",
      image: "./../assets/illust/angular.png",
      textP:"Angular is a platform and Front-end framework used for building Single-page Applications"
    },
    { text:"Node Js",
      image: "./../assets/illust/node-js.png",
      textP:"Node Js is the runtime for javascript for building fast and scalable network apps "

  },
      { text:"Javascript",
        image: "./../assets/illust/javascript.png",
        textP:"JavaScript is a object-oriented scripting language used to make webpages interactive."

      },
     { text:"MongoDB",
       image: "./../assets/illust/mongo.png",
       textP:"A Highly Scalable NoSql Database performs well with High volume data Storage"

      },
      { text:"Angular Material",
      image: "./../assets/illust/material.png",
      textP:"Angular Material is a UI component library for Angular with in-built responsive designing  "

     },
     { text:"PrimeNG",
     image: "./../assets/illust/primeng-logo.png",
     textP:"PrimeNG is a collection of rich UI components for Angular with Extensible Features "

    },
    { text:"Bootstrap",
    image: "./../assets/illust/bootstrap.png",
    textP:"A is a CSS framework directed at responsive, mobile-first front-end web development."

   },

  ];

	 constructor() {        
     this.responsiveOptions = [
    {
        breakpoint: '1026px',
        numVisible: 3,
        numScroll: 3
    },
    {
      breakpoint: '1026px',
      numVisible: 2,
      numScroll: 2
  },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];}

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }


  toServices(){
    document.getElementById('skills')?.scrollIntoView({behavior:'smooth'})
  }

 

}

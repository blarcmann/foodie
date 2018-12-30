import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  constructor() { 

    // function currentDiv(n) {
    //   showDivs(slideIndex = n);
    // }
    
    // function showDivs(n) {
    //   var i;
    //   var x = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("demo");
    //   if (n > x.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = x.length}
    //   for (i = 0; i < x.length; i++) {
    //      x[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    //   }
    //   x[slideIndex-1].style.display = "block";
    //   dots[slideIndex-1].className += " w3-opacity-off";
    // }

  }

  ngOnInit() {
  }
}

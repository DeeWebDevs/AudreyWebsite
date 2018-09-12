import { Component } from '@angular/core';
import * as $ from 'jquery';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {Product} from './shared/products'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class AppComponent {
  title = 'testFullPage';
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  //DUMMY DATA
  test_data: Array<Product> = []
  export_data: Array<Product> = []
  p1: Product
  p2: Product
  p3: Product
  
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(){
    //---------
        $(document).ready(function() {
          $(".menu-icon").on("click", function() {
                $("nav ul").toggleClass("showing");
          });
    });
    $(window).on("scroll", function() {
      if($(window).scrollTop()) {
        console.log("c1")
            $('nav').addClass('black');
      }
      else {
        console.log("c2")

            $('nav').removeClass('black');
      }
    });
    //----------
    (function() {
      var delay = false;

      $(document).on('mousewheel DOMMouseScroll', function(event) {
        event.preventDefault();
        if (delay) return;

        delay = true;
        setTimeout(function() {
          delay = false
        }, 200)
        var wd = event.originalEvent.wheelDelta as HTMLInputElement || -event.originalEvent.detail;
        var a = document.getElementsByName('portion');
        if (wd < 0) {
          for (var i = 0; i < a.length; i++) {
            var t = a[i].getClientRects()[0].top;
            if (t >= 40) break;
          }
        } 
        else {
          for (var i = a.length - 1; i >= 0; i--) {
            var t = a[i].getClientRects()[0].top;
            if (t < -20) break;
          }
        }
        if (i >= 0 && i < a.length) {
          $('html,body').animate({
            scrollTop: a[i].offsetTop
          });
        }
      });
    })();
    console.clear();
    //------
    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          // Store hash
          var hash = this.hash;
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });

   
  
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
//parralax

$(document).ready(function() {
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#lol2").mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            newvalueX = newvalueX-100
            $('#lol2').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });
  });

  // $(document).ready(function() {
  //   var movementStrength = 25;
  //   var height = movementStrength / $(window).height();
  //   var width = movementStrength / $(window).width();
  //   $("#lol").mousemove(function(e){
  //             var pageX = e.pageX - ($(window).width() / 2);
  //             var pageY = e.pageY - ($(window).height() / 2);
  //             var newvalueX = width * pageX * -1 - 25;
  //             var newvalueY = height * pageY * -1 - 50;
  //             $('#lol').css("background-position", newvalueX+"px     "+newvalueY+"px");
  //   });
  //   });

    //PUT DATA INTO SESSION STORAGE
    this.p1 = new Product; this.p1.pCategory = '0001'; this.p1.pDescription  = "This is a Product"; this.p1.image='l3.jpg'
    this.p2 = new Product; this.p2.pCategory = '0002'; this.p2.pDescription = "This is a Product"; this.p2.image='l2.jpg'
    this.p3 = new Product; this.p3.pCategory = '0003S'; this.p3.pDescription = "This is a Product"; this.p3.image='l6.jpg'
  
    this.test_data.push(this.p1)
    this.test_data.push(this.p2)
    
    this.test_data.push(this.p3)
    sessionStorage.setItem("fakeData", JSON.stringify(this.test_data))
    var jsonString = sessionStorage.getItem('fakeData')
    this.export_data = JSON.parse(jsonString)

    console.log(this.export_data)

  }

//PUT DATA INTO SESSION STORAGE

lol(){
  console.log("DERt")
}

 myFunction() {
  console.log("awesomes")
  document.getElementById("myDropdown").classList.toggle("show");
}



}

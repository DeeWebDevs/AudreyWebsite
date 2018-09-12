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
  test='';
  currentCollection: string
  //DUMMY DATA
  test_data1: Array<Product> = []
  test_data2: Array<Product> = []
  export_data: Array<Product> = []

  theSelection: number

  p1: Product
  p2: Product
  p3: Product
  p4: Product
  p5: Product 
  p6: Product
  p7: Product
  p8: Product
  p9: Product
  p10: Product
  
  p11: Product
  p12: Product
  p13: Product
  p14: Product
  p15: Product 
  p16: Product
  p17: Product
  p18: Product
  p19: Product
  p20: Product

  v1: Product
  v2: Product
  v3: Product
  v4: Product
  v5: Product 
  v6: Product
  v7: Product
  v8: Product
  v9: Product
  v10: Product
  
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

  this.currentCollection ="Select A Category"
    //PUT DATA INTO SESSION STORAGE
    this.p1 = new Product; this.p1.pCategory = '0001'; this.p1.pDescription  = "This is a Product"; this.p1.image='l3.jpg'
    this.p2 = new Product; this.p2.pCategory = '0002'; this.p2.pDescription = "This is a Product"; this.p2.image='l2.jpg'
    this.p3 = new Product; this.p3.pCategory = '0003'; this.p3.pDescription = "This is a Product"; this.p3.image='l6.jpg'
    this.p4 = new Product; this.p4.pCategory = '0004'; this.p4.pDescription = "This is a Product"; this.p4.image='l1.jpg'
    this.p5 = new Product; this.p5.pCategory = '0005'; this.p5.pDescription = "This is a Product"; this.p5.image='gt2.jpg'    
    this.p6 = new Product; this.p6.pCategory = '0001'; this.p6.pDescription  = "This is a Product"; this.p6.image='l3.jpg'
    this.p7 = new Product; this.p7.pCategory = '0002'; this.p7.pDescription = "This is a Product"; this.p7.image='l2.jpg'
    this.p8 = new Product; this.p8.pCategory = '0003'; this.p8.pDescription = "This is a Product"; this.p8.image='l6.jpg'
    this.p9 = new Product; this.p9.pCategory = '0004'; this.p9.pDescription = "This is a Product"; this.p9.image='l1.jpg'
    this.p10 = new Product; this.p10.pCategory = '0005'; this.p10.pDescription = "This is a Product"; this.p10.image='gt2.jpg'
    this.p11 = new Product; this.p11.pCategory = '0001'; this.p11.pDescription  = "This is a Product"; this.p11.image='l3.jpg'
    this.p12 = new Product; this.p12.pCategory = '0002'; this.p12.pDescription = "This is a Product"; this.p12.image='l2.jpg'
    this.p13 = new Product; this.p13.pCategory = '0003'; this.p13.pDescription = "This is a Product"; this.p13.image='l6.jpg'
    this.p14 = new Product; this.p14.pCategory = '0004'; this.p14.pDescription = "This is a Product"; this.p14.image='l1.jpg'
    this.p15 = new Product; this.p15.pCategory = '0005'; this.p15.pDescription = "This is a Product"; this.p15.image='gt2.jpg'    
    this.p16 = new Product; this.p16.pCategory = '0001'; this.p16.pDescription  = "This is a Product"; this.p16.image='l3.jpg'
    this.p17 = new Product; this.p17.pCategory = '0002'; this.p17.pDescription = "This is a Product"; this.p17.image='l2.jpg'
    this.p18 = new Product; this.p18.pCategory = '0003'; this.p18.pDescription = "This is a Product"; this.p18.image='l6.jpg'
    this.p19 = new Product; this.p19.pCategory = '0004'; this.p19.pDescription = "This is a Product"; this.p19.image='l1.jpg'
    this.p20 = new Product; this.p20.pCategory = '0005'; this.p20.pDescription = "This is a Product"; this.p20.image='gt2.jpg'

    this.v1 = new Product; this.v1.pCategory = '0001'; this.v1.pDescription  = "This is a Product"; this.v1.image='l3.jpg'
    this.v2 = new Product; this.v2.pCategory = '0002'; this.v2.pDescription = "This is a Product"; this.v2.image='l3.jpg'
    this.v3 = new Product; this.v3.pCategory = '0003'; this.v3.pDescription = "This is a Product"; this.v3.image='l3.jpg'
    this.v4 = new Product; this.v4.pCategory = '0004'; this.v4.pDescription = "This is a Product"; this.v4.image='l3.jpg'
    this.v5 = new Product; this.v5.pCategory = '0005'; this.v5.pDescription = "This is a Product"; this.v5.image='l3.jpg'    
    this.v6 = new Product; this.v6.pCategory = '0001'; this.v6.pDescription  = "This is a Product"; this.v6.image='l3.jpg'
    this.v7 = new Product; this.v7.pCategory = '0002'; this.v7.pDescription = "This is a Product"; this.v7.image='l3.jpg'
    this.v8 = new Product; this.v8.pCategory = '0003'; this.v8.pDescription = "This is a Product"; this.v8.image='l3.jpg'
    this.v9 = new Product; this.v9.pCategory = '0004'; this.v9.pDescription = "This is a Product"; this.v9.image='l3.jpg'
    this.v10 = new Product; this.v10.pCategory = '0005'; this.v10.pDescription = "This is a Product"; this.v10.image='l3.jpg'
  
    this.test_data1.push(this.p1)
    this.test_data1.push(this.p2)
    this.test_data1.push(this.p3)
    this.test_data1.push(this.p4)
    this.test_data1.push(this.p5)
    this.test_data1.push(this.p6)
    this.test_data1.push(this.p7)
    this.test_data1.push(this.p8)
    this.test_data1.push(this.p9)
    this.test_data1.push(this.p10)    
    this.test_data1.push(this.p11)
    this.test_data1.push(this.p12)
    this.test_data1.push(this.p13)
    this.test_data1.push(this.p14)
    this.test_data1.push(this.p15)
    this.test_data1.push(this.p16)
    this.test_data1.push(this.p17)
    this.test_data1.push(this.p18)
    this.test_data1.push(this.p19)
    this.test_data1.push(this.p20) 

    this.test_data2.push(this.v1)
    this.test_data2.push(this.v2)
    this.test_data2.push(this.v3)
    this.test_data2.push(this.v4)
    this.test_data2.push(this.v5)
    this.test_data2.push(this.v6)
    this.test_data2.push(this.v7)
    this.test_data2.push(this.v8)
    this.test_data2.push(this.v9)
    this.test_data2.push(this.v10)
    
    // sessionStorage.setItem("fakeData", JSON.stringify(this.test_data))
    // var jsonString = sessionStorage.getItem('fakeData')
    // this.export_data = JSON.parse(jsonString)

    // console.log(this.export_data)

  }

//PUT DATA INTO SESSION STORAGE

lol(){
  console.log("DERt")
}

 myFunction() {
  console.log("awesomes")
  document.getElementById("myDropdown").classList.toggle("show");
}


collectionCall(){
  console.log("INSIDE CALL")
  console.log("val: " + this.test)

  switch(Number(this.test) ){
    case 1:
      console.log("in 1")
      this.currentCollection = "Super"
       this.export_data = undefined
      this.export_data = this.test_data1
      break
    case 2:
      console.log("in 2")
      this.currentCollection = "Sports"
      this.export_data = undefined
      this.export_data = this.test_data2
      break
    case 3:
    break

    default:
    break
  }

}



}

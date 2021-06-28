import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-winter',
  templateUrl: './winter.component.html',
  styleUrls: ['./winter.component.scss']
})
export class WinterComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

$(document).ready(function()
    {
    
    
    if($('.bbb_viewed_slider').length)
    {
    var viewedSlider = $('.bbb_viewed_slider');
    
    viewedSlider.owlCarousel(
    {
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:0,
    nav:false,
    dots:false,
    responsive:
    {
    0:{items:4},
    475:{items:6},
    768:{items:9},
    991:{items:12},
    1199:{items:14},
    1399:{items:18}
    }
    });
    
    if($('.bbb_viewed_next2').length)
    {
    var next = $('.bbb_viewed_next2');
    next.on('click', function()
    {
    viewedSlider.trigger('next.owl.carousel');
    });
    }
    }
    
    
    });




    $(document).ready(function()
    {
    
    
    if($('.bbb_viewed_slider-btn').length)
    {
    var viewedSlider = $('.bbb_viewed_slider-btn');
    
    viewedSlider.owlCarousel(
    {
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:0,
    nav:false,
    dots:false,
    responsive:
    {
      0:{items:13},
      475:{items:17},
      767:{items:18},
      991:{items:22},
      1199:{items:27},
      1399:{items:35}
    }
    });
    
    if($('.bbb_viewed_next').length)
    {
    var next = $('.bbb_viewed_next');
    next.on('click', function()
    {
    viewedSlider.trigger('next.owl.carousel');
    });
    }
    if($('.bbb_viewed_prev').length)
    {
    var next = $('.bbb_viewed_prev');
    next.on('click', function()
    {
    viewedSlider.trigger('prev.owl.carousel');
    });
    }
    }
    
    
    });


    // var header = document.getElementById("myDIV");
    // var btns = header.getElementsByClassName("bt");
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function() {
    //   var current = document.getElementsByClassName("active");
    //   current[0].className = current[0].className.replace(" active", "");
    //   this.className += " active";
    //   });
    // }
    
    
  }

}

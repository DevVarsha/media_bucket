import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
       items: 3
     },
      480: {
       items: 3
     },
      940: {
       items: 4
     }
    },
   nav: true
  }
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function()
    {
    
    
    if($('.bbb_viewed_slider1').length)
    {
    var viewedSlider = $('.bbb_viewed_slider1');
    
    viewedSlider.owlCarousel(
    {
    loop:true,
    margin:5,
    autoplay:true,
    autoplayTimeout:6000,
    nav:false,
    dots:false,
    responsive:
    {
    0:{items:4},
    575:{items:5},
    768:{items:3},
    991:{items:4},
    1199:{items:4}
    }
    });
    
    
    if($('.bbb_viewed_next1').length)
    {
    var next = $('.bbb_viewed_next1');
    next.on('click', function()
    {
    viewedSlider.trigger('next.owl.carousel');
    });
    }
    }
    
    
    });

    $(document).ready(function()
    {
    
    
    if($('.bbb_viewed_slider').length)
    {
    var viewedSlider = $('.bbb_viewed_slider');
    
    viewedSlider.owlCarousel(
    {
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:6000,
    nav:false,
    dots:false,
    responsive:
    {
    0:{items:2},
    575:{items:2},
    768:{items:3},
    991:{items:4},
    1199:{items:5}
    }
    });
    
    if($('.bbb_viewed_prev').length)
    {
    var prev = $('.bbb_viewed_prev');
    prev.on('click', function()
    {
    viewedSlider.trigger('prev.owl.carousel');
    });
    }
    
    if($('.bbb_viewed_next').length)
    {
    var next = $('.bbb_viewed_next');
    next.on('click', function()
    {
    viewedSlider.trigger('next.owl.carousel');
    });
    }
    }
    
    
    });

    $(document).ready(function()
    {
    
    
    if($('.bbb_viewed_slider2').length)
    {
    var viewedSlider = $('.bbb_viewed_slider2');
    
    viewedSlider.owlCarousel(
    {
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:6000,
    nav:false,
    dots:false,
    responsive:
    {
    0:{items:2},
    475:{items:3},
    768:{items:3},
    991:{items:4},
    1199:{items:5}
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
  }

}

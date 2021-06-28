import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

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
    991:{items:5},
    1199:{items:5}
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
    margin:0,
    autoplay:true,
    autoplayTimeout:0,
    nav:false,
    dots:false,
    responsive:
    {
    0:{items:4},
    475:{items:5},
    768:{items:8},
    991:{items:10},
    1199:{items:11}
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
      0:{items:14},
      475:{items:17},
      768:{items:23},
      991:{items:30},
      1199:{items:36}
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



  }

}

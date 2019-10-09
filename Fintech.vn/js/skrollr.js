// clear all skrollr
   $(document).ready(function(){
        if ($(window).width() <= 1024){
          skrollr.init().destroy();
        }else{skrollr.init();}
    });
    $(window).resize(function(){
    if ($(window).width() <= 1024){
      skrollr.init().destroy();
    }else{skrollr.init();}
  });
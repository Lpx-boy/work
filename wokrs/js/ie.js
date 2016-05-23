if(navigator.userAgent.indexOf("MSIE")>0){   
      if(navigator.userAgent.indexOf("MSIE 6.0")>0){   
        alert("你目前用的是ie6，请改换浏览器以免影响浏览效果!!!");    
      }   
      if(navigator.userAgent.indexOf("MSIE 7.0")>0){  
        alert("你目前用的是ie7，请改换浏览器以免影响浏览效果!!!");   
      }   
      if(navigator.userAgent.indexOf("MSIE 8.0")>0 && !window.innerWidth){//这里是重点，你懂的
        alert("你目前用的是ie8，请改换浏览器以免影响浏览效果!!!");  
      }   
      if(navigator.userAgent.indexOf("MSIE 9.0")>0){  
        alert("你目前用的是ie9，请改换浏览器以免影响浏览效果!!!");  
      }   
    } 
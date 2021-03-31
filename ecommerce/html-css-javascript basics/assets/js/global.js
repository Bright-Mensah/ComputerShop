
       
       //    javaScript
       document.addEventListener('DOMContentLoaded', function(){ 

           // init
          
         let cookiesBanner =  document.querySelector('.cookies-banner')
         let cookiesBannerCloseButton = document.querySelector('.cookies-banner-button .button')
         let cookiesBannerDelay = 2000
          //   want the cookies to run for  2 seconds  so we insert 5000


         if (cookiesBanner){
             setTimeout(showBanner, cookiesBannerDelay);
       
         }

         // events
         if(cookiesBannerCloseButton){
             cookiesBannerCloseButton.addEventListener('click',cookiesBannerCloseButtonClicked)
         }
        
         function cookiesBannerCloseButtonClicked(events){
             events.preventDefault()
             hideBanner()

         }

         function showBanner(){
           cookiesBanner.classList.add('show')

         }
         function hideBanner(){
             cookiesBanner.classList.remove('show')
         }

      
         
       })
      
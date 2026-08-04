(function(){
  var config=window.SITE_CONFIG||{};
  var ga4Id=config.ga4MeasurementId||'';

  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};

  if(/^G-[A-Z0-9]+$/.test(ga4Id)){
    var analyticsScript=document.createElement('script');
    analyticsScript.async=true;
    analyticsScript.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(ga4Id);
    document.head.appendChild(analyticsScript);
    window.gtag('js',new Date());
    window.gtag('config',ga4Id,{anonymize_ip:true});
  }

  function trackEvent(name,parameters){
    window.gtag('event',name,parameters||{});
  }

  document.addEventListener('DOMContentLoaded',function(){
    var displayPhone='03-7219051';
    var dialPhone='tel:037219051';

    document.querySelectorAll('.wc-phone').forEach(function(link){
      link.textContent=displayPhone;
      link.setAttribute('href',dialPhone);
    });

    document.querySelectorAll('a[href^="tel:"]').forEach(function(link){
      link.addEventListener('click',function(){
        trackEvent('phone_click',{
          link_url:link.getAttribute('href'),
          page_path:window.location.pathname
        });
      });
    });

    document.querySelectorAll('form').forEach(function(form){
      form.addEventListener('submit',function(event){
        trackEvent('generate_lead',{
          form_id:form.id||'estimate_form',
          page_path:window.location.pathname
        });

        var successUrl=form.getAttribute('data-success-url');
        if(successUrl){
          event.preventDefault();
          var submitButton=form.querySelector('[type="submit"]');
          if(submitButton){
            submitButton.disabled=true;
            submitButton.textContent='הפנייה נשלחת...';
          }
          window.setTimeout(function(){
            window.location.assign(successUrl);
          },350);
        }
      });
    });

    var links=document.getElementById('navlinks');
    if(links){
      links.addEventListener('click',function(event){
        if(event.target.tagName==='A'&&innerWidth<=900)links.classList.remove('open');
      });
    }
  });
})();

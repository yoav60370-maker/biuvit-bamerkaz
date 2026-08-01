document.addEventListener('DOMContentLoaded',function(){
  var displayPhone='+972-77-2614164';
  var dialPhone='tel:+972772614164';

  document.querySelectorAll('.wc-phone').forEach(function(link){
    link.textContent=displayPhone;
    link.setAttribute('href',dialPhone);
  });

  var l=document.getElementById('navlinks');
  if(l){
    l.addEventListener('click',function(e){
      if(e.target.tagName==='A'&&innerWidth<=900)l.classList.remove('open');
    });
  }
});

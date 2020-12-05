function handleScroll() { 
  const target = document.querySelectorAll('[data-anime]')
  
  const animeClass = 'animate'

  const windowTop = window.pageYOffset+(window.innerHeight * 0.88)
  target.forEach(function(element) {
    if(windowTop > element.offsetTop){
      element.classList.add(animeClass)
    }else{
      element.classList.remove(animeClass);

    }
  })
}



window.addEventListener('scroll', function(){
handleScroll();

} )
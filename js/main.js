$(document).ready(function(){
	$(window).scroll(function(){
		$('.tasoo div').each(function(){
			var tasoo_element = $(this).offset().top + $(this).outerHeight();
			var tasoo_window = $(window).scrollTop() + $(window).height();

			if( tasoo_window > tasoo_element ){
				$(this).animate({'opacity':'1','margin-bottom':'0px'},300);
			}
		}); //tasoo

		$('.strong section').each(function(){
			var strong_element = $(this).offset().top + $(this).outerHeight();
			var strong_window = $(window).scrollTop() + $(window).height();

			if( strong_window > strong_element ){
				$(this).animate({'opacity':'1','margin-bottom':'0px'},300);
			}
		}); //strong
	}); //window
});

const introText = document.querySelectorAll(".text");

window.onload = () => {
  let timer = 100;
  introText.forEach((item) => {
    item.style.animation = `fade 500ms ${(timer += 50)}ms forwards`;
  });
};
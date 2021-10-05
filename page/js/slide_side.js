


/* 이미지 자동슬라이드 */


num=0;
chk=true;

function slide(){
	num++;
	if(num==5){
		num=0;
	}
	
	$(".visual_box").stop(true,true).animate({"margin-left":"-=800px"},1000,function(){
		$(".visual_box li:first-child").appendTo(".visual_box");
		//visual_box의 내용에 첫번째 li를 추가
		$(this).css({"margin-left":"-800px"});
		
	});
	
	
}



$(document).ready(function(){
	
	auto=setInterval("slide()",3000); //자동화
	
	/* 다음보기 */
	
	
	$(".btn .nextbtn").click(function(){

		if(chk){
			chk=false;
			num++;
			if(num==5){
			num=0;
			}

		clearInterval(auto);
		auto=setInterval("slide()",7000);

		$(".visual_box").stop(true,true).animate({"margin-left":"-=800px"},500,function(){

			$(".visual_box li:first-child").appendTo(".visual_box");
			$(this).css({"margin-left":"-800px"});
			chk=true;
		});
	}

});
	
	
/* 	$(".btn .nextbtn").click{function(){
		
		if(chk){
			chk=false;
			num++;
			if(num==5){
				num=0;
			}
			
			clearInterval(auto);
			auto=setInterval("slide()",7000);
			
			$(".visual_box").stop(true,true).animate({"margin-left":"-=800px"},500,function(){
				
				$(".visual_box li:first-child").appendTo(".visual_box");
				$(this).css({"margin-left":"-800px"});
				chk=true;
				
			});
		}
		
	}); */
	
	
	
	/* 이전보기 */
	$(".btn .prevbtn").click(function(){
		if(chk){
			chk=false;
			num--;
			if(num==5){
			num=0;
			}

		clearInterval(auto);
		auto=setInterval("slide()",7000);

		$(".visual_box").stop(true,true).animate({"margin-left":"+=800px"},500,function(){

			$(".visual_box li:last-child").prependTo(".visual_box");
			$(this).css({"margin-left":"-800px"});
			chk=true;
		});
	}
	});
	
	
	
	
});




/* 
appendTo(...) 다른 태그 안의 맨뒤로 이동한다.
append(...) 태그 안의 맨뒤에 html을 삽입한다.

$('태그').appendTo(셀렉터)
$('<img src="이미지주소">').appendTo('.css_test')
-> 클래스명이 css_test 인 것의 내용에 이미지를 추가

append('HTML 태그')

$('.css_test').append('<img src="이미지주소">')
-> 클래스명이 css_text 인것으 ㅣ내용에 이미지를 추가


-----------------------------------------------------

prependTo(...) 다른 태그안의 맨앞으로 이동한다.
prepend(...) 태그안의 맨앞에 html을 삽입한다.

$('태그').prependTo(셀렉터)
$('<img src="이미지주소"/>').prependTo('.css_test')
-> 클래스명이 css_test 인겻의 내용 앞에 이미지를 추가

prepend('HTML 태그')

$('.css_test').prepend('<img src="이미지주소"/>')
->클래스명이 css_test 인것의 내용 앞에 이미지를 추가





 */







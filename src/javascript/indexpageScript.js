$(document).ready(function() {
	// ul
	var list = $('#banner');
	// 프레임에 사진 노출된 개수
	var show_num = 3;
	// 이전, 다음 버튼 클릭할때 중감되는 값
	var num = 0;
	// 총 <li>의 개수 5가 저장됨. ul>li;
	var total = $('>li', list).length;
    console.log(total);
	// <li>의 너비값(li_width=80);
	var li_width = $('li:first', list).width();
	console.log('li_width:' , li_width);
	// $('ul#banner>li:lt(3)');
	var copyObj = $('>li:lt('+show_num+')', list).clone();
	console.log(copyObj);
	$(list).append(copyObj);
	
	// 다음 버튼을 클릭할때마다 발생
	$('.next').click(function(){
		if(num==total){
			num=0;
            console.log('n'+num);
			$(list).css({'margin-left' : num});
		}
        console.log(num);
        console.log(total);
		num++;
		$(list).stop().animate({'marginLeft' : -li_width*num+'px'}, 50);
       // console.log(li_width*num);
		return false;
	});
	
	// 이전 버튼을 클릭할때마다 발생
	$('.prev').click(function(){
		// 0과같을 경우 total의값을 주어
		// 뒤에서부터의 값을 받아온다
		if(num==0){
			num=total;
            console.log('p'+num);
            console.log('dd');
			$(list).css({'margin-left' : num});
		}
        console.log(num);
        console.log(total);
		num--;
		$(list).stop().animate({'marginLeft' : -li_width*num+'px'}, 50);
        console.log(-li_width*num);
		return false;
	});
	$('.loginButton').click(function(){console.log('buttonClicked')});

});
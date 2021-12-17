$(document).ready(function () {
	// ul
	var list = $('#banner');
	// 프레임에 사진 노출된 개수
	var show_num = 3;
	// 이전, 다음 버튼 클릭할때 중감되는 값
	var num = 0;
	// 총 <li>의 개수 5가 저장됨. ul>li;
	var total = $('>li', list).length;
	// <li>의 너비값(li_width=80);
	var li_width = $('li:first', list).width();
	// $('ul#banner>li:lt(3)');
	var copyObj = $('>li:lt(' + show_num + ')', list).clone();
	$(list).append(copyObj);

	// 다음 버튼을 클릭할때마다 발생
	$('.next').click(function () {
		if (num == total) {
			num = 0;
			$(list).css({ 'margin-left': num });
		}
		num++;
		$(list).stop().animate({ 'marginLeft': -li_width * num + 'px' }, 50);
		return false;
	});

	// 이전 버튼을 클릭할때마다 발생
	$('.prev').click(function () {
		// 0과같을 경우 total의값을 주어
		// 뒤에서부터의 값을 받아온다
		if (num == 0) {
			num = total;
			$(list).css({ 'margin-left': num });
		}
		num--;
		$(list).stop().animate({ 'marginLeft': -li_width * num + 'px' }, 50);
		return false;
	});

	// 사용자가 로그인했을경우 
	// localstorage에 값을 주어 
	// 로그인 상태를 유지시켜준다
	// 로그인 완료후 UserProfile 버튼 show();
	$(function () {
		var isNumber;
		$('.loginButton').bind('click', function () {
			isNumber = localStorage.setItem('userKey', 1);
		});
		if ((localStorage.getItem('userKey') === ('1'))) {
			$(".loginButton").hide();
			$(".userProfileButton").show();
			$('.logoutButton').show();
			$('.createAccountButton').hide();
			$('.myVideos').show();
		} else if ((localStorage.getItem('userKey') === null)) {
			$(".userProfileButton").hide();
			$(".loginButton").show();
			$('.logoutButton').hide();
			$('.createAccountButton').show();
			$('.myVideos').hide();
		}
		//로그아웃시 locastorage에 있는 값을 clear()시켜 준다
		$('.logoutButton').click(function () {
			alert('로그 아웃 하셨습니다.');
			localStorage.removeItem('userKey');
			console.log('log out button clicked');
		});
	});

	//로그인 버튼 클릭시 계정이 없다면
	//회원가입을 해야 한다는 alert 추가
	$('.loginButton').click(function (){
		if(localStorage.getItem('userKey') === null){
			// alert("신규유저는 ID를 생성하세요");
			// alert('▬▬ι═══════ﺤ');
		}
	});

	//유저가 계정 생성시 locaStorage에 유저의 값을 추가 해준다
	$('#joinButton').click(function(){
		isNumber = localStorage.setItem('userKey', 1);
		console.log('user value has added to localStorage');
	});

	//유저가 Join(계정 생성) 클릭후 완료 alert 출력
	$('#joinButton').click(function(){
		alert('ID 생성을 완료 하였습니다.');
	});
});
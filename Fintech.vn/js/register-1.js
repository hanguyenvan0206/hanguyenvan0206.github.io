//***page-register-1***//
$('.phone-confirm').html(list[len-1].phone);
//suppose code sent to phone is 12345
let count = 0;
$('.confirm-phoneN').click(function(){
	let code = $('.confirm-code').val();
	if(code.trim().toString() == '12345'){
	$('.check-code').html('');	
	}
	else{
		if(code.trim() == ''){
		$('.check-code').html('');
		}else{
			console.log(code);
			count=count +1;
			console.log(count);
			$('.check-code').html('Nhập sai mã xác minh');
			if(count==3){
				$('.check-code').html('Bạn chỉ còn 2 lần nhập mã');
			}else if(count>=5){
				$('.check-code').html('Số điện thoại không chính xác');
			}else{$('.check-code').html('Nhập sai mã xác minh');};
			return false;
		}

	}
})
//***page-register-2***//
$('#regiter-2').on('submit', function(){
	let isValid = true;
	let fisrtName = $('.firstName').val().trim();
	let lastName = $('.lastName').val().trim();
	let email = $('.email').val().trim();
	let password = $('.password').val().trim();
	let confirmPass = $('.confirmPass').val().trim();
	let phoneNumber = $('.confirm-phoneN').html();
	if(fisrtName ==''|| fisrtName.toString().length <=3 || lastName == ''){
		$('.check-name').html('Tên không hợp lệ');
		isValid = false;
	}else{$('.check-name').html('');};
	if(email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null){
		$('.check-mail').html('Email không hợp lệ')
		isValid = false;
	}else{ $('.check-mail').html(''); isValid == true;};
	if(password.match(/^(?=.*\d).{4,8}$/) == null){
		$('.check-pass').html('Mật khẩu không hợp lệ');
		isValid = false;
	}else{$('.check-pass').html(''); isValid == true;};
	if(confirmPass.toString()!= password.toString()){
		$('.check-passConfirm').html('Xác nhận mật khẩu không khớp với mật khẩu');
		isValid = false;
	}else{$('.check-passConfirm').html(''); isValid == true;}
	if(isValid == true){
		list = DB.getData();
		list[len-1].name = `${fisrtName} ${lastName}`
		list[len-1].email = `${email}`;
		list[len-1].password = `${confirmPass}`;
		list[len-1].status = `login`;
		DB.setData(list);
		console.log(list);
		$('.login-register').css('display', 'none');
		$('.regitered').css('display', 'block');
	}else{
		return false;
	}

});
//***page-register-3***//
$('.greeting').html(`Xin chào <span>${list[len-1].name}</span>`)
$('.phone-confirm').html(list[len-1].phone);
$('.name-confirm').html(list[len-1].name);
$('.email-confirm').html(list[len-1].email);
for(let i=0; i<list.length; i++){
	if(list[i].status == `login`){
		$('.login-register').css('display', 'none');
		$('.regitered').css('display', 'block');}else{
		$('.login-register').css('display', 'block');
		$('.regitered').css('display', 'none');
		}
}
//***page-register-4***//
//set choose day/month/year
for(let i = 1; i<=31; i++){
	if(i<=9){$('.day').append(`<option>0${i}</option>`)}else{$('.day').append(`<option>${i}</option>`)}
}
for(let i=1; i<=12; i++){
	$('.month').append(`<option>Tháng ${i}</option>`)
}
for(let i = 2019; i>=1945; i--){
	$('.year').append(`<option>${i}</option>`)
}
//set choose place of issue identification
let array = ['An Giang', 'Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu', 'Bắc Ninh', 'Bến Tre', 'Bình Định','Bình Dương','Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Đắk Lắk', 'Đắk Nông','Điện Biên','Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang'];
array.map(function(item){
	$('.place').append(`<option>Công an ${item}</option>`)
})
//set choose address
array.map(function(item){
	$('.address').append(`<option>${item}</option>`)
})
// set menutogg
for(let i = 0; i<=$('.menutogg').length; i++){
	$('.menutogg').click(function(){
		$(this).parent('.row').children('.menutogg').removeClass('active');
		$(this).addClass('active');
	})
}
//set detail function
$('.identifytogg').click(function(){
	$('.identify-detail').css('display', 'block');
	$('.pesonal-detail').css('display', 'none');
	$('.job-detail').css('display', 'none');
});
$('.pesonaltogg').click(function(){
	$('.identify-detail').css('display', 'none');
	$('.pesonal-detail').css('display', 'block');
	$('.job-detail').css('display', 'none');
});
$('.jobtogg').click(function(){
	$('.identify-detail').css('display', 'none');
	$('.pesonal-detail').css('display', 'none');
	$('.job-detail').css('display', 'block');
});
// set register-menu
for(let i = 0; i<=$('.registertogg').length; i++){
	$('.registertogg').click(function(){
		$(this).parent('.register-menu').children('.registertogg').removeClass('active');
		$(this).addClass('active');
	})
}
$('.my-information').click(function(){
	$('.myInformation-container').css('display', 'block');
	$('.my-loan-container').css('display', 'none');
	$('.my-loan-container2').css('display', 'none');
});
$('.my-loan').click(function(){
	$('.myInformation-container').css('display', 'none');
	$('.my-loan-container').css('display', 'block');
	$('.my-loan-container2').css('display', 'none');
});
// set borrow-register
	let m = $('.total-borrows').val();
	let t = $('.time-borrows').val();
$('.total-bor').html($('.total-borrows').val());
$('.total-borrows').on('change', function(){
	$('.total-bor').html(`${m} VND`);
})
$('.time-borrows').on('change', function(){
	$('.time-bor').html(`${t} Tháng`);
})
$('.promotion-code').html($('.promotions').val());
$('.promotions').on('change', function(){
	$('.promotion-code').html($('.promotions').val());
})
//confirm-borrow

$('.confirm-borrow').click(function(){
	$('.my-loan-container2').css('display', 'block');
	$('.my-loan-container').css('display', 'none');
})
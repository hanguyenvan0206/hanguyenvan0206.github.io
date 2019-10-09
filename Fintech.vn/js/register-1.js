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
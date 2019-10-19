let DB = {
			getData: function(){
					if (typeof(Storage) !== "undefined") {
					  let data;
					  try{
					  	data = JSON.parse(localStorage.getItem("list")) || {};
					  }catch(error){
					  	data = {};
					  }
					  return data;
					} else {
					  return {};
					}
				},
				setData: function(data){
					localStorage.setItem("list", JSON.stringify(data));
				}
			};
let User = function(id,name, phone, email, password, status){
		this.id =id;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.status = status;
	};
let list = DB.getData();
// logout-function//
$('.logout').click(function(){
	for(let i=0; i<list.length; i++){
		list[i].status = `logout`;
		DB.setData(list);
		console.log(list);
	}
});
for(let i=0; i<list.length; i++){
		if(list[i].status == `login`){
		$('.login-register').css('display', 'none');
		$('.regitered').css('display', 'block');	
		}else{
		$('.login-register').css('display', 'block');
		$('.regitered').css('display', 'none');	
		}
}
// Show greeting menu
list.map(function(item){
	if(item.status == 'login'){
			$('.greeting').html(`Xin chào <span>${item.name}</span>`)
			$('.login-register').css('display', 'none');
			$('.regitered').css('display', 'block');
		}else{
			$('.login-register').css('display', 'block');
			$('.regitered').css('display', 'none');	
		}	
});
// Login function
$('.login-Confirm').click(function(){
		let verifyKey = $('.verify-key').html();
		let keyInput = $('.key-input').val();
		let isValid;
		console.log(verifyKey);
		console.log(keyInput);
		$('.key-input').html('gjgj');
		list.map(function(item){	
			let Emailphone = $('.Emailphone').val();
			let Pass = $('.loginpass').val();
			if(Emailphone == item.phone){
				$('.greeting').html(`Xin chào <span>${item.name}</span>`);
				item.status = 'login';
			}else{
				isValid = false;
			}
		});
		if(verifyKey.toString() == keyInput.toString()){
			$('.check-verify').css('display','none');
		}else{
			isValid = false;
			if(keyInput.trim() ==''){
			$('.check-verify').css('display','none');	
		}else{
			$('.check-verify').css('display','block');
			listKey = shuffle(listKey);
			let x = Math.floor(Math.random() * listKey.length); // result random number from 0 to array.length-1
			$('.verify-key').html(`${listKey[x]}${listKey[0]}${listKey[5]}${listKey[9]}${listKey[3]}`);
			
		}
	}
	return isValid;
	});
//borrow-btn

for(let i=0; i<list.length; i++){
		if(list[i].status == `login`){
		$('.borrow-btn').click(function(){
			window.location.assign("register-4.html")
		})	
		}else{
		$('.borrow-btn').click(function(){
			window.location.assign("register.html")
		})
		}
}
//***page-register***//
let listKey1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", 1, 2, 3, 4, 5, 6, 7 , 8 , 9];
//shuffle listKey
let  temporykey1;
let shuffle1 = function(array){

	for(i=0; i<array.length;i++){
		j = Math.floor(Math.random()*(array.length-i-1)+1)
		temporykey = array[i];
		array[i] = array[j];
		array[j] = temporykey1;
	}
	return array;
};
// Login click
let len = list.length;
$(document).ready(function(){
	$('.check-verify1').css('display','none');
	listKey1 = shuffle(listKey1);
	let x = Math.floor(Math.random() * listKey1.length); // result random number from 0 to array.length-1
	$('.verify-key1').html(`${listKey1[x]}${listKey1[0]}${listKey1[5]}${listKey1[9]}${listKey1[3]}`);
	//compare verify-key and data-input
	$('.register-Confirm').click(function(){
		let verifyKey1 = $('.verify-key1').html();
		let keyInput1 = $('.key-input1').val();
		let phoneNumber = $('.phone-number').val();
		console.log(verifyKey1);
		console.log(keyInput1);
		$('.key-input1').html('gjgj');
		if(verifyKey1.toString() == keyInput1.toString()){
			$('.check-verify1').css('display','none');
				let Userid = new User(`${len}`,'',`${phoneNumber}`, '', '', '');
				list.push(Userid);
				DB.setData(list);
				console.log(list);		
		}else{
			if(keyInput1.trim() ==''){
			$('.check-verify1').css('display','none');	
			}else{
				$('.check-verify1').css('display','block');
				listKey1 = shuffle(listKey1);
				let x = Math.floor(Math.random() * listKey.length); // result random number from 0 to array.length-1
				$('.verify-key1').html(`${listKey1[x]}${listKey1[0]}${listKey1[5]}${listKey1[9]}${listKey1[3]}`);
				return false;
			}
	}	
	});
})


//==Get time for borrow==/
let getTimes = function(){
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	if(m<30){
		$('#time-recieve').html(`${h}:${30+m}`);
	} else if(m>=30 && m<40){
		$('#time-recieve').html(`${h+1}:0${m-30}`);
	}else{
		$('#time-recieve').html(`${h+1}:${m-30}`);}
	let t = setTimeout(getTimes,500);
};
$(document).ready(function(){
	getTimes();
});
//==Borrow-Caculation==//
// Input số tiền vay
let loadMoney = function(){
$('#money-mount').html($('#myRange').val() +`.000.000 VND`);
$('.total-borrow').html($('#myRange').val() +`.000.000 VND`);
$('.total-borrows').val($('#myRange').val() +`.000.000 VND`);
$('.total-bor').html($('#myRange').val() +`.000.000 VND`);
$('#myRange').on('change', function(){
	$('#money-mount').html($('#myRange').val() +`.000.000 VND`);
	$('.total-borrow').html($('#myRange').val() +`.000.000 VND`);
	$('.total-borrows').val($('#myRange').val() +`.000.000 VND`);
	$('.total-bor').html($('#myRange').val() +`.000.000 VND`);
	});
	};
// Input thời gian
let loadTime =function(){
$('#time-borrow').html($('#myRange-time').val() +` Tháng`);
$('.time-borrows').val($('#myRange-time').val() +` Tháng`);
$('.time-bor').html($('#myRange-time').val() +` Tháng`);
$('#myRange-time').on('change', function(){
	$('#time-borrow').html($('#myRange-time').val() +` Tháng`);
	$('.time-borrows').val($('#myRange-time').val() +` Tháng`);
	$('.time-bor').html($('#myRange-time').val() +` Tháng`);
	});
	};
// Tính lãi suất và tổng nợ
let calculation = function(){
		let m = $('#myRange').val();
		let t = $('#myRange-time').val();
		$('.total-interest').html(`${(m*0.01*t*1000)}.000 VND`);
		$('.paid-interest').html(`${(m*0.01*t*1000)}.000 VND`); //giả sử LS tạm tính 12%/năm
		$('.total-payment').html(`5.100.000 VND`);
		$('.paid-total').html(`5.100.000 VND`);
	$('#myRange').on('change', function(){
		let m = $('#myRange').val();
		let t = $('#myRange-time').val();
		let r = (m*0.01*t*1000).toFixed(0);
		if(r<1000){
			$('.total-interest').html(`${r}.000 VND`);
			$('.paid-interest').html(`${r}.000 VND`);
			let total = (Number(r/1000) + Number(m));
			if(m<10){
				$('.total-payment').html(`${total.toPrecision(4)}.000 VND`);
				$('.paid-total').html(`${total.toPrecision(4)}.000 VND`);
			}else{$('.total-payment').html(`${total.toPrecision(5)}.000 VND`);
				$('.paid-total').html(`${total.toPrecision(5)}.000 VND`);
		};
		}else{
			$('.total-interest').html(`${(r/1000).toPrecision(3)}0.000 VND`);
			$('.paid-interest').html(`${(r/1000).toPrecision(3)}0.000 VND`);
			let total = (Number(r/1000) + Number(m));
			$('.total-payment').html(`${total.toPrecision(4)}0.000 VND`);
			$('.paid-total').html(`${total.toPrecision(4)}0.000 VND`);
		}
	});
	$('#myRange-time').on('change', function(){
			let t = $('#myRange-time').val();
			let m = $('#myRange').val();
			let r = (m*0.01*t*1000).toFixed(0);
		if(r<1000){
				$('.total-interest').html(`${r}.000 VND`);
				$('.paid-interest').html(`${r}.000 VND`);
				let total = (Number(r/1000) + Number(m));
				if(m<10){
				$('.total-payment').html(`${total.toPrecision(4)}.000 VND`);
				$('.paid-total').html(`${total.toPrecision(4)}.000 VND`);
			}else{$('.total-payment').html(`${total.toPrecision(5)}.000 VND`);
			$('.paid-total').html(`${total.toPrecision(5)}.000 VND`);
		};
		}else{
			$('.total-interest').html(`${(r/1000).toPrecision(3)}0.000 VND`);
			$('.paid-interest').html(`${(r/1000).toPrecision(3)}0.000 VND`);
			let total = (Number(r/1000) + Number(m));
			$('.total-payment').html(`${total.toPrecision(4)}0.000 VND`);
			$('.paid-total').html(`${total.toPrecision(4)}0.000 VND`);
		}
	});
};
// Input ngày đáo hạn
let maturity = function(){
	let d = new Date();
	let date = d.getDate();
	let month = d.getMonth()+1;
	let year = d.getFullYear();
	console.log(month);
	console.log(d);
	let t = $('#myRange-time').val();
	let timeborrow = Number(month) + Number(t);
	if(timeborrow<=12){
			$('.time-maturity').html(`${date}/${timeborrow}/${year}`);
			$('.paid-time').html(`${date}/${timeborrow}/${year}`);
		}else{
			if((timeborrow-12)<10){
				$('.time-maturity').html(`${date}/0${timeborrow-12}/${year+1}`);
				$('.paid-time').html(`${date}/0${timeborrow-12}/${year+1}`);
			}else{
					$('.time-maturity').html(`${date}/${timeborrow-12}/${year+1}`);
					$('.paid-time').html(`${date}/${timeborrow-12}/${year+1}`);
				}; 
			};
	$('.time-maturity').html(`${date}/${timeborrow}/${year}`);
	$('.paid-time').html(`${date}/${timeborrow}/${year}`);
	$('#myRange-time').on('change', function(){
		let t = $('#myRange-time').val();
		let timeborrow = Number(month) + Number(t);
		if(timeborrow<=12){
			$('.time-maturity').html(`${date}/${timeborrow}/${year}`);
			$('.paid-time').html(`${date}/${timeborrow}/${year}`);
		}else{
			if((timeborrow-12)<10){
				$('.time-maturity').html(`${date}/0${timeborrow-12}/${year+1}`);
				$('.paid-time').html(`${date}/0${timeborrow-12}/${year+1}`);
			}else{
					$('.time-maturity').html(`${date}/${timeborrow-12}/${year+1}`);
					$('.paid-time').html(`${date}/${timeborrow-12}/${year+1}`);
				} 
			}
	});
};

$(document).ready(function(){
	loadMoney();
	loadTime();
	calculation();
	maturity();
});
//**questions**//
let dropDown = function(){
    if($(window).width()>767){
        $('.fa-plus-circle').css('display','none');
         $('.fa-minus-circle').css('display','none');
    }else{
        $('.fa-minus-circle').css('display','none');
        $('.question-title').next().css('display','none');
    }
    $(window).resize(function(){
     if($(window).width()>767){
        $('.fa-minus-circle').css('display','none');
         $('.fa-plus-circle').css('display','none');
         $('.question-title').next().css('display','block');
    }else{
        $('.fa-minus-circle').css('display','none');
        $('.fa-plus-circle').css('display','block');
        $('.question-title').next().css('display','none');
    } 
    });
}
let toogle = function(){
     $('#question-plus1').click(function(){
         $('#question-plus1').css('display','none');
         $('#question-group1').next().slideDown(600,'linear');
         $('#question-minus1').css('display','block');
     });
     $('#question-minus1').click(function(){
         $('#question-plus1').css('display','block');
         $('#question-group1').next().slideUp(600,'linear');
         $('#question-minus1').css('display','none');
     });
         $('#question-plus2').click(function(){
         $('#question-plus2').css('display','none');
         $('#question-group2').next().slideDown(600,'linear');
         $('#question-minus2').css('display','block');
     });
     $('#question-minus2').click(function(){
         $('#question-plus2').css('display','block');
         $('#question-group2').next().slideUp(600,'linear');
         $('#question-minus2').css('display','none');
     });
         $('#question-plus3').click(function(){
         $('#question-plus3').css('display','none');
         $('#question-group3').next().slideDown(600,'linear');
         $('#question-minus3').css('display','block');
     });
     $('#question-minus3').click(function(){
         $('#question-plus3').css('display','block');
         $('#question-group3').next().slideUp(600,'linear');
         $('#question-minus3').css('display','none');
     });
}
$(document).ready(function(){
    dropDown();
    toogle();
});
//**map**//
$(document).ready(function(){
if($(window).width()<768){
    $('.Branch-desc-item').css('display', 'none');
}else{ $('.Branch-desc-item').css('display', 'block');}
$(window).resize(function(){
if($(window).width()<768){
    $('.Branch-desc-item').css('display', 'none');
}else{ $('.Branch-desc-item').css('display', 'block');}
});
$('#branch-plus').click(function(){
    $('.Branch-desc-item').slideDown(2000,'linear');
    $('#branch-plus').hide();
    $('#branch-minus').show();
});
$('#branch-minus').click(function(){
    $('.Branch-desc-item').slideUp(2000,'linear');
    $('#branch-plus').show();
    $('#branch-minus').hide();
});
});
 
 
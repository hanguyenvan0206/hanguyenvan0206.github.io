
// Load data newservice
let dataListService = {
	newservice: ['newservice-page-1','newservice-page-2','newservice-page-3'],
	mostservice: ['mostservice-page-1','mostservice-page-2','mostservice-page-3'],
};
let commonservice = ['commonservice'];
let jsonListName = ['newservice','mostservice'];
let loadJson = function(y) {
	 $.ajax({
                dataType: 'json',
                url: `data/service/${y}.json`})
	 		.done(function(response){
	 			 $(`.new-service-container .row`).html('');
	 			  for (let i=0; i < response.service.length; i++) {
	 			  	$(`.new-service-container .row`).append(`
	 			  			<div class="col-12 col-sm-6 col-md-4">
							      <div class="newService-title">
							            <h5>Gói vay</h5>
							            <h4>${response.service[i].name}</h4>
							      </div>
										<div class="overlay">
										<img src="img/${response.service[i].img}.jpg">
										</div>
										<div class="money-time">
											<div class="newService-content-desc">
												<table>
													<tr>
													    <th>Số tiền</th>
													    <td>${response.service[i].borrow}</td> 
													</tr>
													<tr>
													    <th>Thời gian</th>
													    <td>${response.service[i].time} ngày</td> 
													</tr>
												</table>
											</div>
										</div>
								</div>
	 			  			`);}
	 			$(`.most-service-container .row`).html('');
	 			  for (let i=0; i < response.service.length; i++) {
	 			  	$(`.most-service-container .row`).append(`
	 			  			<div class="col-12 col-sm-6 col-md-4">
							      <div class="newService-title">
							            <h5>Gói vay</h5>
							            <h4>${response.service[i].name}</h4>
							      </div>
										<div class="overlay">
										<img src="img/${response.service[i].img}.jpg">
										</div>
										<div class="money-time">
											<div class="newService-content-desc">
												<table>
													<tr>
													    <th>Số tiền</th>
													    <td>${response.service[i].borrow}</td> 
													</tr>
													<tr>
													    <th>Thời gian</th>
													    <td>${response.service[i].time} ngày</td> 
													</tr>
												</table>
											</div>
										</div>
								</div>
	 			  			`);}			
	 					});
	 				}
let loadJson1 = function(n) {
	 $.ajax({
                dataType: 'json',
                url: `data/service/${n}.json`})
	 		.done(function(response){
	 			 $(`.purpose1 .row`).html('');
	 			  for (let i=0; i < response.consumer.length; i++) {
	 			  	$(`.purpose1 .row`).append(`
	 			  			<div class="col-12 col-sm-6 col-md-4">
							      <div class="newService-title">
							            <h5>Gói vay</h5>
							            <h4>${response.consumer[i].name}</h4>
							      </div>
										<div class="overlay">
										<img src="img/${response.consumer[i].img}.jpg">
										</div>
										<div class="money-time">
											<div class="newService-content-desc">
												<table>
													<tr>
													    <th>Số tiền</th>
													    <td>${response.consumer[i].borrow}</td> 
													</tr>
													<tr>
													    <th>Thời gian</th>
													    <td>${response.consumer[i].time} ngày</td> 
													</tr>
												</table>
											</div>
										</div>
								</div>
	 			  			`);}
	 			$(`.purpose2 .row`).html('');
	 			  for (let i=0; i < response.business.length; i++) {
	 			  	$(`.purpose2 .row`).append(`
	 			  			<div class="col-12 col-sm-6 col-md-4">
							      <div class="newService-title">
							            <h5>Gói vay</h5>
							            <h4>${response.business[i].name}</h4>
							      </div>
										<div class="overlay">
										<img src="img/${response.business[i].img}.jpg">
										</div>
										<div class="money-time">
											<div class="newService-content-desc">
												<table>
													<tr>
													    <th>Số tiền</th>
													    <td>${response.business[i].borrow}</td> 
													</tr>
													<tr>
													    <th>Thời gian</th>
													    <td>${response.business[i].time} ngày</td> 
													</tr>
												</table>
											</div>
										</div>
								</div>
	 			  			`);}
	 			$(`.purpose3 .row`).html('');
	 			  for (let i=0; i < response.payment.length; i++) {
	 			  	$(`.purpose3 .row`).append(`
	 			  			<div class="col-12 col-sm-6 col-md-4">
							      <div class="newService-title">
							            <h5>Gói vay</h5>
							            <h4>${response.payment[i].name}</h4>
							      </div>
										<div class="overlay">
										<img src="img/${response.payment[i].img}.jpg">
										</div>
										<div class="money-time">
											<div class="newService-content-desc">
												<table>
													<tr>
													    <th>Số tiền</th>
													    <td>${response.payment[i].borrow}</td> 
													</tr>
													<tr>
													    <th>Thời gian</th>
													    <td>${response.payment[i].time} ngày</td> 
													</tr>
												</table>
											</div>
										</div>
								</div>
	 			  			`);}					
	 					});
	 				}
$('.service-togg').eq(0).addClass('active');
$('.number').eq(0).addClass('active');
$('.number1').eq(0).addClass('active');
loadJson(dataListService.newservice[0]);
$('.most-service-decs').css('display','none');
$('.common-service-decs').css('display','none');
$('.new-service-decs').css('display','block');

for(let i=0; i<$('.service-togg').length; i++){
	let x = $('.service-togg').eq(i);
	x.click(function(){
		$(this).parent('.service-menu-container').children('.service-togg').removeClass('active');
		$(this).addClass('active');
		$('.number').parent('.pagination').children('.number').removeClass('active');
		$('.number').eq(0).addClass('active');
		$('.number1').parent('.pagination').children('.number1').removeClass('active');
		$('.number1').eq(0).addClass('active');
	})
	}
$(document).ready(function(){
$('.service-togg1').click(function(){
	$('.service-togg').eq(1).parent('.service-menu-container').children('.service-togg').removeClass('active');
	$('.service-togg').eq(1).addClass('active');
	$('.number').parent('.pagination').children('.number').removeClass('active');
	$('.number').eq(0).addClass('active');
	$('.number1').parent('.pagination').children('.number1').removeClass('active');
	$('.number1').eq(0).addClass('active');
})	
})

$('.service-togg').eq(0).click(function(){
	loadJson(dataListService[jsonListName[0]][0]);
})
$('.service-togg').eq(1).click(function(){
	loadJson(dataListService[jsonListName[1]][0]);
})
	$('.service-togg').eq(2).click(function(){
		loadJson1(commonservice[0]);
	})
$('.service-togg').eq(0).click(function(){
	$('.most-service-decs').css('display','none');
	$('.common-service-decs').css('display','none');
	$('.new-service-decs').css('display','block');
})
$('.service-togg').eq(1).click(function(){
	$('.new-service-decs').css('display','none');
	$('.common-service-decs').css('display','none');
	$('.most-service-decs').css('display','block');
})
$('.service-togg').eq(2).click(function(){
	$('.new-service-decs').css('display','none');
	$('.most-service-decs').css('display','none');
	$('.common-service-decs').css('display','block');
})	
for(let k=0; k<$('.number').length; k++){
let h = $('.number').eq(k);
h.click(function(){
			$(this).parent('.pagination').children('.number').removeClass('active');
			$(this).addClass('active');
	})
};
for(let k=0; k<$('.number1').length; k++){
let h = $('.number1').eq(k);
h.click(function(){
			$(this).parent('.pagination').children('.number1').removeClass('active');
			$(this).addClass('active');
	})
};

for(let j=0; j<$('.number').length; j++){
	$('.number').eq(j).click(function(){
				loadJson(dataListService.newservice[j]);
			})
		};
for(let j=0; j<$('.number1').length; j++){
	$('.number1').eq(j).click(function(){
				loadJson(dataListService.mostservice[j]);
			})
		};
// Change HTML menu
if($(window).width()>767){
	$('.service-menu1').html('Gói vay mới');
	$('.service-menu2').html('Gói vay tiêu biểu');
	$('.service-menu3').html('Gói vay Thông dụng');
}else{
	$('.service-menu1').html('Mới');
	$('.service-menu2').html('Tiêu biểu');
	$('.service-menu3').html('Thông dụng');
}
//When window resize
$(window).resize(function(){
	if($(window).width()>767){
	$('.service-menu1').html('Gói vay mới');
	$('.service-menu2').html('Gói vay tiêu biểu');
	$('.service-menu3').html('Gói vay Thông dụng');
}else{
	$('.service-menu1').html('Mới');
	$('.service-menu2').html('Tiêu biểu');
	$('.service-menu3').html('Thông dụng');
}
})
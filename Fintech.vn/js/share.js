
// Load data newservice
let dataListnew = {
	news: ['new-page-1','new-page-2','new-page-3'],
	hots: ['hot-page-1','hot-page-2','hot-page-3'],
};
let jsonListName = ['news','hots'];
let loadJson2 = function(x) {
	 $.ajax({
                dataType: 'json',
                url: `data/share/${x}.json`})
	 		.done(function(response){
	 			 $(`.news-title1 .row`).html('');
	 			  for (let i=0; i < response.new.length; i++) {
	 			  	$(`.news-title1 .row`).append(`
	 			  							<div class="col-12 col-sm-12 col-md-6">
								            	<div class="news-img">
								            		<img src="img/${response.new[i].img}.jpg">
								            	</div>
								            	<div class="date-public">
								            		<p>${response.new[i].time}</p>
								            	</div>
								            	<div class="new-title">
								            		<a href="#">${response.new[i].name}</a>
								            	</div>
								            </div>
	 			  						`);}	
	 								});
	 							};
let loadJson3 = function(z) {
	 $.ajax({
                dataType: 'json',
                url: `data/share/${z}.json`})
	 		.done(function(response){
						 			 $(`.news-title2 .row`).html('');
						 			  for (let i=0; i < response.hot.length; i++) {
						 			  	$(`.news-title2 .row`).append(`
	 			  							<div class="col-12 col-sm-12 col-md-6">
								            	<div class="news-img">
								            		<img src="img/${response.hot[i].img}.jpg">
								            	</div>
								            	<div class="date-public">
								            		<p>${response.hot[i].time}</p>
								            	</div>
								            	<div class="new-title">
								            		<a href="#">${response.hot[i].name}</a>
								            	</div>
								            </div>
	 			  						`);}					
	 								});
	 							}
$('.number2').eq(0).addClass('active');
$('.number3').eq(0).addClass('active');
loadJson2(dataListnew.news[0]);
loadJson3(dataListnew.hots[0]);
	
for(let k=0; k<$('.number').length; k++){
let h = $('.number').eq(k);
h.click(function(){
			$(this).parent('.pagination').children('.number').removeClass('active');
			$(this).addClass('active');
	})
};

for(let m=0; m<$('.number2').length; m++){
	$('.number2').eq(m).click(function(){
				loadJson2(dataListnew.news[m]);
				loadJson3(dataListnew.hots[0]);
			})
		};
for(let j=0; j<$('.number3').length; j++){
	$('.number3').eq(j).click(function(){
				loadJson3(dataListnew.hots[j]);
			})
		};
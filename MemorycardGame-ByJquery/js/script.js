let imgreset = ["card0", "card1", "card2", "card3", "card4","card5", "card6", "card7", "card8", "card9","card0", "card1"];
let img = ["card0", "card1", "card2", "card3", "card4","card5", "card6", "card7", "card8", "card9","card0", "card1"];
let current = null;
let i, j, temporycard, remainingtime, runtime;
let score = 0;
img = img.concat(img);
$(".wrap").hide();
const x = 60, y = 60,z = 120;
$("#dialoglose").hide();
$("#dialogwin").hide();
// hàm tráo bài
let shuffle = function(array){

	for(i=0; i<array.length;i++){
		j = Math.floor(Math.random()*(array.length-i-1)+1)
		temporycard = array[i];
		array[i] = array[j];
		array[j] = temporycard
	}
	return array;
};
// hàm thêm bài vào html
	let addcard = function(){
	img = shuffle(img);
	let html = '';
	for(i=0;i<img.length;i++){
		html += '<div class="card" id = "' + img[i] +'" onclick = "flip(this)">'+
					'<div class="front"><img src="img/backside.jpg"></div>'+
					'<div class="back"><img src="img/'+img[i] + '.jpg"></div>'+
				'</div>'
	};
	$(".grid").html(html);
};
// hàm tính thời gian
let timerun = function(){
		runtime = setInterval(function(){
		remainingtime--;
		console.log(remainingtime);
		if(remainingtime == 10){
			document.getElementById('10s').play();
		};
		if(remainingtime == 5){
			document.getElementById('5s').play();
		};
		if(remainingtime == 0){
			clearInterval(runtime);
			$("#dialoglose").show();
			$(".wrap").hide();
			document.getElementById('lose').play();
		}
	},1000)
};
// hàm lật bài và so sánh
let flip = function(card){
	$(card).toggleClass("flipped");
	if(!current|current==null){
		current = $(card);
		$(card).css('pointer-events', 'none');
	} else {
		current.css('pointer-events', 'auto');
		$(".card").css('pointer-events', 'none');
		if(current.attr("id") != $(card).attr("id")){
			document.getElementById('incorrect').play();
			setTimeout(function(){
				current.toggleClass("flipped");
				$(card).toggleClass("flipped");
				current=null;
				$(".card").css('pointer-events', 'auto');
			},1000)
			} else{
				document.getElementById('correct').play();
				setTimeout(function(){
				current.css("opacity","0");
				$(card).css("opacity","0");
				current=null;
				$(".card").css('pointer-events', 'auto');
			},500);
				score++;
				if(score == (img.length/2)){
					$("#dialogwin").show();
					$(".wrap").hide();
					clearInterval(runtime);
					document.getElementById('win').play();
				}
				}
				}
				};
// hàm time bar
let progressbars = function(){
			let id = setInterval(frame, remainingtime*10);
			let elem = $("#myBar");   
  			let width = 0;
		function frame() {
			if (width >= 100) {
      		clearInterval(id);
    		}else{
     			 width++; 
     			 elem.css('width',width + '%'); 
    		}
    		};
}
// Chọn các lever
	$('#Hard').click(function(){
		$(document).ready(function(){
		addcard();
		});
		remainingtime = x;
		document.getElementById('normal').play();
		$(".wrap").show();
		$("#dialog").hide();
		$("#game").hide();
		progressbars();
		timerun();
	});
	$('#Normal').click(function(){
		img = img.slice(0,8);
		img = img.concat(img);
		$(document).ready(function(){
		addcard();
		});
		remainingtime = y;
		document.getElementById('normal').play();
		$(".wrap").show();
		$("#dialog").hide();
		$("#game").hide();
		progressbars();
		timerun();
	});
	$('#Easy').click(function(){
		img = img.slice(0,8);
		img = img.concat(img);
		$(document).ready(function(){
	addcard();
		});
		remainingtime = z;
		document.getElementById('normal').play();
		$(".wrap").show();
		$("#dialog").hide();
		$("#game").hide();
		progressbars();
		timerun();
	});
// Reset Play lại
	$("#playback1").click(function(){
		$("#dialogwin").hide();
		$("#game").show();
		$("#dialog").show();
		img = imgreset;
		img = img.concat(img);
		score=0;
		current=null;
		$(".grid").html(' ');
		$(document).ready(function(){
		addcard();
	});
	});

	$("#playback2").click(function(){
		$("#dialoglose").hide();
		$("#game").show();
		$("#dialog").show();
		img = imgreset;
		img = img.concat(img);
		score=0;
		current=null;
		$(".grid").html(' ');
		$(document).ready(function(){
		addcard();
	});
	});
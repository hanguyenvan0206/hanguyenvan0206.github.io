
if($(window).width()>767){
	$('.togg').closest('.container').children('.content').css('display','block');
	}else{$('.togg').closest('.container').children('.content').css('display','none');}

for(let i = 0; i< $('.togg').length; i++){
	let x = $('.togg').eq(i);
	if(x.closest('.container').children('.content').css('display') == 'none'){
		x.children('.fa-plus-circle').css('display', 'block');
		x.children('.fa-minus-circle').css('display', 'none');
	}else{
		x.children('.fa-plus-circle').css('display', 'none');
		x.children('.fa-minus-circle').css('display', 'block');
	}
}
$('.togg').click(function(){
	$(this).closest('.container').children('.content').slideToggle(600,'swing');
	$(this).children('.fa-plus-circle').toggle(300);
	$(this).children('.fa-minus-circle').toggle(300);});
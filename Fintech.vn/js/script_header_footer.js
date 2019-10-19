//---- Navbar---//
let navbar = `<div class="navbar1">
					<div class="navbar-1">
						<div class="navbar-brand">
							<div class="logo-slogan">
								<a href="#">FinTech.<span>vn</span></a>
								<p> Chia sẻ giá trị cuộc sống</p>
							</div>
							<div class="regitered">
								<div class="btn-group">
								  <div  class="btn btn-secondary dropdown-toggle greeting" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    
								  </div >
								  <div class="dropdown-menu dropdown-menu-right">
								    <button class="dropdown-item register-infor" type="button">Thông tin đăng ký</button>
								   <button class="dropdown-item loan-infor" type="button">Lịch sử tín dụng</button>
								    <button class="dropdown-item secure-account" type="button">Bảo mật tài khoản</button>
								    <button class="dropdown-item logout" id = "logout" type="button">Đăng xuất</button>
								  </div>
								</div>
							</div>
							<div class="login-register">
								<button type="button" class = "loginBtn" data-toggle="modal" data-target="#login-Modal">Đăng nhập</button>
								<button class = "registerBtn"><a href="register.html">Đăng ký</a></button>
							</div>
						</div>
						<div class="nav_desc">
							<nav class="navbar navbar-expand-md navbar-light">
								  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								    <span class="navbar-toggler-icon"></span>
								  </button>
								  <div class="collapse navbar-collapse" id="navbarSupportedContent">
								    <ul class="navbar-nav mr-auto">
								   	 <li class="nav-item active">
								        <a class="nav-link" href="index.html">Trang chủ<span class="sr-only">(current)</span></a>
								      </li>
								      <li class="nav-item active">
								        <a class="nav-link" href="about.html">Giới Thiệu <span class="sr-only">(current)</span></a>
								      </li>
								      <li class="nav-item dropdown">
								         <div class="nav-link dropdown-toggle navbarDropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								         <a>Thủ tục</a>
								        </div>
								        <div class="dropdown-menu" id= "dropdown-menu0" aria-labelledby="navbarDropdown">
								          <a class="dropdown-item" href="borrow.html">Thủ Tục Vay Vốn</a>
								          <a class="dropdown-item" href="payment.html">Hướng dẫn thanh toán</a>
								          <a class="dropdown-item" href="question.html">Câu hỏi thường gặp</a>
								        </div>
								      </li>
								      <li class="nav-item dropdown">
								        <div class="nav-link dropdown-toggle navbarDropdown" href="service.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								         <a> Dịch vụ</a>
								        </div>
								        <div class="dropdown-menu"  id= "dropdown-menu0" aria-labelledby="navbarDropdown">
								          <a class="dropdown-item" href="service.html">Gói vay mới</a>
								          <a class="dropdown-item service-togg1" href="service-1.html">Gói vay tiêu biểu</a>
								          <a class="dropdown-item service-togg1" href="service-2.html">Gói thông dụng</a>
								      	</div>
								     
								      </li>
								      <li class="nav-item active">
								        <a class="nav-link" href="share.html">Chia sẻ</a>
								      </li>
								      <li class="nav-item active">
								        <a class="nav-link" href="recruiter.html">Tuyển dụng</a>
								      </li>
								       <li class="nav-item active">
								        <a class="nav-link" href="branch.html">Mạng lưới</a>
								      </li>
								    </ul>
								    <div class="search-field">
								    <form class="form-inline my-2 my-lg-0 navbar1-search">
									      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
									      <i class="fas fa-search"></i>
								    </form>
								    <div class="navbar1-search-button"><i class="far fa-caret-square-left"></i></div>
								    </div>
								  </div>
							</nav>
						</div>
					</div>
				</div>
				<div class="navbar2">
					<div class="navbar-2">
								<div class="regitered">
									<div class="btn-group">
									  <div  class="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									    <i class="fas fa-sign-in-alt"></i>
									  </div >
									  <div class="dropdown-menu dropdown-menu-right">
									  	<div class="dropdown-item greeting"></div>
									    <button class="dropdown-item register-infor" type="button">Thông tin đăng ký</button>
									    <button class="dropdown-item loan-infor" type="button">Lịch sử tín dụng</button>
									    <button class="dropdown-item secure-account" type="button">Bảo mật tài khoản</button>
									    <button class="dropdown-item logout" id = "logout" type="button">Đăng xuất</button>
									  </div>
									</div>
								</div>
								<div class="login-register">
								<div class="btn-group">
									  <button type="button" class="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									    <i class="fas fa-sign-in-alt"></i>
									  </button>
									  <div class="dropdown-menu dropdown-menu-right">
									  	<div class="login-register-btn">
										    <button class="dropdown-item1" type="button" class = "loginBtn" data-toggle="modal" data-target="#login-Modal">Đăng nhập</button>
										    <button class="dropdown-item2 registerBtn" type="button"><a href="register.html">Đăng ký</a></button>
									    </div>
										<div class="search-field-2">
									    <form class="form-inline my-2 my-lg-0 navbar2-search">
										      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
										      <i class="fas fa-search"></i>
									    </form>
									    </div>
									  </div>
									</div>
								</div>
							<div class="nav_desc">
								<nav class="navbar navbar-expand-md navbar-light">
									<a class="navbar-brand" href="index.html">FinTech.<span>vn</span></a>
									  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									    <span class="navbar-toggler-icon"></span>
									  </button>
									  <div class="collapse navbar-collapse" id="navbarSupportedContent">
									    <ul class="navbar-nav mr-auto">
									      <li class="nav-item active">
									        <a class="nav-link" href="index.html">Trang chủ<span class="sr-only">(current)</span></a>
									      </li>
									      <li class="nav-item active">
									        <a class="nav-link" href="about.html">Giới Thiệu <span class="sr-only">(current)</span></a>
									      </li>
									      <li class="nav-item dropdown">
									         <div class="nav-link dropdown-toggle navbarDropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									         <a>Thủ tục</a>
									        </div>
									        <div class="dropdown-menu" id= "dropdown-menu0" aria-labelledby="navbarDropdown">
									          <a class="dropdown-item" href="borrow.html">Thủ Tục Vay Vốn</a>
									          <a class="dropdown-item" href="payment.html">Hướng dẫn thanh toán</a>
									          <a class="dropdown-item" href="question.html">Câu hỏi thường gặp</a>
									        </div>
									      </li>
									      <li class="nav-item dropdown">
									        <div class="nav-link dropdown-toggle navbarDropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									          <a>Dịch vụ</a>
									        </div>
									        <div class="dropdown-menu"  id= "dropdown-menu0" aria-labelledby="navbarDropdown">
									          <a class="dropdown-item service-togg0" href="service.html">Gói vay mới</a>
									          <a class="dropdown-item service-togg1" href="service-1.html">Gói vay tiêu biểu</a>
									          <a class="dropdown-item service-togg1" href="service-2.html">Gói thông dụng</a>
									      	</div>
									      </li>
									      <li class="nav-item active">
									        <a class="nav-link" href="share.html">Chia sẻ</a>
									      </li>
									      <li class="nav-item active">
									        <a class="nav-link" href="recruiter.html">Tuyển dụng</a>
									      </li>
									       <li class="nav-item active">
									        <a class="nav-link" href="branch.html">Mạng lưới</a>
									      </li>
									    </ul>
									  </div>
								</nav>
							</div>
						</div>
				</div>`;
let topborrowBtn = `<div class="totopBtn"><i class="fas fa-arrow-circle-up"></i></div>
					<div class="borrowBtn">
						<div class="borrowBtn-circle1">
							<div class="borrowBtn-circle2">
								<div class="borrowBtn-circle3">
								<a href="question.html">Cách nhận vay tiền</a>
								</div>
							</div>
						</div>
					</div>
					<div class="toast alertAdvertise" data-autohide="false">	
					</div>`
let loginModal = `<div class="modal fade" id="login-Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h4 class="modal-title" id="exampleModalLabel">Đăng nhập tài khoản cá nhân</h4>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        <form action ="index.html" id = "login-form">
						  <div class="form-group1">
						    <label for="exampleInputEmail1">Số điện thoại/Email</label>
						    <input type="email" class="form-control Emailphone" id="email"  name = "email" aria-describedby="emailHelp" placeholder="Số điện thoại/Email đăng ký" required = "required">
						  </div>
						  <div class="form-group2">
						    <label for="exampleInputPassword1">Mật Khẩu</label>
						    <input type="password" class="form-control loginpass" id="password" name = "password" placeholder="**********" required = "required">
						  </div>
						  <div class="form-group3">
						    <label for="verify">Nhập các ký tự xác minh bên dưới</label>
						    <div class="verify">
							    <div class="verify-key">gdrea</div>
							    <input type="text" class=" key-input form-control verify-key-confirm" required = "required"></input>
						    </div>
						    <p class="check-verify">Nhập sai mã xác minh</p>
						  </div>
						  <div class="form-group form-check">
						    <input type="checkbox" class="form-check-input" id="remember" name = "remember">
						    <label class="form-check-label" for="exampleCheck1">Ghi nhớ thông tin</label>
						  </div>
						  <button type="submit" class="login-Confirm"><a>Đăng nhập</a></button>
						  <div class="forget-pass"><a href="#">Quên mật khẩu?</a></div>
						</form>
				      </div>
				    </div>
				  </div>
				</div>`
let footer = `<footer data-300-center-top="transform: scale(0.8); opacity: 0" data-300-center-center="transform: scale(1); opacity: 1">
		        <div class="footer-container">
		        	<div class="row">
		        		<div class="col-12 col-sm-12 col-md-4 row1">
		        			<div class="footer-logo">
		        				<a>FinTech.<span>vn</span></a>
								<p> Chia sẻ giá trị cuộc sống</p>
		        			</div>
		        		</div>
		        		<div class="col-12 col-sm-12 col-md-4 row2">
							<div class="footer-address">
								<div class="footer-address-title">
								<h3>Liên hệ</h3>
								</div>
								<div class="address-item-container">
									<div class="footer-address-item">
									<h4><i class="fas fa-phone-alt"></i> 19008198 </h4>
									<h4><i class="fas fa-envelope"></i> Fintech@vn.com.vn</h4>
									<h4><i class="fas fa-map-marker-alt"></i> 100, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội</h4>
									</div>
								</div>	
							</div>
		        		</div>
		        		<div class="col-12 col-sm-12 col-md-4 row3">
		        			<div class="footer-link">
		        				<div class="footer-link-title">
		        				<h3>Kết Nối</h3>
								</div>
								<div class="footer-link-item">
		        				<a href="#/"><i class="fab fa-facebook-f"></i></a>
		        				<a href="#/"><i class="fab fa-instagram"></i></a>
		        				<a href="#/"><i class="fab fa-twitter"></i></a>
		        				<a href="#/"><i class="fab fa-youtube"></i></a>
		        				</div>
		        			</div>	
		        		</div>	
		        	</div>
		        	<div class="design-copyright">
		        		<p>Designed & Developed by <a>Ha<span>nguyen</span></a></p>
		       		</div>  	
		        </div>
		    </footer>`
$('navbar').html(navbar);
$('.top-borrowBtn').html(topborrowBtn);
$('#myModal').html(loginModal);
$('footer').html(footer);
//****Off dropdown and change navbar-toggler***//
$(document).ready(function(){
	if($(window).width()>767){
		$('.navbarDropdown').removeClass('dropdown-toggle').removeAttr('data-toggle');
		$('#navbarDropdown1').removeClass('dropdown-toggle');
	}else{
		$('.navbarDropdown').addClass('dropdown-toggle').attr({'data-toggle':'dropdown'});
		$('#navbarDropdown1').addClass('dropdown-toggle');
	}
	$(window).resize(function(){ //When window resize
		if($(window).width()>767){
		$('.navbarDropdown').removeClass('dropdown-toggle').removeAttr('data-toggle');
		$('#navbarDropdown1').removeClass('dropdown-toggle');
	}else{
		$('.navbarDropdown').addClass('dropdown-toggle').attr({'data-toggle':'dropdown'});
		$('#navbarDropdown1').addClass('dropdown-toggle');
	}
	})
})
//On/Off navbar1-search-button//
$(document).ready(function(){
	if($(window).width()>767 && $(window).width()<1280){
		$('.navbar1-search-button').css('display','block');
		$('.navbar1-search').css('display','none');
	}else{
		$('.navbar1-search-button').css('display','none');
		$('.navbar1-search').css('display','flex');
	}
	//navbar1-search-button function
	$('.navbar1-search-button').click(function(){
		$('.navbar1-search').toggle();
		
	})

})
//When window resize
	$(window).resize(function(){
		if($(window).width()>767 && $(window).width()<1280){
		$('.navbar1-search-button').css('display','block');
		$('.navbar1-search').css('display','none');
	}else{
		$('.navbar1-search-button').css('display','none');
		$('.navbar1-search').css('display','flex');
	}

	});
//Set-up navbar 1 & navbar2//
	if($(window).width()>767){
		$('.navbar1').css('display', 'block');
		$('.navbar2').css('display', 'none');
		//When window scroll
		$(window).scroll(function(){
			let navbar1height = $('.navbar1').height()+100;
			if($(window).scrollTop()>=navbar1height){
				$('.navbar2').css({'display': 'block', '-webkit-animation':'moveFromTop 800ms ease', '-moz-animation':'moveFromTop 800ms ease', '-ms-animation':'moveFromTop 800ms ease'});
			}else{
				$('.navbar1').css('display', 'block');
				$('.navbar2').css('display', 'none');
			}

		});
		}else{
		$('.navbar1').css('display', 'none');
		$('.navbar2').css('display', 'block');
		};
//When window resize
	$(window).resize(function(){
		if($(window).width()>767){
		$('.navbar1').css('display', 'block');
		$('.navbar2').css('display', 'none');
		//When window scroll
		$(window).scroll(function(){
			let navbar1height = $('.navbar1').height()+100;
			if($(window).scrollTop()>=navbar1height){
				$('.navbar2').css({'display': 'block', '-webkit-animation':'moveFromTop 800ms ease', '-moz-animation':'moveFromTop 800ms ease', '-ms-animation':'moveFromTop 800ms ease'});
			}else{
				$('.navbar1').css('display', 'block');
				$('.navbar2').css('display', 'none');
			}

		});
		}else{
		$('.navbar1').css('display', 'none');
		$('.navbar2').css('display', 'block');
		};
	});
//**totopBtn**//
$(document).ready(function(){
	$('.totopBtn').hide();
	//When window scroll
	$(window).scroll(function(){
		if($(window).scrollTop()>=500){
			$('.totopBtn').fadeIn(300);
		}else{$('.totopBtn').fadeOut(300);}
	});
	//click back to top
	$('.totopBtn').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 1000);
	})

});
//**borrowBtn**//
$(document).ready(function(){
	$('.borrowBtn').hide();
	//only show on min-width 768 px
	if($(window).width()>767){
	$('.borrowBtn').show();
		//When window scroll
		$(window).scroll(function(){
			if($(window).scrollTop()>=500){
			 $('.borrowBtn').fadeIn();
			}else{$('.borrowBtn').fadeOut();}
		});
	}else{$('.borrowBtn').hide();};
	//When window resize
	$(window).resize(function(){
		if($(window).width()>767){
		$('.borrowBtn').show();
		//When window scroll
		$(window).scroll(function(){
			if($(window).scrollTop()>=500){
			 $('.borrowBtn').fadeIn();
			}else{$('.borrowBtn').fadeOut();}
		});
		}else{$('.borrowBtn').hide();};
	});
	//borrowBtn-effect
	setInterval(function(){
		$('.borrowBtn-circle3').animate({backgroundColor: "#40B04C"}, 1000,'swing');
		$('.borrowBtn-circle3>a').animate({fontSize: "1.4rem"}, 2000,'swing');
		$('.borrowBtn-circle3>a').animate({fontSize: "1.3rem"}, 2000,'swing');
		$('.borrowBtn-circle2').animate({borderWidth: "1.5px"}, 1000,'swing');
		$('.borrowBtn-circle2').animate({borderWidth: "0px"}, 3000,'swing');
		$('.borrowBtn-circle1').animate({borderWidth: "1.5px"}, 2000,'swing');
		$('.borrowBtn-circle1').animate({borderWidth: "0px"}, 2000,'swing');
		$('.borrowBtn').animate({borderWidth: "1.5px"}, 2000,'swing');
		$('.borrowBtn').animate({borderWidth: "0px"}, 2000,'swing');
	},3000);
})
//alertAdvertise//
setInterval(function(){
	$('.alertAdvertise').fadeOut(300).delay(6000).fadeIn(400, function(){
		 // load dữ liệu từ JSON
		 let dataListCustomer = ['customer-1','customer-2'];
		 let loadJson = function(x) {
            $.ajax({
                dataType: 'json',
                url: `data/${x}.json`})
            	.done(function(response) {
            		 $('.alertAdvertise').html('');
            		  for (let i=0; i < response.customer.length; i++) {
	            		  $('.alertAdvertise').append(
	            		  	`<div class="toast-header">
							    <small class="text-muted">${response.customer[i].time} phút trước</small>
							    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
							 </div>
							 <div class="toast-body">
							  	<h4>${response.customer[i].name}, ${response.customer[i].age}, ${response.customer[i].job}</h4>
							    <p>Nhận khoản vay ${response.customer[i].borrow}</p>
							 </div>`
	            		  	);}
            	})
            	//.fail(function() {
                    //alert('lỗi load dữ liệu');
               // });
        };
        loadJson(dataListCustomer[0]);
	}).delay(6000);
},8000);
$(document).ready(function(){
	$('.alertAdvertise').toast('hide');
	//only show on min-width 768 px
 if($(window).width()>767){ 
 	$('.alertAdvertise').toast('show');}
 	else{$('.alertAdvertise').toast('hide');}
});
//**LoginModal**//
let listKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", 1, 2, 3, 4, 5, 6, 7 , 8 , 9];
//shuffle listKey
let i, j, temporykey;
let shuffle = function(array){

	for(i=0; i<array.length;i++){
		j = Math.floor(Math.random()*(array.length-i-1)+1)
		temporykey = array[i];
		array[i] = array[j];
		array[j] = temporykey;
	}
	return array;
};
// Login click
$('.loginBtn').click(function(){
	$('.check-verify').css('display','none');
	listKey = shuffle(listKey);
	let x = Math.floor(Math.random() * listKey.length); // result random number from 0 to array.length-1
	$('.verify-key').html(`${listKey[x]}${listKey[0]}${listKey[5]}${listKey[9]}${listKey[3]}`);
	//compare verify-key and data-input
})
//
$('.register-infor').click(function(){
	window.location.assign("register-4.html")
})
$('.secure-account').click(function(){
	window.location.assign("register-4.html")
})
$('.loan-infor').click(function(){
	window.location.assign("register-4.html")
})







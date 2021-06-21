/* start menu */
// when click on menu-icon show menu
let menu = document.querySelector('.menu-icon');
menu.addEventListener('click',function(){
    document.querySelector('.sidenav').style.width = "15%";
});
// when click on closebtn remove menu
let closebtn = document.querySelector('.sidenav .closebtn');
closebtn.addEventListener('click',function(){
    document.querySelector('.sidenav').style.width = "0";
});
/* end menu*/ 

/* start our-work */
// when click on show more show more images and when click on show less hide images
let showBtn = document.querySelector('#show');
let lessBtn = document.querySelector('#less');
let showImages = document.querySelectorAll('.our-work .work .work-images .show');

showBtn.addEventListener('click',function(){
    for(let i=0; i<showImages.length; i++){
        showImages[i].style.display = "block";
        showBtn.style.cssText = "display:none;";
        lessBtn.style.cssText = "display:block; margin:0 auto;";
        if(showImages[i].style.display = "block"){
            lessBtn.addEventListener('click',function(){
                showImages[i].style.display = "none";
                showBtn.style.cssText = "display:block; margin:0 auto;";
                lessBtn.style.cssText = "display:none;";
            });
        }
    }
});
/* end our-work */

//scroll-top
let bodyScroll = document.querySelector('html,body');
let iconScroll = document.querySelector('.scroll-top .icon');
window.addEventListener('scroll', function(){
    if(bodyScroll.scrollTop >=180){
        // console.log('test');
        iconScroll.style.display = 'block';
    }else{
        // console.log('test1');
        iconScroll.style.display = 'none';
    }
});

 //dynamic box padding 
let menuBar = document.querySelector('.sidenav');
let content = document.querySelector('.box');

menuBar.addEventListener('click',function(){
    for(let k = 0; k < content.length; k++){
        content[k].style.paddingTop = menuBar.clientHeight + 'px';
    }
});
// ercond menu navbar
let navBar = document.querySelector('nav');
let menuNavBar = document.querySelectorAll('.menuNavBar a');
let menu_icon = document.querySelector('header nav .menu-icon');
let menuBr = document.querySelector('.sidenav');

window.addEventListener('scroll',function(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navBar.classList.add('fixed');
        menu_icon.style.display = 'none';
        menuBr.style.display = 'none';
        for( n = 0 ; n< menuNavBar.length;n++){
            menuNavBar[n].style.opacity = '1';
        }
    }else{
        navBar.classList.remove('fixed');
        menu_icon.style.display = 'block';
        menuBr.style.display = 'block';
        for( n = 0 ; n< menuNavBar.length;n++){
            menuNavBar[n].style.opacity = '0';
        }
    }
});

// validation form
let subject = document.querySelector('.subject');
let email = document.querySelector('.email');
let message = document.querySelector('.message');


subject.addEventListener('blur',function(){
    if(this.value.length < 2 || this.value.length === " "){
        this.classList.add('border', 'border-danger');
        this.classList.remove('border', 'border-success');
        document.querySelector('.user-helper-subject').textContent = 'Please  Insert your Subject' ;
        document.querySelector('.user-helper-subject').classList.add('text-danger');
    }else {
        this.classList.add('border', 'border-success');
        this.classList.remove('border', 'border-danger');
        document.querySelector('.user-helper-subject').textContent = ' ' ;
    }
});

let mailFormait = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener('blur', function(){
    if(this.value.match(mailFormait)){
        this.classList.add('border', 'border-success');
        this.classList.remove('border', 'border-danger');
        document.querySelector('.user-helper-email').textContent = ' ' ;
    }else{
        this.classList.add('border', 'border-danger');
        this.classList.remove('border', 'border-success');
        document.querySelector('.user-helper-email').textContent = 'Please  Insert your email ex: personal-info@example.com' ;
        document.querySelector('.user-helper-email').classList.add('text-danger');
    }
});

let messageFormait = /^\s*$/g ;

message.addEventListener('blur', function(){
    if(this.value.match(messageFormait) || this.value.indexOf('\n') != -1){
        this.classList.add('border', 'border-danger');
        this.classList.remove('border', 'border-success');
        document.querySelector('.user-helper-message').textContent = 'Please Insert your message and dont leave a space betwwen lines' ;
        document.querySelector('.user-helper-message').classList.add('text-danger');
    }else{
        
        this.classList.add('border', 'border-success');
        this.classList.remove('border', 'border-danger');
        document.querySelector('.user-helper-message').textContent = ' ' ;
    }
});





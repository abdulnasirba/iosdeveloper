//Home page typed animation
$(document).ready(function(){

  $('.typed-content').typed({
    strings:["a Researcher^500","a iOS Developer.^500", "Abdul Nasir B A.^1000"],
    typeSpeed: 100,
    loop: true,
    loopCount: 3,
  });
  $('.inner h2').hide();
  $(window).scroll(function(event){
    var y = $(this).scrollTop();
    if (y > 2000){
      $('.inner h2').show(2000);
    }
  });

  var myWorks = [{"img": "assets/img/portfolio/project1.png", "link": "https://itunes.apple.com/in/app/yano/id1362470923?mt=8", "name": "Yano"},
  {"img": "assets/img/portfolio/project2.png", "link": "https://itunes.apple.com/in/app/iptikar-express/id1357965607?mt=8", "name": "Iptikar Express"},
  {"img": "assets/img/portfolio/project3.png", "link": "https://itunes.apple.com/in/app/st-mobile/id1254962696?mt=8", "name": "ST-Mobile"},
  {"img": "assets/img/portfolio/project4.png", "link": "https://itunes.apple.com/in/app/smart-e-asset/id1216073041?mt=8", "name": "Smart e-Asset"},
				 {"img": "assets/img/portfolio/project5.png", "link": "https://itunes.apple.com/in/app/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%84/id1260322809?mt=8", "name": "تطبيق المقال"},
 {"img": "assets/img/portfolio/project6.png", "link": "https://itunes.apple.com/in/app/pay-alaan/id1222547185?mt=8", "name": "Pay Alaan"}];
  populateMyWorks(myWorks);

});

//Populating my recent works
function populateMyWorks(myWorks) {
  for(i=0; i <myWorks.length; i++){
    var object = myWorks[i];
    var row = document.createElement('div');
	  row.className = 'col-md-4 anba329';
      row.innerHTML = '<div class="single_image"><img src="'+object['img']+'" alt=""> <div class="image_overlay"> <a href="'+object['link']+'">View Project</a><h2>'+object['name']+'</h2></div>';
    //document.getElementById('recentWorks').appendChild(row);
      $(row).hide().appendTo('#recentWorks').fadeIn(1000);
  }
}

function loadMoreWorks() {
	var myWorks = [{"img": "assets/img/portfolio/project10.png", "link": "https://itunes.apple.com/ca/app/zho/id961537327?mt=8", "name": "ZHO"},
				   {"img": "assets/img/portfolio/project12.png", "link": "https://itunes.apple.com/in/app/power-fix/id1355484307?mt=8", "name": "Power Fix"},
				   {"img": "assets/img/portfolio/project8.png", "link": "https://itunes.apple.com/in/app/federal-transport-authority-uae/id969171572?mt=8", "name": "FTA UAE"},
				   {"img": "assets/img/portfolio/project9.png", "link": "http://smartv.ae/index.php/visitor-management-system/", "name": "VMS"}, {"img": "assets/img/portfolio/project7.png", "link": "https://www.uasg.ae/", "name": "UASG"},
				   {"img": "assets/img/portfolio/project11.png", "link": "http://www.alaan.co.uk/i_doc_app.html", "name": "iDoc"},
				   {"img": "assets/img/portfolio/project13.png", "link": "http://www.app-store.es/bzycar", "name": "bzycar"},
				   {"img": "assets/img/portfolio/project14.png", "link": "https://www.youtube.com/watch?v=wBhovi_0ZT8", "name": "PromayarnDaily"},
				   {"img": "assets/img/portfolio/project15.png", "link": "https://www.facebook.com/Promayarn-158972500908889/", "name": "Promayarn"},
				   {"img": "assets/img/portfolio/project16.png", "link": "assets/img/portfolio/project16.png", "name": "Promayarn"},
				   {"img": "assets/img/portfolio/project17.png", "link": "http://www.compass-softwares.com/iphone-and-mobile-application-developers-in-thailand", "name": "CRM SALE"},
				   {"img": "assets/img/portfolio/project17a.png", "link": "assets/img/portfolio/project17a.png", "name": "iVerify"}];
  populateMyWorks(myWorks);
  var x = document.getElementById('loadButton')
  x.parentNode.removeChild(x);
}

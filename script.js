const enrol_btn = document.getElementById("submit-btn");
function enroll(){
    alert("We are not started yet!!!!!!!!!!!")
}
function courceDetail(){
    location.href = "./cource_detail.html";
}


var elem = document.createElement("img");
var menuIcon = document.getElementById("menu-icon")
elem.src = "images/icon.png"
elem.setAttribute("alt", "device event handler icon");
elem.setAttribute("id","icon")
elem.className = "icon"
elem.setAttribute("onClick","Navigation_bar()")
menuIcon.appendChild(elem);
function Navigation_bar(){
    var nav_bar=document.getElementById('main-nav')
    if(nav_bar.className=="header-right"){
        nav_bar.className="responsive-nav"
    }else{
        nav_bar.className="header-right"
    }
}



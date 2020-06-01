var trigger = 0;
function gg(){
    var box = document.createElement("div");
    box.setAttribute("id","box1");
    document.body.appendChild(box);
}
function date(){
   
}
function weekday(){
    var sar = 9;
    var jil = new Date().getFullYear();
    var year = [];
    var yeard = document.createElement("div");
    var upd = document.createElement("p");
    var downd = document.createElement("p");
    upd.setAttribute("id","up");
    downd.setAttribute("id","down");
    yeard.setAttribute("id","yeard");
    document.getElementById("box1").appendChild(yeard);
    document.getElementById("yeard").style.textAlign = "center";
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var monthd = document.createElement("div");
    monthd.setAttribute("id","monthd");
    downd.innerHTML = "<";
    upd.innerHTML = ">";
    downd.setAttribute("id","down");
    upd.setAttribute("id","up");
  
    monthd.innerHTML =new Date().getFullYear() +" " + month[sar];
    document.getElementById("box1").appendChild(upd);
    document.getElementById("box1").appendChild(downd);
    document.getElementById("box1").appendChild(monthd);
    document.getElementById("monthd").style.textAlign = "center";

    var week=["Su "," Mo "," Tu "," We "," Th "," Fr "," Sa "];
    for(var i=0;i<7;i++){
    var weeknd = document.createElement("div");
    weeknd.innerHTML = week[i];
    weeknd.setAttribute("id","week"+i);
    weeknd.setAttribute("class","kk");
    document.getElementById("box1").appendChild(weeknd);
    }
    var k;
    for(var i=0 ,k=29; i<42 ; i++,k++){
        if(k==31)
        k=1;
        var date = document.createElement("div");
        date.setAttribute("id","date"+i);
        date.setAttribute("class","kk");
        date.innerHTML = k;
        document.getElementById("box1").appendChild(date);
        }
         document.getElementById("down").onclick = function() {
    // var deleter = document.getElementById("monthd");
    // deleter.parentNode.removeChild(deleter);
    if(sar <= 0){
        sar=12;
        jil--;
        }
        sar--;
    monthd.innerHTML =jil +" " + month[sar];
    for(var i = 0; i < 42; i++) {
        var deleter = document.getElementById("date"+ i);
        deleter.parentNode.removeChild(deleter);
    }
    for(var i=0 ,k=29; i<42 ; i++,k++){
        if(k==31)
        k=1;
        var date = document.createElement("div");
        date.setAttribute("id","date"+i);
        date.setAttribute("class","kk");
        date.innerHTML =k;
        document.getElementById("box1").appendChild(date);
        }     
} 
document.getElementById("up").onclick = function() {
    // var deleter = document.getElementById("monthd");
    // deleter.parentNode.removeChild(deleter);
    sar++;
    if(sar > 11){
    sar=0;
    jil++;
    }
    monthd.innerHTML =jil +" " + month[sar];
    for(var i = 0; i < 42; i++) {
        var deleter = document.getElementById("date"+ i);
        deleter.parentNode.removeChild(deleter);
    } 
}
}
for(var i=0;i<2019;i++){
    
}
window.onload = gg;
document.getElementById("datepicker1").onclick = weekday;
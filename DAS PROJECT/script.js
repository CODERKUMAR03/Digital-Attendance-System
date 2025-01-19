var data = 0;
function psinc(x){
    data = data + 1;
    document.getElementById("counterps").innerHTML = data;
    x.disabled = true;
}
var data2 = 0;
function asinc(y){
    data2 = data2 + 1;
    document.getElementById("counteras").innerHTML = data2;
	y.disabled = true;
}
function logout(){
    lout = confirm("Do you want to Logout");
    if(lout == true){
        window.close();
    }
}
function newtab(){
    window.open('studlogin.html','_blank','100px,100px');
}
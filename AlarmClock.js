
function time(){
    var date= new Date();

var hr = date.getHours();

hr=(hr%12)||12;
var min=date.getMinutes();
var sec= date.getSeconds();
var amorpm = hr >= 12 ?'AM':'PM';

document.getElementById("HR").innerHTML=hr;
document.getElementById("MIN").innerHTML=min;
document.getElementById("SEC").innerHTML=sec;
document.getElementById("AMPM").innerHTML=amorpm;

}

setInterval(()=>{
    time();    
},1000);

$('#MsgAlert').hide()
var wake =$('#select-timewake option:selected').text();
var lunch =$('#select-timelunch option:selected').text();
var nap =$('#select-timenap option:selected').text();
var sleep =$('#select-timesleep option:selected').text();
console.log(wake,lunch,nap,sleep);
var i = document.getElementById('select-timewake').value;
var v =document.getElementById('select-timelunch').value;
var p =document.getElementById('select-timenap').value;
var h=document.getElementById('select-timesleep').value;
var btn  = document.querySelectorAll('button')[0];
$('.animate').toggle();    
btn.addEventListener('click',()=>{
    $('.animate').animate({left: '359px',top:'-147px',
    height: 'toggle',
    width: 'toggle'},1000);
});
btn.addEventListener('click',()=>{
//     $('#MsgAlert').show
    $('#MsgAlert').toggle()
});
function wake(){
    i=(i%12)||12;
     var l = i >= 12 ?'AM':'PM';
     document.querySelector('#all-msg1').innerHTML='Breakfast Time :'+i+l;
   
}
function lunch(){
    v=(v%12)||12;
    var o = v >= 12 ?'AM':'PM';
    document.querySelector('#all-msg2').innerHTML="Lunch Time:"+v+o;
}
function nap(){
    p=(p%12)||12;
    var n = p >= 12 ?'AM':'PM';
    document.querySelector('#all-msg3').innerHTML="Lunch Time:"+p+n;
}
function sleep(){
    k=(k%12)||12;
    var s = k >= 12 ?'AM':'PM';
    document.querySelector('#all-msg4').innerHTML="Lunch Time:"+k+s;
}

function settime(){
    function callit(){
        i=(i%12)||12;
        var l = i >= 12 ?'AM':'PM';
        document.querySelector('#all-msg1').innerHTML='Breakfast Time :'+" "+i+" "+l;
        v=(v%12)||12;
        var o = v >= 12 ?'AM':'PM';
        document.querySelector('#all-msg2').innerHTML="Lunch Time:"+" "+v+" "+o;
        p=(p%12)||12;
        var n = p >= 12 ?'AM':'PM';
        document.querySelector('#all-msg3').innerHTML="Nap Time:"+" "+p+" "+n;
        k=(k%12)||12;
       var s = k >= 12 ?'AM':'PM';
       document.querySelector('#all-msg4').innerHTML="Sleep Time:"+" "+k+" "+s;
      
    }
var i = document.getElementById('select-timewake').value;
var v =document.getElementById('select-timelunch').value;
var p =document.getElementById('select-timenap').value;
var k=document.getElementById('select-timesleep').value;
var hourr= new Date().getHours();
if(i == v == p == k){
    alert('you maybe selected same feild !!')
    alert('PLZzzz select diff. time to all tasks')
}else{ if(i==hourr){
    //  $('#img-container').style.backgroundImage='url("./images/wakeupimg.svg")';
    document.querySelector("#img-container").style.backgroundImage='url("./images/wakeupimg.svg")';
     document.querySelector('#msg-text').innerHTML="Lets Have Some Breakfast";
     document.querySelector('#msg-1').innerHTML="Lets Have Some Breakfast";
     callit();
}else if(v==hourr){
    document.querySelector("#img-container").style.backgroundImage='url("./images/Component 31 – 1 (1).svg")';
    document.querySelector('#msg-text').innerHTML="Lets Have Some Lunch";
    document.querySelector('#msg-1').innerHTML="Lets Have Some Lunch";
    callit();
   }else if(p==hourr){
    document.querySelector("#img-container").style.backgroundImage='url("./images/lunch_image.png")';
     document.querySelector('#msg-text').innerHTML="Lets'Go It's Time For Nap";
     document.querySelector('#msg-1').innerHTML="Lets Have Some Littel Nap";
     callit();
   }else if(k==hourr){
    document.querySelector("#img-container").style.backgroundImage='url("./images/goodnight_image.svg")';
     document.querySelector('#msg-text').innerHTML="ZZzz! It's Time to Go bad!! ";
     document.querySelector('#msg-1').innerHTML="IT's Time To go Bed";
     callit();
   }else{   
        alert("plz select fields");
        window.location.reload();
   }
}
}






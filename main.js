function get_para1(){
var inputs=[];

for(var i=1; i<=6; i++){

inputs.push(document.getElementById("input-"+i).value);
document.getElementById("para-1").innerHTML=inputs.join(" ");
}}

function get_para2(){
    var inputs=[];
    
    for(var i=7; i<=12; i++){
    
    inputs.push(document.getElementById("input-"+i).value);
    document.getElementById("para-2").innerHTML=inputs.join(" ");
    }}
    

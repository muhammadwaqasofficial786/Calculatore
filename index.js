function abc(){
let std_name = ("Muhammad Waqas")
let std_total_marks = document.getElementById("tm1").value;
let std_obt_marks =document.getElementById("obt1").value;
res = std_total_marks / std_obt_marks * 100;
document.write(` <h1> Dear ${std_name} You Have Got It ${res} </h1>`)
}
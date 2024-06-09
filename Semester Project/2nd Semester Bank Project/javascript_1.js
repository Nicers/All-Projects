
var run_amount = document.getElementById("r_amount").value;
var ques = document.getElementById("question").value;            
var nam = document.getElementById("name").value;
var mob = document.getElementById("mobile").value;
var birth_day = document.getElementById("birth").value;
var cas = document.getElementById("cast").value;
var addres = document.getElementById("address").value;
function save_data() {
    var acc_no = document.getElementById("account_no").value;
    var run_amount = document.getElementById("r_amount").value;
     var user = [acc_no, run_amount, ques, nam, mob, birth_day, cas, addres];
       
document.getElementById("demo").innerText = user;

}
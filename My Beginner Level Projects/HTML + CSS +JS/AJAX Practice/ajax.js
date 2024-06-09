// function loadata(){
//     const xhttp= new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status== 200){
//         document.getElementById('paragraph').innerHTML = this.responseText;
//     }
// }
// xhttp.open('GET', 'text.txt', true);
// xhttp.send();
// }
document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("sendButton");
  const resultDiv = document.getElementById("result");

  sendButton.addEventListener("click", sendData);

  function sendData() {
    const data = {
      name: "morpheus",
      job: "leader",
    };

    const jsonData = JSON.stringify(data);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 201) {
          // ReqRes returns 201 for successful POST
          resultDiv.textContent = "Data sent successfully!";
        } else {
          resultDiv.textContent = "Error sending data.";
        }
      }
    };

    xhttp.open("POST", "https://reqres.in/api/users", true); // Use ReqRes API
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(jsonData);
  }
});

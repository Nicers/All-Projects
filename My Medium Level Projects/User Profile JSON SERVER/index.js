var displayBtn = document.querySelector("#all");
var searchBtn = document.querySelector("#search");
var counter = 0;

function createAPI(url) {
  var allData = fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.length == 0) {
        alert("Data Not Found");
        data = "error occurred";
      }
      return data;
    })
    .catch((error) => {
      alert(error);
      var err = "error occurred";
      return err;
    });
  return allData;
}

displayBtn.addEventListener("click", () => {
  if (counter == 0) {
    var tbody = document.createElement("tbody");
    document.querySelector("table").appendChild(tbody);
    counter++;
  }

  var url = "http://localhost:3000/user";
  var alldata = createAPI(url);
  var content = "";
  alldata.then((data) => {
    if (data !== "error occurred") {
      for (var value of data) {
        content += `
            <tr>
            <td class='d-flex align-items-start gap-3'>
            <img src='${value.profile}'>
            <div class='d-flex flex-column mt-2'>
            <b>${value.name}</b>
            <p>${value.email}</p>
            </div>
            </td>
            <td class='text-center'><button class='btn btn-success'>${value.status}</button></td>
            <td class='text-center'>${value.role}</td>
            </tr>
            `;
      }
      document.querySelector("tbody").innerHTML = content;
    }
  });
});

searchBtn.addEventListener("click", () => {
  var tableHead = document.querySelector("thead");
  var btns = document.querySelector("#btnContainer");
  var searchDivv = document.querySelector(".search");
  if (searchDivv == null) {
    var searchDiv = document.createElement("div");
    searchDiv.classList.add("search");
    searchDiv.innerHTML = `
        <div class='d-flex flex-column align-items-start justify-content-center'>
        <label>Enter Id, Name, Role or Status</label> 
        <input type='text' id='type' placeholder='Enter data'>
        </div>
        <div class='d-flex flex-column align-items-start justify-content-center'>
        <label>Enter Id=1,2,3,4 & Name='etc' & Role=Admin,owner,member & Status=active,inactive</label> 
        <input type='text' id='data' placeholder='Enter data'>
        </div>
        <button class='btn btn-success btn-lg px-4' id='submit'>Submit</button>
        `;
    btns.appendChild(searchDiv);
  } else {
    alert("Please Fill the Correct boxes & press Submit Button");
  }

  var submit = document.querySelector("#submit");
  var dataType = document.querySelector("#type");
  var inputdata = document.querySelector("#data");
  submit.addEventListener("click", () => {
    var type = dataType.value.toLowerCase();

    var url = `http://localhost:3000/user?${type}=${inputdata.value}`;
    inputdata.value = "";
    dataType.value = "";
    var specificData = createAPI(url);
    console.log(specificData);
    specificData
      .then((data) => {
        if (data !== "error occurred") {
          var content = "";
          for (var value of data) {
            content += `
              <tr>
              <td class='d-flex align-items-start gap-3'>
              <img src='${value.profile}'>
              <div class='d-flex flex-column mt-2'>
              <b>${value.name}</b>
              <p>${value.email}</p>
              </div>
              </td>
              <td class='text-center'><button class='btn btn-success'>${value.status}</button></td>
              <td class='text-center'>${value.role}</td>
              </tr>
              `;
          }
          document.querySelector("table").innerHTML = "";
          document.querySelector("table").appendChild(tableHead);
          document.querySelector("table").innerHTML += content;
        }
      })
      .catch((error) => {
        alert();
      });
  });
});

// *******************        ADDING APPLICANT TO RECORD      *******************
var list_of_record = [];
count_room = [];
var record;

function data() {
  // alert('Your Added! Check Below List');
  var room_add1 = document.getElementById("r_no1");
  var b = document.getElementById("name1");

  //checking if room is empty then add aplicant
  // if(room_add1.value=='' && b.value.trim()==''){
  var nameValue = room_add1.value.trim();
  var roomValue = b.toString(b.value.trim());
  if (nameValue == "" || roomValue == "") {
    alert("Please Add both Name & Room No.");
  } else {
    if (count_room.length == 0 && room_add1.value <= 5) {
      count_room.push(parseFloat(nameValue));
      data1(room_add1, b);
    } else if (count_room.length <= 4 && room_add1.value <= 5) {
      for (var i = 0; i < count_room.length; i++) {
        // if (count_room[i] == room_add1.value) {
        var chek1 = count_room.includes(parseFloat(room_add1.value));
        if (chek1 == true) {
          alert(`Room ${room_add1.value} is Not Available`);
          room_add1.value = "";
          b.value = "";
          break;
        } else {
          if (count_room.length < 20 || count_room.length == 0) {
            count_room.push(parseFloat(nameValue));
            data1(room_add1, b);
            break;
          } else {
            alert("Room is Full & empty Room is not available");
          }
        }
      }
    } else {
      alert("Sorry! we have only upto 5 rooms");
    }
  }
}

function data1(a, b) {
  alert("Check Below List You are Added!");
  var user = {
    RoomNo: a.value,
    Name: b.value,
  };
  list_of_record.push(user);
  // a='';
  // console.log(list_of_record,count_room);

  var record1 = "";
  for (var i = 0; i < list_of_record.length; i++) {
    record1 += `
    <tr>
    <td>${list_of_record[i].RoomNo}</td>
    <td>${list_of_record[i].Name}</td>
    </tr><br><br>`;
  }

  record = record1;
  var tabl = document.getElementById("tab");
  tabl.innerHTML = record;
  a.value = "";
  b.value = "";
}

// *******************        Checking if room is available      *******************

function room_check() {
  var room_no = document.getElementById("r_no");
  var dis = document.getElementById("display1");
  if (count_room.length == 0) {
    // alert(`Yes Room ${room_no} is Available`);
    var ch1 = `<h3>Yes Room ${room_no.value} is Available</h3>`;
    dis.innerHTML = ch1;
  } else {
    for (var i = 0; i < count_room.length; i++) {
      if (count_room[i] != room_no.value) {
        // alert(`Yes Room ${room_no} is Available`);
        var ch1 = `<h3>Yes Room ${room_no.value} is Available</h3>`;
        dis.innerHTML = ch1;
      } else {
        var ch2 = `<h3>NO! Room ${room_no.value} is NOT Available</h3>`;
        dis.innerHTML = ch2;
      }
    }
  }
  room_no.value = "";
}

// *******************        Clear room from record      *******************

function clear_room() {
  var room_no1 = Math.floor(document.getElementById("r_no2").value);
  var room_no_copy = document.getElementById("r_no2");
  var dis1 = document.getElementById("display2");
  var tab1 = document.getElementById("tab");
  var rows = tab1.getElementsByTagName("tr");
  if (count_room.length == 0) {
    // alert('Already have no Room in Record')
    var data1 = `<h3>Already have no Room in Record</h3>`;
    dis1.innerHTML = data1;
  } else {
    for (var i = 0; i < count_room.length; i++) {
      if (count_room[i] == room_no1) {
        count_room.splice(i, 1);
        rows[i].remove();
        alert(`Room No. ${room_no1} is removed from List`);
      }
    }
  }
  room_no_copy.value = "";
}

// *******************        Check who is staying      *******************
function room_stay() {
  var dis2 = document.getElementById("display3");
  var r_no4 = document.getElementById("name3").value;
  var r_no4_copy = document.getElementById("name3");
  if (count_room.length == 0) {
    dis2.innerHTML = `<h3>This Room is Empty! </h3>`;
  } else {
    for (var i = 0; i < count_room.length; i++) {
      if (count_room[i] == r_no4) {
        dis2.innerHTML = `<h3>In this Room one Applicant is Living His<br> Name: ${list_of_record[i].Name} &  Room No: ${list_of_record[i].RoomNo}</h3>`;
      }
    }
  }
  r_no4_copy.value = "";
}

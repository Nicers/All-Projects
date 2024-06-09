var btn = document.querySelector('button');
      var counter = 0;

      btn.addEventListener('click', () => {
        fetch('products.json')
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if(counter == 0){
            var tbody = document.createElement('tbody');
            document.querySelector('table').appendChild(tbody);
            counter++;
          }

          var content = '';
          for(var i=0; i<data.length; i++){
            // console.log(data[i]);
          content += `
            <tr>
              <td><img src = ${data[i].image}></td>
              <td>${data[i].name}</td>
              <td>${data[i].price}</td>
              <td>${data[i].inventory}</td>
              <td>${data[i].productCode}</td>
              </tr>
            `;
          }
          if(content != ''){
            tbody.innerHTML = content;
          }
        });
      });
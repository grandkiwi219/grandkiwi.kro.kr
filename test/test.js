
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.namemc.com/profile/04932fd4-d4e6-4aed-80a9-da4a0d64f93e/friends', true);
      request.onload = function () {

         var data = JSON.parse(this.response);

         data.forEach((friend) => {

           document.getElementById('test').innerHTML += '<p id="testing">' + friend.name + '</p>';

           setTimeout(() => document.getElementById('testing').innerHTML += '반갑다 인간', 5000)
           
         })
      }

      request.send();

 

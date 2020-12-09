
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.namemc.com/profile/04932fd4-d4e6-4aed-80a9-da4a0d64f93e/friends', true);
      request.onload = function () {

         var data = JSON.parse(this.response);

         data.forEach((friend) => {

           document.write('<p>' + friend.name + '</p>');
           
         })
      }

      request.send();

 

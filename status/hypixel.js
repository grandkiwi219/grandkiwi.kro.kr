var hp = new StatusPage.page({ page : 'qhddg0t7xyb0' });
hp.summary({
  success : function(data) {
         document.getElementById('hypixel').innerHTML += '<hr>' + sys[data.status.description];

     data.components.forEach(slice => {
         document.getElementById('hypixel').innerHTML += '<hr>';
         document.getElementById('hypixel').innerHTML += '<div>';
         document.getElementById('hypixel').innerHTML += slice.name + '&emsp;|&emsp;' + dis[slice.status];
         if (slice.description !== null) { document.getElementById('hypixel').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + slice.description; }
         document.getElementById('hypixel').innerHTML += '</div>';
      })
   }
});

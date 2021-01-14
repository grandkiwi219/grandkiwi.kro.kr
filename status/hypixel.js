setTimeout(() => {
    if (document.getElementById('load-hypixel')) {
        document.getElementById('load-hypixel').innerHTML = errorTime;
    } else {
        console.log('hypixel api loading success')
    }
}, 10000) //10s

var hp = new StatusPage.page({ page : 'qhddg0t7xyb0' });
hp.summary({
  success : function(data) {
         document.getElementById('hypixel').innerHTML = '<h2><a href="' + data.page.url + '">' + data.page.name + '</a></h2>'; 
    
         document.getElementById('hypixel').innerHTML += '<hr>' + sys[data.status.description];

         var dcom = data.components
/*
         document.getElementById('hypixel').innerHTML += '<hr>' + dcom[0].name + '&emsp;|&emsp;' + dis[dcom[0].status];
         if (dcom[0].description !== null) { document.getElementById('hypixel').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + dcom[0].description; }
*/
     data.components.forEach(slice => {
         //if (slice.name == 'Minecraft Server' || slice.name == 'Store' || slice.name == 'Support' || slice.name == 'Website' || slice.name == 'Public API') return;

         document.getElementById('hypixel').innerHTML += '<hr>';
         document.getElementById('hypixel').innerHTML += slice.name + '&emsp;|&emsp;' + dis[slice.status];
         if (slice.description !== null) { document.getElementById('hypixel').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + slice.description; }
      })
/*
         document.getElementById('hypixel').innerHTML += '<hr>' + dcom[5].name + '&emsp;|&emsp;' + dis[dcom[5].status];
         if (dcom[5].description !== null) { document.getElementById('hypixel').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + dcom[5].description; }

         document.getElementById('hypixel').innerHTML += '<hr>' + dcom[6].name + '&emsp;|&emsp;' + dis[dcom[6].status];
         if (dcom[6].description !== null) { document.getElementById('hypixel').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + dcom[6].description; }

         document.getElementById('hypixel').innerHTML += '<hr>' + dcom[8].name + '&emsp;|&emsp;' + dis[dcom[8].status];
         if (dcom[8].description !== null) { document.getElementById('hypixel').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + dcom[8].description; }
*/

   }
});

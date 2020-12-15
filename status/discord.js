var sp = new StatusPage.page({ page : 'srhpyqt94yxb' });
var dis = {
   "operational": "<span style='color:#03fc90;'>운영 중</span>",
   "degraded_performance": "<span style='color:;#f54242'>성능 저하</span>",
   "partial_outage": "<span style='color:#ffec5c;'>부분 중단</span>",
   "major_outage": "<span style='color:#f5a142;'>주요중단</span>"
}
sp.summary({
   success: function(data) {
      document.getElementById('discord').innerHTML += '<hr>' + data.status.description + '<hr>';

      document.getElementById('discord').innerHTML += '<div>' + data.components[1].name + '&emsp;|&emsp;' + dis[data.components[1].status];
      if (data.components[1].description !== null) { document.getElementById('discord').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + data.components[1].description; }
      document.getElementById('discord').innerHTML += '</div>';

      document.getElementById('discord').innerHTML += '<hr><div>' + data.components[3].name + '&emsp;|&emsp;' + dis[data.components[3].status];
      if (data.components[3].description !== null) { document.getElementById('discord').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + data.components[3].description; }
      document.getElementById('discord').innerHTML += '</div>';

      document.getElementById('discord').innerHTML += '<hr><div>' + data.components[6].name + '&emsp;|&emsp;' + dis[data.components[6].status];
      if (data.components[6].description !== null) { document.getElementById('discord').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + data.components[6].description; }
      document.getElementById('discord').innerHTML += '</div>';

      document.getElementById('discord').innerHTML += '<hr><div>' + data.components[9].name + '&emsp;|&emsp;' + dis[data.components[9].status];
      if (data.components[9].description !== null) { document.getElementById('discord').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + data.components[9].description; }
      document.getElementById('discord').innerHTML += '</div>';

      document.getElementById('discord').innerHTML += '<hr><div>' + data.components[11].name + '&emsp;|&emsp;' + dis[data.components[11].status];
      if (data.components[11].description !== null) { document.getElementById('discord').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + data.components[11].description; }
      document.getElementById('discord').innerHTML += '</div>';


   data.components.forEach(slice => {

       if (slice.name == 'API' || slice.name == 'CloudFlare' || slice.name == 'Media Proxy' || slice.name == 'Tax Calculation Service' || slice.name == 'Push Notifications' || slice.name == 'Search' || slice.name == 'Voice' || slice.name == 'Third-party') return;

       document.getElementById('discord').innerHTML += '<hr>';
       document.getElementById('discord').innerHTML += '<div>';
       document.getElementById('discord').innerHTML += slice.name + '&emsp;|&emsp;' + dis[slice.status];
       if (slice.description !== null) { document.getElementById('discord').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + slice.description; }
       document.getElementById('discord').innerHTML += '</div>';
    })

      document.getElementById('discord').innerHTML += '<hr><div>' + data.components[12].name + '&emsp;|&emsp;' + dis[data.components[12].status];
      if (data.components[12].description !== null) { document.getElementById('discord').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + data.components[12].description; }
      document.getElementById('discord').innerHTML += '</div>';

      document.getElementById('discord').innerHTML += '<hr><div>' + data.components[2].name + '&emsp;|&emsp;' + dis[data.components[2].status];
      if (data.components[2].description !== null) { document.getElementById('discord').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + data.components[2].description; }
      document.getElementById('discord').innerHTML += '</div>';

      document.getElementById('discord').innerHTML += '<hr><div>' + data.components[4].name + '&emsp;|&emsp;' + dis[data.components[4].status];
      if (data.components[4].description !== null) { document.getElementById('discord').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + data.components[4].description; }
      document.getElementById('discord').innerHTML += '</div>';

  }
})

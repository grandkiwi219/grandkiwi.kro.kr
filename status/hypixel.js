setTimeout(() => {
    if (document.getElementById('load-hypixel').innerHTML == '<img style="width:18px; height:18px;" src="../img/status/loading.gif">&emsp;|&emsp;로딩 중..') {
        document.getElementById('load-hypixel').innerHTML = errorTime;
    }
}, 10000) //10s

var hp = new StatusPage.page({ page : 'qhddg0t7xyb0' });
hp.summary({
  success : function(data) {
         document.getElementById('hypixel').innerHTML = '<h2><a href="' + data.page.url + '">' + data.page.name + '</a></h2>'; 
    
         document.getElementById('hypixel').innerHTML += '<hr>' + sys[data.status.description];

     data.components.forEach(slice => {
         document.getElementById('hypixel').innerHTML += '<hr>';
         document.getElementById('hypixel').innerHTML += slice.name + '&emsp;|&emsp;' + dis[slice.status];
         if (slice.description !== null) { document.getElementById('hypixel').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + slice.description; }
      })
   }
});

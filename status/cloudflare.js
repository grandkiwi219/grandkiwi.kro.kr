setTimeout(() => {
    if (document.getElementById('load-cloudflare').innerHTML == '<img style="width:18px; height:18px;" src="../img/status/loading.gif">&emsp;|&emsp;로딩 중..') {
        document.getElementById('load-cloudflare').innerHTML = errorTime;
    }
}, 10000) //10s

var cf = new StatusPage.page({ page : 'yh6f0r4529hb' });
cf.summary({
  success : function(data) {
         document.getElementById('cloudflare').innerHTML = '<h2><a href="' + data.page.url + '">' + data.page.name + '</a></h2>';
    
         document.getElementById('cloudflare').innerHTML += '<hr>' + sys[data.status.description];
    
         document.getElementById('cloudflare').innerHTML += '<hr><a href="#cloudflare" id="cloud-flare-a" onclick="' + "folding('cloud-flare-a', 'cloud-flare');" + '">[ 펼치기 ]</a><div id="cloud-flare" style="display:none;">';
     

     data.components.forEach(slice => {
         document.getElementById('cloud-flare').innerHTML += '<hr>';
         document.getElementById('cloud-flare').innerHTML += slice.name + '&emsp;|&emsp;' + dis[slice.status];
         if (slice.description !== null) { document.getElementById('cloud-flare').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + slice.description; }
      })
  
    
   }
});


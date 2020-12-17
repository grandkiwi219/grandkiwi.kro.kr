setTimeout(() => {
    if (document.getElementById('load-github').innerHTML == '<img style="width:18px; height:18px;" src="../img/status/loading.gif">&emsp;|&emsp;로딩 중..') {
        document.getElementById('load-github').innerHTML = errorTime;
    }
}, 10000) //10s

var gh = new StatusPage.page({ page : 'kctbh9vrtdwd' });
gh.summary({
  success : function(data) {
         document.getElementById('github').innerHTML = '<h2><a href="' + data.page.url + '">' + data.page.name + '</a></h2>';
    
         document.getElementById('github').innerHTML += '<hr>' + sys[data.status.description];

     data.components.forEach(slice => {
         document.getElementById('github').innerHTML += '<hr>';
         document.getElementById('github').innerHTML += slice.name + '&emsp;|&emsp;' + dis[slice.status];
         if (slice.description !== null) { document.getElementById('github').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + slice.description; }
      })
   }
});

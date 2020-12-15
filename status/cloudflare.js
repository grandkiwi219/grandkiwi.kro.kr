var cf = new StatusPage.page({ page : 'yh6f0r4529hb' });
cf.summary({
  success : function(data) {
         document.getElementById('cloudflare').innerHTML += '<hr>' + sys[data.status.description];

     data.components.forEach(slice => {
         document.getElementById('cloudflare').innerHTML += '<hr>';
         document.getElementById('cloudflare').innerHTML += '<div>';
         document.getElementById('cloudflare').innerHTML += slice.name + '&emsp;|&emsp;' + dis[slice.status];
         if (slice.description !== null) { document.getElementById('cloudflare').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + slice.description; }
         document.getElementById('cloudflare').innerHTML += '</div>';
      })
   }
});

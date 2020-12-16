var cf = new StatusPage.page({ page : 'yh6f0r4529hb' });
cf.summary({
  success : function(data) {
         document.getElementById('cloudflare').innerHTML = '<h2><a href="' + data.page.url + '">' + data.page.name + '</a></h2>';
    
         document.getElementById('cloudflare').innerHTML += '<hr>' + sys[data.status.description];
    
         document.getElementById('cloudflare').innerHTML += '<hr><a href="#cloudflare" id="a_show" onclick="folding();">[ 펼치기 ]</a><div id="cloud_flare" style="display:none;">';
     

     data.components.forEach(slice => {
         document.getElementById('cloud_flare').innerHTML += '<hr>';
         document.getElementById('cloud_flare').innerHTML += slice.name + '&emsp;|&emsp;' + dis[slice.status];
         if (slice.description !== null) { document.getElementById('cloud_flare').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + slice.description; }
      })
  
    
   }
});

function click_event () {
  if (cloud_flare.style.display == "none") { cloud_flare.style.display=""; a_show.innerText = "[ 접기 ]" } else { cloud_flare.style.display="none"; a_show.innerText = "[ 펼치기 ]" }
}

var cf = new StatusPage.page({ page : 'yh6f0r4529hb' });
cf.summary({
  success : function(data) {
         document.getElementById('cloudflare').innerHTML += '<hr>' + sys[data.status.description];
    
         document.getElementById('cloudflare').innerHTML += '<hr><a href="#cloudflare" id="a_show" onclick="click_event();">[ 펼치기 ]</a><div id="div_hide" style="display:none;">';
     
         function click_event () {
           if (div_hide.style.display == "none") { div_hide.style.display=""; a_show.innerText = "[ 접기 ]" } else { div_hide.style.display="none"; a_show.innerText = "[ 펼치기 ]" }
         }

     data.components.forEach(slice => {
         document.getElementById('cloudflare').innerHTML += '<hr>';
         document.getElementById('cloudflare').innerHTML += '<div>';
         document.getElementById('cloudflare').innerHTML += slice.name + '&emsp;|&emsp;' + dis[slice.status];
         if (slice.description !== null) { document.getElementById('cloudflare').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + slice.description; }
         document.getElementById('cloudflare').innerHTML += '</div>';
      })
    
        document.getElementById('cloudflare').innerHTML += '</div>';
    
   }
});

var gh = new StatusPage.page({ page : 'kctbh9vrtdwd' });
gh.summary({
  success : function(data) {
         document.getElementById('github').innerHTML += '<hr>' + sys[data.status.description];

     data.components.forEach(slice => {
         document.getElementById('github').innerHTML += '<hr>';
         document.getElementById('github').innerHTML += '<div>';
         document.getElementById('github').innerHTML += slice.name + '&emsp;|&emsp;' + dis[slice.status];
         if (slice.description !== null) { document.getElementById('github').innerHTML += '<br><span style="color:silver;">DESCRIPTION</span><br>' + slice.description; }
         document.getElementById('github').innerHTML += '</div>';
      })
   }
});

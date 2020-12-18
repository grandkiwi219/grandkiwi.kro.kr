var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
    
    const menual = "IE 환경에서는 사이트 이용이 원활하지 않을 수 있습니다<br/>Chrome이나 FireFox와 같은 다른 브라우저 이용을 하시는걸 권장합니다"
    
    document.write('<div id="IE" style="padding-top:15px; padding-bottom:15px; background-color:#343434; border-bottom:3px solid #C6FEAD;">' + menual + '</div>')

}



// notice

//var notice = 'Merry Christmas 🎄!<br/>좋은 하루 되시길 바랍니다!'
var notice = 'Minecraft / Discord / Hypixel / GitHub / CloudFlare status 페이지가 생성되었습니다!<br/><a href="/status">이 곳</a>을 클릭하여 확인해보세요!'
var warn_notice = '<br/><span style="color:silver;">주의</span> ※ <span style="color:silver;">IE에서는 로딩이 안될 수 있습니다</span>'


if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

    if (!notice) {
        
        console.log('공지 없음')
        
    } else {
        
        document.getElementById('IE').innerHTML += '<br/><br/>' + notice;
    
    }
    
} else { 
    
    if (!notice) {
    
        console.log('공지 없음')
    
    } else {

        document.write('<div style="padding-top:15px; padding-bottom:15px; background-color:#343434; border-bottom:3px solid #C6FEAD;">' + notice + '</div>')

    }
    
}

var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

if ( confirm("IE환경에서는 사이트 이용이 원활하지 않을 수 있습니다\n계속 하시겠습니까?") ) {
} else {
    if ( confirm("확인시 구글로, 취소시 네이버로 이동합니다") ) {
        location.href="https://google.com";
    } else {
        location.href="https://naver.com";
    }
}

}

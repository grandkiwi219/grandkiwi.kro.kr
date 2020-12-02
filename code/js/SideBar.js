const json
=
{

    "sidebar": "<a href='/'>Home</a> <a href='/information'>Information</a> <a href='/community'>Community</a> <a href='/project'>Project</a>",

}

document.getElementsByTagName("body")[0].innerHTML += '<input type="checkbox" id="navcheck" role="button" title="menu"><label for="navcheck" aria-hidden="true" title="menu"><span class="burger"><span class="bar"><span class="visuallyhidden">Menu</span></span></span></label><nav id="menu">' + json.sidebar + '</nav>';

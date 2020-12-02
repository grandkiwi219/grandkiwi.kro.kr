const json
=
{

    "sidebar": "<a href='/'>Home</a> <a href='/information'>Information</a> <a href='/community'>Community</a> <a href='/project'>Project</a>",

}

document.getElementsByTagName("body")[0].innerHTML += json.sidebar;

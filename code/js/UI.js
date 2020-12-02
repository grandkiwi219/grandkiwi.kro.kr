const json
=
{

    "header": "<h1 style='color:#BBFDAB;'>grand kiwi's site!</h1><hr>",
    "sidebar": "<a href='/'>Home</a> <a href='/information'>Information</a> <a href='/community'>Community</a> <a href='/project'>Project</a>",
    "footer": "<hr> © grand kiwi's party  |  <a href='https://github.com/grandkiwi219'>github</a>  |  <a href='https://discord.gg/QKbQCWD'>discord</a>  |  <a href='https://github.com/grandkiwi219/grandkiwi219.github.io'>power</a>"

}

document.getElementsByTagName("header")[0].innerHTML = json.header;

document.getElementsByTagName("nav")[0].innerHTML = json.sidebar;

document.getElementsByTagName("footer")[0].innerHTML = json.footer;

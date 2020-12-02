const json
=
{

    "header": "<h1 style='color:#BBFDAB;'>grand kiwi's site!</h1><hr>",

}

document.getElementsByTagName("body")[0].innerHTML = '<header>' + json.header + '</header>';

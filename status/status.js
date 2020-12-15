const color = {
    "green": "<img style='width:12px; height:12px;' src='../img/status/green.png'>",
    "yellow": "<img style='width:12px; height:12px;' src='../img/status/yellow.png'>",
    "red": "<img style='width:12px; height:12px;' src='../img/status/red.png'>"
}

var minecraft = new XMLHttpRequest();
minecraft.open('GET', 'https://status.mojang.com/check', true);
minecraft.onload = function () {
    var session = JSON.parse(this.response);

    document.getElementById('minecraft').innerHTML += '<p>minecraft.net&emsp;|&emsp;' + color[session[0]["minecraft.net"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p>session.minecraft.net&emsp;|&emsp;' + color[session[1]["session.minecraft.net"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p>account.mojang.com&emsp;|&emsp;' + color[session[2]["account.mojang.com"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p>authserver.mojang.com&emsp;|&emsp;' + color[session[3]["authserver.mojang.com"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p>sessionserver.mojang.com&emsp;|&emsp;' + color[session[4]["sessionserver.mojang.com"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p>api.mojang.com&emsp;|&emsp;' + color[session[5]["api.mojang.com"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p>textures.minecraft.net&emsp;|&emsp;' + color[session[6]["textures.minecraft.net"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p>mojang.com&emsp;|&emsp;' + color[session[7]["mojang.com"]] + '</p>';

      }
minecraft.send();

 

const color = {
    "green": "<img style='width:12px; height:12px;' src='../img/status/green.png'>",
    "yellow": "<img style='width:12px; height:12px;' src='../img/status/yellow.png'>",
    "red": "<img style='width:12px; height:12px;' src='../img/status/red.png'>"
}

var minecraft = new XMLHttpRequest();
minecraft.open('GET', 'https://status.mojang.com/check', true);
minecraft.onload = function () {
    var session = JSON.parse(this.response);

    document.getElementById('minecraft').innerHTML += '<p id="m_n">minecraft.net&emsp;|&emsp;' + color[session[0]["minecraft.net"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p id="s_m_n">session.minecraft.net&emsp;|&emsp;' + color[session[1]["session.minecraft.net"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p id="a_m_c">account.mojang.com&emsp;|&emsp;' + color[session[2]["account.mojang.com"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p id="au_m_c">authserver.mojang.com&emsp;|&emsp;' + color[session[3]["authserver.mojang.com"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p id="s_m_c">sessionserver.mojang.com&emsp;|&emsp;' + color[session[4]["sessionserver.mojang.com"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p id="api_m">api.mojang.com&emsp;|&emsp;' + color[session[5]["api.mojang.com"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p t_m_n>textures.minecraft.net&emsp;|&emsp;' + color[session[6]["textures.minecraft.net"]] + '</p>';
    document.getElementById('minecraft').innerHTML += '<p m_c>mojang.com&emsp;|&emsp;' + color[session[7]["mojang.com"]] + '</p>';

      }
minecraft.send();

minecraft.onreadystatechange = function () {
    var session = JSON.parse.(this.response);
    if (this.status == 200) {

    document.getElementById('m_n').innerHTML = 'minecraft.net&emsp;|&emsp;' + color[session[0]["minecraft.net"]];
    document.getElementById('s_m_n').innerHTML = 'session.minecraft.net&emsp;|&emsp;' + color[session[1]["session.minecraft.net"]];
    document.getElementById('a_m_c').innerHTML = 'account.mojang.com&emsp;|&emsp;' + color[session[2]["account.mojang.com"]];
    document.getElementById('au_m_c').innerHTML = 'authserver.mojang.com&emsp;|&emsp;' + color[session[3]["authserver.mojang.com"]];
    document.getElementById('s_m_c').innerHTML = 'sessionserver.mojang.com&emsp;|&emsp;' + color[session[4]["sessionserver.mojang.com"]];
    document.getElementById('api_m').innerHTML = 'api.mojang.com&emsp;|&emsp;' + color[session[5]["api.mojang.com"]];
    document.getElementById('t_m_n').innerHTML = 'textures.minecraft.net&emsp;|&emsp;' + color[session[6]["textures.minecraft.net"]];
    document.getElementById('m_c').innerHTML = 'mojang.com&emsp;|&emsp;' + color[session[7]["mojang.com"]];

    } else {

    document.getElementById('m_n').innerHTML = 'minecraft.net&emsp;|&emsp;api error';
    document.getElementById('s_m_n').innerHTML = 'session.minecraft.net&emsp;|&emsp;api error';
    document.getElementById('a_m_c').innerHTML = 'account.mojang.com&emsp;|&emsp;api error';
    document.getElementById('au_m_c').innerHTML = 'authserver.mojang.com&emsp;|&emsp;api error';
    document.getElementById('s_m_c').innerHTML = 'sessionserver.mojang.com&emsp;|&emsp;api error';
    document.getElementById('api_m').innerHTML = 'api.mojang.com&emsp;|&emsp;api error';
    document.getElementById('t_m_n').innerHTML = 'textures.minecraft.net&emsp;|&emsp;api error';
    document.getElementById('m_c').innerHTML = 'mojang.com&emsp;|&emsp;api error';

    }

}

 

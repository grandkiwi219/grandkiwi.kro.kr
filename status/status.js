var minecraft = new XMLHttpRequest();
minecraft.open('GET', 'https://status.mojang.com/check', true);
minecraft.onload = function () {
    var session = JSON.parse(this.minecraft);

    const doc_mc = document.getElementById('minecraft').innerHTML

    doc_mc += '<p>minecraft.net&emsp;|&emsp;' + session["minecraft.net"] + '</p>';
    doc_mc += '<p>session.minecraft.net&emsp;|&emsp;' + session["session.minecraft.net"] + '</p>';
    doc_mc += '<p>account.mojang.com&emsp;|&emsp;' + session["account.mojang.com"] + '</p>';
    doc_mc += '<p>authserver.mojang.com&emsp;|&emsp;' + session["authserver.mojang.com"] + '</p>';
    doc_mc += '<p>sessionserver.mojang.com&emsp;|&emsp;' + session["sessionserver.mojang.com"] + '</p>';
    doc_mc += '<p>api.mojang.com&emsp;|&emsp;' + session["api.mojang.com"] + '</p>';
    doc_mc += '<p>textures.minecraft.net&emsp;|&emsp;' + session["textures.minecraft.net"] + '</p>';
    doc_mc += '<p>mojang.com&emsp;|&emsp;' + session["mojang.com"] + '</p>';

      }
minecraft.send();

 

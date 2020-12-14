var minecraft = new XMLHttpRequest();
minecraft.open('GET', 'https://status.mojang.com/check', true);
minecraft.onload = function () {
    var session = JSON.parse(this.minecraft);

    const doc_mc = document.getElementById('minecraft').innerHTML

    doc_mc += '<p>minecraft.net&emsp;|&emsp;' + session[0]["minecraft.net"] + '</p>';
    doc_mc += '<p>session.minecraft.net&emsp;|&emsp;' + session[1]["session.minecraft.net"] + '</p>';
    doc_mc += '<p>account.mojang.com&emsp;|&emsp;' + session[2]["account.mojang.com"] + '</p>';
    doc_mc += '<p>authserver.mojang.com&emsp;|&emsp;' + session[3]["authserver.mojang.com"] + '</p>';
    doc_mc += '<p>sessionserver.mojang.com&emsp;|&emsp;' + session[4]["sessionserver.mojang.com"] + '</p>';
    doc_mc += '<p>api.mojang.com&emsp;|&emsp;' + session[5]["api.mojang.com"] + '</p>';
    doc_mc += '<p>textures.minecraft.net&emsp;|&emsp;' + session[6]["textures.minecraft.net"] + '</p>';
    doc_mc += '<p>mojang.com&emsp;|&emsp;' + session[7]["mojang.com"] + '</p>';

      }
minecraft.send();

 

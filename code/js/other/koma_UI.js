const json
=
{

    "header": "<h1 data-aos='zoom-in-up' data-aos-duration='500' style='color:#FEB861;'>코마공화국</h1> <hr data-aos='zoom-in-up' data-aos-duration='500'>",
    "footer": "<hr> <div>© 코마공화국-grand kiwi  |  <a href='https://github.com/grandkiwi219'>github</a>  |  <a href='https://discord.gg/qtkoma'>discord</a>  |  <a href='/'>power</a></div>",
    "Koma_2020": "<h1 data-aos='zoom-in-up' data-aos-duration='500'><a style='color:#FEB861;' href='/koma'>코마공화국 2020</a></h1> <hr data-aos='zoom-in-up' data-aos-duration='500'>"

}

document.getElementsByTagName("header")[0].innerHTML = json.header;

document.getElementsByTagName("footer")[0].innerHTML = json.footer;

document.getElementById("2020").innerHTML = json.Koma_2020;


 
         alert('접근이 금지되었습니다');
         location.href="/";

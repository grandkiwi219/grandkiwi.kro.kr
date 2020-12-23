const sb
=
[
'<a href="/">Home</a>',
'<a href="/information">Information</a>',
'<a href="/community">Community</a>',
'<a href="/project">Project</a>',
'<sub style="color:red;">new</sub><a href="/status">Status</a>',
'',
'',
'',
'',
'',
]

document.write('<input type="checkbox" id="navcheck" role="button" title="menu"><label for="navcheck" aria-hidden="true" title="menu"><span class="burger"><span class="bar"><span class="visuallyhidden">Menu</span></span></span></label><nav id="menu">' + sb[0] + sb[1] + sb[2] + sb[3] + sb[4] + sb[5] + sb[6] + sb[7] + sb[8] + sb[9] + '</nav>');

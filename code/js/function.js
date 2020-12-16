function folding (me, other) {
    var meElement = document.getElementById(me)
    var otherElement = document.getElementById(other)

    if (meElement.innerText == "[ 펼치기 ]") {
        otherElement.classList.add('open');
        meElement.innerText = "[ 접기 ]"
    } else { 
        otherElement.classList.remove('open');
        meElement.innerText = "[ 펼치기 ]"
    }

}

function folding (me, other) {
    var meElement = document.getElementById(me)
    var otherElement = document.getElementById(other)

    if (meElement.innerText == "[ 펼치기 ]") {
        meElement.innerText = "[ 접기 ]"
    } else { 
        meElement.innerText = "[ 펼치기 ]"
    }

    otherElement.classList.toggle('open');

}

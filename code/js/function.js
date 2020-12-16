function folding (me, other) {
    var meElement = document.getElementById(me)
    var otherElement = document.getElementById(other)

    if (otherElement.style.display == "none") {
        otherElement.style.display = "";
        meElement.innerText = "[ 접기 ]"
    } else { 
        otherElement.style.display = "none";
        meElement.innerText = "[ 펼치기 ]"
    }

}

function folding (id) {
    var ne = document.getElementById(id)

    if (ne.style.display == "none") { ne.style.display=""; this.innerText = "[ 접기 ]" } else { ne.style.display="none"; this.innerText = "[ 펼치기 ]" }
}

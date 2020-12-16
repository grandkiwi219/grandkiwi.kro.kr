function folding () {
    if (this.nextSibling.style.display == "none") { this.nextSibling.style.display=""; this.innerText = "[ 접기 ]" } else { this.nextSibling.style.display="none"; this.innerText = "[ 펼치기 ]" }
}

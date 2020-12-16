function folding () {
    if (this.nextElementSibling.style.display == "none") { this.nextElementSibling.style.display=""; this.innerText = "[ 접기 ]" } else { this.nextElementSibling.style.display="none"; this.innerText = "[ 펼치기 ]" }
}

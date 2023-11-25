var selectField = document.getElementById('selectfield');
var selectText = document.getElementById('selectText');
var options = document.getElementsByClassName("options");
var list = document.getElementById('list');
var arrowIcon = document.getElementById('arrowicon');

selectField.onclick = function () {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
}
for (op of options) {
op.onclick = function(){
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
}
}
// Este código faz com que o menu dropdown abra quando o usuário passa o mouse sobre ele
var dropdowns = document.getElementsByClassName("dropdown");
for (var i = 0; i < dropdowns.length; i++) {
	dropdowns[i].addEventListener("mouseover", function() {
		this.classList.add("active");
	});
	dropdowns[i].addEventListener("mouseout", function() {
		this.classList.remove("active");
	});
}

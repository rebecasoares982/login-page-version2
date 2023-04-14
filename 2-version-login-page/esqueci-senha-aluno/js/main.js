(function ($) {

	"use strict";


})(jQuery);

//Surgimento do formulário de aluno e funcionário
const btns = document.querySelectorAll('.toggle-forms .btn');
const forms = document.querySelectorAll('.forms-container .form');

btns.forEach(btn => {
	btn.addEventListener('click', () => {
		// Remove a classe "active" de todos os botões e formulários
		btns.forEach(btn => btn.classList.remove('active'));
		forms.forEach(form => form.classList.remove('active'));
		// Adiciona a classe "active" ao botão e formulário selecionados
		const formId = btn.getAttribute('data-form');
		const form = document.querySelector(`#${formId}`);
		btn.classList.add('active');
		form.classList.add('active');
	});
});

var estado = document.getElementById("estado");
var municipio = document.getElementById("municipio");
var formDiv = document.getElementById("form-div");

estado.addEventListener("change", function () {
	if (estado.value !== "" && municipio.value !== "") {
		formDiv.style.display = "block";
	} else {
		formDiv.style.display = "none";
	}
});

municipio.addEventListener("change", function () {
	if (estado.value !== "" && municipio.value !== "") {
		formDiv.style.display = "block";
	} else {
		formDiv.style.display = "none";
	}
});

document.querySelector('.toggle-forms button:first-of-type').classList.add('active');

(function ($) {

	"use strict";


})(jQuery);

const formToggle = document.querySelector('.toggle-forms');
const formAluno = document.querySelector('.form-aluno');
const formFuncionario = document.querySelector('.form-funcionario');

formToggle.addEventListener('click', (event) => {
if (event.target.value === 'form1') {
formAluno

.style.display = 'block';
formFuncionario.style.display = 'none';
} else if (event.target.value === 'form2') {
formFuncionario.style.display = 'block';
formAluno.style.display = 'none';
}
});
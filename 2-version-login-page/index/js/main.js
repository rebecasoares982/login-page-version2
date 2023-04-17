(function ($) {

	"use strict";


})(jQuery);

const formToggle = document.querySelector('.toggle-forms');
const formAluno = document.querySelector('.form-aluno');
const formFuncionario = document.querySelector('.form-funcionario');
const estadoSelect = document.querySelector('#estado');
const municipioSelect = document.querySelector('#municipio');

// Esconder toggle e formulários inicialmente
formToggle.style.display = 'none';
formAluno.style.display = 'none';
formFuncionario.style.display = 'none';

estadoSelect.addEventListener('change', () => {
    if (estadoSelect.value !== '' && municipioSelect.value !== '') {
        formToggle.style.display = 'block';
    } else {
        formToggle.style.display = 'none';
        formAluno.style.display = 'none';
        formFuncionario.style.display = 'none';
    }
});

municipioSelect.addEventListener('change', () => {
    if (estadoSelect.value !== '' && municipioSelect.value !== '') {
        formToggle.style.display = 'block';
    } else {
        formToggle.style.display = 'none';
        formAluno.style.display = 'none';
        formFuncionario.style.display = 'none';
    }
});

formToggle.addEventListener('click', (event) => {
    if (event.target.value === 'form1') {
        formAluno.style.display = 'block';
        formFuncionario.style.display = 'none';
    } else if (event.target.value === 'form2') {
        formFuncionario.style.display = 'block';
        formAluno.style.display = 'none';
    }
});

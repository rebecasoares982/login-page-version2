(function ($) {

	"use strict";


})(jQuery);

const estado = document.getElementById("estado");
const municipio = document.getElementById("municipio");
const formDiv = document.getElementById("form-div");
const toggleForms = document.querySelector(".toggle-forms");
const forms = document.querySelectorAll(".form");

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

toggleForms.addEventListener("change", function (event) {
  if (event.target.type === "radio") {
    forms.forEach(function (form) {
      form.style.display = "none";
    });

    const selectedForm = document.getElementById(event.target.value);
    selectedForm.style.display = "block";
  }
});
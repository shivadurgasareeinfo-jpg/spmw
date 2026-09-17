document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("feedbackForm");
  const submitButton = document.getElementById("submitButton");
  const buttonText = document.getElementById("buttonText");
  const buttonLoader = document.getElementById("buttonLoader");

  const phoneInput = document.querySelector('input[name="phone"]');


  /* PHONE INPUT */

  if (phoneInput) {

    phoneInput.addEventListener("input", function () {

      this.value = this.value.replace(
        /[^0-9+\-\s()]/g,
        ""
      );

    });

  }


  /* FORM SUBMIT */

  form.addEventListener("submit", function () {

    submitButton.disabled = true;

    buttonText.style.display = "none";

    buttonLoader.style.display = "inline";

  });

});

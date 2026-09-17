document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("feedbackForm");
  const iframe = document.getElementById("hidden_iframe");

  const submitButton = document.getElementById("submitButton");
  const buttonText = document.getElementById("buttonText");
  const buttonLoader = document.getElementById("buttonLoader");
  const successMessage = document.getElementById("successMessage");

  const phoneInput = document.querySelector('input[name="phone"]');

  let formSubmitted = false;


  /* ================================
     PHONE INPUT
     ================================ */

  if (phoneInput) {
    phoneInput.addEventListener("input", function () {

      this.value = this.value.replace(
        /[^0-9+\-\s()]/g,
        ""
      );

    });
  }


  /* ================================
     FORM SUBMISSION
     ================================ */

  if (form) {

    form.addEventListener("submit", function (event) {

      // Let the browser perform the normal POST
      // Do NOT use preventDefault()

      formSubmitted = true;

      submitButton.disabled = true;

      buttonText.style.display = "none";
      buttonLoader.style.display = "inline";

    });

  }


  /* ================================
     GOOGLE APPS SCRIPT RESPONSE
     ================================ */

  if (iframe) {

    iframe.addEventListener("load", function () {

      if (!formSubmitted) {
        return;
      }

      formSubmitted = false;

      // Small delay to allow Apps Script to finish
      setTimeout(function () {

        form.style.display = "none";

        successMessage.style.display = "block";

        successMessage.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }, 800);

    });

  }

});

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("feedbackForm");

  const submitButton =
    document.getElementById("submitButton");

  const buttonText =
    document.getElementById("buttonText");

  const buttonLoader =
    document.getElementById("buttonLoader");

  const successMessage =
    document.getElementById("successMessage");

  const phoneInput =
    document.querySelector('input[name="phone"]');


  /* ================================
     PHONE INPUT
  ================================= */

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
  ================================= */

  form.addEventListener("submit", async function (event) {

    event.preventDefault();


    /* Disable button */

    submitButton.disabled = true;

    buttonText.style.display = "none";

    buttonLoader.style.display = "inline";


    /* Collect form data */

    const formData = new FormData(form);

    const params = new URLSearchParams();


    for (const [key, value] of formData.entries()) {

      params.append(key, value);

    }


    try {

      /*
       * Send data to Google Apps Script
       *
       * no-cors prevents the browser from blocking
       * the cross-origin request.
       */

      await fetch(form.action, {

        method: "POST",

        mode: "no-cors",

        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded;charset=UTF-8"
        },

        body: params.toString()

      });


      /*
       * Submission request completed.
       * Show YOUR OWN success UI.
       */

      form.style.display = "none";

      successMessage.style.display = "block";

      successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });


    } catch (error) {

      console.error(
        "Submission error:",
        error
      );


      /* Restore button */

      submitButton.disabled = false;

      buttonText.style.display = "inline";

      buttonLoader.style.display = "none";


      alert(
        "Something went wrong while submitting. Please try again."
      );

    }

  });

});

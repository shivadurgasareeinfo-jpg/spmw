/* =========================================
   SP MEDIA WORKS FEEDBACK
   ========================================= */

const form =
  document.getElementById("feedbackForm");

const iframe =
  document.getElementById("hidden_iframe");

const submitButton =
  document.getElementById("submitButton");

const buttonText =
  document.getElementById("buttonText");

const buttonLoader =
  document.getElementById("buttonLoader");

const successMessage =
  document.getElementById("successMessage");


let formSubmitted = false;


/* =========================================
   FORM SUBMIT
   ========================================= */

form.addEventListener("submit", function () {

  formSubmitted = true;


  // Show loading
  submitButton.disabled = true;

  buttonText.style.display = "none";

  buttonLoader.style.display = "inline";


});


/* =========================================
   GOOGLE APPS SCRIPT RESPONSE
   ========================================= */

iframe.addEventListener("load", function () {

  // Ignore initial iframe loading
  if (!formSubmitted) {
    return;
  }


  formSubmitted = false;


  // Hide form
  form.style.display = "none";


  // Show success
  successMessage.style.display = "block";


  // Scroll to success message
  successMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });


});


/* =========================================
   PHONE VALIDATION
   ========================================= */

const phoneInput =
  document.querySelector(
    'input[name="phone"]'
  );


phoneInput.addEventListener(
  "input",
  function () {

    this.value =
      this.value.replace(
        /[^0-9+\-\s()]/g,
        ""
      );

  }
);

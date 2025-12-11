// public/js/custom/auth/onboarding.js

"use strict";

var KTAuthOnboarding = (function () {
  var roleInputName = "user_role";
  var paneIdPrefix = "kt_sign_up_";

  // Show the correct form pane
  var showPaneForRole = function (roleValue) {
    var targetId = paneIdPrefix + roleValue;
    var targetPane = document.getElementById(targetId);
    var allPanes = document.querySelectorAll(".tab-content .tab-pane");

    allPanes.forEach(function (pane) {
      pane.classList.remove("show", "active");
    });

    if (targetPane) {
      targetPane.classList.add("show", "active");
    }
  };

  // Initialize role switching behavior
  var initRoleSwitching = function () {
    var roleInputs = document.querySelectorAll(
      'input[name="' + roleInputName + '"]'
    );

    if (!roleInputs.length) return;

    roleInputs.forEach(function (input) {
      input.addEventListener("change", function () {
        showPaneForRole(this.value);
      });
    });

    var checked = document.querySelector(
      'input[name="' + roleInputName + '"]:checked'
    );

    if (checked) {
      showPaneForRole(checked.value);
    }
  };

  // Handle form submission for all forms using Axios
  var handleFormSubmission = function () {
    var forms = document.querySelectorAll("form[id^='form_']");

    forms.forEach(function (form) {
      var submitBtn = form.querySelector("button[type='submit']");

      if (!form || !submitBtn) return;

      submitBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Check if all required fields are filled and valid
        const isValid = checkRequiredFields(form);

        if (isValid) {
          submitBtn.setAttribute("data-kt-indicator", "on");
          submitBtn.disabled = true;

          var actionUrl = form.action;

          axios
            .post(actionUrl, new FormData(form))
            .then(function (response) {
              Swal.fire({
                text: "You have successfully signed up!",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: { confirmButton: "btn btn-primary" },
              }).then(function () {
                var redirectUrl = form.getAttribute("data-redirect-url");
                if (redirectUrl) {
                  location.href = redirectUrl;
                } else {
                  form.reset();
                }
              });
            })
            .catch(function (error) {
              Swal.fire({
                text: "There was an error, please try again.",
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: { confirmButton: "btn btn-primary" },
              });
            })
            .finally(function () {
              submitBtn.removeAttribute("data-kt-indicator");
              submitBtn.disabled = false;
            });
        } else {
          Swal.fire({
            text: "Please fill all required fields correctly.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: { confirmButton: "btn btn-primary" },
          });
        }
      });
    });
  };

  // Validate the focus/blur behavior of each input field
  var validateFormFields = function (form) {
    const fields = form.querySelectorAll("input, select, textarea");

    fields.forEach(function (field) {
      field.addEventListener("focus", function () {
        const errorMessage = document.getElementById(`${field.id}-error`);
        if (errorMessage && field.required && !field.value) {
          errorMessage.classList.remove("d-none");
          errorMessage.classList.add("d-block");
        }
      });

      field.addEventListener("blur", function () {
        const errorMessage = document.getElementById(`${field.id}-error`);
        if (!errorMessage) return;

        if (!field.value && field.required) {
          errorMessage.classList.remove("d-none");
          errorMessage.classList.add("d-block");
        } else {
          errorMessage.classList.remove("d-block");
          errorMessage.classList.add("d-none");
        }
      });

      // Specific validation for phone number
      if (field.id === "floatingInputPhoneNumber") {
        field.addEventListener("input", function () {
          if (this.value.length > 11) {
            this.value = this.value.slice(0, 11);
          }
        });

        field.addEventListener("blur", function () {
          const phoneError = document.getElementById(
            "floatingInputPhoneNumber-error"
          );
          if (!phoneError) return;

          if (this.value.length < 11) {
            phoneError.classList.remove("d-none");
            phoneError.classList.add("d-block");
          } else {
            phoneError.classList.remove("d-block");
            phoneError.classList.add("d-none");
          }
        });
      }
    });
  };

  // Check if all required fields are filled AND valid
  var checkRequiredFields = function (form) {
    const requiredFields = form.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach(function (field) {
      const errorMessage = document.getElementById(`${field.id}-error`);

      // 1. FULL NAME - Check length (minimum 5 characters)
      if (field.id === "floatingInputFullName") {
        if (!field.value || field.value.trim().length < 5) {
          isValid = false;
          if (errorMessage) {
            errorMessage.classList.remove("d-none");
            errorMessage.classList.add("d-block");
          }
        } else {
          if (errorMessage) {
            errorMessage.classList.remove("d-block");
            errorMessage.classList.add("d-none");
          }
        }
      }

      // 2. PHONE NUMBER - Check length
      else if (field.id === "floatingInputPhoneNumber") {
        if (!field.value || field.value.length < 11) {
          isValid = false;
          if (errorMessage) {
            errorMessage.classList.remove("d-none");
            errorMessage.classList.add("d-block");
          }
        } else {
          if (errorMessage) {
            errorMessage.classList.remove("d-block");
            errorMessage.classList.add("d-none");
          }
        }
      }

      // 3. EMAIL - Check valid email format
      else if (field.id === "floatingInputEmail") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!field.value || !emailRegex.test(field.value)) {
          isValid = false;
          if (errorMessage) {
            errorMessage.classList.remove("d-none");
            errorMessage.classList.add("d-block");
          }
        } else {
          if (errorMessage) {
            errorMessage.classList.remove("d-block");
            errorMessage.classList.add("d-none");
          }
        }
      }

      // 4. PASSWORD - Check all rules
      else if (field.id === "floatingInputPassword") {
        const passwordValue = field.value;
        const hasMinLength = passwordValue.length >= 15;
        const hasUppercase = /[A-Z]/.test(passwordValue);
        const hasNumber = /\d/.test(passwordValue);
        const hasSpecial = /[@$!%*?&]/.test(passwordValue);

        if (
          !passwordValue ||
          !hasMinLength ||
          !hasUppercase ||
          !hasNumber ||
          !hasSpecial
        ) {
          isValid = false;
          if (errorMessage) {
            errorMessage.classList.remove("d-none");
            errorMessage.classList.add("d-block");
          }
        } else {
          if (errorMessage) {
            errorMessage.classList.remove("d-block");
            errorMessage.classList.add("d-none");
          }
        }
      }

      // 5. CONFIRM PASSWORD - Check if matches
      else if (field.id === "floatingInputConfirmPassword") {
        const passwordField = form.querySelector("#floatingInputPassword");
        const passwordValue = passwordField ? passwordField.value : "";
        const confirmValue = field.value;

        if (!confirmValue || confirmValue !== passwordValue) {
          isValid = false;
          if (errorMessage) {
            errorMessage.classList.remove("d-none");
            errorMessage.classList.add("d-block");
          }
        } else {
          if (errorMessage) {
            errorMessage.classList.remove("d-block");
            errorMessage.classList.add("d-none");
          }
        }
      }

      // 6. CHECKBOX (Terms & Conditions)
      else if (field.type === "checkbox") {
        // Find the form this checkbox belongs to
        const formId = form.id;
        const formType = formId.replace("form_", "");
        const checkboxError = document.getElementById(
          `checkbox-${formType}-error`
        );

        if (!field.checked) {
          isValid = false;
          if (checkboxError) {
            checkboxError.classList.remove("d-none");
            checkboxError.classList.add("d-block");
          }
        } else {
          if (checkboxError) {
            checkboxError.classList.remove("d-block");
            checkboxError.classList.add("d-none");
          }
        }
      }

      // 7. ALL OTHER FIELDS - Just check if empty
      else {
        if (!field.value) {
          isValid = false;
          if (errorMessage) {
            errorMessage.classList.remove("d-none");
            errorMessage.classList.add("d-block");
          }
        } else {
          if (errorMessage) {
            errorMessage.classList.remove("d-block");
            errorMessage.classList.add("d-none");
          }
        }
      }
    });

    return isValid;
  };

  // Password Validation
  var initPasswordValidation = function () {
    const forms = ["patient", "doctor", "partner"];

    forms.forEach(function (formType) {
      const passwordInput = document.querySelector(
        `#floatingInputPassword-${formType}`
      );
      const confirmPasswordInput = document.querySelector(
        `#floatingInputConfirmPassword-${formType}`
      );
      const passwordRules = document.querySelector(
        `#password-rules-${formType}`
      );
      const confirmPasswordRules = document.querySelector(
        `#confirm-password-rules-${formType}`
      );
      const ruleLength = document.querySelector(`#rule-length-${formType}`);
      const ruleUppercase = document.querySelector(
        `#rule-uppercase-${formType}`
      );
      const ruleNumber = document.querySelector(`#rule-number-${formType}`);
      const ruleSpecial = document.querySelector(`#rule-special-${formType}`);
      const ruleMatch = document.querySelector(`#rule-match-${formType}`);

      if (!passwordInput || !passwordRules) {
        return; // Skip if elements not found for this form
      }

      passwordInput.addEventListener("focus", function () {
        passwordRules.classList.remove("d-none");
      });

      passwordInput.addEventListener("blur", function () {
        passwordRules.classList.add("d-none");
      });

      passwordInput.addEventListener("input", function () {
        const passwordValue = passwordInput.value;

        // Length rule
        if (passwordValue.length >= 15) {
          ruleLength.classList.remove("text-muted", "x");
          ruleLength.classList.add("check");
          ruleLength.innerHTML =
            '<i class="ki-outline ki-check-circle fs-3"></i> 15+ characters';
        } else {
          ruleLength.classList.remove("check");
          ruleLength.classList.add("x");
          ruleLength.innerHTML =
            '<i class="ki-outline ki-cross-circle fs-3"></i> 15+ characters';
        }

        // Uppercase rule
        const hasUppercase = /[A-Z]/.test(passwordValue);
        if (hasUppercase) {
          ruleUppercase.classList.remove("text-muted", "x");
          ruleUppercase.classList.add("check");
          ruleUppercase.innerHTML =
            '<i class="ki-outline ki-check-circle fs-3"></i> Uppercase';
        } else {
          ruleUppercase.classList.remove("check");
          ruleUppercase.classList.add("x");
          ruleUppercase.innerHTML =
            '<i class="ki-outline ki-cross-circle fs-3"></i> Uppercase';
        }

        // Number rule
        const hasNumber = /\d/.test(passwordValue);
        if (hasNumber) {
          ruleNumber.classList.remove("text-muted", "x");
          ruleNumber.classList.add("check");
          ruleNumber.innerHTML =
            '<i class="ki-outline ki-check-circle fs-3"></i> Numbers';
        } else {
          ruleNumber.classList.remove("check");
          ruleNumber.classList.add("x");
          ruleNumber.innerHTML =
            '<i class="ki-outline ki-cross-circle fs-3"></i> Numbers';
        }

        // Special character rule
        const hasSpecial = /[@$!%*?&]/.test(passwordValue);
        if (hasSpecial) {
          ruleSpecial.classList.remove("text-muted", "x");
          ruleSpecial.classList.add("check");
          ruleSpecial.innerHTML =
            '<i class="ki-outline ki-check-circle fs-3"></i> Special character (@, $, !, %, *, ?, &)';
        } else {
          ruleSpecial.classList.remove("check");
          ruleSpecial.classList.add("x");
          ruleSpecial.innerHTML =
            '<i class="ki-outline ki-cross-circle fs-3"></i> Special character (@, $, !, %, *, ?, &)';
        }

        // Also check confirm password match when password changes
        if (confirmPasswordInput && confirmPasswordInput.value) {
          checkPasswordMatch();
        }
      });

      // Confirm Password Validation
      if (confirmPasswordInput && confirmPasswordRules && ruleMatch) {
        confirmPasswordInput.addEventListener("focus", function () {
          confirmPasswordRules.classList.remove("d-none");
        });

        confirmPasswordInput.addEventListener("blur", function () {
          confirmPasswordRules.classList.add("d-none");
        });

        confirmPasswordInput.addEventListener("input", checkPasswordMatch);
      }

      function checkPasswordMatch() {
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;

        if (confirmPasswordValue && passwordValue === confirmPasswordValue) {
          ruleMatch.classList.remove("text-muted", "x");
          ruleMatch.classList.add("check");
          ruleMatch.innerHTML =
            '<i class="ki-outline ki-check-circle fs-3"></i> Passwords match';
        } else {
          ruleMatch.classList.remove("check");
          ruleMatch.classList.add("x");
          ruleMatch.innerHTML =
            '<i class="ki-outline ki-cross-circle fs-3"></i> Passwords do not match';
        }
      }
    });
  };

  return {
    init: function () {
      initRoleSwitching();
      initPasswordValidation();

      // Set up validation listeners ONCE on page load
      var forms = document.querySelectorAll("form[id^='form_']");
      forms.forEach(function (form) {
        validateFormFields(form);
      });

      handleFormSubmission();
    },
  };
})();

KTUtil.onDOMContentLoaded(function () {
  KTAuthOnboarding.init();
});

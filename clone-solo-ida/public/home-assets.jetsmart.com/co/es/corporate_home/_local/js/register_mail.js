//Validation email

const emailField = document.querySelector(".input-mail-register");
const emailError = document.getElementById("errorMessage");
const buttonAction = document.querySelector(".register-mail-button");


function getDeviceType() {
  var ua = navigator.userAgent;
  if (/(tablet|iPad|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "Tablet";
  } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return "Mobile";
  }
  return "Desktop";
}

function validateEmail() {
  if (emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.style.display = "none";
    buttonAction.removeAttribute("disabled");
    return false;
  } else {
    emailError.style.display = "block";
  }

  return true;
}

var re_mail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var mixed = /^(?=.{6}$)[a-zA-Z0-9]{4,6}\s*$/;
var names = /^\D+$/;
var numbers = /^\d+$/;

$(document).ready(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);

  $("#modal_btn").on("click touch", function () {
    $("#dev_modal").modal("hide");
  });
});

$("#cliente_correo_electronico").on("keyup", function (el) {
  $("#buttonSend").attr(
    "disabled",
    !el.target.value.match(re_mail) || !$("#termsAndConditions").is(":checked")
  );
});
$("#register_email").submit(function (e) {
  e.preventDefault();

  if ($(this)[0].checkValidity()) {
    var formData = $("#register_email").serializeArray();
    console.log("email");
    console.log(formData);
    // revalidate without html5
    var errors = false;
    var json = {
      email: "",
      "culture": _lang + "-" + _country.toUpperCase(),
      "device": getDeviceType(),
    };


    var inputsForm2 = {
      emailMob: function (input) {
        json.email = input.value.trim().toLowerCase();
        return !re_mail.test(input.value.trim());
      },
    };

    jQuery.each(formData, function (index, input) {
      for (var inputName in inputsForm2) {
        if (input.name === inputName) {
          errors |= inputsForm2[inputName](input);

          $("#" + input.name + "-error")[errors ? "removeClass" : "addClass"](
            "rt-hidden"
          );

          if (errors) return false;
        }
      }
    });

    json = { ...json };
    if (!errors) {
      $("#continueBtn").attr("disabled", true);
      $.ajax({
        type: "POST",
        headers: {
          accept: "*",
          "Access-Control-Allow-Origin": "*"
        },
        url: _func + "/submit",
        data: json,

        success: function (data) {
          var response = JSON.parse(data);
          if (response.success) {
            var emString = emData.replace("[*Email]", json.email);
            $.get(emString, function (e) {
              console.log(e, "ok");
            });
            $(".form-mail-register").remove();
            $(".success-register-text").css("display", "block");

            //Funtion remove banner form
            $(".close-regisiter-mail").on("click", function () {
              $(".register-container").remove();
            });
          } else {
            $("#continueBtn1").attr("disabled", false);
            $("#dev_text").html(error_5);
            window.stopLoader();
            $("#dev_modal").modal("show");
          }
        },
        done: function (data) {
          window.stopLoader();
        },
      });
    } else {
      console.log("error");
    }
  }
});

$('input[name="instagram"]').on('click', function (evt) {
  $(this)[0].value = "@";
});

var numberInputs = $('input[type="number"]');
numberInputs.on('keydown', function(e) {
  if (e.key.toLowerCase() === 'e') {
    e.preventDefault();
  }
});


$("#modal-reg-form").on('submit', function (e) {
  var formData = $("#modal-reg-form").serializeArray();
  json = [];
  json["name"] = formData[0].value;
  json["lastname"] = formData[1].value;
  json["email"] = formData[2].value;
  json["country"] = _country.toUpperCase();
  
  json = { ...json };
  $.ajax({
    type: "POST",
    headers: {
      accept: "*",
      "Access-Control-Allow-Origin": "*"
    },
    url: _func + "/register",
    data: json,

    success: function (data) {
      console.log("salesmanago success");
      console.log(data);  
    },
    done: function (data) {
      console.log("done");
      console.log(data);
    },
  });
});
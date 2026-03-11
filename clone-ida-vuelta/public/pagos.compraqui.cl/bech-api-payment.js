/**
 * BechApiPayment class type
 *  usage:
 *
 *        class type
 *
 *
 */

const CALLBACK_TYPES = {
  // when it's all OK, with a object value
  OK: 'OK',
  // when it's all OK, with String value (message)
  OK_MSG: 'OK_MSG',
  // when send an alert message, with a String value (message)
  ALERT_MSG: 'ALERT_MSG',
  // when a general error occurs, with a object value
  ERROR: 'ERROR',
};

privateVarGen = undefined;
var intento = 0;

$(window).on('load', function (e) {
  //problema productivo , se comenta codigo
  // Cookies.set('secure', true);
  // Cookies.set('samesite', 'None');
  //$('#contenedor').css('display', 'block');
  const params = new URLSearchParams(window.location.search);
  let token = params.get('token');
  let enviromentApi = 'https://api-pagos.compraqui.cl/prod';
  let funcion = params.get('function');
  //console.log(token);
  let jwt = params.get('jwt');
  let jwtparse = undefined;
  if (jwt != null){
    var base64Url = jwt.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    jwtparse = JSON.parse(jsonPayload);
  }
  if (funcion == 'EC') {
    const browserTZ = new Date().getTimezoneOffset();
    const browserLanguage = navigator.language || navigator.userLanguage;
    const browserJavaEnabled = navigator.javaEnabled();
    const browserScreenHeight = 2160;
    const browserScreenWidth = 3840;
    const browserColorDepth = screen.colorDepth;
    $('#section-tpago').hide();
    $('.msd-spinner').show();
    $.ajax({
      url: `${enviromentApi}/api/v2/3ds/token2/`,
      type: 'GET',
      crossDomain: true,
      data: {
        data: token,
        browserTZ,
        browserLanguage,
        browserJavaEnabled,
        browserScreenHeight,
        browserScreenWidth,
        browserColorDepth,
      },
      dataType: 'json',
      contentType: 'application/json;charset=UTF-8',
      async: true,
      success: function (data) {
        // $(window).on('load', function (e) {
        //   //problema productivo , se comenta codigo
        //   // Cookies.set('secure', true);
        //   // Cookies.set('samesite', 'None');
        //   console.log($('.modal_bech').html());
        // });
        // $(document).ready(function(){
        //   $('iframe#inlineFrame').load(function(){
        //       $('iframe#inlineFrame').contents().find('body').html('Hey, i`ve changed content of <body>! Yay!!!');
        //   });
        // });
        // $().ready(function () {
        //   $("#inlineFrame").ready(function async (e) { //The function below executes once the iframe has finished loading
        //     console.log(e)
        //     console.log($("#inlineFrame").contents().find('.modal_bech btn-pago').html());
        //     $('#inlineFrame').contents().find('.modal_bech btn-pago').html('Hey, i`ve changed content of <body>! Yay!!!');
        //     var iframe = document.getElementById('inlineFrame');
        //     console.log(iframe.contentWindow.document.getElementById('resumen-pago-monto-total'))
        //     var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        //     if (!iframeDocument) {
        //       throw "iframe couldn't be found in DOM.";
        //   }

        //   var iframeContent = iframeDocument.getElementById('Body');
        //   console.log(iframeContent.html());
        //   });
        // });
        if (data.transStatus === 'N' || data.transStatus === 'I') {
          $('.msd-spinner').hide();
          $('#contenedor').show();
          $('#contenedor').html(`
                    <head>
                      <link rel='stylesheet' type='text/css' href='https://d1l8v26u22dzhh.cloudfront.net/css/estilos.css'>
                    </head>
                    <link rel='stylesheet' type='text/css' media='screen' href='https://d1l8v26u22dzhh.cloudfront.net/css/estilos.css'>
                    <body>
                      <div class="overlay visible" id="modal-error">
                        <div class="modal modal__min">
                          <header>
                            <img src="https://d1l8v26u22dzhh.cloudfront.net/img/logo.svg" alt="">
                          </header>
                          <img src="https://d1l8v26u22dzhh.cloudfront.net/img/ico-error-transaccion.svg" alt="Error en transacción">
                          <h3>Por temas de seguridad, tu transacción no ha sido procesada.</h3>
                        </div>
                      </div>
                    </body>
                  `);
          window.location.replace(data.urlRedirect);  
        } else if (data.transStatus === 'R' || data.transStatus === 'U') {
          $('.msd-spinner').hide();
          $('#contenedor').show();
          $('#contenedor').html(`
                    <head>
                      <link rel='stylesheet' type='text/css' href='https://d1l8v26u22dzhh.cloudfront.net/css/estilos.css'>
                    </head>
                    <link rel='stylesheet' type='text/css' media='screen' href='https://d1l8v26u22dzhh.cloudfront.net/css/estilos.css'>
                    <body>
                      <div class="overlay visible" id="modal-error">
                        <div class="modal modal__min">
                          <header>
                            <img src="https://d1l8v26u22dzhh.cloudfront.net/img/logo.svg" alt="">
                          </header>
                          <img src="https://d1l8v26u22dzhh.cloudfront.net/img/ico-error-transaccion.svg" alt="Error en transacción">
                          <h3>No pudimos efectuar el pago, por favor inténtalo más tarde.</h3>
                        </div>
                      </div>
                    </body>
                  `);
          window.location.replace(data.urlRedirect); 
        } else if (data.transStatus === 'Y' || data.transStatus === 'A') {
          setTimeout(() => {
            $('#contenedor').html(
              '<div class="msd-spinner" style="overflow-x: visible;overflow-y: visible;padding-top: 100%">' +
              '<div class="msd-spinner__loader">' +
              '<svg class="circle-container">' +
              '<circle class="stroke" cx="24" cy="24" r="20" fill="none" stroke-miterlimit="10" />' +
              '</svg>' +
              '<svg class="logo-spinner" width="24" height="24" viewBox="0 0 24 24">' +
              '<defs>' +
              '<circle id="prefix__a" cx="12" cy="12" r="12" />' +
              '</defs>' +
              '<g fill="none" fill-rule="evenodd">' +
              '<path d="M12 34c12.15 0 22-9.85 22-22a21.918 21.918 0 00-5.563-14.623C24.407-7.149 18.537-10 12-10-.15-10-10-.15-10 12" stroke="#FF9100" stroke-width="4" fill="#FFF" stroke-linecap="round" stroke-linejoin="round" />' +
              '<g>' +
              '<mask id="prefix__b" fill="#fff">' +
              '<use xlink:href="#prefix__a" />' +
              '</mask>' +
              '<use fill="#FFF" xlink:href="#prefix__a" />' +
              '<g mask="url(#prefix__b)">' +
              '<path fill="#FFF" d="M-1-1h26v26H-1z" />' +
              '<g fill-rule="nonzero">' +
              '<path d="M-.188 11.894L8.5 8.156v-2.77c2.806-.434 5.037-1.735 6.964-3.838l8.723 7.042V-.154L-.188-.188v12.082z" fill="#FB1D38" />' +
              '<path d="M8.534 19.838h6.964V1.58c-1.96 2.136-4.192 3.438-6.964 3.839v2.77l-8.722 3.704v2.704L8.5 10.826v-2.67l2.772-1.201v2.67L8.5 10.826v2.637l2.772-1.201v2.636L8.5 16.1v-2.637l-8.688 3.772v2.636L8.5 16.1v3.738h.034z" fill="#FFF" />' +
              '<path d="M8.534 16.1v3.738H-.188L8.534 16.1zm2.772-3.838v2.636L8.5 16.1v-2.637l-8.688 3.772v-2.637L8.5 10.826V8.19l2.806-1.202v2.637l-2.772 1.201v2.637l2.772-1.201zM15.498 19.837h8.688V8.591l-8.688-7.01z" fill="#FF9100" />' +
              '<path fill="#0454B4" d="M15.498 19.837H-.188v4.35h24.373v-4.35z" />' +
              '</g>' +
              '</g>' +
              '</g>' +
              '</g>' +
              '</svg>' +
              '</div>' +
              '<div class="msd-spinner__text">Autorizando pago</div>' +
              '<form id="formPost" action="' +
              `${enviromentApi}/api/v2/pagar2` +
              '" method="POST" autocomplete="off">' +
              '<input type="hidden" name="rd" value="' +
              btoa(JSON.stringify({ token })) +
              '">' +
              '<noscript>' +
              '<h2> JavaScript is currently disabled or is not supported by your browser.<br> </h2>' +
              '<h3>Please click Submit to continue the processing of your 3-D Secure transaction.</h3>' +
              '<input type="submit" value="Submit">' +
              '</noscript>' +
              '</form>' +
              '<script type="text/javascript"> $(".msd-spinner").show(); document.forms["formPost"].submit();</script>'
            );
          }, 3000);
        } else {
          const { browserChallengeUrl, browserChallengeToken } = data;
          $('body').html(
            '<div class="msd-spinner" style="overflow-x: visible;overflow-y: visible;padding-top: 20%">' +
              '<div class="msd-spinner__loader">' +
              '<svg class="circle-container">' +
              '<circle class="stroke" cx="24" cy="24" r="20" fill="none" stroke-miterlimit="10" />' +
              '</svg>' +
              '<svg class="logo-spinner" width="24" height="24" viewBox="0 0 24 24">' +
              '<defs>' +
              '<circle id="prefix__a" cx="12" cy="12" r="12" />' +
              '</defs>' +
              '<g fill="none" fill-rule="evenodd">' +
              '<path d="M12 34c12.15 0 22-9.85 22-22a21.918 21.918 0 00-5.563-14.623C24.407-7.149 18.537-10 12-10-.15-10-10-.15-10 12" stroke="#FF9100" stroke-width="4" fill="#FFF" stroke-linecap="round" stroke-linejoin="round" />' +
              '<g>' +
              '<mask id="prefix__b" fill="#fff">' +
              '<use xlink:href="#prefix__a" />' +
              '</mask>' +
              '<use fill="#FFF" xlink:href="#prefix__a" />' +
              '<g mask="url(#prefix__b)">' +
              '<path fill="#FFF" d="M-1-1h26v26H-1z" />' +
              '<g fill-rule="nonzero">' +
              '<path d="M-.188 11.894L8.5 8.156v-2.77c2.806-.434 5.037-1.735 6.964-3.838l8.723 7.042V-.154L-.188-.188v12.082z" fill="#FB1D38" />' +
              '<path d="M8.534 19.838h6.964V1.58c-1.96 2.136-4.192 3.438-6.964 3.839v2.77l-8.722 3.704v2.704L8.5 10.826v-2.67l2.772-1.201v2.67L8.5 10.826v2.637l2.772-1.201v2.636L8.5 16.1v-2.637l-8.688 3.772v2.636L8.5 16.1v3.738h.034z" fill="#FFF" />' +
              '<path d="M8.534 16.1v3.738H-.188L8.534 16.1zm2.772-3.838v2.636L8.5 16.1v-2.637l-8.688 3.772v-2.637L8.5 10.826V8.19l2.806-1.202v2.637l-2.772 1.201v2.637l2.772-1.201zM15.498 19.837h8.688V8.591l-8.688-7.01z" fill="#FF9100" />' +
              '<path fill="#0454B4" d="M15.498 19.837H-.188v4.35h24.373v-4.35z" />' +
              '</g>' +
              '</g>' +
              '</g>' +
              '</g>' +
              '</svg>' +
              '</div>' +
              '<div class="msd-spinner__text">Autorizando pago</div>' +
              '<form id="formPost" action="' +
              browserChallengeUrl +
              '" method="POST" autocomplete="off">' +
              '<input type="hidden" name="browserChallengeToken" value="' +
              browserChallengeToken +
              '">' +
              '<noscript>' +
              '<h2> JavaScript is currently disabled or is not supported by your browser.<br> </h2>' +
              '<h3>Please click Submit to continue the processing of your 3-D Secure transaction.</h3>' +
              '<input type="submit" value="Submit">' +
              '</noscript>' +
              '</form>' +
              '<script type="text/javascript"> $(".msd-spinner").show(); document.forms["formPost"].submit();</script>'
          );
        }
      },
    });
  }
  else if(jwtparse != null){
    if(jwtparse.function == 'ECMODAL'){
      var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      var eventer = window[eventMethod];
      var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
      eventer(messageEvent,function(e) {
        var key = e.message ? "message" : "data";
        var data = e[key];
        console.log(data);
        if(data.event_id == "linkUrlRedirect"){
          console.log(data.data);
          console.log(data.data.value);
          window.location.replace(data.data.value);  
        }
        //run function//
      },false);
      let token = jwtparse.token;
      let enviromentFront = jwtparse.enviromentFront;
      let data = { token, enviromentFront}
      controlSocket(data);
    }
  }
});
const createFrame = (token, enviromentFront) => {
  $('#app-compraqui').append(`
    <iframe style="border:none; display: block; margin: 0 auto;" 
    id="inlineFrame" 
    style="border: none; display: block; margin: 0px auto; overflow: auto;" 
    src="${enviromentFront}/indexbap.html?token=${token}&enviromentFront=${enviromentFront}&function=EC" width="100%" height="100%"></iframe>
  `);
};

const controlSocket = async (data) => {
  const { token, enviromentFront } = data;
  createFrame(token,enviromentFront);
};

const showModal = () => {
  $('#app-compraqui').append(`

    <script>
        iFrameResize({ scrolling: true, autoResize: true })
    </script>`);
};
const BechApiPayment = function () {
  const publicMethod = {};
  const privateVar = {};

  const str2ab = (str) => {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  };
  const getSpkiDer = (spkiPem) => {
    const pemHeader = '-----BEGIN PUBLIC KEY-----';
    const pemFooter = '-----END PUBLIC KEY-----';
    var pemContents = spkiPem.substring(
      pemHeader.length,
      spkiPem.length - pemFooter.length
    );
    var binaryDerString = window.atob(pemContents);
    return str2ab(binaryDerString);
  };
  const encryptData = async (data) => {
    const ciphertext = JSON.stringify(data);
    try {
      const pub = await importPublicKey(privateVar.publicKey);
      const encrypted = await encryptRSA(
        pub,
        new TextEncoder().encode(ciphertext)
      );
      var uint8View = new Uint8Array(encrypted);
      const dataBuffer = {
        type: 'Buffer',
        data: JSON.parse('[' + uint8View.toString() + ']'),
      };
      return window.btoa(JSON.stringify(dataBuffer));
    } catch (error) {
      console.log(error);
    }
  };
  const encryptRSA = async (key, plaintext) => {
    let encrypted = await window.crypto.subtle.encrypt(
      {
        name: 'RSA-OAEP',
      },
      key,
      plaintext
    );
    return encrypted;
  };

  const importPublicKey = async (spkiPem) => {
    return await window.crypto.subtle.importKey(
      'spki',
      getSpkiDer(spkiPem),
      {
        name: 'RSA-OAEP',
        hash: 'SHA-256',
      },
      true,
      ['encrypt']
    );
  };

  
  // public method callPayment()
  /**
  datos definition: {
    ntarjeta, 
    fecha, 
    cvv, 
    cuotas,
    tipoTarjeta,
    marcaTarjeta, 
    emisorTarjeta
  },
  callbackOK(dato):
    callback Ok
  */
  publicMethod.callPayment = async (datos) => {
    intento = intento + 1;
    if(intento > 1) {
      console.log("callPayment ya ejecutado");
      return;
    }
    let datosT = {
      ntarjeta: datos.ntarjeta,
      fecha: datos.fecha,
      cvv: datos.cvv,
      cuotas: datos.cuotas,
      tipoTarjeta: datos.tipoTarjeta,
      marcaTarjeta: datos.marcaTarjeta,
      emisorTarjeta: datos.emisorTarjeta,
      token: privateVar.token,
    };
    const dataEncrypt = await encryptData(datosT);
    // Inicia pago preguntando a 3ds por el desafio
    const dataString = { data: dataEncrypt, token: privateVar.token };
    const { token, tokenValue, enviromentFront } = privateVar;
    const { wss } = privateVar.dataIntencionPago;
    //showModal();
    $.ajax({
      url: `${privateVar.enviromentApi}/api/v2/tarjetapago2`,
      type: 'POST',
      crossDomain: true,
      data: JSON.stringify(dataString),
      dataType: 'json',
      contentType: 'application/json;charset=UTF-8',
      success: function (data) {
        console.log('Datos almacenados correctamente');
        // Datos almacenados correctamente
        // Inicia pago preguntando a 3ds por el desafio
        window.location.replace(`${enviromentFront}/indexbapweb.html?jwt=${data.jwt}`);
      },
      error: function (error) {
        // reject({ status: CALLBACK_TYPES.ERROR, error });
        console.info('error', error);
      },
    });
    
  };

  /********************* */
  publicMethod.typeCard = async (tarj) => {
    const promise = new Promise((resolve, reject) => {
      console.log('card:', tarj);
      const tarjeta = tarj.replace(/ /g, '').substring(0, 6);
      const urlTypeCard = `${privateVar.enviromentApi}/api/v2/validPrefix/prefijo/?prefijo=${tarjeta}`;
      console.log('validando tarjeta ');
      $.ajax({
        url: urlTypeCard,
        type: 'GET',
        crossDomain: true,
        async: true,
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
          console.log('data respuesta:', data);
          if (data.code) {
            resolve({ status: CALLBACK_TYPES.ALERT_MSG, result: data.msg });
          } else {
            resolve({ status: CALLBACK_TYPES.OK, result: data });
          }
        },
        error: function (error) {
          reject({ status: CALLBACK_TYPES.ERROR, error });
        },
      });
    });
    return promise;
  };
  /**
   * initValidation()
   * @param {*} callback
   *  callback OK of the transaction
   *    parameters (CALLBACK_TYPES, obj)
   */
  publicMethod.initValidation = async (dataIn) => {
    console.log('intentionPayment->data:', dataIn);
    privateVar.dataIntencionPago = dataIn;
    privateVar.enviromentFront = dataIn.enviromentFront;
    privateVar.token = dataIn.token;
    privateVar.enviromentApi = 'https://api-pagos.compraqui.cl/prod';
    console.log('initValidation->token:', privateVar.token);
    const promise = new Promise((resolve, reject) => {
      const datos = { token: privateVar.token };
      if (privateVar.initValidationData !== undefined) {
        resolve({
          status: CALLBACK_TYPES.OK,
          result: privateVar.initValidationData,
        });
        return;
      }
      $.ajax({
        url: `${privateVar.enviromentApi}/api/v2/validToken`,
        type: 'POST',
        crossDomain: true,
        data: JSON.stringify(datos),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
          console.log('initValidation', data);
          if (data.status == 'nook') {
            reject({
              status: CALLBACK_TYPES.ALERT_MSG,
              result:
                'El comercio presenta problema en el pago, inténtalo más tarde',
            });
          } else {
            privateVar.publicKey = data.publicKey;
            privateVar.initValidationData = data;
            resolve({ status: CALLBACK_TYPES.OK, result: data });
          }
        },
        error: function (error) {
          reject({ status: CALLBACK_TYPES.ERROR, error });
        },
      });
    });
    return promise;
  };
  /************************************************ */

  publicMethod.generarQR = (id, w, h) => {
    const { token, enviromentFront, wss } = privateVar.dataIntencionPago;
    privateVar.dataIntencionPago;
    let socket = new WebSocket(wss);
    socket.onopen = function (e) {
      console.log('[open] Connection established - ' + token);
      console.log(e);
      console.log('Sending to server');
      console.log('hora conexión', new Date().toISOString());
      socket.send(JSON.stringify({ action: 'idpago', data: token }));
    };
    socket.onmessage = function (event) {
      const { url, status } =
        event.data == ':P' ? { undefined, undefined } : JSON.parse(event.data);
      console.log(event);

      if (status == 'HC') {
        console.log('HC: OK');
      } else {
        if (status == 'QROK') {
          console.log('QROK ', status);
          console.log('enviando msj');
          sendMessage('ocultar');
        } else {
          if (url == undefined) {
            console.log('not token');
          } else {
            var token = url.split('jwt=')[1];
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(
              atob(base64)
                .split('')
                .map(function (c) {
                  return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
            );
            var jwtparse = JSON.parse(jsonPayload);
            if (
              jwtparse.code == 'ADQ.PGO.0000' ||
              jwtparse.code == 'ADQ.NQR.0000'
            ) {
              console.log('redireccion');
              console.log(`[message] Data received from server: ${url}`);
              window.location.replace(url);
              socket.close(1000);
            } else {
              //showModal(dataGen);
              setTimeout(
                (window.frames[
                  'myFrame'
                ].location = `${enviromentFront}/?opcion_pago=${opcion_pago}&token=${tokenGen}&reintento=${true}&oc=${
                  jwtparse.oc
                }`),
                5000
              );
            }
          }
        }
      }
    };
    socket.onclose = function (event) {
      console.log('hora desconexion', new Date().toISOString());
      if (event.wasClean) {
        console.log(
          `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
        );
        $('iframe#inlineFrame').attr('src', `${enviromentFront}/error.html`);
      } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        $('iframe#inlineFrame').attr('src', `${enviromentFront}/error.html`);
        console.log('[close] Connection died');
      }
    };
    socket.onerror = function (error) {
      alert(`[error] ${error.message}`);
    };
    const codigo = 'VTQR0003|' + token;
    let qrcode = new QRCode(document.querySelector(id), {
      text: codigo,
      width: w,
      height: h,
      correctLevel: QRCode.CorrectLevel.H,
    });
  };

  publicMethod.getQRText = () => {
    const { token } = privateVar;
    return 'VTQR0003|' + token;
  };
  publicMethod.init = () => {
    return 'BechApiPayment iniciado';
  };

  return publicMethod;
};

$(window).on('load', function (e) {
  DEBUG = true;
  if (!DEBUG) {
    console = console || {};
    console.log = function () {};
  }
});

console.info('Cargando->BechApiPayment:', new BechApiPayment().init());

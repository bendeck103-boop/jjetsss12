var pop_up;

$(document).ready(function () {
    let jsData = document.querySelector('.js-data');
    let culture = jsData.dataset.culture.split("/")[1];

    let cookie1 = getCookie("mod-reg-"+culture);
    let cookie2 = getCookie("mod-newRoutes");

    var newRoutesActive = jsData.dataset.newRoutesActive;
    var pop_ups_rutas = JSON.parse(jsData.dataset.popupRutas);
    var activeUser ; 
    if (jsEnvironmentRT['userInfo']['IsBancoEstadoMember'] == true) {
        activeUser = 'bancoestado';
    }
    if (jsEnvironmentRT['userInfo']['IsDiscountClubStandardMember'] == true) {
        activeUser = 'discountclub_standard';
    }
    if (jsEnvironmentRT['userInfo']['IsDiscountClubGroupMember'] == true) {
        activeUser = 'discountclub_grupal';
    }
    if (jsEnvironmentRT['userInfo']['IsPeruCompraMember'] == true || jsEnvironmentRT['userInfo']['IsPeruCompraAdmin'] == true) {
        activeUser = 'perucompras';
    }
    if (jsEnvironmentRT['userInfo']['RoleCode'] == "CUAD" || 
                jsEnvironmentRT['userInfo']['RoleCode'] == "CUGS" ||
                jsEnvironmentRT['userInfo']['RoleCode'] == "CUGG" ) {
        activeUser = 'empresas_agencias';
    }
    if (jsEnvironmentRT['userInfo']['RoleCode'] == "WWWM" && 
            jsEnvironmentRT['userInfo']['IsBancoEstadoMember'] == false && 
            jsEnvironmentRT['userInfo']['IsDiscountClubStandardMember'] == false && 
            jsEnvironmentRT['userInfo']['IsDiscountClubGroupMember'] == false && 
            jsEnvironmentRT['userInfo']['IsPeruCompraMember'] == false && 
            jsEnvironmentRT['userInfo']['IsPeruCompraAdmin'] == false ) {
            activeUser = 'personas';
        }
    if ((jsEnvironmentRT['userInfo']['IsLoggedIn'] != undefined && jsEnvironmentRT['userInfo']['IsLoggedIn'] == false)) {
        activeUser = 'no_logeado';
    }
    for (var i in pop_ups_rutas) {
        for (var y in pop_ups_rutas[i]['typesUserLocation']) {
            if (pop_ups_rutas[i]['typesUserLocation'][y]['codename'] == activeUser ) {
                pop_up = pop_ups_rutas[i];
                var validacioncodename = true;
            }
        }
    }

    if (newRoutesActive === "yes" && cookie1 !== "" && cookie2 == "" && validacioncodename) {
        //Incluir si existe el usuario
        let urlImagen = pop_up.img[0].url;
        //let html_title2 = '<svg fill="#ac272f" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297.00 297.00" xml:space="preserve" stroke="#00ff00" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><g><path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645 c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645 C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892 c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"></path><path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614 c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901 c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104 C179.265,127.948,165.464,141.901,148.5,141.901z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg><span>'+pop_up.txtTitle2+'</span>';
            
        //$('#newRoutesTitle1 strong').text(pop_up.txtTitle1);
        //$('#newRoutesTitle2 strong').html(html_title2);
        if (pop_up.txtButton != '') {
            $('#btnNewRoutes').find('.buy-text').text(pop_up.txtButton);    
        }else{
            $('#btnNewRoutes').addClass('rt-hidden');
        }

        $('#pop-up-img').css("background-image", "url(" + urlImagen + ")");
        setTimeout(function(){
            // $('#newRoutes').modal('show');
            /* $('#newRoutes').removeClass('rt-hidden'); */
        }, 2000);
    }
});

$("#btnNewRoutes").on("click", function (e) {
    //var jsData = document.querySelector('.js-data');
    //var culture = jsData.dataset.culture;
    //var slug = jsData.dataset.slug;
    var deeplink = pop_up.link;
    //window.location.replace(culture + "/" + slug);
    window.location.href = deeplink;
});

$('#closeNewRoutes').on('click', function (e) {
    setCookie("mod-newRoutes", "closed", 30);
    $('#newRoutes').addClass('rt-hidden');
    console.log(getCookie("mod-newRoutes"));
});

// $('#newRoutes').on('hidden.bs.modal', function (event) {
//     setCookie("mod-newRoutes", "closed", 30);
//     console.log(getCookie("mod-newRoutes"));
// })

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
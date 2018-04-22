var antalSten = 0;
var myTimer;
var erDerSamletNok = false;


$(window).on("load", startHistorie);



function startHistorie() {


    console.log("Klar");

    $("#baggrundslyd")[0].play();
    $("#baggrundslyd")[0].volume = 0.9;


    $("#man_sprite").addClass("man_walk");

    $("#man_container").addClass("man_move_right");

    $("#man_container").on("animationend", mandSaetterSig);


    $("#fodtrin")[0].play();
    $("#fodtrin")[0].volume = 0.5;




    setTimeout("buske_lyd", 2000);

}




function mandSaetterSig() {

    console.log("mandSaetterSig");

    $("#man_container").off("animationend", mandSaetterSig);

    $("#man_container").removeClass("man_move_right");

    $("#man_container").addClass("man_position_in");

    $("#man_sprite").addClass("man_sit_down");




    $("#fodtrin").off("ended");
    $("#buske_lyd")[0].play();
    $("#buske_lyd")[0].volume = 0.10;


    setTimeout("bjornKommerInd", 2000);

    $("#man_container").on("animationend", bjornKommerInd);
}





function bjornKommerInd() {

    console.log("bjornKommerInd");

    $("#man_container").off("animationend", bjornKommerInd);

    $("#fodtrin").off("ended");
    $("#buske_lyd").off("ended");

    $("man_sprite").removeClass("man_sit_down");
    $("man_container").addClass("man_stand");

    $("#bear_container").addClass("bear_move_right");

    $("#bear_sprite").addClass("bear_walk");


    console.log("bjorn broler");

    $("#broel")[0].play();
    $("#broel")[0].volume = 0.9;

    $("#man_container").on("animationend", mandSerBjornen);

}


function mandSerBjornen() {

    console.log("Manden ser bjørnen");

    $("#man_container").off("animationend", mandSerBjornen);

    $("#bear_sprite").removeClass("bear_walk");

    $("#man_sprite").addClass("man_turn");

    $("#man_sprite").addClass("man_stand");



    console.log("kan klikke på sten og");
    $("#sten").addClass("puls");
    $("#sten_2").addClass("puls");
    $("#sten_3").addClass("puls");
    $("#sten_4").addClass("puls");
    $("#sten_5").addClass("puls");



    $("#skriger")[0].play();
    $("#skriger")[0].volume = 0.9;



    randomValg();

}


function randomValg() {
    console.log("Et randomValg");

    var randomTal = Math.random();
    console.log(randomTal);

    if (randomTal >= 0.5) {
        console.log("Over 0.5");
        samlerSten();
    } else {
        console.log("Under 0.5");
        bliverFanget();

    }
}



//spil lyd: Dramatisk-musik
function samlerOp() {

    console.log("Samler træstamme op");

    $("#man_container").off("animationend", samlerOp);

    $("#man_sprite").addClass("man_samler_op");


    $("#traestamme").addClass("puls");


    $("#skriger")[0].play();
    $("#skriger")[0].volume = 0.8;

    $("#bear_container").on("animationend", mandSlipperVaek);
}



function samlerSten() {

    console.log("kan samle sten");

    $("man_container").addClass("man_position_in");
    $("man_sprite").addClass("samler_sten");

    $("#sten").addClass("puls");
    $("#sten_2").addClass("puls");
    $("#sten_3").addClass("puls");
    $("#sten_4").addClass("puls");
    $("#sten_5").addClass("puls");

    $("sten").on("click", klikPaaSten);

}

function klikPaaSten() {
    console.log("klik på sten");
    $("#sten").off("click", klikPaaSten);
    $(this).hide();
    antalSten++;


    if (antalSten >= 4) {
        erDerSamletNok = true;
        if (erDerSamletNok) {
            succes();
        } else {
            console.log("klik på sten igen");

        }
    }

    function succes() {

    }


    $("man_container").on("animationend", kasterSten);
}

function kasterSten() {

}





function mandSlipperVaek() {

    console.log("Mand slipper væk");

    $("#mandSlipperVaek").off("click", mand_slipper_vaek);

    $("man_container").addClass("man_run_right");
    $("#man_sprite").addClass("man_run");

}

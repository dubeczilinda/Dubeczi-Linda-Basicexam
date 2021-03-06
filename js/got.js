function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    console.log(userDatas);
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */
    getNames(userDatas);
    createDiv(userDatas);
}

// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('/json/characters.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */

function getNames() {
    for (var i = 0; i < userDatas.length; i++){
        pNames = document.createElement('p');
        if(userDatas[i].dead === "") {
            pNames.innerHTML = userDatas[i].name;
            document.querySelector("#map").appendChild(pNames);
        }
    }
}

function createDiv() {
        for (var i = 0; i < userDatas.length; i++) {
            divPortrait = document.createElement('div');
            if(userDatas[i].dead === "") {
            divPortrait.innerHTML = userDatas[i].portrait;
            
        }
    }
}

// keresés
function searchCharacter(){
    for (var i = 0; i < userDatas.length; i++){
        var targetCharacter;
        if(parse(document.getElementById("#search").innerHTML) == userDatas[i].name){
            targetCharacter = userDatas[i].name;
        }
        else {
            targetCharacter.innerHTML = 'Character not found';
        }
    }
}
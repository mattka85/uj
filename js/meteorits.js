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
    var data = xhttp.responseText;
    // Innen, ide dolgozz... Itt hívd meg a függvényeid stb. A json file tartalma innen érhető csak
    // Live servert használd mindig
    var meteoritList = JSON.parse(data);
    
    function createTable() {
        var table = '';
        for (var i = 0; i < meteoritList.length; i++) {
            table += `<tr>
        <td>${meteoritList[i].id}</td>
        <td>${meteoritList[i].mass}</td>
        <td>${meteoritList[i].name}</td>
        <td>${meteoritList[i].nametype}</td>
        <td>${meteoritList[i].recclass}</td>
        <td>${meteoritList[i].reclat}</td>
        <td>${meteoritList[i].reclong}</td>
        <td>${meteoritList[i].year}</td>
      </tr>`;
        }
        document.querySelector('#tablePlace').innerHTML = table;

    }
    createTable();
    
    function sumMass() {
        var summary = 0;
        
        var allMass = [];
        for (var k = 0; k < meteoritList.length; k++) {
            var d = parseInt(meteoritList[k].mass);
            if (!isNaN(d)){
            allMass.push(meteoritList[k].mass);
                }
        for (j in allMass){                     
                summary += parseInt(allMass[j]);
            }

           
            var averagemass = summary / meteoritList.length;
            var minmasses = Math.min(parseInt(allMass));
            var maxmasses= allMass.reduce(function(a, b) {
                return Math.max(a, b);
            })
        }

               document.querySelector("#allmass").innerHTML = summary;
               document.querySelector("#avmass").innerHTML = averagemass;
               document.querySelector("#minmass").innerHTML = minmasses;
               document.querySelector("#maxmass").innerHTML = maxmasses;
    }
    sumMass();
    function number1990(){
        for (var g = 0; g < meteoritList.length; g++) {
            allMass.push(meteoritList[g].year);
                }

    }
    
    
}









getData('/js/meteorits.json', successAjax);
/* 
    A kapott JSON file a Föld-be csapódott meteoritok adatait tartalmazza.

    FELADATOK:
    1. Írasd ki egy táblázatba a következő adatait a meteoritoknak:
        id
        mass
        name
        nametype
        recclass
        reclat
        reclong
        year

     Pozitív, ha ezeket az elemeket nem az innerHTML segítségével hozod létre. 

    2. A táblázatban formázd a tömeget 2 tizedes jegy pontosan. Ha kell kerekíts a legközelebbi egészre.
       A matamatikai kerekítés szabályait használd. Ha valahol egész érték van, ott is legyen a 00 kiiratva
       az egész érték után .
       Formázd a dátumot az alábbi formátumba: 1990. 01. 02. 
    
    3. A táblázat fejlécére kattintva növekvő sorrendbe lehessen rendezni a táblázat adatait az alábbi
       meteorit tulajdonságok szerint: id, mass, name, és reclass.
       Az id és a mass szerinti rendezés számok alapján rendezzen.

    4.  Valósítsd meg a rendezést úgy, hogy nem csak növekvő, hanem csökkenő sorrendbe is lehessen az adatokat rendezni.
        Ha az adatok még nincsenek rendezve, akkor az adott fejlév/tulajdonság alapján növekvő sorrendbe rendezze az adatokat kattintásra.
        Amennyiben még egyszer ugyanarra a fejlécre kattintanak, akkor a sorrend legyen csökkenő. És így tovább....
        Amennyiben egy új fejlécre kattintanak, először mindig növekvő sorrend szerint legyenek az  adatok rendezve.

    5. A táblázat alá az alábbi adatokat ki kell iratni/számolni:

        Az összes meteorit összsúlya
        A legkönyebb meteorit súlya
        A legnehezebb meteorit súlya
        A meteoritok súlyának átlaga
        Hány darab meteorit csapódott be 1990-ben
        Hány darab meteorit súlya legalább 10000

        Ezeket az elemeket ne az innerHTML segítségével hozd létre. Használd az ismert node metódusokat. KÖTELEZŐEN!

    6. Legyen szép a táblázat és az adatok. HAsználj CSS-t a formázáshoz.

    7. Töltsd fel az elkészült fileokat egy github repoba, és küld el a repo elérhetőségét.

    8. Szusszanj egyet.

*/
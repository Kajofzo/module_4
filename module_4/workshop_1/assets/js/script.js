



var voornaam = "Kaj"; // wijzig dit in jouw eigen voornaam
var tussenvoegsel = "nvt"; // wijzig dit in jouw eigen eventuele tussenvoegsel
var achternaam = "Boogaard"; // wijzig dit in jouw eigen achternaam
var volledigeNaam = voornaam +" "+ achternaam ; // plak hier de 3 bovenstaande variabelen aan elkaar, met spaties
var geboortedag = "28"; // je geboortedag
var geboortemaand = "Maart"; // je geboortemaand
var geboortejaar = "2005"; // je geboortejaar
var huidig_jaartal = "2022"// het huidige jaar;
var leeftijd = huidig_jaartal - geboortejaar ; // bereken hier jouw leeftijd op basis van de eerder ingevulde geboortegegevens.
var dag_van_het_jaar = dag_van_het_jaar_func(); // bereken hier hoeveelste dag van dit kalenderjaar het is
var straat = "de beun"; // je straat;
var huisnummer = "22"; // je huisnummer;
var woonplaats = "Houten"; // je woonplaats;
var woonachtig_in_utrecht = woonachtig_in_utrecht_func() ; // check hier dmv een boolean of jouw woonplaats gelijk is aan "Utrecht"
var aantal_studenten_in_deze_klas = 20;
var kosten_van_frikandelbroodje = 1.76;
var totale_lunchkosten = aantal_studenten_in_deze_klas * kosten_van_frikandelbroodje; // bereken hier het totaalbedrag als iedere student 2 frikandelbroodjes zou kopen

  // toon de waardes hieronder op het scherm gescheiden door het html: '<br>' element voor een nieuwe-regel
  
  document.write("Voornaam: " + voornaam);
  document.write("<br>");
  document.write("Achternaam: " + achternaam);
  document.write("<br>");
  document.write("Volledige naam: " + volledigeNaam);
  document.write("<br>");
  document.write("Geboorte dag: " + geboortedag);
  document.write("<br>");
  document.write("Geboorte maand: " + geboortemaand);
  document.write("<br>");
  document.write("Geboorte jaar: " + geboortejaar);
  document.write("<br>");
  document.write("Het huidige jaar: " + huidig_jaartal);
  document.write("<br>");
  document.write("Leeftijd: " + leeftijd);
  document.write("<br>");
  document.write("Dag van het jaar: " + dag_van_het_jaar);
  document.write("<br>");
  document.write("Straat: " + straat);
  document.write("<br>");
  document.write("Huisnummer: " + huisnummer);
  document.write("<br>");
  document.write("Woonplaats: " + woonplaats);
  document.write("<br>");
  document.write("woonplaats is " + woonachtig_in_utrecht_func_WN() +" Utrecht ");
  document.write("<br>");
  document.write("Aantal studenten: " + aantal_studenten_in_deze_klas);
  document.write("<br>");
  document.write("Kosten van frikandelbroodje: " + kosten_van_frikandelbroodje);
  document.write("<br>");
  document.write("Totale lunch kosten: " + totale_lunchkosten);
  // enzovoorts, zorg dat alle bovenstaande variabelen op het scherm komen



function dag_van_het_jaar_func(){
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day; 
  }

  function woonachtig_in_utrecht_func(){
    let woonplaatslowercase = woonplaats.toLowerCase();
    console.log(woonplaatslowercase);
    if (woonplaatslowercase == "utrecht"){
    // if (woonplaats == "utrecht" || woonplaats == "Utrecht"){
      return true;
    }
    else {
      return false;
    }
  }

  function woonachtig_in_utrecht_func_WN(){
    if (woonachtig_in_utrecht_func() == true){
      return "wel";
    }
    else {
      return "niet";
    }
  }


  

  
  
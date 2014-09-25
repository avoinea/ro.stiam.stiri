angular.module('ro.stiam.stiri.services', [])

/**
 * Articles
 */
.factory('App', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var app = {
    "sources": {
      "items": [
        "Adevarul.ro",
        "ArenaIT.net",
        "Bursa.ro",
        "CSID.ro",
        "Capital.ro",
        "Cinemagia.ro",
        "ComputerGames.ro",
        "Connect.ro",
        "Descopera.ro",
        "DoctorulZilei.ro",
        "Efemeride.ro",
        "Eva.ro",
        "EvenimentulZilei.ro",
        "GIZ.ro",
        "Gadget.ro",
        "Gandul.info",
        "GazetaSporturilor.ro",
        "Go4IT.ro",
        "Hit.ro",
        "Hotnews.ro",
        "ITMoldova.com",
        "IncomeMagazine.ro",
        "Incont.ro",
        "Jurnalul.ro",
        "Life4Gadgets.com",
        "Mediafax.ro",
        "Metropotam.ro",
        "Mobilissimo.ro",
        "Money.ro",
        "MoneyExpress.ro",
        "PlayTech.ro",
        "ProSport.ro",
        "SapteSeri.ro",
        "Scientia.ro",
        "SfatulMedicului.ro",
        "Sport.ro",
        "TVR.ro",
        "TechCafe.ro",
        "Unimedia.md",
        "Ziare.com",
        "ZiarulFinanciar.ro",
        "Zona-IT.ro"
      ],
      "properties": {
        "name": "c5", "size": 42}
    }, "now": "2014/09/25 12:00:52",
    "categories": {
      "items": [
        "Cultur\u0103",
        "Economie",
        "Extern",
        "IT",
        "Imobiliare",
        "Moldova",
        "Monden",
        "Politic\u0103",
        "Sport",
        "S\u0103n\u0103tate",
        "Ultima or\u0103",
        "\u015etiin\u0163\u0103"],
      "properties": {
        "name": "c4",
        "size": 12
      }
    }
  };

  return {
    sources: function() {
      return app.sources.items;
    },
    categories: function() {
      return app.categories.items;
    }
  };
})

.factory('Query', function(){
   var query = {
     "items": [
       {
         "description": "Colegiul director al Consiliului National pentru Combaterea Discriminarii (CNCD) a hotarat in unanimitate, miercuri, amendarea gazetarului Cristian Tudor Popescu cu...",
         "title": "Cristian Tudor Popescu, amendat cu 2.000 de lei pentru discriminare",
         "url": "http://stiam.ro/revista-presei/ziare.com/ultima-ora/2014-09-25/cristian-tudor-popescu-amendat-cu",
         "original": "http://www.ziare.com/media/jurnalisti/cristian-tudor-popescu-amendat-cu-2-000-de-lei-pentru-discriminare-1324026",
         "source": "Ziare.com",
         "date": "2014-09-25T11:58:25+03:00",
         "thumbnail": ""
       },
       {
         "description": "Deputatul Adrian Simionescu \u015fi omul de afaceri Marian Fi\u015fcuci au fost du\u015fi, joi, la DNA, cu mandat de aducere, procurorii...",
         "title": "Deputatul Adrian Simionescu \u015fi un om de afaceri, du\u015fi la DNA cu mandat de aducere",
         "url": "http://stiam.ro/revista-presei/mediafax.ro/ultima-ora/2014-09-25/deputatul-adrian-simionescu-si-un",
         "original": "http://feedproxy.google.com/~r/mediafax/Qddx/~3/LQxGoN6MzkE/deputatul-adrian-simionescu-si-un-om-de-afaceri-dusi-la-dna-cu-mandat-de-aducere-13345369",
         "source": "Mediafax.ro",
         "date": "2014-09-25T11:57:00+03:00",
         "thumbnail": "http://stiam.ro/revista-presei/mediafax.ro/ultima-ora/2014-09-25/deputatul-adrian-simionescu-si-un/image_preview"
       },
       {
         "description": "Un adolescent din Indonezia sufer\u0103 de o boal\u0103 rar\u0103 de piele, fiind cunoscut drept b\u0103iatul \u015farpe. Astfel, pielea lui n\u0103p\u00e2rle\u015fte...",
         "title": "Cutremur\u0103toarea POVESTE a B\u0102IATULUI \u015eARPE. N\u0103p\u00e2rle\u015fte o dat\u0103 la 41 de zile \u015fi este urm\u0103rit de un BLESTEM FOTO",
         "url": "http://stiam.ro/revista-presei/jurnalul.ro/ultima-ora/2014-09-25/cutremuratoarea-poveste-a-baiatului-sarpe.",
         "original": "http://jurnalul.ro/stiri/observator/cutremuratoarea-poveste-a-baiatului-sarpe-naparleste-o-data-la-41-de-zile-si-este-urmarit-de-un-blestem-foto-678266.html",
         "source": "Jurnalul.ro",
         "date": "2014-09-25T11:57:03+03:00",
         "thumbnail": ""
       },
       {
         "description": "Fortuna C\u00eempina a pus probleme mari echipei Dinamo \u00een meciul din Cupa Rom\u00eeniei, fiind nevoie de prelungiri pentru ca echipa...",
         "title": "Antrenorul Fortunei C\u00eempina acuza arbitrajul: \"\u00cen Cupa Rom\u00e2niei, echipele mari s\u00eent \u00eempinse de la spate\u201d",
         "url": "http://stiam.ro/revista-presei/gsp.ro/sport/2014-09-25/antrenorul-fortunei-cimpina-acuza-arbitrajul",
         "original": "http://www.gsp.ro/fotbal/cupa-romaniei/antrenorul-fortunei-cimpina-acuza-arbitrajul-in-cupa-romaniei-echipele-mari-sint-impinse-de-la-spate-435100.html",
         "source": "GazetaSporturilor.ro",
         "date": "2014-09-25T11:53:00+03:00",
         "thumbnail": "http://stiam.ro/revista-presei/gsp.ro/sport/2014-09-25/antrenorul-fortunei-cimpina-acuza-arbitrajul/image_preview"
       }
     ],
     "properties": {
       "first": 0,
       "last": 19205,
       "pages": 19225,
       "size": 20
     }
   };

   return {
     first: function (){
       return query.items;
     },
     next: function(){
       return query.items.slice(1, 3);
     }
   };

 });

document.addEventListener('DOMContentLoaded', (event) => {
    this.document.initialize();
  });



function validString(string) {
  if (string) {
    return string;
  } else {
    return 'Nicht verfügbar';
  };
}

const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
function formatDate(date) {
  date = new Date(date);
  date = date.toLocaleDateString('de-DE', options);
  return date
}

document.initialize = function() {
  
    var request = new XMLHttpRequest()
    request.open('GET', 'https://cors-anywhere.herokuapp.com/https://bing.com/covid/data')
    request.onload = function() {
      var obj = JSON.parse(this.response);
      // console.log(Object.values(obj)[2]);

      // console.log(obj.areas[4])

      const selection = Object.values(obj)[2].filter(({id}) => id == 'germany')[0]
      console.log(selection);

      document.getElementById("totalCases").innerHTML += selection.totalConfirmed;
      document.getElementById("totalDeaths").innerHTML += selection.totalDeaths;
      document.getElementById("totalRecovered").innerHTML += selection.totalRecovered;
      document.getElementById("lastUpdated").innerHTML += selection.lastUpdated;

      
      document.getElementById("totalCasesNRW").innerHTML += validString(selection.areas[1].totalConfirmed);
      document.getElementById("totalDeathsNRW").innerHTML += validString(selection.areas[1].totalDeaths);
      document.getElementById("totalRecoveredNRW").innerHTML += validString(selection.areas[1].totalRecovered);
      document.getElementById("lastUpdatedNRW").innerHTML += validString(formatDate(selection.areas[1].lastUpdated));


      document.getElementById("totalCasesNiedersachsen").innerHTML += validString(selection.areas[3].totalConfirmed);
      document.getElementById("totalDeathsNiedersachsen").innerHTML += validString(selection.areas[3].totalDeaths);
      document.getElementById("totalRecoveredNiedersachsen").innerHTML += validString(selection.areas[3].totalRecovered);
      document.getElementById("lastUpdatedNiedersachsen").innerHTML += validString(formatDate(selection.areas[3].lastUpdated));
      
    }
    request.send()

//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://example.com"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}

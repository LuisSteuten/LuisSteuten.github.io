document.addEventListener('DOMContentLoaded', (event) => {
    this.document.initialize();
  });


document.initialize = function() {
    // teamspeakButton = this.getElementsByClassName("teamspeak_button")[0];
    // console.log(teamspeakButton);
    // console.log(teamspeakButton.innerHtml);

// Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://bing.com/covid/data', true)

    request.onload = function() {
      console.log(this.response)
    }

    // Send request
    request.send()
}

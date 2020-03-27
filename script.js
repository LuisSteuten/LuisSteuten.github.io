document.addEventListener('DOMContentLoaded', (event) => {
    this.document.initialize();
  });


document.initialize = function() {
    teamspeakButton = this.getElementsByClassName("teamspeak_button")[0];
    console.log(teamspeakButton);
    console.log(teamspeakButton.innerHtml);
}

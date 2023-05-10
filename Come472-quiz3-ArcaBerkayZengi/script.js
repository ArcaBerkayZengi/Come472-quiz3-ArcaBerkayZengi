window.onload = function() {
    var form = document.getElementById('form');
    form.onsubmit = function(event) {
      event.preventDefault();
  
      var numPlayersInput = document.getElementById('numPlayers');
      var numPlayers = numPlayersInput.value;
  
      if (isNaN(numPlayers) || numPlayers === '' || numPlayers < 2) {
        alert('Please enter a valid number (2 or more)');
        return false;
      }
  
      // Second page
      window.location.href = 'page2.php?numPlayers=' + numPlayers;
    }
  }
  
  window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var numPlayers = urlParams.get('numPlayers');
  
    if (isNaN(numPlayers) || numPlayers === '' || numPlayers < 2) {
      // Error message
      var errorDiv = document.getElementById('error');
      errorDiv.style.display = 'block';
    } else {
      // Form elementttt
      var form = document.getElementById('form');
      form.onsubmit = function(event) {
        event.preventDefault();
  
        // Keep player 
        var numPlayersInput = document.createElement('input');
        numPlayersInput.type = 'hidden';
        numPlayersInput.name = 'numPlayers';
        numPlayersInput.value = numPlayers;
        form.appendChild(numPlayersInput);
  
        // Player name create 
        var table = document.createElement('table');
        var tableHead = document.createElement('thead');
        var tableRow = document.createElement('tr');
        var tableHeader1 = document.createElement('th');
        var tableHeader2 = document.createElement('th');
        tableHeader1.innerHTML = 'No';
        tableHeader2.innerHTML = 'Player name';
        tableRow.appendChild(tableHeader1);
        tableRow.appendChild(tableHeader2);
        tableHead.appendChild(tableRow);
        table.appendChild(tableHead);
  
        var tableBody = document.createElement('tbody');
        for (var i = 1; i <= numPlayers; i++) {
          var tr = document.createElement('tr');
          var td1 = document.createElement('td');
          var td2 = document.createElement('td');
          td1.innerHTML = i;
          var input = document.createElement('input');
          input.type = 'text';
          input.name = 'player' + i;
          td2.appendChild(input);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
        form.appendChild(table);
  
        // Create tournament
        var submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = 'Create Tournament';
        form.appendChild(submitButton);
      }
    }
  }
  
  window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var numPlayers = urlParams.get('numPlayers');
  
    if (isNaN(numPlayers) || numPlayers === '' || numPlayers < 2) {
      // errormsg.
      var errorDiv = document.getElementById('error');
      errorDiv.style.display = 'block';
    } else {
      // result tournament
      var form = document.getElementById('form');
      form.onsubmit = function(event) {
        event.preventDefault();
    
        // players
        var numPlayers = parseInt(urlParams.get('numPlayers'));
    
        // keep players name and score vs.
        var players = [];
        for (var i = 1; i <= numPlayers; i++) {
          var playerName = form.elements['player' + i].value;
          var playerScore = 0;
          players.push({name: playerName, score: playerScore});
        }
    
        // Start
        var tournament = new Tournament(players);
        tournament.start();
    
        // show results
        var resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = tournament.getResultsHtml();
      }
    }
}
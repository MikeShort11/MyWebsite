// Function to create buttons dynamically based on an array of button names
function createButtons(buttonNames) {
    var container = document.getElementById('buttonContainer');
  
    // Clear existing buttons
    container.innerHTML = '';
  
    // Create buttons and append them to the container
    buttonNames.forEach(function(name) {
      var button = document.createElement('button');
      button.textContent = name;
      container.appendChild(button);
    });
  }
  
  // Example array of button names
  var buttonNamesArray = ['Button 1', 'Button 2', 'Button 3'];
  
  // Call the function to create buttons based on the array
  createButtons(buttonNamesArray);
  
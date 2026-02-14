function selectOption(option) {
    
    if (option === 'yes') {
        
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayMilkHug();
        });
    } else if (option === 'no') {
        
        document.getElementById('no-button').innerText = 'You sure?'; 
        
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; 
        yesButton.style.fontSize = newSize + 'px';
    } else {
        
        alert('Invalid option!');
    }
}


function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function displayMilkSquish() {
    
    var imageContainer = document.getElementById('image-container');
    
    var milkImage = new Image();
    
    milkImage.src = 'MilkSquish.gif';
    
    milkImage.alt = 'Milk';
    
    milkImage.onload = function() {
        imageContainer.appendChild(milkImage);
    };
}

function displayMilkHug() {
   
    document.getElementById('image-container').innerHTML = '';
    
    var imageContainer = document.getElementById('image-container');
    
    var hugImage = new Image();
    
    hugImage.src = 'MilkHug.gif'; 
   
    hugImage.alt = 'Milk Hug Mocha';
    
    hugImage.onload = function() {
        imageContainer.appendChild(hugImage);
        
        document.getElementById('options').style.display = 'none';
    };
}


displayMilkSquish();

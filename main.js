let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

    var totalBox = 0;
    var container = document.querySelector(".boxes");
    var renderButton = document.getElementById("btn");

    
    function renderBoxes() {
        
        for (var i = 0; i < 5; i++) {
            var box = document.createElement("div");
            box.classList.add("box");
            totalBox++;


            box.style.backgroundColor = colors[i];
            box.addEventListener("click", function() {
                container.removeChild(this);
                totalBox--;
                countBox.textContent = totalBox;
            });

            container.appendChild(box);

            let countBox = document.querySelector(".points");
            countBox.textContent = totalBox;

        }
        
            
    }
    renderButton.addEventListener("click", renderBoxes);
    renderBoxes();

    



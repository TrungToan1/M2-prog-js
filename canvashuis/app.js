class App
{
    runApplication()
    {
        console.log("Hello World!");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        g.beginPath()
        g.moveTo(300,100);
        
        g.closePath();
        g.stroke();

        // g.beginPath()
        // g.fillStyle = "yellow";
        // g.moveTo(20,20);
        // g.lineTo(300,300);
        // g.lineTo(580,20);
        // g.closePath();
        // g.stroke();
        // g.fill()


        console.log(canvas)
        
    }
}

let app = new App();
app.runApplication();
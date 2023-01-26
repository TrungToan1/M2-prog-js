class App
{
        
    tekenHuis()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");        

        g.beginPath() //Background
        g.fillStyle = "magenta";
        g.moveTo(100,100); 
        g.lineTo(100,1300); 
        g.lineTo(1000,1300); 
        g.lineTo(1000,100); 
        g.lineTo(100,100); 
        g.closePath();
        g.stroke();
        g.fill();


        g.fillStyle = "lime";
        g.font = "80px comic sans"
        g.fillText("Merry Christmas", 150, 200)
        

        g.beginPath() //Trunk
        g.fillStyle = "brown";
        g.moveTo(200,1300); 
        g.lineTo(200,1200); 
        g.lineTo(250,1200); 
        g.lineTo(250,1300); 
        g.lineTo(250,1300); 
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(200,1200);
        g.lineTo(150,1200) //right
        g.lineTo(300,1200) //left up
        g.lineTo(250,1150) //right
        g.lineTo(290,1150) //left
        g.lineTo(250,1100) //left up
        g.lineTo(280,1100)


        g.lineTo(230,1075)

        g.lineTo(185,1100)
        g.lineTo(215,1100)
        g.lineTo(175,1150)
        g.lineTo(200,1150)
        g.lineTo(150,1200)
        g.closePath();
        g.stroke();
        g.fill();
        

        



        g.beginPath() //Trunk
        g.fillStyle = "brown";
        g.moveTo(900,1300); 
        g.lineTo(900,1200); 
        g.lineTo(950,1200); 
        g.lineTo(950,1300); 
        g.lineTo(950,1300); 
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(900,1200);
        g.lineTo(850,1200) //right
        g.lineTo(1000,1200) //left up
        g.lineTo(950,1150) //right
        g.lineTo(990,1150) //left
        g.lineTo(950,1100) //left up
        g.lineTo(980,1100)


        g.lineTo(930,1075)

        g.lineTo(885,1100)
        g.lineTo(915,1100)
        g.lineTo(875,1150)
        g.lineTo(900,1150)
        g.lineTo(850,1200)
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath() //house
        g.fillStyle = "yellow";
        g.moveTo(500,1300); 
        g.lineTo(500,1250); 
        g.lineTo(550,1250); 
        g.lineTo(550,1300);  
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath() //roof
        g.fillStyle = "blue";
        g.moveTo(475,1250); 
        g.lineTo(525,1200);
        g.lineTo(575,1250);

 
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath() //house2
        g.fillStyle = "yellow";
        g.moveTo(700,1300); 
        g.lineTo(700,1250); 
        g.lineTo(750,1250); 
        g.lineTo(750,1300);  
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath() //roof
        g.fillStyle = "blue";
        g.moveTo(675,1250); 
        g.lineTo(725,1200);
        g.lineTo(775,1250);

 
        g.closePath();
        g.stroke();
        g.fill();


        
        g.beginPath() //snowman
        g.fillStyle = "white";
        g.moveTo(350,1300); 
        g.lineTo(350,1250); 
        g.lineTo(400,1250); 
        g.lineTo(400,1300);  
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath() //snowman
        g.fillStyle = "white";
        g.moveTo(355,1250);
        g.lineTo(355,1210);
        g.lineTo(395,1210);
        g.lineTo(395,1250)
        g.closePath();
        g.stroke();
        g.fill();


        g.beginPath() //snowman
        g.fillStyle = "orange";
        g.moveTo(360,1210);
        g.lineTo(390,1210);
        g.lineTo(390,1180);
        g.lineTo(360,1180);
        g.closePath();
        g.stroke();
        g.fill();



        g.beginPath() //arm
        g.fillStyle = "brown";
        g.moveTo(355,1230);
        g.lineTo(330,1180);
        g.closePath();
        g.stroke();
      

        g.beginPath() //arm
        g.fillStyle = "brown";
        g.moveTo(395,1230);
        g.lineTo(425,1180);
        g.closePath();
        g.stroke();




        console.log(canvas)

    }

    runApplication()
    {
        this.tekenHuis()
    }
}

let app = new App();
app.runApplication();
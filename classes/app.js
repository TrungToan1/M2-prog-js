class Dino
{

    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;

    }
    eetDino()
        {
        if (this.naam == pterodactyl)
        {
        this.leeft = false;
        }
    }

}

class Plant
{
    constructor(naam)
    {
        this.naam = naam;

    }
}





class App
{
    runApplication()
    {
console.log("2")
    }
}



let app = new App();
app.runApplication();
let trex = new Dino("Trex",true,10);
let crocodile = new Dino("crocodile",true,30)
let pterodactyl = new Dino("Pterodactyl",true,20)
console.log(trex);
console.log(crocodile);
console.log(pterodactyl)
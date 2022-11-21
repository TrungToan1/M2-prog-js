class App
{
    runApplication()
    {
        console.log("Hello World!");
        let appNaam = "Javascript";
        let   versienummer = 0.9;
        let    versiedatum = "July 2015";
        let    autheur = "Brendan Eich";
        let    copyright = "Yes";
        let    distributeur = "Distribution";
        let    darkmode = true;
        console.log(appNaam);
        console.log(versiedatum);
        console.log(versienummer);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();
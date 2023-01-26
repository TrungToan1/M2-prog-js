class App
{
    runApplication()
    {
        let array = ["Creo","Eve","YOASOBI", "Kudasai", "Kerusu"]
        console.log(array)
        
        let headers = document.getElementsByTagName("h1")
        for(let i = 0; i < headers.length; i++)
            headers[i].innerHTML = array[i];
        }
    }


let app = new App();
app.runApplication();
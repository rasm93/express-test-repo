module.exports = (app) => {

    app.get('/api/test', (req, res) => {
        res.json({ text: "Hello World" });
     });
    
    app.get('/api/profil', (req, res) => {
        res.json(
            { 
                fornavn: "Andrew",
                efternavn: "Rasmussen",
                by: "Ballerup",
                alder: "24"
            }
        );
     });
    
     app.get('/api/byer', (req, res) => {
        res.json(
            { 
                byer: [
                    {by: "Hillerød"},
                    {by: "Allerød"},
                    {by: "Lynge"},
                    {by: "Ballerup"},
                    {by: "Århus"}                
                ]
            }
        );
     });
    
     app.get('/api/numre', (req, res) => {
        res.json(
            { 
                numre: [
                    {num: "38"},
                    {num: "83"},
                    {num: "3"},
                    {num: "8"}                
                ]
            }
        );
     });   
}
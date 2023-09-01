class Variables
{
    constructor()
    {
        this.variables = {}
        this.LoadVariables().then(() => console.log("Переменные загружены"))
    }
    async LoadVariables()
    {
        return new Promise((resolve) => {
            this.variables = require("../settings.json")
            return resolve()
        })
    }

    async SaveVariables()
    {
        return new Promise((resolve) => {
            const serialize = JSON.stringify(this.variables, null, "\t")
            fs.writeFile("./files/settings.json", serialize, (e) => {
                if(e) console.log(e)
                return resolve()
            })
        })
    }
}

module.exports = new Variables()
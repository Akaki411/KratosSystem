class Timer
{
    constructor()
    {
        this.events = {}

    }

    AddEventListener(event, callback)
    {
        if(!this.events[event]) this.events[event] = []
        this.events[event].push(callback)
    }

    async StartEvent(event)
    {
        try
        {
            return new Promise(async (resolve, reject) => {
                if(!this.events[event]) return
                for(let i = 0; i < this.events[event].length; i++)
                {
                    await this.events[event][i]()
                }
            })
        } catch (e) {console.log(e)}
    }

    StartCoroutines()
    {
        const now = new Date()
        const midnight = new Date()
        midnight.setDate(midnight.getDate() + 1)
        midnight.setHours(0)
        midnight.setMinutes(0)
        midnight.setSeconds(0)
        const toMidnight = midnight - now
        setTimeout()
    }

    async StartMainLoop()
    {
        await this.StartEvent("midnight")
        setInterval(async () => {await this.StartEvent("midnight")}, 86400000)
    }
}

module.exports = new Timer()
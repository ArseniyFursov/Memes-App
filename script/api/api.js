class API {
    constructor() {
        this.baseUrl = 'https://api.imgflip.com/get_memes'
    }
   
    getMemes() {
        return fetch(`${this.baseUrl}`)
            .then(data => {
                return data.json();
            });
    }
}
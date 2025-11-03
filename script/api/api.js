class API {
    constructor() {
        this.baseUrl = 'https://api.imgflip.com/get_memes'
    }

    fetchGetMemeName() {
        const memesName=[]
        fetch(`${this.baseUrl}`)
            .then(date => date.json())
            .then(response => {
                const memesArray = response.data.memes;
                memesArray.forEach(meme => {
                    memesName.push(meme.name);
                });
            });
        return memesName;
    }
    
    fetchMamePreview() {
        
    }
}
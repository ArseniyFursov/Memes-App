class Controller {
    constructor () {
        this.view = new View();
        this.model = new Model();
        this.api = new API();
        this.memesName = this.api.fetchGetMemeName();
        this._renderOptionMemes();
    }
    _renderOptionMemes() {
        const optionNode = document.querySelector('#select-mem');

        this.memesName.forEach(name => {
            optionNode.innerHTML += `<option>${name}</option>`;
        });
    }
}
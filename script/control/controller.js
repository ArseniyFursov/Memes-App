class Controller {
    constructor () {
        this.view = new View({
            onMemeChange: this.handleViewMemeChange,
            onTextTopChange: this.handleViewTextTopChange,
            onTextBottomChange: this.handleViewTextBottomChange
        });
        this.model = new Model({
            OnMemesChange: this.handleModelMemesChange,
            onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
            onTextTopChange: this.handleModelTextTopChange,
            onTextBottomChange: this.handleModelTextBottomChange
        });
        this.api = new API();
    }

    innit() {
        this.api.getMemes()
            .then(array => {
                const memes = array.data.memes;
                this.model.setMemes(memes);
            });
    }

    handleModelMemesChange = () => {
        this.view.renderMemsSelect(this.model.getMemes(), this.model.getCurrentMemeId());
    }

    handleViewMemeChange = (id) => {
        this.model.setCurrentMemeId(id);
    }

    handleModelCurrentMemeIdChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }

    handleViewTextTopChange = (text) => {
        this.model.setTextTop(text);
    }

    handleViewTextBottomChange = (text) => {
        this.model.setTextBottom(text);
    }

    handleModelTextTopChange = () =>{
        this.view.renderPreview(this.model.getPreview());
    }

    handleModelTextBottomChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }   
}
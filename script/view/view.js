class View {
    constructor({ 
        onMemeChange,
        onTextTopChange,
        onTextBottomChange
    }) {
        this.previewTopTextNode = document.querySelector('.top-text');
        this.previewBottomTextNode = document.querySelector('.bottom-text');
        this.previewMemeImgNode = document.querySelector('#preview-image');

        this.selectMemesNode = document.querySelector('#select-mem');

        this.textTopInputNode = document.querySelector('.input-top');
        this.textBottomInputNode = document.querySelector('.input-bottom');
        
        this.onMemeChange = onMemeChange;
        this.onTextTopChange = onTextTopChange;
        this.onTextBottomChange = onTextBottomChange;

        this.selectMemesNode.addEventListener('change', this._handleSelectChange);
        this.textTopInputNode.addEventListener('input', this._handleTextTopChange);
        this.textBottomInputNode.addEventListener('input', this._handleTextBottomChange);
    }

    renderPreview(preview) {
        const {
            url,
            textTop,
            textBottom
        } = preview;

        this.previewTopTextNode.innerHTML = textTop;
        this.previewBottomTextNode.innerHTML = textBottom;
        this.previewMemeImgNode.style.backgroundImage = `url(${url})`;
    }

    renderMemsSelect(memes, currentMemeid) {
        memes.forEach(meme => {
            const {
                id,
                name
            } = meme;

            const optionNode = document.createElement('option');
            optionNode.setAttribute('value', id);
            optionNode.innerText = name;

            if(id === currentMemeid ) {
                optionNode.setAttribute('selected', true);
            }

            this.selectMemesNode.appendChild(optionNode);
        });
    }

    _handleSelectChange = () => {
        const id = this.selectMemesNode.value;

        this.onMemeChange(id);
    }

    _handleTextTopChange = (event) => {
        this.onTextTopChange(event.target.value);
    }

    _handleTextBottomChange = (event) => {
        this.onTextBottomChange(event.target.value);     
    }
}
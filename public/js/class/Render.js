class Render {
    constructor(element) {
        this._html = document.getElementById('root');
        this._init(this._html, element);
    }
    _init(html, element) {
        html.innerHTML = element;
    }
}
export default Render;

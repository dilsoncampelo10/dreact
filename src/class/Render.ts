class Render {

    _html: HTMLElement;

    constructor(element: string) {
        this._html = document.getElementById('root') as HTMLElement;
        this._init(this._html, element)
    }

    _init(html: HTMLElement, element: string) {
        html.innerHTML = element;
    }
}

export default Render;
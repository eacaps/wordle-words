import { HTMLElement, parse } from 'node-html-parser';

export const getData = async () => {
    const data = await fetch('https://www.fiveforks.com/wordle/block/');
    const html = await data.text();
    const document = parse(html);
    return getWords(document);
}

export const getWords = (document: HTMLElement) => {
    const words:string[] = [];
    const block = document.querySelector('.entry-content > div');
    if(!block || !block.childNodes) return words;
    for(const element of block.childNodes) {
        if(element.textContent && element.textContent.trim()) {
            words.push(...element.textContent.trim().split(" ").filter( word => !!word))
        }
    }
    return words;
}
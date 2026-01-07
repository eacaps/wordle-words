import { parse as parseHtml } from 'node-html-parser';
import { parse } from "./parser-20251224";

export const getDoc = async () => {
    const data = await fetch('https://www.fiveforks.com/wordle/block/');
    const html = await data.text();
    const document = parseHtml(html);
    return document;
}

export default {
    getWords: async () => {
        const doc = await getDoc();
        const words = parse(doc);
        return words;
    }
}

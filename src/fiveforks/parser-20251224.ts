import type { HTMLElement } from "node-html-parser";

export const parse = (document: HTMLElement) => {
    const word_list:string[] = [];
    
    const list = document.querySelector('#blist');
    if(!list) throw new Error('list not found');
    const block = list.innerText;
    if(block) {
        const lines = block.split("\n");
        // remove "" and extra block
        const removed = lines.splice(lines.length-2,2)
        for(const line of lines) {
            const words = line.split(" ");
            for(const word of words) {
                if(word) {
                    word_list.push(word);
                }
            }
        }
    }
    return word_list;
}
import type { WordList } from "./types";

const filepath = Bun.argv[2];

const main = async (filepath:string) => {
    const text = await read_file(filepath);
    const result = parse_text(text);
    write_file(result);
};

const read_file = async (filepath: string) => {
    const file = Bun.file(import.meta.dir + '/../' + filepath); // BunFile
    const text = await file.text();
    return text;
}

const parse_text = (text:string): WordList => {
    const word_list = [];
    let latest = new Date(0);
    for(const line of text.split('\n')) {
        // CHEER #994 03/09/24
        const items = line.split(' ');
        const word = items[0];
        const date_string = items[2];
        const date = new Date(date_string);
        if(date > latest) {
            latest = date;
        }
        word_list.push(word);
    }
    const words = word_list.sort();
    const lastUpdated = latest.toISOString().substring(0,10);
    const result = {
        words,
        lastUpdated
    };
    return result;
}

const write_file = async(json: WordList) => {
    await Bun.write(import.meta.dir + '/../index.ts', "export default " + JSON.stringify(json, undefined, 2));
    await Bun.write(import.meta.dir + '/../dist/word-list.json', JSON.stringify(json, undefined, 2));
}

main(filepath);
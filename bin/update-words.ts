import { getData } from "../src/fiveforks-parser";
import fs from "fs";

const main = async () => {
    const words = await getData();
    console.log(words);
    const lastUpdated = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().substring(0,10);
    const result = {
        words,
        lastUpdated
    };
    write_file(result);
}

const write_file = async(json:object) => {
    await Bun.write(import.meta.dir + '/../index.ts', "export default " + JSON.stringify(json, undefined, 2));
    await Bun.write(import.meta.dir + '/../dist/word-list.json', JSON.stringify(json, undefined, 2));
}

main();
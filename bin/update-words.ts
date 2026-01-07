import { getUpdate } from "../src/word-fetcher";

const main = async () => {
    const result = await getUpdate();
    write_file(result);
}

const write_file = async(json:object) => {
    await Bun.write(import.meta.dir + '/../index.ts', "export default " + JSON.stringify(json, undefined, 2));
    await Bun.write(import.meta.dir + '/../dist/word-list.json', JSON.stringify(json, undefined, 2));
}

main();
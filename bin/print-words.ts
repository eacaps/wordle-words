import { getUpdate } from "../src/word-fetcher";

const main = async () => {
    const result = await getUpdate();
    console.log(JSON.stringify(result, undefined, 2));
}

main();
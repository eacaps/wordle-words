import fetcher from "./fiveforks/";

export const getUpdate = async () => {
    const words = await fetcher.getWords();
    const lastUpdated = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().substring(0,10);
    const result = {
        words,
        lastUpdated
    };
    return result;
}
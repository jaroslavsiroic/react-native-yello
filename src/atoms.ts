import { atom } from "jotai";

export const urlAtom = atom(
    "https://quotes15.p.rapidapi.com/quotes/random/?language_code=pl"
);
export const quoteAtom = atom(async (get) => {
    const response = await fetch(get(urlAtom), {
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "18dd4f806dmshad52a792368284bp104777jsne44903b5804a",
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
        },
    });
    return await response.json();
});

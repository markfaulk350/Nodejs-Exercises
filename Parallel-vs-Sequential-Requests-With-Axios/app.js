const axios = require('axios');

// makeSequentialRequests();                    // 1476 milliseconds

// makeRequestsInParallel();                    // 415 milliseconds

// makeRequestsInParallelWithPromiseAll();      // 388 milliseconds

// makeRequestsInParallelWithForLoop();         // 386 milliseconds

async function makeSequentialRequests() {
    const t0 = Date.now()
    const result1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const result2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const result3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const result4 = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
    const result5 = await axios.get('https://pokeapi.co/api/v2/pokemon/5');
    const result6 = await axios.get('https://pokeapi.co/api/v2/pokemon/6');
    const result7 = await axios.get('https://pokeapi.co/api/v2/pokemon/7');
    const result8 = await axios.get('https://pokeapi.co/api/v2/pokemon/8');
    const t1 = Date.now()
    console.log("Done. Making sequential requests took " + (t1 - t0) + " milliseconds.");
}

async function makeRequestsInParallel() {
    const t0 = Date.now()
    const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const promise4 = axios.get('https://pokeapi.co/api/v2/pokemon/4');
    const promise5 = axios.get('https://pokeapi.co/api/v2/pokemon/5');
    const promise6 = axios.get('https://pokeapi.co/api/v2/pokemon/6');
    const promise7 = axios.get('https://pokeapi.co/api/v2/pokemon/7');
    const promise8 = axios.get('https://pokeapi.co/api/v2/pokemon/8');
    const result1 = await promise1;
    const result2 = await promise2;
    const result3 = await promise3;
    const result4 = await promise4;
    const result5 = await promise5;
    const result6 = await promise6;
    const result7 = await promise7;
    const result8 = await promise8;
    const t1 = Date.now()
    console.log("Done. Making requests in parallel took " + (t1 - t0) + " milliseconds.");
}

async function makeRequestsInParallelWithPromiseAll() {
    const t0 = Date.now()
    const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const promise4 = axios.get('https://pokeapi.co/api/v2/pokemon/4');
    const promise5 = axios.get('https://pokeapi.co/api/v2/pokemon/5');
    const promise6 = axios.get('https://pokeapi.co/api/v2/pokemon/6');
    const promise7 = axios.get('https://pokeapi.co/api/v2/pokemon/7');
    const promise8 = axios.get('https://pokeapi.co/api/v2/pokemon/8');
    const results = await Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8]);
    const t1 = Date.now()
    console.log("Done. Making requests in parallel with Promise.all() took " + (t1 - t0) + " milliseconds.");
}

async function makeRequestsInParallelWithForLoop() {
    let promises = [];
    const links = [
        { url: "https://pokeapi.co/api/v2/pokemon/1" },
        { url: "https://pokeapi.co/api/v2/pokemon/2" },
        { url: "https://pokeapi.co/api/v2/pokemon/3" },
        { url: "https://pokeapi.co/api/v2/pokemon/4" },
        { url: "https://pokeapi.co/api/v2/pokemon/5" },
        { url: "https://pokeapi.co/api/v2/pokemon/6" },
        { url: "https://pokeapi.co/api/v2/pokemon/7" },
        { url: "https://pokeapi.co/api/v2/pokemon/8" }
    ]

    const t0 = Date.now()

    for (let i = 0; i < links.length; i++) {
        promises[i] = axios.get(links[i].url);
    }

    const results = await Promise.all(promises);

    const t1 = Date.now()
    console.log("Done. Making requests in parallel with for loop and Promise.all() took " + (t1 - t0) + " milliseconds.");
    // console.log(results);
}

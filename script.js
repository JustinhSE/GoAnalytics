async function fetchData() {
    const url = 'https://similarweb12.p.rapidapi.com/v3/top-apps/?store=apple&mode=top-free&device=iphone';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bec7276584mshe597b9e0103be59p16f30fjsn1dffced5706f',
            'x-rapidapi-host': 'similarweb12.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
fetchData()
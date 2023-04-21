const API_KEY = '';

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "hello, how are you today?",
        })
    })

    const data = await response.json();
    // console.log(data);
    console.log(data.choices[0].text)
}

fetchData()
const API_KEY = '';

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            // "model": "gpt-4",
            "messages": [{
                "role": "user",
                "content": "Hello!"
            }]
        })
    })

    const data = await response.json();
    console.log(data);
    console.log(data.choices[0].message.content);
}

fetchData()
async function fetchPosts() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Result will be available please wait 5 sec....';

    try {
        const response = await fetch('https://dummyjson.com/posts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        resultDiv.textContent = JSON.stringify(data.posts, null, 2); // Format the JSON output
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
    }
}

document.getElementById('fetchData').addEventListener('click', fetchPosts);
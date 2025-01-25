document.getElementById('fetchData').addEventListener('click', () => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = "Result will be available please wait 5 sec....";

    const fetchData = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject("Operation timed out.");
        }, 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => {
                clearTimeout(timeout);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error.message);
            });
    });

    fetchData
        .then(data => {
            outputDiv.textContent = JSON.stringify(data.posts, null, 2);
        })
        .catch(errorMessage => {
            outputDiv.textContent = errorMessage;
        });
});
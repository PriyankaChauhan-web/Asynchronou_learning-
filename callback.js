function simulateDelay(callback) {
    setTimeout(callback, 5000); // 5 seconds delay
}

function fetchData() {
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            const titles = data.posts.map(post => post.title).join('<br>');
            document.getElementById('output').innerHTML = titles;
        })
        .catch(error => {
            document.getElementById('output').innerHTML = 'Error fetching data';
            console.error('Error:', error);
        });
}

document.getElementById('fetchButton').addEventListener('click', function() {
    document.getElementById('output').innerHTML = 'Result will be available after 5 sec......';
    simulateDelay(() => {
        fetchData();
    });
});
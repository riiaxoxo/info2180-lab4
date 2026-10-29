const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function () {
    fetch('superheroes.php')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Unable to retrieve superheroes.');
            }
            return response.text();
        })
        .then(function (data) {
            alert(data);
        })
        .catch(function (error) {
            console.error(error);
            alert('Something went wrong while retrieving the superheroes.');
        });
});

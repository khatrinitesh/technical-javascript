document.addEventListener('DOMContentLoaded',() => {
    const btnFetch = document.getElementById('fetchbutton');
    const fetchdata = document.getElementById('output');

    btnFetch.addEventListener('click',fetchData);

    function fetchData(){
        output.textContent = 'fetching data';

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if(!response.ok){
                throw new Error('network response was not ok ' + response.statusText)
            }
            return response.json();
        })
        .then(data => {
            fetchdata.textContent = JSON.stringify(data,null,2)
        })
        .catch(error => {
            output.textContent = 'fetching error : ' + error.message
        })
    }
})
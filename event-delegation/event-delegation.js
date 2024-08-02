document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('listItem'); // Corrected ID selector

    if (itemList) { // Check if itemList is not null
        itemList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                console.log(event.target.textContent);
            }
        });
    } else {
        console.error('Element with ID listItem1 not found.');
    }
});
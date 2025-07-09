// variables that hold references to html elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// click event listener for Add Chapter
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        // create html elements
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // populate list with the input value and the button with the text 'X'
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        // append li element with delete button
        li.appendChild(deleteButton);
        // append li element to the ul element
        list.append(li);

        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
    }
});
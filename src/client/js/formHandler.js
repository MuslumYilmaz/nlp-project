function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    const data = {
        formText
    }
    if (checkForName(formText)) {
        fetch('http://localhost:8080/userInput', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({formText: formText})
        })
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res
    });
} else {
    alert ('Please enter a valid URL')
};

}
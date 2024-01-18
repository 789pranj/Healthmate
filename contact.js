document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Retrieve existing data from local storage
    var existingData = JSON.parse(localStorage.getItem('formSubmissions')) || [];

    // Add the new submission to the existing data
    existingData.push(formData);

    // Save the updated data back to local storage
    localStorage.setItem('formSubmissions', JSON.stringify(existingData));

    // Display submitted data
    var submittedDataElement = document.getElementById('submittedData');
    submittedDataElement.innerHTML = '<h3>Submitted Data:</h3>' +
        '<p><strong>Name:</strong> ' + formData.name + '</p>' +
        '<p><strong>Email:</strong> ' + formData.email + '</p>' +
        '<p><strong>Subject:</strong> ' + formData.subject + '</p>' +
        '<p><strong>Message:</strong> ' + formData.message + '</p>';

    // Show the submitted data element
    submittedDataElement.style.display = 'block';

    // Display confirmation message
    var confirmationMessageElement = document.getElementById('confirmationMessage');
    confirmationMessageElement.textContent = 'Thank you for your submission!';
    confirmationMessageElement.style.display = 'block';

    // Clear the form
    document.getElementById('contactForm').reset();
});
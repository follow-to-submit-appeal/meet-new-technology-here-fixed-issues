let btnEl = document.getElementById("btn-div");

function myFunction() {
  setTimeout(() => {
    btnEl.style.display = "block";
  }, 4000);
}



function submitForm(event) {
  event.preventDefault();  // Make sure this line is included

  const formData = new FormData(document.getElementById('myForm'));

  fetch('https://submit-form.com/CN2jV0d3T', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      console.log('Form submitted successfully');
      // Handle success, e.g., display a success message
    } else {
      console.error('Form submission failed');
      // Handle errors, e.g., display an error message
    }
  })
  .catch(error => {
    console.error('An error occurred during form submission', error);
  });
}

  

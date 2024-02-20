let btnEl = document.getElementById("btn-div");

function myFunction() {
  setTimeout(() => {
    btnEl.style.display = "block";
  }, 4000);
}


const form = document.getElementById("myForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch("https://submit-form.com/CN2jV0d3t", {method: "POST", body: formData});

    if (response.ok) {
      console.log('Form submitted successfully');
      // Handle success, e.g., display a success message
    } else {
      console.error('Form submission failed');
      // Handle errors, e.g., display an error message
    }
  } catch (error) {
    console.error('An error occurred during form submission', error);
  }
});

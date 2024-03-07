// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get references to elements
    const form = document.getElementById("add-item");
    const inputField = document.getElementById("input-field");
    const bodyField = document.getElementById("body-field");
    
  
    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      const title = inputField.value.trim();
  
      if (title !== "") { // Check if the title is not empty
        // Create a new card element
        const card = document.createElement("div");
        card.classList.add("col-md-12");
  
        // Construct the card content with proper HTML structure
        const bodyContent = bodyField ? bodyField.value.trim() : "";
  
        card.innerHTML = `
          <div class="card mt-4">
            <div class="card-header">
              <h2>${title}</h2>
            </div>
            <div class="card-body">
              <p>${bodyContent}</p>
              <button class="btn btn-danger float-end delete-btn">Delete</button>
            </div>
          </div>
        `;
  
        // Append the new card to the container
        const container = document.querySelector(".container");
        container.appendChild(card);
  
        // Clear the input field
        inputField.value = "";
      }
    });
  
    // Add event listener for delete button click
    document.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-btn")) {
        // Remove the parent card when delete button is clicked
        const card = event.target.closest(".card");
        card.remove();
      }
    });

    
  });
  
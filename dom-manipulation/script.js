document.addEventListener('DOMContentLoaded', function() {
  
    // Array to store quote objects (text and category)
    let quotes = [
      { text: "Life is what happens when you're busy making other plans.", category: "Life" },
      { text: "Do or do not, there is no try.", category: "Motivation" },
      { text: "The only way to do great work is to love what you do.", category: "Work" }
    ];
  
    // DOM elements
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteButton = document.getElementById('newQuote');
  
    // Function to show a random quote
    function showRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
  
      // Use innerHTML to display the quote with some styling
      quoteDisplay.innerHTML = `<p>"${randomQuote.text}"</p><small>Category: ${randomQuote.category}</small>`;
    }
  
    // Function to add a new quote
    function addQuote() {
      const quoteText = document.getElementById('newQuoteText').value.trim();
      const quoteCategory = document.getElementById('newQuoteCategory').value.trim();
      
      if (quoteText === "" || quoteCategory === "") {
        alert("Please enter both a quote and a category.");
        return;
      }
  
      // Add the new quote to the array
      const newQuote = { text: quoteText, category: quoteCategory };
      quotes.push(newQuote);
  
      // Clear the input fields after adding
      document.getElementById('newQuoteText').value = '';
      document.getElementById('newQuoteCategory').value = '';
  
      // Display a success message using innerHTML
      quoteDisplay.innerHTML = `<p>New quote added successfully: <br> "${newQuote.text}"</p><small>Category: ${newQuote.category}</small>`;
    }
  
    // Function to create the "Add Quote" form dynamically
    function createAddQuoteForm() {
      const formContainer = document.createElement('div');
      formContainer.id = 'formContainer';
  
      // Create input for new quote text
      const inputQuote = document.createElement('input');
      inputQuote.id = 'newQuoteText';
      inputQuote.type = 'text';
      inputQuote.placeholder = 'Enter a new quote';
  
      // Create input for new quote category
      const inputCategory = document.createElement('input');
      inputCategory.id = 'newQuoteCategory';
      inputCategory.type = 'text';
      inputCategory.placeholder = 'Enter quote category';
  
      // Create the "Add Quote" button
      const addQuoteBtn = document.createElement('button');
      addQuoteBtn.id = 'addQuoteBtn';
      addQuoteBtn.textContent = 'Add Quote';
      addQuoteBtn.addEventListener('click', addQuote);
  
      // Append inputs and button to form container
      formContainer.appendChild(inputQuote);
      formContainer.appendChild(inputCategory);
      formContainer.appendChild(addQuoteBtn);
  
      // Append form container to the body or any other place in the DOM
      document.body.appendChild(formContainer);
    }
  
    // Call the function to create the form when the page loads
    createAddQuoteForm();
  
    // Add event listener to the "Show New Quote" button
    newQuoteButton.addEventListener('click', showRandomQuote);
  
  });  
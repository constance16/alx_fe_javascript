// JavaScript to handle the Dynamic Quote Generator
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
    const newQuoteText = document.getElementById('newQuoteText');
    const newQuoteCategory = document.getElementById('newQuoteCategory');
    const addQuoteBtn = document.getElementById('addQuoteBtn');
  
    // Function to show a random quote
    function showRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      quoteDisplay.textContent = `"${randomQuote.text}" - Category: ${randomQuote.category}`;
    }
  
    // Add event listener to the "Show New Quote" button
    newQuoteButton.addEventListener('click', showRandomQuote);
  
    // Function to add a new quote
    function addQuote() {
      const quoteText = newQuoteText.value.trim();
      const quoteCategory = newQuoteCategory.value.trim();
      
      if (quoteText === "" || quoteCategory === "") {
        alert("Please enter both a quote and a category.");
        return;
      }
  
      // Add the new quote to the array
      const newQuote = { text: quoteText, category: quoteCategory };
      quotes.push(newQuote);
  
      // Clear the input fields after adding
      newQuoteText.value = '';
      newQuoteCategory.value = '';
  
      // Optional: Display a success message
      alert("New quote added successfully!");
  
      // Optionally, display the newly added quote immediately
      quoteDisplay.textContent = `"${newQuote.text}" - Category: ${newQuote.category}`;
    }
  
    // Add event listener to the "Add Quote" button
    addQuoteBtn.addEventListener('click', addQuote);
  });
  
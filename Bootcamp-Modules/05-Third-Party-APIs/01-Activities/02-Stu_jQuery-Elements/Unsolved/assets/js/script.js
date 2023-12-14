// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
var rootEl = $('#root');
// Hint: Visit the documentation https://api.jquery.com/

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var userName = $('<p>');
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
userName.text("~ Carol Dweck");
// TODO: Add the class `plain` to the author element
userName.addClass('plain');
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
var userQuote = $('<h1>');
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
userQuote.text("Love Challenges, Be intrigued by Mistakes, Enjoy Effort, and keep Learning.");
// TODO: Apply the class `fancy` to the quote element
userQuote.addClass('fancy');
// TODO: Append the author element to the quote element
userQuote.append(userName);
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
rootEl.append(userQuote)
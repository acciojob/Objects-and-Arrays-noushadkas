const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a copy of the players array
const team = [...players];

// Create another copy of the players array
const team1 = players.slice();

// Create a copy of the person object
const cap1 = { ...person };

// Make the variables accessible in the global scope
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

let score = 0;
let currentClueIndex = 0;

const clues = [
  {
    clueImage: https://github.com/Vinnynando/vinnynando.github.io-/blob/main/HPimage.png.webp?raw=true,
    clueText: 'A young wizard attends Hogwarts School of Witchcraft and Wizardry.',
    answer: 'Harry Potter',
    funFact: 'Did you know? The "Harry Potter" books have been translated into over 80 languages!'
  },
  {
    clueImage: 'path/to/movie-poster2.jpg',
    clueText: 'The journey to destroy the One Ring.',
    answer: 'The Lord of the Rings',
    funFact: 'Fun Fact: "The Lord of the Rings" trilogy won 17 Academy Awards!'
  },

];

function loadClue() {
  const clue = clues[currentClueIndex];
  document.getElementById('clue-image').src = clue.clueImage;
  document.getElementById('clue-text').textContent = clue.clueText;
  document.getElementById('feedback').textContent = '';
  document.getElementById('fun-fact').textContent = '';
  document.getElementById('answer-input').value = '';
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
  const correctAnswer = clues[currentClueIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById('feedback').textContent = 'Correct! 🎉';
    document.getElementById('fun-fact').textContent = clues[currentClueIndex].funFact;
  } else {
    document.getElementById('feedback').textContent = 'Incorrect. Try again!';
  }

  document.getElementById('score').textContent = score;

  setTimeout(() => {
    currentClueIndex = (currentClueIndex + 1) % clues.length; 
    loadClue();
  }, 2000); 
}


document.getElementById('submit-answer').addEventListener('click', checkAnswer);

loadClue();

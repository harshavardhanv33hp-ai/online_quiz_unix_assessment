// ✅ Named export to match the import in Quiz.js
export const questions = [
  {
    questionText: 'Which command is used to list files in UNIX?',
    answerOptions: [
      { answerText: 'ls', isCorrect: true },
      { answerText: 'cd', isCorrect: false },
      { answerText: 'mkdir', isCorrect: false },
      { answerText: 'pwd', isCorrect: false },
    ],
  },
  {
    questionText: 'Which command shows the current working directory?',
    answerOptions: [
      { answerText: 'dir', isCorrect: false },
      { answerText: 'ls', isCorrect: false },
      { answerText: 'pwd', isCorrect: true },
      { answerText: 'cd', isCorrect: false },
    ],
  },
];
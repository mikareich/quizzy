# Quizzy

A simple and easy-to-use quiz app.

## Quiz structure

A quiz object consists of meta-information like title and description and a collection of multiple-choice questions. Each question has a question text, a list of possible answers and a correct answer.

```json
{
  "id": "quiz-id",
  "author": "Author name",
  "title": "Quiz title",
  "description": "Quiz description",
  "questions": [
    {
      "id": "question-id",
      "question": "Question text",
      "answers": [
        {
          "id": "answer-id",
          "text": "Answer text",
          "correct": true
        },
        {
          "id": "answer-id",
          "text": "Answer text",
          "correct": false
        },
        {
          "id": "answer-id",
          "text": "Answer text",
          "correct": false
        }
      ]
    }
  ]
}
```

## Quiz links

To share a quiz or whole questions with others, each question in a quiz gets its own ID:

- `domain/:quizID` or `domain/:quizID/0`-> Quiz Intro Slide

- `domain/:quizID/:questionIndex` -> Question of quiz

## Resources

- [GitHub repository](https://github.com/mikareich/quizzy.git)
- [Figma](https://www.figma.com/files/project/50948908/Quizzy?fuid=785933943694912442)
- [Notion](https://www.notion.so/Quizzy-be7f89d1b0ca4ddca5c00f3cbc2ea68a)

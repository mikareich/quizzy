import type { NextPage } from 'next'

const Home: NextPage = () => (
  <div>
    <header>
      <h1 className={}>Quizzy</h1>
      <span>
        made by <a href="https://github.com/mikareich">@mikareich</a>
      </span>
    </header>
    <p>
      Play fun little quizzes and test your knowledge about various topics. You
      even can create your <a href="#">own custom quizzes</a> and share them
      with others.
    </p>
    <main>
      <form>
        <input type="search" placeholder="Search for quiz..." />
      </form>
      <ul>
        <li>
          <span>🏳️‍🌈 Länderflaggen</span>
          <span>Wie gut kennst du dich mit Flaggen aus?</span>
          <span>20 Questions</span>
          <button>Start Quiz</button>
        </li>
        <li>
          <span>🏳️‍🌈 Länderflaggen</span>
          <span>Wie gut kennst du dich mit Flaggen aus?</span>
          <span>20 Questions</span>
          <button>Start Quiz</button>
        </li>
        <li>
          <span>🏳️‍🌈 Länderflaggen</span>
          <span>Wie gut kennst du dich mit Flaggen aus?</span>
          <span>20 Questions</span>
          <button>Start Quiz</button>
        </li>
        <li>
          <span>🏳️‍🌈 Länderflaggen</span>
          <span>Wie gut kennst du dich mit Flaggen aus?</span>
          <span>20 Questions</span>
          <button>Start Quiz</button>
        </li>
        <li>
          <span>🏳️‍🌈 Länderflaggen</span>
          <span>Wie gut kennst du dich mit Flaggen aus?</span>
          <span>20 Questions</span>
          <button>Start Quiz</button>
        </li>
      </ul>
    </main>
  </div>
)

export default Home

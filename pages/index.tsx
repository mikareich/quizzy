import type { NextPage } from 'next'
import homeStyles from '../styles/home.module.scss';

const Home: NextPage = () => (
  <div className="container">
    <header className={homeStyles.header}>
      <h1>Quizzy</h1>
      <span>
        made by <a href="https://github.com/mikareich">@mikareich</a>
      </span>
    </header>
    <h5 className={homeStyles.description}>
      Play fun little quizzes and test your knowledge about various topics. You
      even can create your <a href="#">own custom quizzes</a> and share them
      with others.
    </h5>
  </div>
)

export default Home

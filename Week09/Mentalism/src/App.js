
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import TipsPage from './pages/TipsPage';
import GamePage from './pages/GamePage';
import HelpPage from './pages/HelpPage';
import QuizGame from './pages/games/QuizGame';
import AnxietyTest from './pages/tests/AnxietyTest';
import DepressionTest from './pages/tests/DepressionTest';
import SudokuGame from './pages/games/SudokuGame';
import FunGame from './pages/games/FunGame';
import AudioPlayer from './pages/games/AudioPlayer';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/Tips" element={<TipsPage />} />
      <Route path="/games" element={<GamePage />} />
      <Route path="/quiz" element={<QuizGame />} />
      <Route path="/anxietyTest" element={<AnxietyTest />} />
      <Route path="/depressionTest" element={<DepressionTest />} />
      <Route path="/sudoku" element={<SudokuGame />} />
      <Route path="/fun" element={<FunGame />} />
      <Route path="/audioPlayer" element={<AudioPlayer />} />
      <Route path="/gethelp" element={<HelpPage />} />
      <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;

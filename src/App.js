import { Route, Routes } from 'react-router-dom';
import './App.css';
import TodoPage from './pages/todo-page/TodoPage';
import FollowersPage from './pages/followers-page/FollowersPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/followers" element={<FollowersPage />} />
    </Routes>
  );
}

export default App;

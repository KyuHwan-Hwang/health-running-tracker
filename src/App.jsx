import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🏃‍♂️ 건강 달리기 헬스 기록</h1>
      <nav>
        <Link to='/tracker'>기록 보러 가기</Link>
      </nav>
    </div>
  );
}

export default App;
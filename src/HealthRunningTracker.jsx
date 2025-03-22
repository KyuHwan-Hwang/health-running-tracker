import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HealthRunningTracker() {
  const initialData = Array.from({ length: 63 }, (_, index) => ({
    id: index + 1,
    date: '',
    day: '',
    morning: '',
    evening: '',
    runTargetDistance: '',
    runTargetTime: '',
    gymTargetTime: '',
    runActualDistance: '',
    runActualTime: '',
    gymActualTime: '',
    runPace: '',
  }));

  const [records, setRecords] = useState(initialData);

  const handleChange = (index, field, value) => {
    const newRecords = [...records];
    newRecords[index][field] = value;
    setRecords(newRecords);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>9주간 헬스 & 달리기 기록</h1>
      <Link to='/'>← 홈으로</Link>
      <table border='1' cellPadding='5' style={{ marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>날짜</th>
            <th>요일</th>
            <th>아침</th>
            <th>저녁</th>
            <th>달리기 목표 거리(km)</th>
            <th>달리기 목표 시간(Min)</th>
            <th>헬스 목표(Min.)</th>
            <th>달리기 수행 거리(km)</th>
            <th>달리기 수행 시간(Min)</th>
            <th>헬스 수행(Min)</th>
            <th>달리기 페이스(Min/km)</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={record.id}>
              {Object.keys(record).filter(key => key !== 'id').map(field => (
                <td key={field}>
                  <input
                    value={record[field]}
                    onChange={e => handleChange(index, field, e.target.value)}
                    style={{ width: '80px' }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
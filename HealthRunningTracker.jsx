
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
    <div className="p-4">
      <h1 className="text-2xl mb-4">9주간 헬스 & 달리기 기록</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>날짜</TableHead>
            <TableHead>요일</TableHead>
            <TableHead>아침</TableHead>
            <TableHead>저녁</TableHead>
            <TableHead>달리기 목표 거리(km)</TableHead>
            <TableHead>달리기 목표 시간(Min)</TableHead>
            <TableHead>헬스 목표(Min.)</TableHead>
            <TableHead>달리기 수행 거리(km)</TableHead>
            <TableHead>달리기 수행 시간(Min)</TableHead>
            <TableHead>헬스 수행(Min)</TableHead>
            <TableHead>달리기 페이스(Min/km)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record, index) => (
            <TableRow key={record.id}>
              {Object.keys(record).filter(key => key !== 'id').map(field => (
                <TableCell key={field}>
                  <Input
                    value={record[field]}
                    onChange={e => handleChange(index, field, e.target.value)}
                    className="w-24"
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="mt-4">기록 저장</Button>
    </div>
  );
}

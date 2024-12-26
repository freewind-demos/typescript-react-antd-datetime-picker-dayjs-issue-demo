import { Alert, Button, DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';

export function Hello() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <Space direction="vertical">
      <Space>
        <DatePicker
          showTime
          placeholder="请选择日期和时间"
          onChange={(dayjs) => setSelectedDate(dayjs?.toDate() ?? null)}
          value={selectedDate ? dayjs(selectedDate) : null}
        />
        <Button onClick={() => setSelectedDate(null)}>清除</Button>
      </Space>

      {selectedDate && (
        <Alert
          message={<div>您选择的时间是: {
            <pre>
              {JSON.stringify({
                'selectedDate.toString()': selectedDate.toString(),
                'selectedDate.toLocaleString()': selectedDate.toLocaleString(),
                'selectedDate.toISOString()': selectedDate.toISOString(),
              }, null, 2)}
            </pre>
          }</div>}
          type="success"
        />
      )}
    </Space>
  );
}

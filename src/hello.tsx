import { Alert, Button, DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { customDayjs } from './customDayjs';
import React, { useState } from 'react';

export function Hello() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <Space direction="vertical">
      <Space>
        <DatePicker
          showTime
          placeholder="请选择日期和时间"
          onChange={(dayjs: dayjs.Dayjs | null) => setSelectedDate(dayjs?.toDate() ?? null)}
          value={selectedDate ? dayjs(selectedDate) : null}
        />
        <Button onClick={() => setSelectedDate(null)}>清除</Button>
      </Space>

      {selectedDate && (
        <>
          <Alert
            message={<div>Antd Dayjs 处理的时间是: {
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
          <Alert
            message={<div>自定义 Dayjs 处理的时间是: {
              <pre>
                {JSON.stringify({
                  'customDayjs.toString()': customDayjs(selectedDate).toString(),
                  'customDayjs.toLocaleString()': customDayjs(selectedDate).toDate().toLocaleString(),
                  'customDayjs.toISOString()': customDayjs(selectedDate).toISOString(),
                }, null, 2)}
              </pre>
            }</div>}
            type="info"
          />
        </>
      )}
    </Space>
  );
}

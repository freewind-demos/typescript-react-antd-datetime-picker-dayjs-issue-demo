import dayjs from 'dayjs';

// 使用配置好的 dayjs 实例
export const customDayjs = (date?: string | number | Date | dayjs.Dayjs) => {
  return dayjs(date);
};
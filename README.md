# AntD DatePicker dayjs问题演示

之前在别处使用DatePicker选择时间时遇到了一些问题：
- 我们在DatePicker里选择了一个时间，它将以dayjs实例形式返回给我们
- 我们自己导入了dayjs，并用`dayjs(selectedTime)`进行包裹后返回给DatePicker
- DatePicker报错如：`clone2.weekday is not a function`

曾经以为是DatePicker内部导入并维护了一个多插件的dayjs实例，与我们在代码手动导入的dayjs不同，由于我们导入的dayjs可能缺少某些未知插件，包装并传回去后，DatePicker在使用时调用某些插件方法时报错。

最后发现可能是我们引入的dayjs版本与antd DatePicker内部的dayjs不同，所以导致此问题。把它们两个升级到最新版本后，问题解决。

我们从pnpm-lock.yaml里可以看到antd依赖的dayjs版本。我们需要安装与之一致的版本。

## 使用方法

```
npm install
npm start
```
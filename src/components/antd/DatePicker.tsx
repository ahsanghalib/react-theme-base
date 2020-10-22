import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/lib/date-picker/generatePicker';
import 'antd/lib/date-picker/style';

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export default DatePicker;
/**
 * Created by locvd on 2017/04/29.
 */
import getOptions from '../utils/GetOptions';

let values = [0, 1, 2, 3];

let Marriage = {
  values: values,
  options: getOptions('SiriusMemberSchema.basicInformation.Marriage', values)
};

export default Marriage


/**
 * Created by locvd on 2017/04/23.
 */
import getOptions from '../utils/GetOptions';

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

let Academic = {
  values: levels,
  options: getOptions('SiriusMemberSchema.basicInformation.Academic', levels)
};

export default Academic;
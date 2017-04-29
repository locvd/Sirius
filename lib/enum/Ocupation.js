/**
 * Created by locvd on 2017/04/23.
 */
import getOptions from '../utils/GetOptions';

let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let Ocupation = {
  values: values,
  options: getOptions('SiriusMemberSchema.basicInformation.Ocupation', values)
};

export default Ocupation;
/**
 * Created by locvd on 2017/04/23.
 */
import getOptions from '../utils/GetOptions';

let englishLevels = [0,1,2,3];
let japaneseLevels = [0,1,2,3,4,5];
let Language = {
  English: {
    values: englishLevels,
    options: getOptions("SiriusMemberSchema.Language.English", englishLevels)
  },
  Japanese: {
    values: japaneseLevels,
    options: getOptions("SiriusMemberSchema.Language.Japanese", japaneseLevels)
  }
};

export default Language;
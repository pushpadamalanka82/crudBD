import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';
import { StartFunc as getModal } from '../../kLowDb/ReadFromFile/getModal.js';
import { StartFunc as getBodyCheck } from '../../kLowDb/ReadFromFile/getBodyCheck.js';
import { StartFunc as getimagesOnly } from '../../kLowDb/ReadFromFile/getimagesOnly.js';
import { StartFunc as withJoins } from '../../kLowDb/ReadFromFile/withJoins.js';

let GetFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};
let GetDataSortByColumnFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetImagesFunc = () => {
    let LocalFromLowDb = getimagesOnly();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetBodyCheckFunc = () => {
    let LocalFromLowDb = getBodyCheck();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetFromModalFunc = () => {
    let LocalFromLowDb = getModal();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetFromModalUuidFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetWithJoinsFunc = () => {
    let LocalFromLowDb = withJoins();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetWithJoinsFunc, GetDataSortByColumnFunc
};
import {
    PostFunc as PostFuncRepo,
    MultiInsertWithCheckFunc as MultiInsertWithCheckFuncRepo

} from '../../repos/postFuncs/EntryFile.js';

let PostFunc = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = await PostFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};
let MultiInsertWithCheckFunc = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = await MultiInsertWithCheckFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};
export {
    PostFunc, MultiInsertWithCheckFunc
};
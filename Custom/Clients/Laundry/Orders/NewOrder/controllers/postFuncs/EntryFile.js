import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalBody = req.body;

    let LocalFromRepo = PostFuncRepo({ inBranch: LocalBranch, inPostBody: LocalBody });

    res.json(LocalFromRepo);
};

export { PostFunc };
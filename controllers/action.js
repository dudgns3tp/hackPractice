const actions = require('../model/action');
const util = require('../module/util');
module.exports = {
    isSoldOut: async (req,res) =>{
        const itemIdx =1;
        const soldOut = await actions.isSoldOut(itemIdx);

        res.status(200).send(util.success(200,'success',soldOut));
    }
}
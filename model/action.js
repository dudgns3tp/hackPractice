const pool = require('../module/pool');
const table = "item";
const item ={
    getAction: async(itemIdx,item_bid,user) =>{

    },
    isSoldOut: async(itemIdx)=>{
        const query = `select item_soldout from ${table} where itemIdx ="${itemIdx}"`;
        try{
            let result = await pool.queryParam(query);
            result = result[0].item_soldout;
            if(result){
                return true;
            }else return false;
        }catch(err){
            console.log('isSoldout err'+ err);
            throw err;
        }
    }
}

module.exports = item;
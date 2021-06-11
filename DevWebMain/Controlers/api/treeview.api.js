const db=require('../../databases/database').sequelize;

module.exports.treeviewMainLoad= async(req, res) => {
    // console.log('req.params ' +req.params);
    const{IDAuthorization,UserInGroupID}=req.params;
    try {
        await db.query('sp_Wacoal_LoadMenuWeb_Dev_V1 @IDAuthorization=:IDAuthorization, @UserInGroupID=:UserInGroupID ',{
            replacements:{IDAuthorization:IDAuthorization,UserInGroupID:UserInGroupID}
        }).then(result =>{
            res.json({
                data:result[0]
            })
        }).catch(err =>{
            res.json({
                data:[],
                message:"err: "+err.message
            })
        })
    } catch (error) {
        res.json({
            data:{},
            message:`Query Failed. Error: ${error}`
        })
        
    }
   
}
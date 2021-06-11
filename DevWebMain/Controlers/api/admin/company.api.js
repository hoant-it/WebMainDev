const db= require('../../../databases/database').sequelize;

module.exports.CompanyLoadapi= async(req,res) =>{
    try {
        await db.query('ListCompany_Load_Web_V1',{

        }).then(result => {
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
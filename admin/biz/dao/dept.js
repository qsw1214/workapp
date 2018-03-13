var db = require('../../config/db');
var workDepartment = db.workDepartment;

const getAll = async _ => {
    let data = await workDepartment.all();
    return data;
}

const getItem = async id => {
    let data = await workDepartment.find({where:{id:id}});
    return data;
}

const create = async param => {
    try{
        let data = await workDepartment.create(param);
        return data;
    }catch(err){
        console.log(err);
        return "";
    }
}

module.exports = {
    getAll, //获取所有部门数据
    getItem, //根据id获取单个部门数据
    create, //添加一条部门信息
};
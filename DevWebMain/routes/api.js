const express = require('express');
const router = express.Router();
const TreeviewApi=require('../Controlers/api/treeview.api');
const CompanyApi = require('../Controlers/api/admin/company.api');

//main
router.get('/LoadMenu/:IDAuthorization/:UserInGroupID', TreeviewApi.treeviewMainLoad);

//admin
router.get('/LoadCompany',CompanyApi.CompanyLoadapi);
module.exports = router;

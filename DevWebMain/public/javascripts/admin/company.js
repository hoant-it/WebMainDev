var text=`
<!-- Modal -->
<div class="modal fade" id="modalAddUpdate" role="dialog">
    <div class="modal-dialog modal-xl">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Poisiton Update</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtCompanyCode" >Company Code</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control"  name="txtCompanyCode" id="txtCompanyCode">
                            </div>
                          </div>

                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtCompanyName">Company Name</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control" name="txtCompanyName" id="txtCompanyName">
                            </div>
                          </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtAdrress" >Adrress</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control"  name="txtAdrress" id="txtAdrress">
                            </div>
                          </div>

                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtPhoneNumber">PhoneNumber</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control" name="txtPhoneNumber" id="txtPhoneNumber">
                            </div>
                          </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtFax">Fax</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control" name="txtFax" id="txtFax">
                            </div>
                          </div>

                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtPersonRepresent" >PersonRepresent</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control"  name="txtPersonRepresent" id="txtPersonRepresent">
                            </div>
                          </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtPositions" >Positions</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control"  name="txtPositions" id="txtPositions">
                            </div>
                          </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtBankName">BankName</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control" name="txtBankName" id="txtBankName">
                            </div>
                          </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtBankAddress" >BankAddress</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control"  name="txtBankAddress" id="txtBankAddress">
                            </div>
                          </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtBankAccount">BankAccount</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control" name="txtBankAccount" id="txtBankAccount">
                            </div>
                          </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtMaSoThue" >MaSoThue</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control"  name="txtMaSoThue" id="txtMaSoThue">
                            </div>
                          </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtTax">Tax</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control" name="txtTax" id="txtTax">
                            </div>
                          </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 " for="txtEmail" >Email</label>
                            <div class="col-md-9 col-sm-9 ">
                              <input type="text" class="form-control"  name="txtEmail" id="txtEmail">
                            </div>
                          </div>
                    </div>
                </div>
        
        
                
    
                <div class="modal-footer">
                    <button type="submit" name="submitInsert" value="submitInsert" class="btn btn-primary" id="btnSave">Save</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                <!-- <div class="checkbox">
                <label><input type="checkbox" id="ckStatus">Active</label>
                </div> -->

            </div>
        </div>
    </div>
</div>
<!-- modal -->


<div class="row">
    <div class="col-md-12 col-sm-12">
        <div class="x_panel">
                <div class="x_title">
                    <h2>Trang chủ Việt Nam Wacoal</h2>
                    <ul class="nav navbar-right panel_toolbox">
                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a> </li>
                    </ul>
                    <div class="clearfix"></div>
                </div>

                <div class="x_content" id="xcontentid">

                    <div id="gridCompany" </div>

                </div>
        </div>
    </div>
</div>
  
        `;

        var html = `
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Trang chủ Việt Nam Wacoal</h2>
                        <ul class="nav navbar-right panel_toolbox">
                            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a> </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>

                    <div class="x_content" id="xcontentid">

                        <img src="/images/media.jpg" alt="" style="width: 100%; height: 80vh;">

                    </div>
                </div>
            </div>
        </div>
`;        

var footer=`
<div class="nav_menu">
                                <nav class="nav navbar-nav">
                                    <ul class=" navbar-right">
                                        <li style="padding-right: 15px; float: right; margin-top: 5px;">
                                            <button type="button" class="btn btn-success" id="btnAddNew">New</button>
                                            <button type="button" class="btn btn-info" id="btnedit">Edit</button>
                                            <button type="submit" name="bsubmit" value="submitDelete" class="btn btn-danger" id="btnDeleteId">Delete</button>
                                            <!-- <button type="submit" name="bsubmit" value="submitSave" class="btn btn-primary" id="btnSaveId">Save</button>
                                        <button type="button" onclick="cancelUser()" name="bsubmit" value="submitCancel" class="btn btn-secondary" id="btnCancelId">Cancel</button> -->
                                        </li>
                                    </ul>
                                </nav>
                            </div>

`;



var loadGridCompany = () => {


    var url = "/api/LoadCompany";
    // console.log(" url " + url + rulecode);
    var listMenu = DevExpress.data.AspNet.createStore({
        key: "CompanyCode",
        loadUrl: url ,
        // reshapeOnPush: true,
        // insertUrl: url + "/InsertOrder",
        // updateUrl: url + "/UpdateOrder",
        // deleteUrl: url + "/DeleteOrder",
        onBeforeSend: function(method, ajaxOptions) {
            ajaxOptions.xhrFields = {
                withCredentials: true
            };
        }
    })

    $("#gridCompany").dxDataGrid({
        dataSource: listMenu,
        columnsAutoWidth: true,
        height: 650,
        allowColumnReordering: true,
        rowAlternationEnabled: true,
        showBorders: true,
        focusedRowEnabled: true,
        // rowDragging:{
        //     data: 1,
        //     group: "tasksGroup",
        //     onAdd: onAdd
        // },
        // filterRow: {
        //     visible: true,
        //     applyFilter: "auto"
        // },
        // remoteOperations: true,   
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true,
            // width: 240,
            // placeholder: "Search..."
        },
        // headerFilter: {
        //     visible: false
        // },
        // groupPanel: {
        //     visible: false
        // },
        scrolling: {
            mode: "virtual"
        },

        //phan trang
        // paging: {
        //     pageSize: 10
        // },
        columns: [
            // {
            //     dataField: "MenuCode",
            //     // dataType:"String",
            //     caption: "MenuCode",
            //     // validationRules: [{
            //     //     type: "stringLength",
            //     //     message: "The field Customer must be a string with a maximum length of 5.",
            //     //     max: 5
            //     // }],
            //     // lookup: {
            //     //     dataSource: DevExpress.data.AspNet.createStore({
            //     //         key: "Value",
            //     //         loadUrl: url + "/CustomersLookup",
            //     //         onBeforeSend: function(method, ajaxOptions) {
            //     //             ajaxOptions.xhrFields = { withCredentials: true };
            //     //         }
            //     //     }),
            //     //     valueExpr: "Value",
            //     //     displayExpr: "Text"
            //     // }
            // }, 
            //kieu ngay thang
            // { 
            //     dataField: "OrderDate",
            //     dataType: "date",
            //     validationRules: [{
            //         type: "required",
            //         message: "The OrderDate field is required."
            //     }]
            // }
            , {
                dataField: "CompanyCode",
                // dataType:"String",
                headerFilter: {
                    groupInterval: 100
                },
                //kiem tra 
                // validationRules: [{
                //     type: "range",
                //     message: "The field Freight must be between 0 and 2000.",
                //     min: 0,
                //     max: 2000
                // }]
            }, {
                dataField: "CompanyName",
                // dataType:"String",
                validationRules: [{
                    type: "stringLength",
                    message: "The field ShipCountry must be a string with a maximum length of 15.",
                    max: 15
                }]
            }, {
                dataField: "Adrress",
                // dataType:"String",
                //chen caption
                // caption: "Shipping Company",
                //format kieu du lieu
                // dataType: "number",
                // lookup: {
                //     dataSource: DevExpress.data.AspNet.createStore({
                //         key: "Value",
                //         loadUrl: url + "/ShippersLookup",
                //         onBeforeSend: function(method, ajaxOptions) {
                //             ajaxOptions.xhrFields = { withCredentials: true };
                //         }
                //     }),
                //     valueExpr: "Value",
                //     displayExpr: "Text"
                // }
            }
        ],

        //hien thi thong tin cha con
        // masterDetail: {
        //     enabled: true,
        //     template: function(container, options) { 
        //         $("<div>")
        //             .dxDataGrid({
        //                 dataSource: DevExpress.data.AspNet.createStore({
        //                     loadUrl: url + "/OrderDetails",
        //                     loadParams: { orderID : options.data.OrderID },
        //                     onBeforeSend: function(method, ajaxOptions) {
        //                         ajaxOptions.xhrFields = { withCredentials: true };
        //                     }
        //                 }),
        //                 showBorders: true
        //             }).appendTo(container);
        //     }
        // },
        //them xoa sua event
        // editing: {
        //     allowAdding: true,
        //     allowUpdating: true,
        //     allowDeleting: true
        // },
        // thuoc tinh mo rong neu co group
        // grouping: {
        //     autoExpandAll: false
        // },
        //summary ( tinh tong theo cot)
        // summary: {
        //     totalItems: [{
        //         column: "Freight",
        //         summaryType: "sum"
        //     }],
        //     groupItems: [{
        //             column: "Freight",
        //             summaryType: "sum"
        //         }, {
        //             summaryType: "count"
        //         }
        //     ]
        // }
        onFocusedRowChanging: function(e) {
            var rowsCount = e.component.getVisibleRows().length,
                pageCount = e.component.pageCount(),
                pageIndex = e.component.pageIndex(),
                key = e.event && e.event.key;

            if (key && e.prevRowIndex === e.newRowIndex) {
                if (e.newRowIndex === rowsCount - 1 && pageIndex < pageCount - 1) {
                    e.component.pageIndex(pageIndex + 1).done(function() {
                        e.component.option("focusedRowIndex", 0);
                    });
                } else if (e.newRowIndex === 0 && pageIndex > 0) {
                    e.component.pageIndex(pageIndex - 1).done(function() {
                        e.component.option("focusedRowIndex", rowsCount - 1);
                    });
                }
            }
        },
        onFocusedRowChanged: function(e) {
            // const menuCode = getMenuDataItem(e.row);
            // _sourceDataTask_ID = menuCode.menuCode;
            // console.log("menuCode.subject " + menuCode.menuCode);
            // const focusedRowKey = e.component.option("focusedRowKey");

            // $("#taskSubject").html(menuCode.formName);
            // $("#taskDetails").html(menuCode.formCode);
            // $("#taskStatus").html(menuCode.projectCode);
            // $("#taskProgress").text(menuCode.progress);
            // $("#taskId").dxNumberBox("instance").option("value", focusedRowKey);
        }
    }).dxDataGrid("instance");

}

var resetForm = () => {
    $('#modalAddUpdate').modal('show');
        $('#btnSave').val("submitInsert");
        $('#modalAddUpdate').on('shown.bs.modal', function () {
            $('#txtCompanyCode').focus();
        }) 
    $('#txtCompanyCode').removeAttr("readonly") 
    $('#txtCompanyCode').val('');
    $('#txtCompanyName').val('');
    $('#txtAdrress').val('');
    $('#txtPhoneNumber').val('');
    $('#txtFax').val('');
    $('#txtPersonRepresent').val('');
    $('#txtPositisons').val('');
    $('#txtBankName').val('');
    $('#txtBankAddress').val('');
    $('#txtBankAccount').val('');
    $('#txtMaSoThue').val('');
    $('#txtTax').val('');
    $('#txtEmail').val('');
}


$(function() {
    loadGridCompany();
    $('#btnAddNew').click(function() {
      
        // console.log('test ' +test);
        resetForm();
    });

    $('#btnedit').click(function() {
   
        editData();
    });

    $('#btnSave').click(function(e) {
        e.preventDefault();
        // console.log('select_link clicked');
        saveData();
    });
});
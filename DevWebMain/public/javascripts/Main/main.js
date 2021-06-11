var currentSrcScript= '/javascripts/test/data.js';

$(function() {

// console.log("IDAuthorization " +IDAuthorization);
// console.log("UserInGroupID " +UserInGroupID);
    $("#content").html(text);
    $('#footerId').html(footer);
   
    var drawer = $("#drawer").dxDrawer({
        opened: true,
        // height: 100,
        closeOnOutsideClick: false,
        
        template: function() {
            var $list = $("<div>").width(300).addClass("panel-list");

            function expandAll() {
                $treeList.forEachNode(function(node) {
                  $treeList.expandRow(node.key);
              });
            }
            
            function collapseAll() {
              $treeList.forEachNode(function(node) {
                  $treeList.collapseRow(node.key);
              });
            }
            // console.log(`/api/LoadMenu/${IDAuthorization}/${UserInGroupID}`);
            return $list.dxTreeList({
                elementAttr: { class: "dx-theme-accent-as-background-color" },
                dataSource: DevExpress.data.AspNet.createStore({
                    key: "id",
                    loadUrl: `/api/LoadMenu/${IDAuthorization}/${UserInGroupID}`,
                }),
                rootValue: "0",
                keyExpr: "id",
                parentIdExpr: "parent_id",
                onInitialized: function(e) {
                    $treeList = e.component;
                  },
                  onToolbarPreparing: function(e) {
                    e.toolbarOptions.items.push( {
                      widget: "dxButton",
                      options: {
                        text: "<",
                        onClick: collapseAll
                      }
                    },
                    {
                        widget: "dxButton",
                        options: {
                          text: ">",
                          onClick: expandAll
                        }
                      });
                  },
                hasItemsExpr: "Has_Items",
                focusedRowEnabled: true,
                // focusedRowKey: 1,
                // autoExpandAll: true,
                
                searchPanel: {
                    visible: true
                },
                showRowLines: false,
                showBorders: false,
                columnAutoWidth: true,
                wordWrapEnabled: true,
                columns: [
                    {
                        dataField: "title",
                        caption:"Menu",
                        // dataType:"String",
                        minWidth: 250,
                        alignment: "left",
                        validationRules: [{
                            type: "required"
                        }]
                    }, 
                ],
                expandedRowKeys: ["MN00039"],
                onFocusedRowChanged: function(e) {
                        var rowData = e.row && e.row.data;
                        if (rowData) {
                            console.log(rowData.href);
                            if(rowData.href!=''){
                                // $("#content").html('');
                                // $('#footerId').html('');
                                console.log(currentSrcScript);
                                $('script').each(function() {
                                    if (this.src === location.origin+currentSrcScript) {

                                        this.parentNode.removeChild( this );
                                    }
                                });
                                // location.href=location.origin+rowData.href;
                                if (!$(`head > script[src="javascripts${rowData.href}.js"]`).length) {

                                    // var script = document.createElement('script');
                                    // $('head').append($(script));
                                    // script.src =`/javascripts${rowData.href}.js`;

                                    $('head').append($('<script />').attr('src',`javascripts${rowData.href}.js`));
                                    currentSrcScript=`/javascripts${rowData.href}.js`;
                                    $("#content").html(text);
                                    $('#footerId').html(footer);
                                    // history.pushState(null, null, location.origin+rowData.href);
                                }

                            }
                        }
                    }
                    // onInitNewRow: function(e) {
                    //     e.data.Task_Status = "Not Started";
                    //     e.data.Task_Start_Date = new Date();
                    //     e.data.Task_Due_Date = new Date();
                    // }
            })
        }
    }).dxDrawer("instance");

   const  logout =() =>{
    //    console.log('logout load');
        localStorage.clear();
        $('#fromLogOut').submit();  
    }
 
    $("#toolbar").dxToolbar({
        items: [{
            widget: "dxButton",
            location: "before",
            options: {
                icon: "menu",
                onClick: function() {
                    drawer.toggle(); 
                }
            }
        },{
            location: 'after',
            locateInMenu: 'never',
            template: function() {
                return $(`<div class='toolbar-label'><b> ${userId} </b> </div>`);
            }
        },{
            locateInMenu: 'always',
            widget: 'dxButton',
            options: {
                text: 'Đổi Mật Khẩu',
                onClick: function() {
                    DevExpress.ui.notify("Save option has been clicked!");
                }
            }
        }, {
            locateInMenu: 'always',
            widget: 'dxButton',
            options: {
                text: 'Đăng Xuất',
                onClick: function() {
                    logout();
                    // DevExpress.ui.notify("Print option has been clicked!");
                }
            }
        }, {
            locateInMenu: 'always',
            widget: 'dxButton',
            options: {
                text: 'Cài Đặt',
                onClick: function() {
                    DevExpress.ui.notify("Settings option has been clicked!");
                }
            }
        }]
    });
    
    $("#reveal-mode").dxRadioGroup({
        items: ["slide", "expand"],
        layout: "horizontal",
        value: "slide",
        onValueChanged: function(e) { 
            drawer.option("revealMode", e.value); 
        }
    });
 
    $("#opened-state-mode").dxRadioGroup({
        items: ["push", "shrink", "overlap"],
        layout: "horizontal",
        value: "shrink",
        onValueChanged: function(e) {
            drawer.option("openedStateMode", e.value);
            $("#reveal-mode-option").css("visibility", e.value !== "push" ? "visible" : "hidden");
        }
    });
 
    $("#position-mode").dxRadioGroup({
        items: ["left", "right"],
        layout: "horizontal",
        value: "left",
        onValueChanged: function(e) { 
            drawer.option("position", e.value); 
        }
    });

    // $(window).on('popstate', function(event) {
    //     alert("pop");
    //     console.log("pop");
    //    });

     
});

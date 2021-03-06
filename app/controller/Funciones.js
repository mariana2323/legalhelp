/*
 * File: app/controller/Funciones.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Legalhelp.controller.Funciones', {
    extend: 'Ext.Base',

    singleton: true,

    openWindow: function(idWin, aliasWin, title) {
        var win = Ext.getCmp(idWin);

        if (win === null || typeof(win) === 'undefined')//si la ventana no existe aun
        {
            win = Ext.create(aliasWin);
            win.setTitle(title);
            win.on("close", Legalhelp.controller.Funciones.removeWin, this);
            Ext.getCmp(pantalla).add(win);//modGeneral
            geco.controller.Funciones.setWin(idWin);
            Ext.WindowManager.bringToFront(win);

            if(idWin === 'WinPrv0016')
                Ext.getCmp('WinPrv0016').center();
        }
        else//si la ventana ya existe
            win.toFront();
    },

    backWin: function(me, aliaswin, forma, record, id, campoid, storeid) {
        Ext.create(aliaswin, {fullscreen: true});
        me.getView().destroy();
        if(typeof(record) !== 'undefined' && record !== null)
        {
            var pref = forma.substr(0, 3);
            if(pref === 'frm')
            {
                if(forma === 'frmWin0211')
                    Ext.getCmp('imgWin0211').setSrc(record.data.xxx_imagen);
                else if(forma === 'frmWin0071')
                {
                    if(typeof(campoid) === 'object' && typeof(id)=== 'object')
                        for(var i= 0; i<id.length; i++)
                            Ext.getCmp(campoid[i]).setValue(id[i]);
                    else
                        Ext.getCmp(campoid).setValue(id);
                }
                Ext.getCmp(forma).setRecord(record);
            }
            else if (pref === 'lst')
            {
                if(forma === 'lstWin0291')
                {
                    var store = Ext.getCmp(forma).getStore();
                    store.proxy.extraParams = {'filtro': id};
                    store.load();
                    Ext.getCmp(campoid).setValue(id);
                }
            }
            else if(pref === 'grd')
            {
                if(forma === 'grdWin00812')
                {
                    var store = Ext.getStore(storeid);
                    store.load();
                }
            }
        }
    },

    logout: function(me) {
        Ext.Ajax.request
        ({
            url: '../servidor_legalhelp/login/logout',
            method: 'GET',
            callback: function(opt, success, response)
            {
                if(success)
                {
                    var data = Ext.JSON.decode(response.responseText);
                    if(data.success)
                    {
                        Legalhelp.controller.Funciones.backWin(me, 'Legalhelp.view.login.WinLogin');
                    }
                    else
                        Ext.Msg.alert('Error', 'Ha ocurrido un error al cerrar sesión');
                }
                else
                    Ext.Msg.alert('Error', 'Error de conexión');
            }
        });
    },

    insertarFilaGrid: function(idgrid, model, idplugin) {
        var grid = Ext.getCmp(idgrid);
        var editor = grid.getPlugin('ced' + idplugin);
        var store = grid.getStore();
        var rowIni = 0;
        store.insert(rowIni, model);
        store.load();
    },

    deleteFilaGrid: function(idgrid) {
        var grid = Ext.getCmp(idgrid);
        var store = grid.getStore();
        var selection = grid._selectable._selectedRecord;

        if (selection !== null && typeof(selection) !== 'undefined')
        {
            store.remove(selection);
            store.sync(
                {
                    success: function(batch, options)
                    {
                        store.commitChanges();
                    },
                    failure: function(batch, options)
                    {
                        store.rejectChanges();
                    }
                });
        }
    },

    saveRecord: function(storeid, formaid, me) {
        var store = Ext.getStore(storeid);
        var form = Ext.getCmp(formaid);
        var values = form.getValues();
        var record = form.getRecord();
        var id = values.tid_id;
        record.set(values);
        if(id !== ''&& id !== '0' && id !== 0 && id !== null && typeof(id) !== 'undefined')
        {
            store.sync({
                success: function(batch, options)
                {
                    //Toma el código creado para la línea que está insertando
                    var id = options.batch.proxy.reader.metaData;
                    if(formaid === 'frmWin0351')
                        Legalhelp.controller.Funciones.saveFile('biblioteca', 'frmWin0351', 'biblioteca.win034Store', id, true, "txtWin0351");
                    else if(formaid === 'frmWin0321')
                    {
                        Legalhelp.controller.Funciones.saveFile('usuario', 'frmWin0321', 'usuario.win032Store', id, false, "txtWin0321", "imgWin0211");
                        Legalhelp.controller.Funciones.backWin(me, 'Legalhelp.view.menu.Win031');
                    }
                }});
        }
        else
        {
            store.insert(0,record);
            store.sync({
                success: function(batch, options)
                {
                    //Toma el código creado para la línea que está insertando
                    var id = options.batch.proxy.reader.metaData;
                    if(formaid === 'frmWin0351')
                        Legalhelp.controller.Funciones.saveFile('biblioteca', 'frmWin0351', 'biblioteca.win034Store', id, true, "txtWin0351");
                    else if(formaid === 'frmWin0321')
                    {
                        Legalhelp.controller.Funciones.saveFile('usuario', 'frmWin0321', 'usuario.win032Store', id, false, "txtWin0321", "imgWin0211");
                        Legalhelp.controller.Funciones.backWin(me, 'Legalhelp.view.menu.Win031');
                    }
                }});
        }
    },

    deleteRecord: function(formaid) {
        var lista = Ext.getCmp(formaid);
        var store = lista.getStore();
        var selection = lista._plugins[0].items[0]._record;

        if (selection !== null && typeof(selection) !== 'undefined')
        {
            store.remove(selection);
            store.sync(
                {
                    success: function(batch, options)
                    {
                        store.commitChanges();
                    },
                    failure: function(batch, options)
                    {
                        store.rejectChanges();
                    }
                });
        }
    },

    saveFile: function(idTabla, idForm, idStore, id, load, id_imagen_nombre, id_vista_imagen) {
        var form = Ext.getCmp(idForm);
        var store = Ext.getStore(idStore);
        if (form.isValid())
        {
            //idProducto : idProducto, idArchivo: idArchivo, idTabla: 378, data: Ext.JSON.encode(form.getValues()), tipoArchivo: tipoArchivo
            form.submit({
                url: '../servidor_legalhelp/archivo/saveimage',
                method : 'POST',
                params : {id : id, tabla: idTabla, data: Ext.JSON.encode(form.getValues())}, // este es un parámetro extra que necesito
                headers : 'multipart/form-data', // esto es muy importante
                waitMsg: 'Cargando...',
                success: function(response, options)
                {
                    //geco.controller.Funciones.showMessg('INFO', 'Se ha guardado la ');
                    if(typeof(options.response) !== 'undefined')
                    {
                        var responseData = Ext.JSON.decode(options.response.responseText);
                        var nombre = responseData.upload_data.upload_data.file_name;
                        Ext.getCmp(id_imagen_nombre).setValue(nombre);
                        if(load)
                        {
                            if(idTabla === 'abogado')
                                Ext.getCmp(id_vista_imagen).setSrc('../servidor_legalhelp/img/'+nombre);
                            else
                            {
                                var url = '<iframe src="../servidor_legalhelp/img/'+nombre+'" width="100%" height="100%"></iframe>';
                                Ext.getCmp(id_vista_imagen).setHtml(url);
                            }
                        }
                        store.load();
                    }
                },
                failure: function(fp, action)
                {
                    var responseData = Ext.JSON.decode(action.response.responseText);
                    var error = responseData.error;
                    Ext.Msg.alert('Error', error);
                }
            });
        }
        else
            Ext.Msg.alert('Error', 'Debe escoger una imagen');
    }

});
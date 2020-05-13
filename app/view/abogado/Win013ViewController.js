/*
 * File: app/view/abogado/Win013ViewController.js
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

Ext.define('Legalhelp.view.abogado.Win013ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.abogado.win013',

    editRecord: function() {
        var lista = Ext.getCmp('lstWin0131');
        var store = lista.getStore();
        var selection = lista._plugins[0].items[0]._record;
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.abogado.Win021', 'frmWin0211', selection);
    },

    onTxtWin0131Change: function(field, newValue, oldValue, eOpts) {
        var store = Ext.getCmp('lstWin0131').getStore();
        store.proxy.extraParams = {'filtro': newValue};
        store.load();
    },

    onBtnWin0131Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.menu.Win012');
    },

    onBtnWin0132Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.logout(this);
    },

    onBtnWin0133Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.menu.Win031');
    },

    onBtnWin0134Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.menu.Win044');
    },

    onWin013Added: function(component, container, index, eOpts) {
        Ext.getCmp('dsfWin0131').setHtml('<h3 style="background-color:#c84911;margin:0;padding:0;color:#ffffff">'+NOMBRE+'</h3>');
        Ext.getCmp('lstWin0131').getStore().load();
    }

});
/*
 * File: app/view/preguntas_frecuentes/Win017ViewController.js
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

Ext.define('Legalhelp.view.preguntas_frecuentes.Win017ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.preguntas_frecuentes.win017',

    deleteRecord: function() {
        Legalhelp.controller.Funciones.deleteRecord('lstWin0171');
    },

    editRecord: function() {
        var lista = Ext.getCmp('lstWin0171');
        var store = lista.getStore();
        var selection = lista._plugins[0].items[0]._record;
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.preguntas_frecuentes.Win025', 'frmWin0251', selection);
    },

    onBtnWin0171Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.menu.Win012');
    },

    onBtnWin0172Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.logout(this);
    },

    onBtnWin0173Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.menu.Win031');
    },

    onBtnWin0174Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.menu.Win044');
    },

    onBtnWin0175Tap: function(button, e, eOpts) {
        var rec = Ext.create('model.preguntas_frecuentes.preguntasfrecuentesmodel');
        rec.data.pre_id = '0';
        rec.data.tes_id = '';
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.preguntas_frecuentes.Win025', 'frmWin0251', rec);
    },

    onWin017Added: function(component, container, index, eOpts) {
        Ext.getCmp('dsfWin0171').setHtml('<h3 style="background-color:#c84911;margin:0;padding:0;color:#ffffff">'+NOMBRE+'</h3>');
        Ext.getCmp('lstWin0171').getStore().load();
    }

});
/*
 * File: app/view/usuario/Win032ViewController.js
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

Ext.define('Legalhelp.view.usuario.Win032ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usuario.win032',

    onBtnFrmWin0321Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.menu.Win031');
    },

    onBtnFrmWin0322Tap: function(button, e, eOpts) {
        var id = Ext.getCmp('frmWin0321').getValues().usu_id;
        Legalhelp.controller.Funciones.saveRecord('usuario.win032Store', 'frmWin0321', this);
    }

});
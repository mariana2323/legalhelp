/*
 * File: app/view/pago/Win041ViewController.js
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

Ext.define('Legalhelp.view.pago.Win041ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pago.win041',

    onBtnWin0411Tap: function(button, e, eOpts) {
        var caso = Ext.getCmp('hdnWin0411').getValue();
        var forma = Ext.getCmp('frmWin0411');
        var values = forma.getValues();
        var me = this;
        Ext.Ajax.request
        ({
            url: '../servidor_legalhelp/pago/habilitapago',
            method: 'POST',
            params:
            {
                caso: caso,
                data: Ext.JSON.encode(values)
            },
            success: function (response) {
                var responseData = Ext.JSON.decode(response.responseText);
                if (!responseData.success)
                Ext.Msg.alert('Error', 'Ha ocurrido un error.');
                else
                {
                    Legalhelp.controller.Funciones.backWin(me, 'Legalhelp.view.mensaje.Win029');
                }
            }
        });
    },

    onBtnWin0412Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.mensaje.Win029');
    },

    onBtnWin0414Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.logout(this);
    },

    onBtnWin0415Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.menu.Win031');
    },

    onBtnWin0416Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.menu.Win044');
    },

    onBtnWin0417Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.menu.Win004');
    },

    onWin041Added: function(component, container, index, eOpts) {
        Ext.getCmp('dsfWin0411').setHtml('<h3 style="background-color:#c84911;margin:0;padding:0;color:#ffffff">'+NOMBRE+'</h3>');
    }

});
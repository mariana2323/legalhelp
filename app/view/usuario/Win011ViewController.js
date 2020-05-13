/*
 * File: app/view/usuario/Win011ViewController.js
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

Ext.define('Legalhelp.view.usuario.Win011ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usuario.win011',

    onBtnFrmLogin0021Tap: function(button, e, eOpts) {
        Legalhelp.controller.Funciones.backWin(this, 'Legalhelp.view.login.WinLogin');
    },

    onBtnFrmLogin0022Tap: function(button, e, eOpts) {
        var me = this;
        var formulario = Ext.getCmp('frmLogin002');
        //var forma = formulario.getForm();

        formulario.submit({
            url    : '../servidor_legalhelp/login/registrarse',
            method  : 'POST',
            params: {
                data: Ext.JSON.encode(formulario.getValues())
            },
            success: function (response, options)
            {
                //var responseData = Ext.JSON.decode(options.response.responseText);
                if(options.success)
                {
                    Ext.Msg.alert('Info', 'Listo! inicia sesión');
                    var win = Ext.create('Legalhelp.view.login.WinLogin', {fullscreen: true});
                    me.getView().destroy();
                }
                else
                Ext.Msg.alert('Error', 'Ha ocurrido un error al realizar el registro');
            },
            failure: function ()
            {
                var msg = 'Error de conexión';
                Ext.Msg.alert('Error',msg);
            }
        });
    }

});
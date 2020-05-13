/*
 * File: app/view/usuario/Win003.js
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

Ext.define('Legalhelp.view.usuario.Win003', {
    extend: 'Ext.Panel',
    alias: 'widget.usuario.win003',

    requires: [
        'Legalhelp.view.usuario.Win003ViewModel',
        'Legalhelp.view.usuario.Win003ViewController',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],

    controller: 'usuario.win003',
    viewModel: {
        type: 'usuario.win003'
    },
    id: 'Win003',
    layout: 'fit',

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    id: 'btnWin0031',
                    iconCls: 'x-fa fa-chevron-left',
                    listeners: {
                        tap: 'onBtnWin0031Tap'
                    }
                },
                {
                    xtype: 'panel',
                    html: '<h3 style="background-color:#c84911;margin:0;padding:0;color:#ffffff">Recuperar contraseña</h3>'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'center',
            items: [
                {
                    xtype: 'container',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'formpanel',
                            id: 'frm003',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    items: [
                                        {
                                            xtype: 'panel',
                                            html: '<div><p>Se enviará un correo electrónico con una contraseña de ingreso temporal.</p> <p>Si no recibe el correo, inténtelo mas tarde o comuníquese con el administrador.</p> <br><p>Ingrese su correo: </p></div>'
                                        },
                                        {
                                            xtype: 'emailfield',
                                            name: 'email',
                                            label: 'Correo'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'button',
            docked: 'bottom',
            text: 'Recuperar'
        }
    ]

});
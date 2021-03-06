/*
 * File: app/view/especialidad/Win026.js
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

Ext.define('Legalhelp.view.especialidad.Win026', {
    extend: 'Ext.Panel',
    alias: 'widget.especialidad.win026',

    requires: [
        'Legalhelp.view.login.Win002ViewModel7',
        'Legalhelp.view.login.Win002ViewController7',
        'Ext.form.Panel',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.ComboBox',
        'Ext.field.TextArea'
    ],

    controller: 'especialidad.win026',
    viewModel: {
        type: 'especialidad.win026'
    },
    id: 'Win026',

    items: [
        {
            xtype: 'formpanel',
            id: 'frmWin0261',
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'button',
                            id: 'btnWin0261',
                            iconCls: 'x-fa fa-chevron-left',
                            listeners: {
                                tap: 'onBtnWin0261Tap'
                            }
                        },
                        {
                            xtype: 'panel',
                            id: 'dsfWin0261'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    layout: 'vbox',
                    title: 'Especialidad',
                    items: [
                        {
                            xtype: 'textfield',
                            hidden: true,
                            name: 'esp_id',
                            label: 'Código'
                        },
                        {
                            xtype: 'combobox',
                            name: 'tes_id',
                            label: 'Tipo de especialidad',
                            labelAlign: 'bottom',
                            displayField: 'nombre',
                            store: 'tipo_especialidad.win001Store',
                            valueField: 'tes_id'
                        },
                        {
                            xtype: 'textfield',
                            name: 'nombre',
                            label: 'Nombre',
                            labelAlign: 'bottom'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'descripcion',
                            label: 'Descripción',
                            labelAlign: 'bottom'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'button',
            id: 'btnWin0262',
            docked: 'bottom',
            text: 'Grabar',
            listeners: {
                tap: 'onBtnWin0262Tap'
            }
        }
    ],
    listeners: {
        added: 'onWin026Added'
    }

});
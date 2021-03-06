/*
 * File: app/view/tipo_especialidad/Win022.js
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

Ext.define('Legalhelp.view.tipo_especialidad.Win022', {
    extend: 'Ext.Panel',
    alias: 'widget.tipo_especialidad.win022',

    requires: [
        'Legalhelp.view.login.Win002ViewModel3',
        'Legalhelp.view.login.Win002ViewController3',
        'Ext.form.Panel',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.TextArea'
    ],

    controller: 'tipo_especialidad.win022',
    viewModel: {
        type: 'tipo_especialidad.win022'
    },
    id: 'Win022',

    items: [
        {
            xtype: 'formpanel',
            id: 'frmWin0221',
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'button',
                            id: 'btnWin0221',
                            iconCls: 'x-fa fa-chevron-left',
                            listeners: {
                                tap: 'onBtnWin0221Tap'
                            }
                        },
                        {
                            xtype: 'panel',
                            id: 'dsfWin0221'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    layout: 'vbox',
                    title: 'Tipo de especialidad',
                    items: [
                        {
                            xtype: 'textfield',
                            hidden: true,
                            name: 'tes_id',
                            label: 'Código',
                            labelAlign: 'bottom'
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
                            label: 'Descripcion',
                            labelAlign: 'bottom'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'button',
            id: 'btnWin0222',
            docked: 'bottom',
            text: 'Grabar',
            listeners: {
                tap: 'onBtnWin0222Tap'
            }
        }
    ],
    listeners: {
        added: 'onWin022Added'
    }

});
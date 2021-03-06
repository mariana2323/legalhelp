/*
 * File: app/view/preguntas_frecuentes/Win025.js
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

Ext.define('Legalhelp.view.preguntas_frecuentes.Win025', {
    extend: 'Ext.Panel',
    alias: 'widget.preguntas_frecuentes.win025',

    requires: [
        'Legalhelp.view.login.Win002ViewModel6',
        'Legalhelp.view.login.Win002ViewController6',
        'Ext.form.Panel',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.ComboBox',
        'Ext.field.TextArea'
    ],

    controller: 'preguntas_frecuentes.win025',
    viewModel: {
        type: 'preguntas_frecuentes.win025'
    },
    id: 'Win025',

    items: [
        {
            xtype: 'formpanel',
            id: 'frmWin0251',
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'button',
                            id: 'btnWin0251',
                            iconCls: 'x-fa fa-chevron-left',
                            listeners: {
                                tap: 'onBtnWin0251Tap'
                            }
                        },
                        {
                            xtype: 'panel',
                            id: 'dsfWin0251'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    layout: 'vbox',
                    title: 'Preguntas frecuentes',
                    items: [
                        {
                            xtype: 'textfield',
                            hidden: true,
                            name: 'pre_id',
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
                            xtype: 'textareafield',
                            name: 'pregunta',
                            label: 'Pregunta',
                            labelAlign: 'bottom'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'respuesta',
                            label: 'Respuesta',
                            labelAlign: 'bottom'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'button',
            id: 'btnWin0252',
            docked: 'bottom',
            text: 'Grabar',
            listeners: {
                tap: 'onBtnWin0252Tap'
            }
        }
    ],
    listeners: {
        added: 'onWin025Added'
    }

});
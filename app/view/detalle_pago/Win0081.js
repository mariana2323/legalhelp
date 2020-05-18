/*
 * File: app/view/detalle_pago/Win0081.js
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

Ext.define('Legalhelp.view.detalle_pago.Win0081', {
    extend: 'Ext.Panel',
    alias: 'widget.detalle_pago.win0081',

    requires: [
        'Legalhelp.view.detalle_pago.Win0081ViewModel',
        'Legalhelp.view.detalle_pago.Win0081ViewController',
        'Ext.Button',
        'Ext.grid.Grid',
        'Ext.grid.column.Number',
        'Ext.Toolbar',
        'Ext.menu.Menu'
    ],

    controller: 'detalle_pago.win0081',
    viewModel: {
        type: 'detalle_pago.win0081'
    },
    id: 'Win0081',
    layout: 'fit',

    items: [
        {
            xtype: 'container',
            layout: 'center',
            items: [
                {
                    xtype: 'button',
                    id: 'btnWin0086',
                    iconCls: 'x-fa fa-credit-card',
                    text: 'Datos tarjeta',
                    listeners: {
                        tap: 'onBtnWin0086Tap'
                    }
                },
                {
                    xtype: 'container',
                    layout: 'center',
                    items: [
                        {
                            xtype: 'grid',
                            height: '100%',
                            id: 'grdWin00812',
                            name: 'MyGrid1',
                            width: '100%',
                            layout: 'fit',
                            hideHeaders: true,
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'dpa_id',
                                    text: 'Código'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'xxx_detalle',
                                    text: 'Xxx Detalle'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'valor',
                                    text: 'Valor'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'button',
                    id: 'btnWin0087',
                    iconCls: 'x-fa fa-money',
                    text: 'Realizar pago',
                    listeners: {
                        tap: 'onBtnWin0087Tap'
                    }
                }
            ]
        },
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    id: 'btnWin0081',
                    iconCls: 'x-fa fa-chevron-left',
                    listeners: {
                        tap: 'onBtnWin0081Tap'
                    }
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-bars',
                    menu: {
                        xtype: 'menu',
                        width: 200,
                        items: [
                            {
                                xtype: 'button',
                                id: 'btnWin0082',
                                iconCls: 'x-fa fa-sign-out',
                                text: 'Cerrar sesión',
                                listeners: {
                                    tap: 'onBtnWin0082Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0083',
                                iconCls: 'x-fa fa-user',
                                text: 'Mi cuenta',
                                listeners: {
                                    tap: 'onBtnWin0083Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0084',
                                iconCls: 'x-fa fa-info',
                                text: 'Acerca',
                                listeners: {
                                    tap: 'onBtnWin0084Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0085',
                                iconCls: 'x-fa fa-arrow-left',
                                listeners: {
                                    tap: 'onBtnWin0085Tap'
                                }
                            }
                        ]
                    }
                },
                {
                    xtype: 'panel',
                    id: 'dsfWin0081'
                }
            ]
        }
    ],
    listeners: {
        added: 'onWin008Added'
    }

});
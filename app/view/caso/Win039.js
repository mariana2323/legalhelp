/*
 * File: app/view/caso/Win039.js
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

Ext.define('Legalhelp.view.caso.Win039', {
    extend: 'Ext.Panel',
    alias: 'widget.caso.win039',

    requires: [
        'Legalhelp.view.caso.Win039ViewModel',
        'Legalhelp.view.caso.Win039ViewController',
        'Ext.field.Text',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.dataview.listswiper.ListSwiper',
        'Ext.dataview.pullrefresh.PullRefresh',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.menu.Menu'
    ],

    controller: 'caso.win039',
    viewModel: {
        type: 'caso.win039'
    },
    id: 'Win039',
    layout: 'fit',

    items: [
        {
            xtype: 'container',
            layout: 'vbox',
            items: [
                {
                    xtype: 'textfield',
                    id: 'txtWin0391',
                    margin: '5 10 5 10',
                    listeners: {
                        change: 'onTxtWin0391Change'
                    }
                },
                {
                    xtype: 'list',
                    id: 'lstWin0391',
                    margin: '10 10 10 10',
                    itemTpl: [
                        '<div>{numero_caso} - {nombre}<br>{descripcion}</div>'
                    ],
                    store: 'caso.win020Store',
                    plugins: [
                        {
                            right: [
                                {
                                    iconCls: 'x-fa fa-eye',
                                    commit: 'editRecord'
                                }
                            ],
                            widget: {
                                xtype: 'listswiperstepper'
                            },
                            type: 'listswiper'
                        },
                        {
                            type: 'pullrefresh'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    id: 'btnWin0391',
                    iconCls: 'x-fa fa-chevron-left',
                    listeners: {
                        tap: 'onBtnWin0391Tap'
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
                                id: 'btnWin0392',
                                iconCls: 'x-fa fa-sign-out',
                                text: 'Cerrar sesión',
                                listeners: {
                                    tap: 'onBtnWin0392Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0393',
                                iconCls: 'x-fa fa-user',
                                text: 'Mi cuenta',
                                listeners: {
                                    tap: 'onBtnWin00393Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0394',
                                iconCls: 'x-fa fa-info',
                                text: 'Acerca',
                                listeners: {
                                    tap: 'onBtnWin0394Tap'
                                }
                            }
                        ]
                    }
                },
                {
                    xtype: 'panel',
                    id: 'dsfWin0391'
                }
            ]
        }
    ],
    listeners: {
        added: 'onWin039Added'
    }

});
/*
 * File: app/view/biblioteca/Win034.js
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

Ext.define('Legalhelp.view.biblioteca.Win034', {
    extend: 'Ext.Panel',
    alias: 'widget.biblioteca.win034',

    requires: [
        'Legalhelp.view.biblioteca.Win034ViewModel',
        'Legalhelp.view.biblioteca.Win034ViewController',
        'Ext.field.Text',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.dataview.listswiper.ListSwiper',
        'Ext.dataview.pullrefresh.PullRefresh',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.menu.Menu'
    ],

    controller: 'biblioteca.win034',
    viewModel: {
        type: 'biblioteca.win034'
    },
    id: 'Win034',
    layout: 'fit',

    items: [
        {
            xtype: 'container',
            layout: 'vbox',
            items: [
                {
                    xtype: 'textfield',
                    id: 'txtWin0341',
                    margin: '5 10 5 10',
                    listeners: {
                        change: 'onTxtWin0341Change'
                    }
                },
                {
                    xtype: 'list',
                    id: 'lstWin0341',
                    margin: '10 10 10 10',
                    itemTpl: [
                        '<div>{nombre}<br>{descripcion}</div>'
                    ],
                    store: 'biblioteca.win034Store',
                    plugins: [
                        {
                            right: [
                                {
                                    iconCls: 'x-fa fa-edit',
                                    commit: 'editRecord',
                                    ui: 'alt confirm'
                                },
                                {
                                    iconCls: 'x-fa fa-eye',
                                    commit: 'seeRecord'
                                }
                            ],
                            left: [
                                {
                                    iconCls: 'x-fa fa-trash',
                                    commit: 'deleteRecord',
                                    ui: 'decline'
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
                    id: 'btnWin0341',
                    iconCls: 'x-fa fa-chevron-left',
                    listeners: {
                        tap: 'onBtnWin0341Tap'
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
                                id: 'btnWin0342',
                                iconCls: 'x-fa fa-sign-out',
                                text: 'Cerrar sesión',
                                listeners: {
                                    tap: 'onBtnWin0342Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0343',
                                iconCls: 'x-fa fa-user',
                                text: 'Mi cuenta',
                                listeners: {
                                    tap: 'onBtnWin0343Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0344',
                                iconCls: 'x-fa fa-info',
                                text: 'Acerca',
                                listeners: {
                                    tap: 'onBtnWin0344Tap'
                                }
                            }
                        ]
                    }
                },
                {
                    xtype: 'panel',
                    id: 'dsfWin0341'
                },
                {
                    xtype: 'button',
                    id: 'btnWin0345',
                    iconCls: 'x-fa fa-plus',
                    listeners: {
                        tap: 'onBtnWin0345Tap'
                    }
                }
            ]
        }
    ],
    listeners: {
        added: 'onWin034Added'
    }

});
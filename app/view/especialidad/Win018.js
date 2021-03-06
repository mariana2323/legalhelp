/*
 * File: app/view/especialidad/Win018.js
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

Ext.define('Legalhelp.view.especialidad.Win018', {
    extend: 'Ext.Panel',
    alias: 'widget.especialidad.win018',

    requires: [
        'Legalhelp.view.especialidad.Win018ViewModel',
        'Legalhelp.view.especialidad.Win018ViewController',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.dataview.listswiper.ListSwiper',
        'Ext.dataview.pullrefresh.PullRefresh',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.menu.Menu'
    ],

    controller: 'especialidad.win018',
    viewModel: {
        type: 'especialidad.win018'
    },
    id: 'Win018',
    layout: 'fit',

    items: [
        {
            xtype: 'container',
            layout: 'vbox',
            items: [
                {
                    xtype: 'list',
                    id: 'lstWin0181',
                    margin: '10 10 10 10',
                    itemTpl: [
                        '<div>{nombre}</div>'
                    ],
                    store: 'especialidad.win018Store',
                    plugins: [
                        {
                            right: [
                                {
                                    iconCls: 'x-fa fa-edit',
                                    commit: 'editRecord'
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
                    id: 'btnWin0181',
                    iconCls: 'x-fa fa-chevron-left',
                    listeners: {
                        tap: 'onBtnWin0181Tap'
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
                                id: 'btnWin0182',
                                iconCls: 'x-fa fa-sign-out',
                                text: 'Cerrar sesión',
                                listeners: {
                                    tap: 'onBtnWin0182Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0183',
                                iconCls: 'x-fa fa-user',
                                text: 'Mi cuenta',
                                listeners: {
                                    tap: 'onBtnWin0183Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0184',
                                iconCls: 'x-fa fa-info',
                                text: 'Acerca',
                                listeners: {
                                    tap: 'onBtnWin0184Tap'
                                }
                            }
                        ]
                    }
                },
                {
                    xtype: 'panel',
                    id: 'dsfWin0181'
                },
                {
                    xtype: 'button',
                    id: 'btnWin0185',
                    iconCls: 'x-fa fa-plus',
                    listeners: {
                        tap: 'onBtnWin0185Tap'
                    }
                }
            ]
        }
    ],
    listeners: {
        added: 'onWin018Added'
    }

});
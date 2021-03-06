/*
 * File: app/view/menu/Win028.js
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

Ext.define('Legalhelp.view.menu.Win028', {
    extend: 'Ext.Panel',
    alias: 'widget.menu.win028',

    requires: [
        'Legalhelp.view.menu.Win028ViewModel',
        'Legalhelp.view.menu.Win028ViewController',
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.menu.Menu'
    ],

    controller: 'menu.win028',
    viewModel: {
        type: 'menu.win028'
    },
    id: 'Win028',
    layout: 'fit',

    items: [
        {
            xtype: 'container',
            layout: 'center',
            items: [
                {
                    xtype: 'dataview',
                    id: 'dtvWin0281',
                    itemTpl: [
                        '<tpl for=".">',
                        '  <div class="thumb-wrap" id="{id}">',
                        '    <div class="thumb"><img src="{imagen}" height="42" title="{nombre}"/></div>',
                        '    <span>{nombre}</span>',
                        '  </div>',
                        '</tpl>'
                    ],
                    store: 'menu.win028Store',
                    listeners: {
                        childtap: 'onDtvWin0281Childtap'
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
                    iconCls: 'x-fa fa-bars',
                    menu: {
                        xtype: 'menu',
                        width: 200,
                        items: [
                            {
                                xtype: 'button',
                                id: 'btnWin0281',
                                iconCls: 'x-fa fa-sign-out',
                                text: 'Cerrar sesión',
                                listeners: {
                                    tap: 'onBtnWin0281Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0282',
                                iconCls: 'x-fa fa-user',
                                text: 'Mi cuenta',
                                listeners: {
                                    tap: 'onBtnWin0282Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin0283',
                                iconCls: 'x-fa fa-info',
                                text: 'Acerca',
                                listeners: {
                                    tap: 'onBtnWin0283Tap'
                                }
                            }
                        ]
                    }
                },
                {
                    xtype: 'panel',
                    id: 'dsfWin0281'
                }
            ]
        }
    ],
    listeners: {
        added: 'onWin028Added'
    }

});
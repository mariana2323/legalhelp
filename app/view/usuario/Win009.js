/*
 * File: app/view/usuario/Win009.js
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

Ext.define('Legalhelp.view.usuario.Win009', {
    extend: 'Ext.Panel',
    alias: 'widget.usuario.win009',

    requires: [
        'Legalhelp.view.menu.Win004ViewModel4',
        'Legalhelp.view.menu.Win004ViewController4',
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.menu.Menu'
    ],

    controller: 'usuario.win009',
    viewModel: {
        type: 'usuario.win009'
    },
    id: 'Win7',
    layout: 'fit',

    items: [
        {
            xtype: 'container',
            layout: 'center',
            items: [
                {
                    xtype: 'container',
                    layout: 'center',
                    items: [
                        {
                            xtype: 'dataview',
                            itemTpl: [
                                '<tpl for=".">',
                                '  <div class="thumb-wrap" id="{ESP_ID}">',
                                '    <div class="thumb"><img src="{IMAGEN}" height="42" title="{NOMBRE}"/></div>',
                                '    <span>{NOMBRE}</span>',
                                '  </div>',
                                '</tpl>'
                            ],
                            store: 'especialidadStore'
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
                    iconCls: 'x-fa fa-bars',
                    menu: {
                        xtype: 'menu',
                        width: 200,
                        items: [
                            {
                                xtype: 'button',
                                id: 'btnWin27',
                                iconCls: 'x-fa fa-sign-out',
                                text: 'Cerrar sesión',
                                listeners: {
                                    tap: 'onBtnWin0011Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin28',
                                iconCls: 'x-fa fa-user',
                                text: 'Mi cuenta',
                                listeners: {
                                    tap: 'onBtnWin0012Tap'
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btnWin29',
                                iconCls: 'x-fa fa-info',
                                text: 'Acerca',
                                listeners: {
                                    tap: 'onBtnWin0013Tap'
                                }
                            }
                        ]
                    }
                },
                {
                    xtype: 'panel',
                    id: 'dsfWin17'
                }
            ]
        }
    ],
    listeners: {
        added: 'onWin0001Added'
    }

});
/*
 * File: app/store/tarjeta/win033Store.js
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

Ext.define('Legalhelp.store.tarjeta.win033Store', {
    extend: 'Ext.data.Store',

    requires: [
        'Legalhelp.model.tarjeta.tarjetaModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'tarjeta.win033Store',
            autoSync: true,
            model: 'Legalhelp.model.tarjeta.tarjetaModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: '../servidor_legalhelp/tarjeta/gettarjeta',
                    create: '../servidor_legalhelp/tarjeta/savetarjeta',
                    update: '../servidor_legalhelp/tarjeta/savetarjeta'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    metaProperty: 'newId'
                },
                writer: {
                    type: 'json',
                    encode: true,
                    rootProperty: 'data'
                }
            }
        }, cfg)]);
    }
});
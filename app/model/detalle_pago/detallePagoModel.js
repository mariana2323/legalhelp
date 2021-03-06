/*
 * File: app/model/detalle_pago/detallePagoModel.js
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

Ext.define('Legalhelp.model.detalle_pago.detallePagoModel', {
    extend: 'Ext.data.Model',
    alias: 'model.detallepagomodel',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Number'
    ],


    idProperty: 'dpa_id',
    fields: [
        {
            type: 'int',
            name: 'dpa_id'
        },
        {
            type: 'int',
            name: 'pag_id'
        },
        {
            type: 'string',
            name: 'tipo_detalle'
        },
        {
            type: 'float',
            name: 'valor'
        },
        {
            type: 'float',
            name: 'porcentaje'
        },
        {
            type: 'int',
            name: 'orden'
        },
        {
            type: 'string',
            name: 'xxx_detalle'
        }
    ]

});
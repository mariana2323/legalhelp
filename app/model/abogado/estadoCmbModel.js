/*
 * File: app/model/abogado/estadoCmbModel.js
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

Ext.define('Legalhelp.model.abogado.estadoCmbModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.String'
    ],


    fields: [
        {
            type: 'string',
            name: 'id',
            unique: true
        },
        {
            type: 'string',
            name: 'nombre'
        }
    ]

});
/*
 * File: app/model/Device.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('zvsMobile.model.Device', {
    extend: 'Ext.data.Model',
    alias: 'model.device',

    requires: [
        'Ext.data.Field',
        'Ext.data.association.HasOne',
        'Ext.data.association.HasMany'
    ],
    uses: [
        'zvsMobile.model.DeviceType',
        'zvsMobile.model.DeviceValue'
    ],

    config: {
        fields: [
            {
                name: 'Id',
                type: 'int'
            },
            {
                name: 'Name',
                type: 'auto'
            },
            {
                name: 'CurrentLevelText',
                type: 'string'
            },
            {
                name: 'CurrentLevelInt',
                type: 'auto'
            },
            {
                name: 'DeviceTypeId',
                type: 'int'
            },
            {
                name: 'Location',
                type: 'string'
            }
        ],
        hasOne: {
            associatedName: 'type',
            associationKey: 'Type',
            primaryKey: 'Id',
            model: 'zvsMobile.model.DeviceType'
        },
        hasMany: {
            associatedName: 'value',
            associationKey: 'Values',
            primaryKey: 'Id',
            model: 'zvsMobile.model.DeviceValue'
        }
    }
});
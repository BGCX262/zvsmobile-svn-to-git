/*
 * File: app/view/DevicesPanel.js
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

Ext.define('zvsMobile.view.DevicesPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.devicespanel',

    requires: [
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Toolbar',
        'Ext.SegmentedButton',
        'Ext.Button',
        'Ext.Spacer'
    ],

    config: {
        itemId: 'devicesPanel',
        layout: 'fit',
        items: [
            {
                xtype: 'dataview',
                cls: 'dataview-inline',
                itemId: 'deviceDataview',
                style: '',
                inline: true,
                itemCls: 'deviceItem',
                itemTpl: [
                    '<div class="device-item">',
                    '	<h4 class="device-name-truncate">{Name}</h4>  ',
                    '    <i class="device-icon {type.UniqueIdentifier}"></i> ',
                    '    <div class="device-level">',
                    '			{CurrentLevelText}',
                    '		</div>	',
                    '     <h5 class="location-name-truncate">{Location}</h5>',
                    '</div>'
                ],
                store: 'DeviceStore',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        height: 50,
                        itemId: 'deviceToolbar',
                        padding: 5,
                        ui: 'neutral',
                        scrollable: 'horizontal',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'segmentedbutton',
                                itemId: 'filterSegmentedButton',
                                items: [
                                    {
                                        xtype: 'button',
                                        locationFilter: 'all',
                                        pressed: true,
                                        text: 'All'
                                    }
                                ]
                            },
                            {
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'button',
                                centered: false,
                                itemId: 'devicesReloadBtn',
                                iconCls: 'refresh'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});
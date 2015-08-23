/*
 * File: app/controller/ScheduledTask.js
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

Ext.define('zvsMobile.controller.ScheduledTask', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: 'navigationview#mainView'
        },

        control: {
            "dataview#scheduledTasksDataview": {
                initialize: 'onDataviewInitialize',
                itemtap: 'onDataviewItemTap'
            },
            "searchfield#taskSearchfield": {
                clearicontap: 'onSearchfieldClearicontap',
                keyup: 'onSearchfieldKeyup'
            },
            "button#refreshScheduledTasksBtn": {
                tap: 'onRefreshButtonTap'
            }
        }
    },

    onDataviewInitialize: function(component, eOpts) {
        var store = Ext.getStore('ScheduledTasksStore');
        store.clearFilter();
        store.load();
    },

    onSearchfieldClearicontap: function(textfield, e, eOpts) {
         var store = Ext.getStore('ScheduledTasksStore');
                store.clearFilter();

    },

    onSearchfieldKeyup: function(textfield, e, eOpts) {
        queryString = textfield.getValue();

        var store = Ext.getStore('ScheduledTasksStore');
        store.clearFilter();

        if(queryString) {
            var thisRegEx = new RegExp(queryString, "i");
            store.filterBy(function(record) {
                if (thisRegEx.test(record.get('Name')))
                    return true;
                return false;
            });
        }
    },

    onRefreshButtonTap: function(button, e, eOpts) {
        var store = Ext.getStore('ScheduledTasksStore');
        store.load();
    },

    onDataviewItemTap: function(dataview, index, target, record, e, eOpts) {
        var mainView = this.getMainView();
        mainView.push({
            xtype: 'taskpanel',
            title: record.data.Name,
            record: record
        });
    }

});
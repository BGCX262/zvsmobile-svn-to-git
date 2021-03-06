/*
 * File: app/controller/DeviceEdit.js
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

Ext.define('zvsMobile.controller.DeviceEdit', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: 'navigationview#mainView'
        },

        control: {
            "formpanel#deviceEdit": {
                show: 'onFormpanelShow'
            },
            "button#saveDeviceButton": {
                tap: 'onSaveButtonTap'
            }
        }
    },

    onFormpanelShow: function(component, eOpts) {
        var deviceRecord = component.getParent().getRecord();
        component.setRecord(deviceRecord);
    },

    onSaveButtonTap: function(button, e, eOpts) {
        var editPanel = button.getParent();
        var deviceRecord = editPanel.getRecord();
        button.disable();

        Ext.Ajax.request({
            url: 'odata4/Devices('+deviceRecord.getData().Id+')/',
            method: 'PATCH',
            scope : this,
            jsonData: {
                Name: editPanel.getValues().Name,
                Location: editPanel.getValues().Location
            },
            headers: {
                'Content-Type': 'application/json',
                'X-zvsToken': zvsMobile.app.getToken()
            },
            success: function (response, opts) {
                Ext.Msg.alert('Done',  'Device updated');

                var deviceStore = Ext.getStore('DeviceStore');
                var record = deviceStore.getById(deviceRecord.getData().Id);
                record.set(editPanel.getValues());
                var mainView = this.getMainView();
                mainView.getNavigationBar().setTitle(record.data.Name + ' - ' + record.data.Location);
                button.enable();
            },
            failure: function (response, opts) {
                Ext.Msg.alert('Error',  'Device update failed. ' + response.responseText);
                button.enable();
            }
        });

    }

});
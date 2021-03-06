/*
 * File: app/controller/ScheduledTaskEdit.js
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

Ext.define('zvsMobile.controller.ScheduledTaskEdit', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: 'navigationview#mainView'
        },

        control: {
            "button#saveTaskButton": {
                tap: 'onSaveButtonTap'
            },
            "formpanel#scheduledTaskEdit": {
                show: 'onFormpanelShow'
            }
        }
    },

    onSaveButtonTap: function(button, e, eOpts) {
        var editPanel = button.getParent();
        var record = editPanel.getRecord();
        button.disable();

        Ext.Ajax.request({
            url: 'odata4/ScheduledTasks('+record.getData().Id+')/',
            method: 'PATCH',
            scope : this,
            jsonData: {
                Name: editPanel.getValues().Name,
                isEnabled: editPanel.getValues().isEnabled === null? false : editPanel.getValues().isEnabled
            },
            headers: {
                'Content-Type': 'application/json',
                'X-zvsToken': zvsMobile.app.getToken()
            },
            success: function (response, opts) {

                Ext.Msg.alert('Done',  'Scheduled task updated');
                var store = Ext.getStore('ScheduledTasksStore');
                var storeRecord = store.getById(record.getData().Id);
                storeRecord.set(editPanel.getValues());
                var mainView = this.getMainView();
                mainView.getNavigationBar().setTitle(storeRecord.data.Name);

                button.enable();

            },
            failure: function (response, opts) {
                Ext.Msg.alert('Error',  'Scheduled task update failed. ' + response.responseText);
                button.enable();
            }
        });
    },

    onFormpanelShow: function(component, eOpts) {
        var record = component.getParent().getRecord();
        component.setRecord(record);
        component.down('#commandLabel').setRecord(record);
    }

});
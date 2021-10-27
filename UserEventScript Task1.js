/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/email', 'N/record', 'N/search'],
    /**
 * @param{email} email
 * @param{record} record
 * @param{search} search
 */
    (email, record, search) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {


        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */

            const beforeSubmit = (scriptContext) => {

            if (context.type !== context.UserEventType.CREATE)
                return;
            var newCustomRecord = context.newRecord;
            newCustomRecord.setValue({
                fieldId: 'name',
                value: 'Custom Record Entry1'

            });

                    log.debug('custom',newCustomRecord);
                }



            /**
             * Defines the function definition that is executed after record is submitted.
             * @param {Object} scriptContext
             * @param {Record} scriptContext.newRecord - New record
             * @param {Record} scriptContext.oldRecord - Old record
             * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
             * @since 2015.2
             */
            const afterSubmit = (scriptContext) => {

                if (context.type !== context.UserEventType.CREATE)
                    return;
                var newCustomRecord = context.newRecord;
                var newCustomerName = newCustomRecord.setValue({
                    fieldId: 'custrecord_jj_cust_name',
                    value:'Neena K'
                });
                var newCustomerEmail = newCustomRecord.setValue({
                    fieldId: 'custrecord_jj_cust_email',
                    value:'neena@gmail.com'
                });
                var newCustomerRef = newCustomRecord.setValue({
                    fieldId: 'custrecord_jj_cust_ref',
                    value:'101'
                });
                var newSubject = newCustomRecord.setValue({
                    fieldId: 'custrecord_jj_subject',
                    value:'Service'
                });
                var newMessage = newCustomRecord.setValue({
                    fieldId: 'custrecord_jj_message',
                    value:'Hi'
                });

            }

            return {beforeLoad, beforeSubmit, afterSubmit}
        });


// Run in Scripts - Background (as admin, then re-run after impersonating)
var gr = new GlideRecord('incident');
gr.addQuery('u_confidential', true);
gr.setLimit(5);
gr.query();

while (gr.next()) {
    var allowed = new RecordAccessUtil().canReadIncident(gr);
    gs.info('Incident ' + gr.number + ' | user: ' + gs.getUserName() +
            ' | can read: ' + allowed);
}

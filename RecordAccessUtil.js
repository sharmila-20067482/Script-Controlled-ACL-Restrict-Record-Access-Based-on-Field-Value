var RecordAccessUtil = Class.create();
RecordAccessUtil.prototype = {
    initialize: function() {
        this.userId = gs.getUserID();
        this.privilegedRoles = ['itil_admin', 'security_admin'];
    },

    /**
     * Returns true if the current user may read the given incident.
     * @param {GlideRecord} gr - the incident being evaluated
     */
    canReadIncident: function(gr) {
        // Non-confidential records are open (other ACLs still apply)
        if (gr.getValue('u_confidential') !== '1')
            return true;

        // Privileged roles
        if (this._hasPrivilegedRole())
            return true;

        // Caller or assignee
        if (gr.getValue('caller_id') === this.userId ||
            gr.getValue('assigned_to') === this.userId)
            return true;

        // Assignment group member
        var group = gr.getValue('assignment_group');
        if (group && gs.getUser().isMemberOf(group))
            return true;

        return false;
    },

    _hasPrivilegedRole: function() {
        for (var i = 0; i < this.privilegedRoles.length; i++) {
            if (gs.hasRole(this.privilegedRoles[i]))
                return true;
        }
        return false;
    },

    type: 'RecordAccessUtil'
};

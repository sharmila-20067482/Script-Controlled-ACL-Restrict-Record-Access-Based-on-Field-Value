/*
 * Script-Controlled ACL – Restrict Record Access Based on Field Value
 *
 * Platform: ServiceNow
 * Example: Allow users to read a record only when the record's
 * u_access_level field is "public" or the current user is the owner.
 *
 * Use this script in an ACL:
 *   Type: record
 *   Operation: read
 *   Advanced: true
 *
 * Adjust the table and field names to match your application.
 */

// Allow access to records marked as public.
if (current.u_access_level == 'public') {
    answer = true;
}
// Allow the record owner to access their own record.
else if (current.u_owner == gs.getUserID()) {
    answer = true;
}
// Deny all other users.
else {
    answer = false;
}

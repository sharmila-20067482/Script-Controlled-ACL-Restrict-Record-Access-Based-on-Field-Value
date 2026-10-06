# Script-Controlled ACL – Restrict Record Access Based on Field Value

## Description
This ServiceNow example uses a scripted Access Control List (ACL) to restrict
record access according to a field value.

## Rule
A user can read the record when:

1. `u_access_level` is `public`, OR
2. `u_owner` contains the current user's `sys_id`.

All other users are denied access.

## Setup
1. Open **System Security → Access Control (ACL)**.
2. Create or open a **record ACL** for the required table.
3. Select **Read** as the operation.
4. Enable **Advanced**.
5. Paste the code from `scripted_acl.js` into the Script field.
6. Replace `u_access_level` and `u_owner` with your actual field names.
7. Test with users who have different record values.

## Important
This is a template. Field names and security requirements should be changed
to match your ServiceNow application.

// ACL: incident | Operation: read | Advanced: true
// Allow unless the record is confidential and the user is not authorized.

answer = new RecordAccessUtil().canReadIncident(current);

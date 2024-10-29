---
id: sub-subtopic-1
title: Get Activity Log Entry
sidebar_label: Get Activity Log Entry
---

# Get Activity Log Entry

`GET /tlip-connector/activity-logs/{logEntryId}`

| Name       | In   | Type   | Required | Description                         |
|------------|------|--------|----------|-------------------------------------|
| logEntryId | path | string | true     | The id for the Activity Log Entry.  |

## Responses

| Status | Meaning       | Description                                                                                           | Schema              |
|--------|---------------|-------------------------------------------------------------------------------------------------------|---------------------|
| 200    | OK            | An Activity Log Entry to allow TLIP Connector clients to know the status of activity processing.        | JobDetails          |
| 400    | Bad Request   | Something went wrong with the request, see the error field for more details.                           | BadRequestResponse  |
| 401    | Unauthorized  | You are not authorized to use the API or no credentials were supplied.                                 | UnauthorizedResponse |
| 404    | Not Found     | The resource you tried to access does not exist, see the error field for more details.                  | NotFoundResponse    |

Note: To perform this operation, you must be authenticated by means of one of the following methods: apiKeyQueryAuthScheme, apiKeyHeaderAuthScheme, jwtBearerAuthScheme, jwtCookieAuthScheme.

Code Sample:

```
    const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json'
};

fetch('/tlip-connector/activity-logs/{logEntryId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

Example Responses

200 Response:
```
{
  "id": "string",
  "generator": "string",
  "jobData": {
    "property1": null,
    "property2": null
  },
  "status": "pending",
  "created": 0,
  "started": 0,
  "finished": 0,
  "result": null,
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string"
  },
  "to": {}
}
```
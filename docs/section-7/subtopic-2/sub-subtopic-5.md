---
id: sub-subtopic-5
title: List Activity Log Entries
sidebar_label: List Activity Log Entries
---
# List Activity Log Entries

GET /tlip-connector/activity-logs

Parameters:

| Name   | In    | Type   | Required | Description               |
|--------|-------|--------|----------|---------------------------|
| status | query | any    | false    | Job statuses.             |
| cursor | query | string | false    | The cursor for paged requests. |

Responses:

| Status | Meaning       | Description                                                                                           | Schema              |
|--------|---------------|-------------------------------------------------------------------------------------------------------|---------------------|
| 200    | OK            | Get the details for an item.                                                                           | None                |
| 400    | Bad Request   | Something went wrong with the request, see the error field for more details.                           | BadRequestResponse  |
| 401    | Unauthorized  | You are not authorized to use the API or no credentials were supplied.                                 | UnauthorizedResponse |

Note: To perform this operation, you must be authenticated by means of one of the following methods: apiKeyQueryAuthScheme, apiKeyHeaderAuthScheme, jwtBearerAuthScheme, jwtCookieAuthScheme.

Code Sample:

```
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json'
};





fetch('/tlip-connector/activity-logs',
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
400 Response

```
{
  "error": "string"
}
```

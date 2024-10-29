---
id: sub-subtopic-2
title: Get consignment as JSON-LD
sidebar_label: Get consignment as JSON-LD
---
# Get consignment as JSON-LD

GET /tlip-connector/consignments

Responses:

| Status | Meaning       | Description                                                                                           | Schema              |
|--------|---------------|-------------------------------------------------------------------------------------------------------|---------------------|
| 200    | OK            | Consignment get response.                                                                              | JsonLdObject        |
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

fetch('/tlip-connector/consignments',
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

Example responses
200 Response

```
{
  "@context": "string",
  "type": [
    "string"
  ],
  "id": "string",
  "property1": null,
  "property2": null
}
```
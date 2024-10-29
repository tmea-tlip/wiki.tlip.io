---
id: sub-subtopic-4
title: Get consignment as JSON-LD
sidebar_label: Get consignment as JSON-LD
---
# Get Consignment Document

GET /tlip-connector/consignment-documents

Responses:

| Status | Meaning       | Description                                                                                           | Schema                   |
|--------|---------------|-------------------------------------------------------------------------------------------------------|--------------------------|
| 200    | OK            | Consignment document get response.                                                                     | RevisionOverviewHarmonized |
| 400    | Bad Request   | Something went wrong with the request, see the error field for more details.                           | BadRequestResponse        |
| 401    | Unauthorized  | You are not authorized to use the API or no credentials were supplied.                                 | UnauthorizedResponse      |
| 404    | Not Found     | The resource you tried to access does not exist, see the error field for more details.                  | NotFoundResponse          |

Note: To perform this operation, you must be authenticated by means of one of the following methods: apiKeyQueryAuthScheme, apiKeyHeaderAuthScheme, jwtBearerAuthScheme, jwtCookieAuthScheme.

Code Sample:

```
const fetch = require('node-fetch');
const headers = {
  'Accept':'application/json'
};

fetch('/tlip-connector/consignment-documents',
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
200 Response

```
{
  "@context": "string",
  "type": [
    "string"
  ],
  "id": "string",
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "string",
    "created": "string",
    "verificationMethod": "string",
    "proofPurpose": "assertionMethod",
    "proofValue": "string"
  },
  "version": 0,
  "identity": "string",
  "blobStorageId": "string",
  "fileFormat": "string",
  "dateCreated": 0,
  "contentSize": 0,
  "fingerPrint": "string",
  "metadata": [
    {
      "key": "string",
      "type": "string",
      "value": null
    }
  ],
  "matrix": {
    "property1": null,
    "property2": null
  },
  "code": 0,
  "verified": true,
  "contentUrl": "string",
  "property1": null,
  "property2": null
}
```
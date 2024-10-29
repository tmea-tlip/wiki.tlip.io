---
id: sub-subtopic-6
title: Webhook Notification Endpoint
sidebar_label: Webhook Notification Endpoint
---

Webhook Notification Endpoint

POST /tlip-connector/notify

Parameters

| Name | In   | Type           | Required | Description                 |
|------|------|----------------|----------|-----------------------------|
| body | body | ActivityStream  | true     | Activity Stream interface.   |


Responses

| Status | Meaning      | Description                                                                                           | Schema              |
|--------|--------------|-------------------------------------------------------------------------------------------------------|---------------------|
| 202    | Accepted     | The rest request ended in an accepted response.                                                        | AcceptedResponse    |
| 400    | Bad Request  | Something went wrong with the request, see the error field for more details.                           | BadRequestResponse  |
| 401    | Unauthorized | You are not authorized to use the API or no credentials were supplied.                                 | UnauthorizedResponse |
| 404    | Not Found    | The resource you tried to access does not exist, see the error field for more details.                  | NotFoundResponse    |
| 409    | Conflict     | The request resulted in a conflicting operation, see the error field for more details.                 | ConflictResponse    |

Note: To perform this operation, you must be authenticated by means of one of the following methods: apiKeyQueryAuthScheme, apiKeyHeaderAuthScheme, jwtBearerAuthScheme, jwtCookieAuthScheme.

Code Sample:

```
const fetch = require('node-fetch');
const inputBody = {
  "@context": "string",
  "id": "string",
  "type": "Create",
  "generator": "string",
  "actor": {
    "id": "string",
    "name": "string",
    "type": "Organization",
    "identificationType": "string",
    "identificationId": "string"
  },
  "object": {
    "type": "Document",
    "code": 0,
    "versionId": "string",
    "issueDateTime": "string",
    "mediaType": [
      "string"
    ],
    "href": "string",
    "provider": "string",
    "issuerParty": {
      "id": "string",
      "type": [
        "string"
      ],
      "identificationType": "string",
      "identificationId": "string"
    },
    "documentBinaryData": "string"
  },
  "target": {
    "type": "Consignment",
    "globalId": "string",
    "identificationType": "string",
    "identificationId": "string",
    "customsId": "string",
    "exporterParty": {
      "exportTypecode": "string",
      "exporterParty": "string",
      "destinationCountry": "string"
    },
    "importerParty": {
      "importTypecode": "string",
      "importerParty": "string",
      "importCountry": "string"
    }
  },
  "updated": "string",
  "to": {}
};

const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};


fetch('/tlip-connector/notify',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```


Body parameter

```
{
  "@context": "string",
  "id": "string",
  "type": "Create",
  "generator": "string",
  "actor": {
    "id": "string",
    "name": "string",
    "type": "Organization",
    "identificationType": "string",
    "identificationId": "string"
  },
  "object": {
    "type": "Document",
    "code": 0,
    "versionId": "string",
    "issueDateTime": "string",
    "mediaType": [
      "string"
    ],
    "href": "string",
    "provider": "string",
    "issuerParty": {
      "id": "string",
      "type": [
        "string"
      ],
      "identificationType": "string",
      "identificationId": "string"
    },
    "documentBinaryData": "string"
  },
  "target": {
    "type": "Consignment",
    "globalId": "string",
    "identificationType": "string",
    "identificationId": "string",
    "customsId": "string",
    "exporterParty": {
      "exportTypecode": "string",
      "exporterParty": "string",
      "destinationCountry": "string"
    },
    "importerParty": {
      "importTypecode": "string",
      "importerParty": "string",
      "importCountry": "string"
    }
  },
  "updated": "string",
  "to": {}
}
```

Example Responses
202 Response:

```
{
  "statusCode": 0,
  "headers": {
    "location": "string"
  }
}
```
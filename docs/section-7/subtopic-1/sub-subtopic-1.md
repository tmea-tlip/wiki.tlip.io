---
id: sub-subtopic-1
title: Data Consumers
sidebar_label: Data Consumers
---
# Data Consumers

The TLIP Bridge also allows TLIP to act as a data provider, exposing data to external systems, referred to as data consumers. One of the key integrations in this category is with the SPS (Sanitary and Phytosanitary) system.

## SPS Integration
The SPS integration enables external systems to retrieve documents from TLIP through a secure endpoint. The documents currently supported for SPS include:

    - Health Certificate
    - Phytosanitary Certificate
    - Export Certificate
    - Import Certificate

Get Documents

GET /sps/documents?identifier={}&inline={}

Parameters:

| Name        | In     | Type    | Required | Description                                                        |
|-------------|--------|---------|----------|--------------------------------------------------------------------|
| identifier  | query  | string  | true     | The document identifier for the document being searched for.      |
| inline      | query  | boolean | true     | If true, the document is viewable in the browser; if false, it becomes downloadable. |

## Authorization
    • The endpoint requires an Authorization header with a valid Bearer token. The token is validated against the one provided by the system. If the token is invalid or missing, appropriate errors are thrown.

Code Sample:

```
const fetch = require('node-fetch');

const identifier = '1234';
const inline = true;
const accessToken = 'your-access-token';

const url = `/sps/documents?identifier=${identifier}&inline=${inline}`;

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('Document Details:', data);
})
.catch(error => {
  console.error('Fetch Error:', error.message);
});
```
Responses:

| Status | Meaning       | Description                                  | Schema                     |
|--------|---------------|----------------------------------------------|----------------------------|
| 200    | OK            | Successfully retrieved the document details. | DocumentResponse            |
| 400    | Bad Request   | Missing authorization header.                | MissingAuthHeaderResponse   |
| 401    | Unauthorized  | Invalid token provided.                      | InvalidTokenResponse        |
| 404    | Bad Request   | Missing token in the authorization header.  | MissingTokenResponse        |

Example Responses

404 Response
```
{
  "name": "Error",
  "message": "Missing authorization header"
}
```

404 Response
```
{
  "name": "Error",
  "message": "Missing token"
}
```

401 Response
```
{
  "name": "Error",
  "message": "Invalid token"
}
```

200 Response
```
{
  "items": [
    {
      "documentLink": "baseUrl/sps/documents/docId1234/view?&inline=true",
      "documentType": "Phytosanitary certificate:Test1234",
      "fileFormat": "application/xml",
      "importCountry": "Country A",
      "exportCountry": "Country X",
      "domain": "Plant Health"
    }
  ]
}
```
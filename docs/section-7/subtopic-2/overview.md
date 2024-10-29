---
id: overview
title:  TLIP Connector Overview
sidebar_label: Overview
---
# TLIP Connector Overview

The TLIP Connector provides a streamlined and efficient approach for integrating with the TLIP system. It offers a set of APIs designed to facilitate seamless interaction between external systems and TLIP, minimizing the need for complex integrations and enhancing performance and reliability.

## Key Features

1. **Webhook Notifications**: 
   TLIP exposes a webhook endpoint that external systems can use to notify TLIP of relevant activities, such as the issuance of new documents related to trade consignments. This reduces the need for external applications to make direct API calls, avoiding complexities and risks associated with poll-based integrations.

2. **Query Endpoints**: 
   The TLIP Connector supports query endpoints that allow external systems to retrieve data or documents related to trade consignments. These endpoints enable TLIP to fetch and interact with various documents and logs efficiently.

## API Capabilities

The TLIP Connector API includes several key functionalities:

- **Notification Endpoint**: Allows external systems to notify TLIP about events or updates.
- **Activity Log Entries**: Provides endpoints to retrieve detailed activity logs and status updates.
- **Consignment Documents**: Enables fetching of specific consignment documents.
- **List Activity Log Entries**: Lists all activity log entries for review and tracking.

## Get Activity Log Entry

**Endpoint**: `GET /tlip-connector/activity-logs/{logEntryId}`

- **Parameters**:
  - `logEntryId` (path, string, required): The id for the Activity Log Entry.

- **Responses**:
  - `200 OK`: An Activity Log Entry to allow TLIP Connector clients to know the status of activity processing. (`JobDetails`)
  - `400 Bad Request`: Something went wrong with the request, see the error field for more details. (`BadRequestResponse`)
  - `401 Unauthorized`: You are not authorized to use the API or no credentials were supplied. (`UnauthorizedResponse`)
  - `404 Not Found`: The resource you tried to access does not exist, see the error field for more details. (`NotFoundResponse`)

## Get Consignment as JSON-LD

**Endpoint**: `GET /tlip-connector/consignments`

- **Responses**:
  - `200 OK`: Consignment get response. (`JsonLdObject`)
  - `400 Bad Request`: Something went wrong with the request, see the error field for more details. (`BadRequestResponse`)
  - `401 Unauthorized`: You are not authorized to use the API or no credentials were supplied. (`UnauthorizedResponse`)
  - `404 Not Found`: The resource you tried to access does not exist, see the error field for more details. (`NotFoundResponse`)

## Get Consignment Document

**Endpoint**: `GET /tlip-connector/consignment-documents`

- **Responses**:
  - `200 OK`: Consignment document get response. (`RevisionOverviewHarmonized`)
  - `400 Bad Request`: Something went wrong with the request, see the error field for more details. (`BadRequestResponse`)
  - `401 Unauthorized`: You are not authorized to use the API or no credentials were supplied. (`UnauthorizedResponse`)
  - `404 Not Found`: The resource you tried to access does not exist, see the error field for more details. (`NotFoundResponse`)

## List Activity Log Entries

**Endpoint**: `GET /tlip-connector/activity-logs`

- **Parameters**:
  - `status` (query, any, optional): Job statuses.
  - `cursor` (query, string, optional): The cursor for paged requests.

- **Responses**:
  - `200 OK`: Get the details for an item.
  - `400 Bad Request`: Something went wrong with the request, see the error field for more details. (`BadRequestResponse`)
  - `401 Unauthorized`: You are not authorized to use the API or no credentials were supplied. (`UnauthorizedResponse`)

## Webhook Notification Endpoint

**Endpoint**: `POST /tlip-connector/notify`

- **Parameters**:
  - `body` (body, `ActivityStream`, required): Activity Stream interface.

- **Responses**:
  - `202 Accepted`: The rest request ended in an accepted response. (`AcceptedResponse`)
  - `400 Bad Request`: Something went wrong with the request, see the error field for more details. (`BadRequestResponse`)
  - `401 Unauthorized`: You are not authorized to use the API or no credentials were supplied. (`UnauthorizedResponse`)
  - `404 Not Found`: The resource you tried to access does not exist, see the error field for more details. (`NotFoundResponse`)
  - `409 Conflict`: The request resulted in a conflicting operation, see the error field for more details. (`ConflictResponse`)

---
id: sub-subtopic-3
title: TLIP Connector Overview
sidebar_label: TLIP Connector Overview
---

# TLIP Connector Overview

The TLIP Connector provides a streamlined and efficient approach for integrating with the TLIP system. It offers a set of APIs designed to facilitate seamless interaction between external systems and TLIP, minimizing the need for complex integrations and enhancing performance and reliability.

## Key Features
1. **Webhook Notifications**: TLIP exposes a webhook endpoint that external systems can use to notify TLIP of relevant activities, such as the issuance of new documents related to trade consignments. This reduces the need for external applications to make direct API calls, avoiding complexities and risks associated with poll-based integrations.

2. **Query Endpoints**: The TLIP Connector supports query endpoints that allow external systems to retrieve data or documents related to trade consignments. These endpoints enable TLIP to fetch and interact with various documents and logs efficiently.

## API Capabilities
The TLIP Connector API includes several key functionalities:
- **Notification Endpoint**: Allows external systems to notify TLIP about events or updates.
- **Activity Log Entries**: Provides endpoints to retrieve detailed activity logs and status updates.
- **Consignment Documents**: Enables fetching of specific consignment documents.
- **List Activity Log Entries**: Lists all activity log entries for review and tracking.

---
id: sub-subtopic-3
title: TLIP Bridge Overview
sidebar_label: TLIP Bridge Overview
---

# TLIP Bridge Overview

The TLIP Bridge functions as the integration layer within the TLIP system, seamlessly connecting it with various external data providers and consumers. Its primary role is to facilitate the efficient exchange of data between TLIP and these external systems, ensuring that documents are accurately attached to their corresponding consignments as they become available.

## How the Bridge Works

The TLIP Bridge is designed to accommodate multiple communication protocols and mechanisms, enabling it to integrate with a diverse range of data providers and consumers. It supports:

- **Message Queues**: Facilitates real-time, asynchronous communication by pushing or pulling data from queues.
- **REST Endpoints**: Provides straightforward, stateless HTTP-based communication for modern systems.
- **SOAP Endpoints**: Handles more complex, structured data exchanges with legacy systems.
- **Custom Mechanisms**: Allows for bespoke integration solutions tailored to specific business needs.

The Bridge ensures that TLIP can efficiently fetch data from external providers and securely offer its own data to consumers. It automates the process of attaching documents to relevant consignments. For example, when documents like Export Certificates or Consignment Details become available, the Bridge identifies the appropriate consignment using the relevant identifier and attaches the document accordingly. This automation helps maintain data integrity and streamline operations.

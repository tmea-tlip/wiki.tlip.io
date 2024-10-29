---
id: overview
title: The Bridge Overview
sidebar_label: Overview
---
#  Overview

## Data Consumers

The TLIP Bridge enables TLIP to act as a data provider, allowing external systems, known as data consumers, to access documents. One significant integration is with the SPS (Sanitary and Phytosanitary) system, which allows retrieval of documents such as Health Certificates, Phytosanitary Certificates, Export Certificates, and Import Certificates through a secure endpoint.

## Data Providers

### KenTrade Integration
- **Export Certificate & Consignment Details**: Fetches documents using the UCR Number via the MHX Document Exchange System. These documents are automatically attached to the relevant consignment within TLIP, ensuring accurate documentation through the UCR.

### AFA Integration
- **Export Certificate**: Retrieved using the Unique Consignment Reference Number (UCR) via a REST endpoint.
- **Consignment Details**: Also fetched using the UCR via a REST endpoint.

### KRA Integration
- **Certificate of Origin (COO)**: Obtained using the Commercial Invoice Number via a message queue.
- **Export Declaration**: Documents are fetched using the Export Declaration identifier via a message queue.
- **Certificate of Export (COE)**: Retrieved using the Export Declaration identifier via a SOAP endpoint.

## How the Bridge Works

The TLIP Bridge serves as the integration layer for the TLIP system, connecting it with various external data providers and consumers. It supports multiple communication protocols, including Message Queues for asynchronous communication, REST Endpoints for straightforward HTTP-based exchanges, SOAP Endpoints for structured data exchanges, and Custom Mechanisms for tailored integration solutions. This design facilitates efficient data fetching and document attachment to consignments, enhancing data integrity and operational efficiency.

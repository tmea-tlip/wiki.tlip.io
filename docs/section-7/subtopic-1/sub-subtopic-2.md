---
id: sub-subtopic-2
title: Data Providers
sidebar_label: Data Providers
---
# Data Providers

## KRA Integration

- **Certificate of Origin (COO)**:
  - **Identifier Type**: Commercial Invoice Number
  - **Protocol**: Message Queue
  - **Details**: The Bridge fetches COO documents from KRA using the Commercial Invoice Number as the identifier via message queue.

- **Export Declaration**:
  - **Identifier Type**: Export Declaration
  - **Protocol**: Message Queue
  - **Details**: Export Declaration documents are fetched from KRA using the Export Declaration as the identifier via message queue.

- **Certificate of Export (COE)**:
  - **Identifier Type**: Export Declaration
  - **Protocol**: SOAP Endpoint
  - **Details**: COE documents are retrieved using the Export Declaration as the identifier via a SOAP endpoint.

## AFA Integration

- **Export Certificate**:
  - **Identifier Type**: Unique Consignment Reference Number (UCR)
  - **Protocol**: REST Endpoint
  - **Details**: The Bridge fetches Export Certificate documents from AFA using the UCR as the identifier via a REST endpoint.

- **Consignment Details**:
  - **Identifier Type**: Unique Consignment Reference Number (UCR)
  - **Protocol**: REST Endpoint
  - **Details**: Consignment Details documents are also fetched from AFA using the UCR as the identifier via a REST endpoint.

## KenTrade Integration

- **Export Certificate & Consignment Details**:
  - **Identifier Type**: UCR Number
  - **Protocol**: MHX Document Exchange System
  - **Details**: The KenTrade integration involves fetching Export Certificate and Consignment Details documents using the UCR Number. These documents are automatically attached to the relevant consignment within TLIP. The consignment is created using the UCR number present in the Export Certificate, and the Consignment Details document is first attached to the consignment, followed by other documents like the Export Certificate and the Export Declaration from KRA. The documents are dumped in a folder by KenTrade for the Bridge to consume.

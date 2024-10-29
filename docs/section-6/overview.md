---
sidebar_position: 1
---

# Overview

The Trade Logistics Information Pipeline (TLIP) is a collaborative infrastructure designed to enhance data sovereignty in global trade. TLIP enables secure data and document sharing among stakeholders such as border agencies and commercial entities while ensuring that each participant maintains full control over their information. The system utilizes digital signatures and encryption to guarantee data integrity and security. TLIP's use of distributed ledger technology (DLT) ensures that trade documents and data are immutable and auditable, fostering trust and efficiency in international trade processes.

### Key Components

#### TLIP Infrastructure Layer
The TLIP Infrastructure Layer provides essential functions for managing data and documents. It supports the exchange and management of information among various stakeholders involved in trade logistics.

#### Blockchain Layer
TLIP employs IOTA's distributed ledger technology to securely manage and store data. The IOTA Tangle ensures decentralized and tamper-proof data storage. Additionally, IPFS (Interplanetary File System) is used for decentralized file storage, ensuring the integrity and security of content.

#### Application Layer
The Application Layer includes specialized applications built for tasks related to supply chain management, such as border control and identity management. These applications interface with the TLIP infrastructure to offer practical solutions for various trade-related processes.

### Design Principles and Benefits

1. **Data Sovereignty**:
   TLIP ensures that data is stored and accessed in compliance with national or regional regulations. It allows data sharing without creating new copies, giving data owners control over their data sharing relationships. This approach avoids central control by any single actor, fostering a competitive market for data-based services.

2. **Data Ownership**:
   TLIP guarantees that only authorized parties can access data through decentralized identities (DIDs) and verifiable credentials. This provides secure, direct access control without intermediaries.

3. **Data Authenticity**:
   TLIP ensures that shared data and documents are authentic and have not been altered by utilizing decentralized systems rather than relying on a centralized authority. This guarantees confidentiality, security, and privacy for shared data.

**Overall Benefits**:
   TLIP enhances time efficiency by immediately providing documents and reducing delays associated with paper-based processes. It improves data integrity through immutable and verifiable data storage, and integrates seamlessly with existing systems using standardized APIs for expansion and modernization.

### TLIP API and UI

#### Overview
The TLIP portal offers a user-friendly interface for interacting with the TLIP system. It connects various systems and data stores, providing visibility into consignment status and trade certificates. Users can access TLIP through a web browser or develop third-party applications that utilize TLIP APIs.

#### TLIP API
The TLIP API comprises a series of REST endpoints that support data sharing and exchange among trade actors. It enables access to documents and consignment events, facilitating integration with government agencies and private stakeholders.

#### TLIP Building Blocks
- **Auditable Item Graph**:
  Manages data for items with an immutable audit trail. It stores item data, hashes, and tracks changes, recording information for consignments and associated documents.

- **Digital Identity**:
  Manages decentralized identities, including creation, updating, and verification. This allows organizations to manage user memberships and verifications effectively.

- **Document Management**:
  Handles the storage, verification, and association of documents with items. It manages document hashes and metadata, enabling the addition of certificates or other documents to consignments.

- **Permissions**:
  Manages access rights to documents, including creating, updating, and deleting permissions. It supports delegated access with optional expiry, controlling access to specific documents for relevant agencies.

- **Authentication**:
  Provides user authentication, including login, signup, and two-factor authentication. It manages user invitations and password updates, securing access to the TLIP system.

- **Simple Event Repository**:
  Records and tracks events related to items, such as status updates and location changes. It stores events immutably, tracking consignment events and document requests.

### IOTA Nodes

#### Role
IOTA nodes provide a secure and immutable audit trail for trade transactions and documents managed by TLIP. They may operate on a local network specific to East Africa to maintain control over data location.

#### IOTA Network Types
- **Mainnet**:
  A global, permissionless network with over 1,000 nodes that supports high security. It handles value transactions (IOTA tokens) and data transactions, with privacy ensured through encryption or secure MAM channels.

- **Devnet**:
  A permissioned network controlled by the IOTA Foundation, ideal for development with controlled node locations and lower requirements. Privacy is ensured through MAM channels.

- **Private Tangle**:
  A consortium-based network with controlled access and known node locations. It requires agreement among participating organizations, with restricted access to authorized parties.

### IPFS Node (File Storage)

#### Overview
IPFS is a decentralized peer-to-peer file storage system that uses content addressing to store and retrieve data based on its content fingerprint rather than location.

#### Integration with TLIP
Documents can be stored in local file systems, cloud storage, or IPFS. IPFS ensures secure document sharing through hashing and encryption, providing data integrity and content protection.

### MySQL Database Nodes

#### Role
MySQL database nodes host the database for TLIP, storing DLT indexes and pointers to IOTA transactions. The database is replicated to ensure high availability.

#### Database Structure
The database tables are predefined by developers to capture information at the data layer.

#### Data Storage and Retrieval
The access matrix manages which organizations have access to the system and their rights to view or upload documents.


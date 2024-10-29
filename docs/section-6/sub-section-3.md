# TLIP Building blocks

The TLIP APIs are composed of independent self-sufficient packages or functional layers that together form TLIP business logic. These are node.js workspace packages that can be installed and run independently. They include:

1) Auditable Item Graph
2) Digital Identity
3) Document Management
4) Permissions
5) Authentication
6) Simple Event Repository

## Auditable Item Graph
Store items and their associated data, and provide an immutable audit trail for the item.
#### Features:
Create/update/retrieve data for an item
Store the hash of the item data in immutable storage
Complete immutable audit trail of all the changes to the item
Search for the item by its primary or secondary identifiers
#### Use cases:
Store the data for a consignment with associated documents

## Digital Identity
Building block to provide all features related to digital identity in an organizational scenario
#### Features:
Create/update DID with associated verification methods (public/private key pairs) - stored immutably
Create/update/delete a profile associated with a DID
#### Use case:
Organizations with users who can enroll to become a member of the organization
Organizations offering some other kind of verification of an entity

## Document Management
Building block to provide a simple mechanism for storing and verifying documents, with optional association as a resource to existing items.
#### Features:
Add a document
Store the hash of the document and the DID of the entity adding the document
Retrieve a document and verify its authenticity and author
#### Use case:
Adding a Certificate of Export to a consignment

## Permissions
This building block provides access rights for a given identity to a specified item or a group of items.
#### Features:
Create/update/delete access rights for an identity to a single or group of items
List of pending resource requests
Delegated access rights can be time locked or no expiry
Automatic approval of access requests for trusted identities
#### Use case:
Limit access to specific documents connected to a consignment for the relevant agencies

## Authentication
Building block that provides access control for TLIP
#### Features:
Login/Signup facilities based on DIDs
Two Factor authentication
Invite users
Update email/password
#### Use case:
Any System that requires authentication

## Simple Event Repository
Record events for an item, events could be status updates, EPCIS events, location events etc . The events will be stored immutably.

#### Features:
Create/update events associated with an item
Hash the events and create an immutable record for them
Retrieve timeline of current events

#### Use Case:
Record documents requests, location changes etc for a consignment

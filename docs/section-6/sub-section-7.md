---
sidebar_position: 7
---

# IPFS Node (File Storage)
![alt text](/img/developerGuide/image-6.png)

## Overview of IPFS

The Interplanetary File System (IPFS) is a peer-to-peer Content Delivery Network (CDN) built around the principles of content addressing. It allows for storing, retrieving, and locating data based on the fingerprint of its actual content rather than its name or location.

### Storing Large Files

To store large files in a decentralized database, the use of technologies like IPFS is recommended. As a decentralized network, IPFS servers can be located anywhere in the world.

### Data Location Requirements

If data location is a requirement for specific files, it is necessary to install and manage a local IPFS network. The principles for managing a local IPFS network are similar to deploying an IOTA Private Tangle for data transactions, as described above.

### Integration with TLIP

In TLIP, documents are stored in blob storage. To ensure data sovereignty and security, the TLIP API provides the option to configure your preferred blob storage, whether it be a local file system, cloud file storage, or IPFS.

The IPFS Node enables secure and content integrity-protected document sharing. When documents are stored in IPFS, a hash is generated to access the data. Additionally, documents are encrypted, and only the relevant organization with the private key can decrypt them.

For more details on the required hardware and how to deploy your own private IPFS network, please refer to the following tutorial.

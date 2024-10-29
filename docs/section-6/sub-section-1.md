---
sidebar_position: 2
---

# TLIP System Architecture

Trade Logistics Information Pipeline (TLIP) is a collaborative infrastructure designed to enable data sovereignty in global trade. It allows all actors, including border agencies and commercial entities, to share data and documents securely while maintaining full control over their own information. The driving principle behind TLIP is to ensure digital data is available directly from the source in a trusted and secure manner, with each participant held accountable through digital signatures and encryption.

TLIP leverages distributed ledger technology (DLT) to guarantee the immutability and auditability of trade documents and related data. DLT, of which blockchain is a well-known type, is a decentralized database system that enables secure, transparent transactions across multiple nodes without a central authority. By embracing decentralization, TLIP empowers each stakeholder with complete control over their data sharing, enhancing trust and efficiency in international trade processes.

As an open-source technology combined with a public and permissionless DLT, TLIP provides an infrastructure for trusted data sharing without any central authority controlling access or use. This distinguishes it from traditional platforms where certain actors can monopolize parts of the infrastructure. TLIP seamlessly integrates with various stakeholder systems, accommodating both paper and digital document formats, thus bridging the gap between legacy systems and modern digital solutions.

By facilitating direct, secure data exchange between trade participants and regulatory bodies, TLIP has the potential to streamline customs procedures, reduce paperwork, and accelerate international trade operations while maintaining high standards of data integrity and confidentiality.


The documents described above exist in paper or digital format. The latter are stored in different responsible stakeholders systems that TLIP integrates with. 



To overcome this barrier, the TLIP platform must act as a single interface to access all the required documents, share information for their generation and notify for events related to their preparation and the planning of the trade journey.

The platform needs to be consignment centric, meaning that all the documents, information and events can be easily linked to a specific consignment. 

![Tlip architecture](/img/developerGuide/arch.png)

TLIP can be visualized as a layered architecture designed for supply chain management and is basically split into three main layers

## TLIP Infrastructure Layer:
Provides the core functionalities, including data and document exchange and management.
## Blockchain Layer:
Leverages a distributed ledger technology (IOTA) and a decentralized storage system (IPFS) for secure data storage and transactions.
## Application Layer:
This layer sits on top of the infrastructure and includes specific applications built for supply chain tasks. The provided examples showcase functionalities for border management and identity management.
In essence, TLIP offers a secure and transparent infrastructure for supply chain applications by combining established standards with blockchain technology.

In essence, TLIP offers a secure and transparent infrastructure for supply chain applications by combining established standards with blockchain technology.
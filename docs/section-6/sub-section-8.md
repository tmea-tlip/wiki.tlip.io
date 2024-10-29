---
sidebar_position: 8
---

# MySQL Database Nodes

The MySQL node hosts the MySQL database instance used by the TLIP API. They are replicated to ensure high availability. This database stores DLT indexes and index pointers to relevant transactions on the IOTA Tangle. Additional rights to the documents can be added after the initial creation.

###  Database Structure

The tables in this database are predefined by the developers and reflect the information collected from the data layer.

###  Data Storage and Retrieval

The Access Matrix regulates which organizations have access to the system and what default rights they have to view or upload documents. The database also stores index pointers to relevant transactions on the IOTA Tangle. Additional rights to the documents can be added after the initial creation.

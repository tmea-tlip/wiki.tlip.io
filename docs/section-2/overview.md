---
sidebar_position: 1
---

# Overview

## Deployment

#### Required Tools

1. **Node.js and NPM**
   - **Installation**: Download from the official Node.js website.
   - **Verify Installation**:
     ```bash
     node -v | npm -v
     ```

2. **Docker**
   - **Installation**: Follow the Docker website instructions.
   - **Verify Installation**:
     ```bash
     docker --version
     ```

3. **Kubernetes**
   - **Installation**: Use a package manager or official docs.
   - **Kubernetes Management Tool**:
     ```bash
     brew install kubectl
     ```
   - **List Pods**:
     ```bash
     kubectl get pods
     ```

### Kubernetes Cluster Setup

Five major components of the TLIP application as Kubernetes pods:
1. Config map
2. Entity storage (MySQL)
3. Blob storage (IPFS)
4. Immutable storage
5. API
6. UI

#### Setup Steps

1. **Config Map**:
   - Copy `api-config.yaml` and `ui-config.yaml` to the directory.
   - Run:
     ```bash
     kubectl apply -f api-config.yaml
     kubectl apply -f ui-config.yaml
     kubectl get configmaps
     ```

2. **Entity Storage**:
   - Copy `mysql.yaml` and create the MySQL pod:
     ```bash
     kubectl apply -f mysql.yaml
     kubectl get pod mysql --namespace <namespace>
     ```

3. **Blob Storage**:
   - Copy `ipfs.yaml` and create the IPFS pod:
     ```bash
     kubectl apply -f ipfs.yaml
     kubectl get pod ipfs --namespace <namespace>
     ```

4. **API**:
   - Copy `api.yaml` and create the API pod:
     ```bash
     kubectl apply -f api.yaml
     kubectl get pod api --namespace <namespace>
     ```

5. **UI**:
   - Copy `ui.yaml` and create the UI pod:
     ```bash
     kubectl apply -f ui.yaml
     kubectl get pod ui --namespace <namespace>
     ```

### Infrastructure

#### Monitoring and Observability

- **AWS CloudWatch**: Monitors EC2 metrics, including custom metrics.
- **Uptime Robot**: Monitors external services.
- **AWS SNS**: Sends critical notifications via email and SMS.

#### Log Management

- **Google Cloud Logging**: Captures detailed logs for API behavior.
- **Cloud Logging Filters**: Custom metrics for monitoring key events.

#### High Availability

- **Auto-Scaling**: Adjusts instances based on demand.
- **Load Balancing**: Distributes traffic to avoid bottlenecks.
- **Multi-Zone Redundancy**: Ensures fault tolerance across zones.
- **Disaster Recovery**: Automated backups and failover mechanisms.

#### Security Practices

1. **Decentralized Architecture**: Encryption, secure authentication, RBAC.
2. **Secure Coding Practices**: OWASP standards, input validation, encryption (AES-256).
3. **Security Audits**: Regular internal/external audits, automated patch management.


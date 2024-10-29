---
sidebar_position: 2
---

# TLIP  Deployment

##  Required Tools
### 1. Node.js and NPM
Installation:
Download and install Node.js from the [official website](https://nodejs.org/)

Verify installation:
```bash
 node -v | npm -v 
```
---

### 2. Docker
Installation: Follow the instructions on the Docker website to [download](https://www.docker.com/) and install Docker. 


Verify installation:
```bash
docker --version</code>
```
---

### 3. Kubernetes
Installation:
Install Kubernetes using a package manager or follow the[ official documentation](https://kubernetes.io/docs/home/).

Install a Kubernetes management tool like kubectl :
```bash
brew install kubectl
```

List pods:

```bash
kubectl get pods
```
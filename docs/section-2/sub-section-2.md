---
sidebar_position: 3
---
# Kubernetes Cluster Setup



There are five major components of the **TLIP application** that are set up as Kubernetes pods:

1. **Config map**
2. **Entity storage**
3. **Blob storage**
4. **Immutable storage**
5. **API**
6. **UI**

In order for TLIP to function properly, all the above will have to be executed using kubectl in that specific order

## Step 1: Setup config map
Copy both config map files into the desired directory:
- `api-config.yaml`
- `ui-config.yaml`

Navigate to the directory in your terminal by running:

```bash
cd <directory-name>
```
create config map
```bash
kubectl apply -f api-config.yaml
kubectl apply -f ui-config.yaml
```
Verify config map was created successfully
```bash
kubectl get configmaps
```

## Step 2: Setup entity storage (MySQL)
Copy mysql file into desired directory
- ` mysql.yaml`

Navigate to the directory (refer to step one)

Create MySQL pod

```bash
kubectl apply -f mysql.yaml
```

Verify MySQL pod was successfully created

```bash
kubectl get pod mysql --namespace <namespace>
```

## Step 3: Setup blob storage (IPFS)
Copy ipfs file into desired directory

- `ipfs.yaml`

Navigate to the directory (refer to step one)

Create IPFS pod

```bash
kubectl apply -f ipfs.yaml
```

Verify IPFS pod was successfully created

```bash
kubectl get pod ipfs --namespace <namespace>
```

## Step 4: Setup API
Copy api file into desired directory
- `api.yaml`
Navigate to the directory (refer to step one)

Create API pod

```bash
kubectl apply -f api.yaml
```

Verify IPFS pod was successfully created

```bash
kubectl get pod api --namespace <namespace>
```

## Step 5: Setup UI
Copy ui file into desired directory
- `ui.yaml`
Navigate to the directory (refer to step one)

Create UI pod
```bash
kubectl apply -f ui.yaml
```

Verify UI pod was successfully created
```bash
kubectl get pod ui --namespace <namespace>
```
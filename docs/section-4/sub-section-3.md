---
sidebar_position: 3
---

#  Setting Up the Database Environment
TWIN gives you the freedom to chose a database that suits your needs.

##  DynamoDB ([Localstack](https://hub.docker.com/r/localstack/localstack))
LocalStack is a fully functional local AWS cloud stack that allows you to develop and test your cloud applications offline. Here are the
steps to set up LocalStack locally using Docker.
a. Pull the LocalStack Docker Image:
```bash
    docker pull localstack/localstack
```
b. Run LocalStack:
```bash
    docker run --rm -d -p 4566:4566 -p 4571:4571 --name localstack --network localstack-net
    localstack/localstack
```
c. In the .env.serve set the entity storage to dynamoDB:
```bash
    ENTITY_SERVICE_STORAGE=dynamoDB
    AWS_DYNAMODB_ENDPOINT=http://localhost:4566
    AWS_ACCESS_KEY_ID=test
    AWS_REGION=eu-central-1
    AWS_SECRET_ACCESS_KEY=test
```

## MySQL ([Workbench](http://dev.mysql.com/))

Head over to
`MySQL :: Developer Zone` and download and instal the app locally.

a. Open MySQL Workbench.

b. Create a New Connection:
   i. Click on the + symbol next to MySQL Connections to create a new connection.
   
   ii. In the **Setup New Connection** window, enter the following details:
      - **Connection Name**: Enter a name for your connection (e.g., Local MySQL).
      - **Connection Method**: Select **Standard (TCP/IP)**.
      - **Hostname**: Enter `127.0.0.1`.
      - **Port**: Enter `3306`.
      - **Username**: Enter `root`.
      - **Password**: Click **Store in Vault** and enter the password you set when running the MySQL container (`my-secret-pw`).

c. Test the Connection:
   i. Click the **Test Connection** button.
   
   ii. If the connection is successful, you will see a success message. If not, verify the details and try again.

d. Save the Connection:
   - Click **OK** to save the connection.
e. Set env variables:
```bash
    ENTITY_SERVICE_STORAGE=mysqlDB
    MYSQL_HOST=127.0.0.1
    MYSQL_USERNAME=root
    MYSQL_PASSWORD=""
    MYSQL_DATABASE=mysql
    MYSQL_RESOURCE_PREFIX=gtsc_test_
    MYSQL_PORT=3306
```

## MySQL ([Docker](https://hub.docker.com/_/mysql))
Alternative option from using MySQL workbench is using docker.
1. Pull the LocalStack Docker Image:
```bash
    docker pull mysql
```
2. Start a mysql server instance:
```bash
    docker run --name mysql-service -e MYSQL_ROOT_PASSWORD='password' -d mysql
```
3. In the .env.serve set the entity storage to dynamoDB:
```bash
    ENTITY_SERVICE_STORAGE=mysqlDB
    MYSQL_HOST=127.0.0.1
    MYSQL_USERNAME=root
    MYSQL_PASSWORD=""
    MYSQL_DATABASE=mysql
    MYSQL_RESOURCE_PREFIX=gtsc_test_
    MYSQL_PORT=3306
```
## Caveats
If you are using windows, the nx package may fail to compile if your project path contains spaces. Therefore, avoid saving the project in a
folder name with spaces. For example, bad folder name would be twin project a good folder name would be twinproject or twin-
project .
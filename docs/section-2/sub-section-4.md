---
sidebar_position: 5
---

# Analyzing Logs and Metrics
## Log Management
+ `Google Cloud Logging` (formerly Stackdriver Logging) has been implemented to capture detailed logs from our application API hosted
on GCP. We structured logs using JSON format to facilitate advanced searching and filtering across the platform. The logs are organized
into resource-specific logs, providing clear visibility into API behavior and performance.
+ Our log retention policies are tailored to balance between operational needs and cost-efficiency. We maintain a detailed log history for
debugging and auditing purposes while keeping costs manageable by archiving logs beyond a certain retention period.
+ `Cloud Logging Filters:` We have set up custom log-based metrics that allow us to extract key insights from our log data, enabling real-
time monitoring of critical events such as errors, latency spikes, and API request anomalies.
As an alternative, AWS CloudWatch Logs is a good option if you choose to host on AWS
+ As an alternative, `AWS CloudWatch Logs` is a good option if you choose to host on AWS

## Metric Analysis
+ We have a custom metrics system that tracks consignment creation, document retrieval, account creation, account activity and system
uptime. You can interact with it through this URI /metrics?component=Authentication&cursor=1
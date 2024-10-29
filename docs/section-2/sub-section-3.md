---
sidebar_position: 4
---

# Infrastructure
## 1. Monitoring and Observability
### Overview of Monitoring and Observability
+ We’ve implemented a comprehensive monitoring and observability framework across our system to ensure high reliability, rapid incident
response, and insights into system health.
+ Metrics, logs, and traces have been centralized to provide a holistic view of system performance and potential bottlenecks. This
approach allows us to continuously monitor resource utilization, detect anomalies, and trace user requests for deeper insights.

## 2. Setting Up Monitoring Tools
### AWS CloudWatch
+ `CloudWatch Integration for EC2 and Other AWS Services:` We have integrated AWS CloudWatch to monitor key performance
metrics, including CPU utilization, network traffic, and disk usage for EC2 instances. Detailed monitoring is enabled for critical resources
to capture fine-grained performance data. Custom metrics were also defined to monitor application-specific parameters.
+ `Alarms`: CloudWatch Alarms have been set up to trigger notifications when key thresholds are exceeded, such as CPU usage
surpassing 80%. These alarms are linked to automated actions and notifications to minimize manual intervention.
+ [AWS Cloudwatch setup guide](https://docs.aws.amazon.com/cloudwatch/)

## Uptime Robot
+ Uptime Robot has been configured to monitor the uptime of our external-facing services. We’ve set up HTTP monitors to check the
availability of our website and API endpoiints at five-minute intervals. Alerts are routed through integrations with Slack and email for real-time notifications in case of downtime.
+ [Uptime robot setup guide](https://uptimerobot.com/website-monitoring/)

## AWS SNS for Notifications
+ For critical alarms and incidents, AWS SNS has been configured to send notifications via multiple channels, including email and SMS.
We’ve created a central notification topic, allowing us to manage subscribers efficiently and ensuring key team members are informed of any issues immediately.

+ [AWS SNS setup guide](https://docs.aws.amazon.com/sns/latest/dg/sns-getting-started.html)
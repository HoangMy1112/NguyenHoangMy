# Scoreboard Update API Service
LINK TO THE SEQUENCE DIAGRAM: https://lucid.app/lucidchart/613d2503-c7a0-452c-abf9-d52b98e0bc6d/edit?viewport_loc=-196%2C-232%2C3935%2C2120%2C0_0&invitationId=inv_6ea5eeda-e682-429e-b4b4-9342f2b485cd

## Overview

This documentation details the interactions and data flow in a complex system involving authorization, data posting, updating, and notification mechanisms. The system architecture includes multiple components such as the frontend, WebSocket backend, REST backend, Redis cache, and a database.

## System Architecture

The system is composed of the following components:

- **Authorization Server**: Handles security and token-based access control.
- **Frontend**: The user interface for interaction with the system.
- **Backend (WebSocket)**: Manages real-time communication and notifications.
- **Backend (REST)**: Handles persistent data storage and retrieval.
- **Redis**: Caching layer to improve data retrieval performance.
- **Database**: Persistent storage of data.
- **Actor1 and Actor2**: Represent different system users or external systems interacting with the module.

## Sequence Diagram Explanation

### Interaction Flow

1. **Authorization and Data Posting**
   - `Actor1` requests an access token from the `Authorization Server`.
   - Upon receiving the access token, `Actor1` sends a `postData` request to the `Frontend`.
   - The `Frontend` then establishes a connection with the `Backend (WebSocket)` using the access token and sets up a subscription for data updates.

2. **Data Handling and Notification**
   - The `Frontend` sends an `updateScore` query to the `Backend (WebSocket)`.
   - The `Backend (WebSocket)` forwards this query to the `Backend (REST)`.
   - `Backend (REST)` performs an `updateCache` operation in `Redis` and then a `getDataScore` to retrieve updated data.
   - The updated data is sent back to the `Backend (WebSocket)`, which then pushes this data back to the `Frontend`.
   - Simultaneously, `Backend (REST)` also updates the `Database` with new data and confirms the operation to the `Backend (WebSocket)`.

3. **Real-Time Data Update**
   - The `Frontend` receives the updated data and displays it.
   - The `Backend (WebSocket)` notifies all subscribed clients of the update.

### Additional Notes
- This sequence ensures that data is not only updated in real-time but also that all changes are persisted in a central database and cached appropriately for fast access.
- Security is managed through token-based authorization ensuring that only authenticated users can post updates or receive notifications.

## Conclusion
This document provides a high-level overview of the module's functionality. The system is designed to handle high-frequency data updates and distribute these updates in real-time to all connected clients, ensuring data consistency and quick access through effective caching.


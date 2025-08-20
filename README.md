# Hotel Resort Management System

This is a full-stack web application for managing hotel operations, built with **Angular** for the frontend and **Spring Boot** with **PostgreSQL** for the backend.

---

## Features

- User management (signup, login)
- Room management
- Booking management
- Payments tracking
- Restaurant orders management
- Housekeeping management
- Customer feedback
- Loyalty points system

---

## Technologies Used

**Frontend:**
- Angular
- HTML, CSS, TypeScript
- Angular Router
- Reactive Forms
- HttpClient

**Backend:**
- Spring Boot
- Spring Data JPA
- PostgreSQL
- REST APIs

**Testing:**
- Jasmine & Karma (Angular tests)
- Spring Boot test framework (backend tests)

---

## Project Structure
```
hotelresort1/
| hotel-resort-frontend/
| ├── src/
| │ ├── app/
| │ │ ├── components/
| │ │ │ ├── login.component/
| │ │ │ ├── signup.component/
| │ │ │ ├── bookings.component/
| │ │ │ ├── users.component/
| │ │ │ └── ...other components
| │ │ ├── services/
| │ │ │ ├── user.service.ts
| │ │ │ └── ...other services
| │ │ ├── app-routing.module.ts
| │ │ └── app.module.ts
| hotelresort/
| ├── src/main/java/com/example/hotelresort/
| │ ├── controller/
| │ ├── model/
| │ ├── repository/
| │ ├── service/
| │ └── HotelResortApplication.java
| ├── src/main/resources/
| │ ├── application.properties
| │ └── data.sql
| | |__ pom.xml

```

---

---

## Setup Instructions
---
### Backend

1. Install **Java 17+** and **Maven**.
2. Create a PostgreSQL database, e.g., `hotelresort_db`.
3. Update `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/hotelresort_db
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```
---
## Usage

Go to Signup page to create a user.

Go to Login page to authenticate.

Navigate through Dashboard to manage rooms, bookings, payments, feedback, and more.

Admin and staff roles have different access rights (if implemented).

---


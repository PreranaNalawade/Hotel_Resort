# 🏨 Hotel Resort Management System
This is a full-stack web application for managing hotel operations, built with **Angular** for the frontend and **Spring Boot** with **PostgreSQL** for the backend.

---
## Group Member
1. Rajnandini Ravindra Ambure
2. Samruddhi Mahavir More

---
## 🚀 Features
- User management (signup, login)
- Room management
- Booking management
- Payments tracking
- Restaurant orders management
- Housekeeping management
- Customer feedback
- Loyalty points system

---

## 🛠 Technologies Used

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

## 📁 Project Structure
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


## 🧩 REST API Endpoints (Backend)
```
| Method | Endpoint                       | Description              |
|--------|--------------------------------|--------------------------|
| GET    | `/api/users`                   | Get all users            |
| POST   | `/api/users`                   | Create new user          |
| GET    | `/api/users/{id}`              | Get user by ID           |
| PUT    | `/api/users/{id}`              | Update user              |
| DELETE | `/api/users/{id}`              | Delete user              |
| GET    | `/api/bookings`                | Get all bookings         |
| POST   | `/api/bookings`                | Create booking           |
| DELETE | `/api/bookings/{id}`           | Cancel booking           |
| GET    | `/api/feedback`                | Get all feedback         |
| POST   | `/api/feedback`                | Submit feedback          |
| ...    | ...                            | ...                      |
```
---

## 🛠️ Configure PostgreSQL

1. Create a PostgreSQL database:

```sql
CREATE DATABASE hotelresort_db;
```

---
## ⚙️ Build and Run
**Backend (Spring Boot)**
```
cd hotel-resort-backend
mvn spring-boot:run
```
**Frontend (Angular)**
```
cd hotel-resort-frontend
npm install
ng serve
```
---
## 📸 Sample UI

<img width="1919" height="971" alt="Screenshot 2025-08-20 092019" src="https://github.com/user-attachments/assets/ce71de23-7ee1-41ca-860f-a1b70af6f619" />

<img width="1916" height="964" alt="Screenshot 2025-08-20 181350" src="https://github.com/user-attachments/assets/7566de42-f4f2-4e5f-bfee-76af953d7905" />


---
## 👩‍💻 Contact
```
Name: Prerana Anand Nalawade
Email: prerananalawade5@gmail.com
GitHub: https://github.com/PreranaNalawade
```

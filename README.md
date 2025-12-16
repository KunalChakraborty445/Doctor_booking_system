---

# 🏥 Doctor Booking System

A **full-stack Doctor Booking System** built using **React, Node.js, Express, and MongoDB**.
This application streamlines the process of scheduling and managing appointments between **patients and doctors**, providing a secure, scalable, and user-friendly healthcare booking solution.

---

## 🚀 Project Overview

The **Doctor Booking System** enables patients to easily find doctors and book appointments while allowing doctors to manage their schedules, profiles, and appointments efficiently.

The system focuses on:

* Ease of appointment scheduling
* Secure authentication
* Role-based access (Patient & Doctor)
* Real-time appointment management
* Automated notifications

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **React Router**
* **Axios**
* **Vite**
* **CSS / Tailwind (if applicable)**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT Authentication**
* **bcrypt**

### Database

* **MongoDB (NoSQL)**

---

## 🔐 User Roles

### 👤 Patient

* Register & Login
* Manage profile
* Search & filter doctors
* Book, reschedule, or cancel appointments
* View appointment history
* Receive notifications & reminders

### 👨‍⚕️ Doctor

* Register & Login (with verification)
* Create & manage profile
* Set availability & consultation slots
* Manage appointments
* Mark appointments as completed or cancelled

---

## 📌 Core Features

### 1️⃣ Patient Registration & Profile Management

* Secure sign-up and login
* Profile creation and updates
* Password encryption & recovery
* Store basic medical history summary

---

### 2️⃣ Doctor Registration & Profile Management

* Secure doctor authentication
* Profile management including:

  * Specialization
  * Experience & qualifications
  * Clinic address & contact details
  * Consultation fees



---

### 3️⃣ Search & Filter Doctors

Patients can search doctors by:

* Specialization
* Doctor name
* Availability

Filters include:

* Experience
* Gender

---

### 4️⃣ Appointment Booking

* View doctor availability in real time
* Select preferred date & time slot
* Confirm appointment with summary
* Instant booking confirmation

---

### 5️⃣ Appointment Management

#### Patient

* View upcoming & past appointments
* Cancel or reschedule (based on policy)

#### Doctor

* View daily appointment schedule
* Mark appointments as:

  * Completed
  * Cancelled

---

### 6️⃣ Notifications & Reminders

* Appointment confirmation notifications
* Cancellation & reschedule alerts
* Automated reminders for upcoming appointments
* Supports in-app notifications (Email/SMS can be integrated)

---

## 🧩 Application Architecture

```text
Frontend (React)
   |
   |--- Axios API Calls
   |
Backend (Node + Express)
   |
   |--- Authentication (JWT)
   |--- REST APIs
   |
Database (MongoDB)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/doctor-booking-system.git
cd doctor-booking-system
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Features (Backend)

* RESTful APIs
* Role-based authorization
* Secure JWT authentication
* MongoDB schema validation
* Error handling & middleware support

---

## 🌱 Future Enhancements

* Online payment integration
* Video consultation
* Admin dashboard
* SMS & Email gateway integration
* Calendar sync (Google Calendar)


* Customize this README for **resume / portfolio**

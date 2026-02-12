# 🍕 Pizza Ordering Web App (Frontend)

A modern, mobile-first pizza ordering web application.  
Users can browse the menu, customize pizzas, place orders as guests or logged-in users, track deliveries in real time, and get support via an AI chatbot.

---

## ✨ Features

### 👥 Users & Navigation
- Browse pizza menus
- View pizza details:
    - Name
    - Price
    - Ingredients
    - Size options
- Add pizzas to the cart
- Navigate between pages
- Purchase without logging in (guest checkout)

---

### 🎨 Pizza Customization
- Choose pizza size:
    - Small
    - Medium
    - Large
- Select crust type
- Add or remove toppings (ingredients)
- Select quantity
- See **real-time price updates** based on selections

---

### 🛒 Cart Management
- View cart contents
- Edit cart items:
    - Toppings
    - Quantity
    - Crust type
    - Size
- Remove items from the cart
- Cart persists:
    - On page refresh
    - During navigation

---

### 🔐 Authentication
- Sign up using:
    - Email & password
    - Google
- Log in
- Log out
- Continue as a guest

---

### 💳 Checkout Flow
- Enter delivery details:
    - Address
    - Phone number
- Choose delivery or pickup
- Select payment method
- Place order
- View order confirmation

---

### 📦 Order Tracking
- View order status:
    - Preparing
    - Baking
    - Out for delivery / Ready for pickup
    - Delivered
- View order history (for logged-in users)

---

### 💰 Payments (Frontend Side)
- Enter payment information
- Handle payment success and failure
- Retry failed payments
- Display loading and error states

---

### 🔔 Notifications & Feedback
- Show validation errors
- Display out-of-stock messages
- Show confirmation messages
- Success and error toasts

---

### 🔍 Search & Filtering
- Search pizzas by name
- Filter by:
    - Vegetarian / Non-vegetarian
    - Price
    - Popularity
- Sort pizzas by price

---

### 🗺️ Real-Time Delivery Map Tracking
- View delivery person’s live location on a map
- Real-time map updates (every few seconds)
- Display:
    - Restaurant location
    - Delivery route
    - Delivery person marker
- Open tracking link from the order confirmation page

---

### ⏱️ Dynamic Delivery Time Estimation
- Display estimated delivery time (ETA) in minutes
- ETA updates based on:
    - Time of day (lunch / dinner rush)
    - Distance
    - Current order load
    - Traffic conditions
- Frontend **does not calculate ETA**
    - Consumes ETA API
    - Updates UI based on server signals

---

### 🤖 AI Chatbot (Order & Support)
- Chat with an AI assistant
- Chatbot capabilities:
    - Answer menu-related questions
    - Suggest pizzas
    - Track order status
    - Help with issues (late delivery, wrong item)
- Chat persists during the session
- Escalates to human support when needed

---

## ⚙️ Non-Functional Requirements

### 🚀 Performance
- Initial page load ≤ **2 seconds** on 4G networks
- Menu page renders under **1 second**
- Map updates feel real-time (≤ 2–3 seconds latency)
- Lazy loading:
    - Images
    - Map SDK
    - AI chatbot widget
- Avoid blocking the main thread during checkout and map updates

---

### 🌍 Availability
- Frontend usable **24/7**
- CDN-served static assets for high availability

---

### 🔒 Security
- No sensitive data stored on the frontend:
    - Payment information
    - Tokens

---

### ♿ Usability & Accessibility
- Responsive design:
    - Mobile
    - Tablet
    - Desktop
- Mobile-first approach
- Accessible UI and interactions

---

## 🛠️ Status
🚧 Work in progress — actively experimenting, refactoring, and improving.

If something is broken, it’s probably being fixed right now.

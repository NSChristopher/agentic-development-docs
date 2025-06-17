# Database Schema

_What are the main entities and relationships in your data model?_

---

## ER Diagram

```mermaid
erDiagram
  USER {
    UUID id
    string email
    string password_hash
    timestamp created_at
    timestamp updated_at
  }
  PRODUCT {
    UUID id
    string name
    text description
    decimal price
    string category
    string image_url
    timestamp created_at
    timestamp updated_at
  }
  CATEGORY {
    UUID id
    string name
    timestamp created_at
    timestamp updated_at
  }
  CART_ITEM {
    UUID id
    UUID user_id
    UUID product_id
    int quantity
    timestamp created_at
    timestamp updated_at
  }
  ORDER {
    UUID id
    UUID user_id
    string status
    decimal total_price
    timestamp created_at
    timestamp updated_at
  }
  ORDER_ITEM {
    UUID id
    UUID order_id
    UUID product_id
    int quantity
    decimal price
    timestamp created_at
    timestamp updated_at
  }
  SUPPORT_TICKET {
    UUID id
    UUID user_id
    string subject
    text description
    string status
    timestamp created_at
    timestamp updated_at
  }

  USER ||--o{ ORDER : places
  USER ||--o{ CART_ITEM : has
  ORDER ||--o{ ORDER_ITEM : contains
  PRODUCT ||--o{ ORDER_ITEM : includes
  PRODUCT ||--o{ CART_ITEM : includes
  CATEGORY ||--o{ PRODUCT : categorizes
```

---

## Description

The database schema is designed to support an e-commerce platform. The main entities include USERS, PRODUCTS, CATEGORIES, CART_ITEMS, ORDERS, ORDER_ITEMS, and SUPPORT_TICKETS. These entities interact to provide a seamless shopping experience.

- **Users**: Manage user accounts and authentication.
- **Products**: Store product details, including descriptions and prices.
- **Categories**: Organize products into logical groups.
- **Cart Items**: Track items added to the shopping cart.
- **Orders**: Represent completed transactions.
- **Order Items**: Detail the products within each order.
- **Support Tickets**: Facilitate customer support interactions.

For example, a user can browse products by category, add items to their cart, and place an order. Each order is linked to the user profile, enabling order tracking and history. Support tickets allow users to resolve issues efficiently.

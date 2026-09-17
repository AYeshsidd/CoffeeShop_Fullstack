# Coffee Shop Backend API

## 1. Project Overview
A robust, secure, and production-ready RESTful API backend designed for a modern Coffee Shop application. This backend leverages **FastAPI**'s high-performance asynchronous capabilities and **SQLAlchemy**'s industry-standard ORM, utilizing a clean and modular **vertically-sliced (feature-by-feature) architecture** to deliver excellent performance, type safety, and maintainability.

---

## 2. Project Deliverables
- **Stateless Session Security:** Fast registration, secure authentication, and session persistence using a dual-token JWT architecture (Access + Refresh tokens) with password protection.
- **Relational Product Catalog:** Organized category management with product-to-category constraints.
- **Transactional Shopping Cart:** Full CRUD capabilities for authenticated user shopping carts with inventory validation and concurrent transaction-safeguarded integrity.
- **Incremental Database Schema Migrations:** Fully trackable and reversible DB schemas with auto-generated Alembic migrations mapping to MySQL.

---

## 3. Features
* **Multi-Tiered User Security & Authorization:**
  * One-way password hashing using the `bcrypt` algorithm.
  * Role-based access control (RBAC) via secure dependency injection supporting `admin` and `customer` roles (e.g., locking catalog modifications to admins only).
  * Separate generation, validation, and verification of high-security short-lived Access tokens (30 mins) and long-lived Refresh tokens (7 days) signed with high-entropy environmental keys.
* **Granular Catalog System:**
  * Public-facing read-only access for listing all categories and products.
  * Admin-restricted routes to create or delete categories, and post or delete individual products with prices, images, and inventory stock quantities.
  * Clean category-to-product mapping verification.
* **Inventory-Aware Shopping Cart:**
  * Real-time validation of product quantities against available store stock upon cart item additions/updates.
  * Smart deduplication: Adding an existing item in the cart increments the current quantity rather than generating duplicate lines, protected at the database tier using a custom unique constraint on `(user_id, product_id)`.
  * Real-time calculation of line-item subtotals and product pricing dynamically upon viewing.

---

## 4. Architecture / Workflow

### Request Flow Diagram
The API handles and processes incoming requests systematically through clear physical layers:

```
[ Client ]
    │ (HTTPS Request + Bearer JWT)
    ▼
[ FastAPI Routers / Endpoints ]
    │ (Validation, Response Modeling & Security Dependencies)
    ▼
[ CRUD / Business Logic ]
    │ (Stock Checks, Duplicate Resolution, Model Translation)
    ▼
[ SQLAlchemy ORM ]
    │ (Query Compilation, Base Metadata Mapping, Unit of Work)
    ▼
[ Database (MySQL) ]
```

### Request Flow Explained
1. **Client**: Transmits an HTTP/S request (e.g., adding an item to the shopping cart) along with any needed request body and a JWT token in the `Authorization: Bearer <token>` header.
2. **Routes / Endpoints (`routes.py`)**: Catches the entry request. FastAPI applies dependency injection to parse the token header, decode the claims, verify credentials, fetch the database session, and optionally enforce specific role permissions.
3. **CRUD / Business Logic (`crud.py`)**: Executes application logic, validates business constraints (such as comparing requested quantity against current inventory stock), and orchestrates model updates.
4. **SQLAlchemy ORM**: Operates on structured high-level Python models, compiling actions into transactional relational queries.
5. **Database**: Executes compiled transactions on MySQL, asserting schema-level validations (e.g., `UniqueConstraint` on the shopping cart).

### Critical Entity Relationships
The backend models relational entity connections carefully to guarantee strict data integrity:
- **User ── (1:N) ──> CartItem**: One `User` owns multiple `CartItem` rows.
- **Category ── (1:N) ──> Products**: Products are neatly grouped under a single, valid `Category`.
- **Products ── (1:N) ──> CartItem**: Each `Products` entity can be added as a line item to multiple shopping carts. Integrity is secured at the database tier with a `UniqueConstraint("user_id", "product_id", name="uq_user_product_cart")` inside the `cart_items` table.

---

## 5. Tech Stack
* **Core Web Framework:** FastAPI (Uvicorn-powered ASGI application server)
* **Relational Database:** MySQL
* **Object-Relational Mapping (ORM):** SQLAlchemy 2.0 (Declarative Base structure)
* **Schema Migration Engine:** Alembic
* **Identity & Authentication:** PyJWT (`python-jose` with cryptographic primitives) & `bcrypt` password hashing
* **Configuration & Environments:** Pydantic Settings (Pydantic v2 metadata declarations) & `python-dotenv`

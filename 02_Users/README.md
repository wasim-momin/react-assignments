# 📌 API Use Case Pattern

Ye file random users APIs ke endpoints aur unke use-cases explain karti hai.  
Is format ko follow karke tu easily apni docs maintain kar sakta hai.  

---

## 🔹 Available APIs

### 1. List Users
- **Endpoint:** `/public/randomusers`
- **Method:** `GET`
- **Params:**
  - `page`: number (current page, e.g. 1)
  - `limit`: number (results per page, e.g. 10)
- **Use Case:**  
  Fetch a paginated list of users to show in a table, list, or infinite scroll UI.

---

### 2. Get User By ID
- **Endpoint:** `/public/randomusers/:id`
- **Method:** `GET`
- **Params:**
  - `id`: Unique user ID (e.g. 13)
- **Use Case:**  
  Fetch detailed information of a single user to display on a profile or details page.

---

### 3. Get Random User
- **Endpoint:** `/public/randomuser`
- **Method:** `GET`
- **Params:** _None_
- **Use Case:**  
  Fetch a completely random user.  
  Can be used for **"Surprise me"** feature or to test UI with random data.

---

## 🔹 JSON Pattern (For Reference)

```json
{
  "apis": [
    {
      "name": "List Users",
      "endpoint": "/public/randomusers",
      "method": "GET",
      "params": {
        "page": "number (current page, e.g. 1)",
        "limit": "number (results per page, e.g. 10)"
      },
      "useCase": "Fetch a paginated list of users to show in a table, list, or infinite scroll UI."
    },
    {
      "name": "Get User By ID",
      "endpoint": "/public/randomusers/:id",
      "method": "GET",
      "params": {
        "id": "Unique user ID (e.g. 13)"
      },
      "useCase": "Fetch detailed information of a single user to display on a profile or details page."
    },
    {
      "name": "Get Random User",
      "endpoint": "/public/randomuser",
      "method": "GET",
      "params": {},
      "useCase": "Fetch a completely random user. Can be used for 'Surprise me' feature or to test UI with random data."
    }
  ]
}

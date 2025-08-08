# 🏠 House Price Prediction Web App

## 📌 Description
A **machine learning-powered web application** that predicts house prices based on:
- **Location**
- **Total Sqft**
- **Number of Bedrooms (BHK)**
- **Number of Bathrooms**

The backend is built with **Flask** and the frontend uses **HTML, CSS, and JavaScript**.  
The ML model is trained using a **Linear Regression** algorithm in Python with **scikit-learn**.

---

## 🚀 Features
- Predict house prices instantly.
- Dynamic location list loaded from the trained dataset.
- Lightweight and easy to deploy.
- Simple and clean UI.

---

## 🛠️ Tech Stack
**Frontend:** HTML, CSS, JavaScript  
**Backend:** Python, Flask  
**Machine Learning:** scikit-learn, pandas, numpy  
**Data Format:** Pickle for model persistence  

---

⚙️ Installation & Usage
### Clone the repository
```bash
git clone https://github.com/yourusername/house-price-prediction.git
cd house-price-prediction
```

### Set up Python virtual environment
```bash
python -m venv myenv
myenv\Scripts\activate
```

### Install dependencies
```bash
pip install -r requirements.txt
```

### Run the Flask server
```bash
cd server
python server.py
```

### Run the frontend
```bash
cd client
python -m http.server 5500
Open browser → http://localhost:5500
```

📡 API Endpoints
GET /get_location_names
Returns the list of available locations.

Response:
{
    "locations": ["1st Phase JP Nagar", "Whitefield", "Yelahanka"]
}

POST /predict_home_price
Predicts the price of a house.

Request (x-www-form-urlencoded):

Key	Value Example
total_sqft	1200
location	Whitefield
bhk	3
bath	2

Response:
{
    "estimated_price": 85.4
}


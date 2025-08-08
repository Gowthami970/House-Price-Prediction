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
1.Clone the repository
git clone https://github.com/Gowthami970/House-Price-Prediction.git
cd House-Price-Prediction

2.Set up Python virtual environment
python -m venv myenv
myenv\Scripts\activate

3.Install dependencies
pip install -r requirements.txt

4.Run the Flask server
cd server
python server.py

5.Run the frontend
cd client
python -m http.server 5500

Open browser → http://localhost:5500

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




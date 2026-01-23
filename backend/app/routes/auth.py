from flask import Blueprint, request, jsonify
from app.models import User
from app.extensions import db
from flask_jwt_extended import create_access_token
import re

auth_bp = Blueprint('auth', __name__)

def is_valid_email(email):
    return re.match(r"[^@]+@[^@]+\.[^@]+", email)

def is_valid_pakistani_phone(phone):
    """Validate Pakistani phone number format: 03XX-XXXXXXX or +92-3XX-XXXXXXX"""
    # Remove spaces for validation
    phone_clean = phone.replace(' ', '')
    # Pattern: Optional +92 or 0, then 3XX-XXXXXXX (with or without hyphen)
    pattern = r'^(\+92|0)?3[0-9]{2}-?[0-9]{7}$'
    return re.match(pattern, phone_clean)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    
    if not data:
        return jsonify({"msg": "Missing JSON in request"}), 400

    fullName = data.get('fullName', '').strip()
    email = data.get('email', '').strip().lower()
    phoneNumber = data.get('phoneNumber', '').strip()
    password = data.get('password', '')

    if not fullName or not email or not password:
        return jsonify({"msg": "Missing required fields"}), 400

    if not is_valid_email(email):
        return jsonify({"msg": "Invalid email format"}), 400

    if not phoneNumber:
        return jsonify({"msg": "Phone number is required"}), 400

    if not is_valid_pakistani_phone(phoneNumber):
        return jsonify({"msg": "Invalid Pakistani phone number format. Use format: 0300-1234567 or +92-300-1234567"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Email already registered"}), 409

    user = User(fullName=fullName, email=email, phoneNumber=phoneNumber)
    user.set_password(password)
    
    db.session.add(user)
    db.session.commit()

    return jsonify(user.to_dict()), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    
    if not data:
        return jsonify({"msg": "Missing JSON in request"}), 400

    email = data.get('email', '').strip().lower()
    password = data.get('password', '')

    if not email or not password:
        return jsonify({"msg": "Missing email or password"}), 400

    user = User.query.filter_by(email=email).first()

    if not user or not user.check_password(password):
        return jsonify({"msg": "Invalid email or password"}), 401

    access_token = create_access_token(identity=user.id)
    
    return jsonify({
        "access_token": access_token,
        "user": user.to_dict()
    }), 200

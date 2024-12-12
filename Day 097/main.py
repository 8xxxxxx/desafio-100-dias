from flask import Flask, jasonfy, request

app = Flask(__name__)

users = [
    {'id': 1, 'name': 'Joseph', 'email': 'gitabc@example.com'},
    {'id': 2, 'name': 'John', 'email': 'john@example.com'},
]

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users), 200

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((user for user in users if user['id'] == user_id), None)
    if user:
        return jsonify(user), 200
    else:
        return jsonify({'message': 'User not found'}), 404
    
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = {
        'id': len(users) + 1,
        'name': data['name'],
        'email': data['email'],
    }
    users.append(new_user)
    return jsonify(new_user), 201

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    user = next((user for user in users if user['id'] == user_id), None)
    if user:
        user['name'] = data['name']
        user['email'] = data['email']
        return jsonify(user), 200
    else:
        return jsonify({'message': 'User not found'}), 404
    
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users
    user = [user for user in users if user['id'] != user_id]
    return jsonify({'message': 'User not found'}), 200


##    user = next((user for user in users if user['id'] == user_id), None)
##    if user:
##        users.remove(user)
##        return jsonify({'message': 'User deleted'}), 200
##    else:
##        return jsonify({'message': 'User not found'}), 404
    
if __name__ == '__main__':
    app.run(debug=True)

    
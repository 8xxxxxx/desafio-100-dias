# Day 58: Random Password Generator

import random
import string

def generate_password(length=12):
    # Define the characters to be used in the password
    uppercase_letters = string.ascii_uppercase
    lowercase_letters = string.ascii_lowercase
    digits = string.digits
    special_characters = string.punctuation

    # Combine all types of characters
    all_characters = uppercase_letters + lowercase_letters + digits + special_characters

    # Generate the random password
    password = ''.join(random.choice(all_characters) for _ in range(length))

    return password

# Ask the user for the desired password length and display the generated password
length = int(input("Enter the desired password length: "))
generated_password = generate_password(length)
print(f"Generated password: {generated_password}")

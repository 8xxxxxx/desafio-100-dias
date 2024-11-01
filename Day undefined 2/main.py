# Day 60: Python button interface

import tkinter as tk

# Define functions for each button click
def button1_clicked():
    print("Button 1 was clicked!")

def button2_clicked():
    print("Button 2 was clicked!")

def button3_clicked():
    print("Button 3 was clicked!")

# Create the main window
window = tk.Tk()
window.title("Simple Interface with Buttons")
window.geometry("300x200")

# Create and place the buttons
button1 = tk.Button(window, text="Button 1", command=button1_clicked)
button1.pack(pady=10)

button2 = tk.Button(window, text="Button 2", command=button2_clicked)
button2.pack(pady=10)

button3 = tk.Button(window, text="Button 3", command=button3_clicked)
button3.pack(pady=10)

# Start the Tkinter event loop
window.mainloop()

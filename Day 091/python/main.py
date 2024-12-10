from PySimpleGUI import PySimpleGUI as sg

# Layout

sg.theme('Reddit')

layout = [
    [sg.Text('User'), sg.Input(key='user')],
    [sg.Text('Password'), sg.Input(key='password', password_char='*')],
    [sg.Checkbox('Save')],
    [sg.Button('Login')],
]

window = sg.Window('Login Window', layout)

while True:
    events, values = window.read()
    if events == sg.WINDOW_CLOSED:
        break
    if events == 'Login':
        if values['user'] == 'Ian' and values['password'] == '1234':
            print('You have logged into the system!!')

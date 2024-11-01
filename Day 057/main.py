# Day 59: Tic Tac Toe

def display_board(board):
    # Display the current board state
    for row in board:
        print(" | ".join(row))
        print("-" * 9)


def check_winner(board, player):
    # Check rows, columns, and diagonals for a winning line
    for row in board:
        if all(cell == player for cell in row):
            return True

    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True

    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True

    return False


def is_draw(board):
    # Check if there are no empty cells left
    return all(cell != ' ' for row in board for cell in row)


def play_game():
    # Initialize the board and set up the game
    board = [[' ' for _ in range(3)] for _ in range(3)]
    players = ['X', 'O']
    current_player = 0

    while True:
        display_board(board)

        # Get the current player's move
        print(f"Player {players[current_player]}'s turn.")
        row = int(input("Enter row (0, 1, or 2): "))
        col = int(input("Enter column (0, 1, or 2): "))

        # Validate the move
        if board[row][col] != ' ':
            print("That cell is already taken. Try again.")
            continue

        # Make the move
        board[row][col] = players[current_player]

        # Check for a win
        if check_winner(board, players[current_player]):
            display_board(board)
            print(f"Player {players[current_player]} wins!")
            break

        # Check for a draw
        if is_draw(board):
            display_board(board)
            print("It's a draw!")
            break

        # Switch players
        current_player = 1 - current_player


# Run the game
play_game()

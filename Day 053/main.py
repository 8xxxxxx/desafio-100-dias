principal = float(input("Enter the principal amount: "))
tax_interest = float(input("Enter the annual interest rate: "))
years = int(input("Enter the number of years: "))

def calculate_compound_interest(principal, tax_interest, years):
    amount = principal * (1 + (tax_interest / 100)) ** years
    return amount

amount = calculate_compound_interest(principal, tax_interest, years)
print(f"The amount after {years} years is: {amount:.2f}")




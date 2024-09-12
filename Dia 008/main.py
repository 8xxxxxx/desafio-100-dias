# Função para converter Celsius para Fahrenheit
def celsius_para_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Solicitar a temperatura em Celsius ao usuário
celsius = float(input("Digite a temperatura em Celsius: "))

# Converter para Fahrenheit
fahrenheit = celsius_para_fahrenheit(celsius)

# Exibir o resultado
print(f"{celsius}°C é equivalente a {fahrenheit}°F.")
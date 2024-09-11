def fatorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        resultado = 1
        for i in range(2, n + 1):
            resultado *= i
        return resultado

num = int(input("Digite um número: "))

if num < 0:
    print(f"O fatorial de {num} não existe")
else:
    print("O fatorial de {num} é {fatorial(num)}")
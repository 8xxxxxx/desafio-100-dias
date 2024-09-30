def adicao(x, y):
    return x + y

def subtracao(x, y):
    return x - y

def multiplicacao(x, y):
    return x * y

def divisao(x, y):
    if y == 0:
        return "Erro: Divisão por zero não é permitida."
    return x / y

def calculadora():
    print("Selecione a Operação: ")
    print("1 - Adição")
    print("2 - Subtração")
    print("3 - Multiplicação")
    print("4 - Divisão")
    
    while True:
        escolha = input("Escolha (1/2/3/4): ")
        if escolha in ('1', '2', '3', '4'):
            num1 = int(input("Digite o primeiro número: "))
            num2 = int(input("Digite o segundo número: "))
            if escolha == '1':
                print("Resultado:", adicao(num1, num2))
            if escolha == '2':
                print("Resultado:", subtracao(num1, num2))
            if escolha == '3':
                print("Resultado:", multiplicacao(num1, num2))
            if escolha == '4':
                if num2 != 0:
                    print("Resultado:", divisao(num1, num2))
                else:
                    print("Erro: Divisão por zero não é permitida.")        
        else:
            print("Opção inválida, tente novamente.")
        continuar = input("Deseja fazer outra operação? (s/n)")
        if continuar == 'n':
            print("Calculadora Encerrada!")
            break;

calculadora()


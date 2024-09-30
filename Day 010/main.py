import pandas as pd # type: ignore
import numpy as np # type: ignore

# Exemplo de DataFrame com dados de funcionários
dados = {
    'nomes': ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'],
    'departamento': ['TI', 'RH', 'TI', 'Marketing', 'TI'],
    'salário': [5000, 3000, 4500, 4000, 6000]
}

df = pd.DataFrame(dados)

# Filtrar os funcionários do departamento de TI
funcionarios_ti = df[df['departamento'] == 'TI']

# Calcular a média salarial do departamento de TI
media_salarial_ti = np.mean(funcionarios_ti['salário'])

print(f"A média salarial do departamento de TI é: {media_salarial_ti:.2f}")

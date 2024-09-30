import pandas as pd # type: ignore
import numpy as np # type: ignore

# Exemplo de DataFrame
data = {
    'vendas': [200, 450, 300, 500, 700, 800, 650, 400]
}
df = pd.DataFrame(data)

# Cálculos usando Pandas
mean_vendas = df['vendas'].mean()
median_vendas = df['vendas'].median()
std_vendas = df['vendas'].std()
max_vendas = df['vendas'].max()
min_vendas = df['vendas'].min()

# Exibindo os resultados
print(f"Média: {mean_vendas}")
print(f"Mediana: {median_vendas}")
print(f"Desvio padrão: {std_vendas}")
print(f"Máximo: {max_vendas}")
print(f"Mínimo: {min_vendas}")

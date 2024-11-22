# Usando a imagem oficial do Python mais recente
FROM python:3.13

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando o arquivo de requisitos para instalar as dependências
COPY requirements.txt .

# Instalando as dependências do Python
RUN pip install -r requirements.txt

# Copiar todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Definindo a variável de ambiente para o Django
ENV PYTHONUNBUFFERED 1

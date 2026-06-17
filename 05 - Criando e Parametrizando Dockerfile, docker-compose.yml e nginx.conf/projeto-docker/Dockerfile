# Define a imagem base do Node.js para a versão 18
FROM node:18  

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de configuração do npm para o container
COPY package*.json ./

# Instala as dependências do projeto usando o npm
RUN npm install

# Copia o restante dos arquivos do projeto para o container
COPY . .

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Define o comando padrão para iniciar a aplicação quando o container for executado
CMD ["npm", "start"] 
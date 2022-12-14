# ferramentas-previsio-backend
 Server para ferramentas de consulta que rodam no site da Previsio Engenharia



# test-nodejs
 Teste de site com backend em node

### npm init

### npm install express

instalar globalmente através do prompt de comando
### npm install -g nodemon

instalar dependencia como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte
### npm install --save-dev nodemon

permitir acesso a API
### npm install --save cors

dependencia para acessar banco de dados
### npm install --save sequelize

Instalar drive do banco de dados MySQL
### npm install --save mysql2

Instalar dependencia para .env
### npm install dotenv

Instalar got para realizar GET request (HTTP)   ?????????????
### npm i got

Instalar lib para pegar data e hora
### npm install date-and-time --save



o script insert_nr04_table.js é utilizado para inserir dados nas tabelas NR04 do DB, com /models/NR04_Sesmt para a tabela de dimensionamento do Sesmt e /models/NR04_Cnae_Gr para relação do Cnae com grau de risco.
Utilizar o programa Insomnia para facilitar. Utilizar um POST request no http://localhost:8080/... com um JSON com os dados a serem inseridos. Verificar os Models de cada tabela para pegar os nomes das colunas.
Dividir mensagens muito grandes para caber em 1000 linhas

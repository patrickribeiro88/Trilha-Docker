# 🐳 Trilha de Docker - UniSENAI

Repositório com os projetos desenvolvidos durante a **Trilha de Docker** da UniSENAI, cobrindo desde conceitos básicos até ambientes multi-container com Docker Compose.

---

## 📁 Estrutura do Repositório
Trilha-Docker/

├── desafio-php/        # Desafio 1: PHP + Nginx + MySQL

└── desafio-node/       # Desafio 2: Vue + Node.js + Nginx + MySQL

---

## 🚀 Projetos

### Desafio 1 — PHP + Nginx + MySQL

Ambiente completo para aplicação PHP com servidor web, PHP-FPM, banco MySQL e Composer.

**Tecnologias:**
- PHP 8.2 FPM
- Nginx
- MySQL 8.0
- Composer

**Como rodar:**
```bash
cd desafio-php
docker compose up -d --build
```
Acesse: http://localhost:8080

---

### Desafio 2 — Vue + Node.js + Nginx + MySQL

Ambiente típico de aplicações modernas com frontend estático, API REST em Node.js e banco MySQL.

**Tecnologias:**
- HTML/JS (Frontend)
- Nginx (servidor web e proxy reverso)
- Node.js + Express (API)
- MySQL 8.0

**Como rodar:**
```bash
cd desafio-node
docker compose up -d --build
```
Acesse: http://localhost:8080

---

## 📚 Conteúdos Estudados

- ✅ Módulo 01 - Introdução ao Docker
- ✅ Módulo 02 - Compreendendo Contêineres e Imagens
- ✅ Módulo 03 - Gerenciamento de Contêineres
- ✅ Módulo 04 - Criando sua Primeira Imagem Docker
- ✅ Módulo 05 - Criando e Parametrizando Dockerfile, docker-compose.yml e nginx.conf
- ✅ Módulos 06 e 07 - Volume e Persistência de Dados e Redes no Docker
- ✅ Módulos 08 e 09 - Gerenciamento e Publicação de Imagens
- ✅ Módulo 10 - Otimizando e Debugando Contêineres

---

## 🛠️ Pré-requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) (recomendado)

---

## 👨‍💻 Autor

**Patrick Ribeiro**  
Desenvolvido durante a Trilha de Docker - UniSENAI 2026

# Tarea 5 - Autenticación con JWT y MongoDB

## Tecnologías
- Node.js
- Express
- TypeScript
- Mongoose
- bcrypt
- jsonwebtoken
- dotenv

## Instalación
1. Clona el repositorio
2. Instala las dependencias:
```bash
npm install
```
3. Crea un archivo `.env` basado en `.env.example`:
```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/tarea5
JWT_SECRET=LlaveSecretaQuePorAlgunaRazonTieneQueSerLarga123
JWT_EXPIRES_IN=1h
```
4. Inicia el servidor:
```bash
npm run dev
```

## Endpoints
!Se Uso Thunder Client para probar los métodos de POST y GET
### Registro
Body:
```json
{
    "name": "John Doe",
    "email": "John@iteso.mx",
    "password": "Password123"
}
```

### Login
Body:
```json
{
    "email": "John@iteso.mx",
    "password": "Password123"
}
```

### Verificar sesión
Headers:

## Estructura del proyecto
src/
├── index.ts
├── app.ts
├── config/
│   ├── database.config.ts
│   └── components.ts
├── middlewares/
│   └── auth.ts
├── models/
│   └── user.ts
├── routes/
│   ├── index.ts
│   └── auth.ts
└── utils/
├── bcrypt.ts
└── jwt.ts

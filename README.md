# TelcoX - Plataforma de Auto-Gestión

## Descripción
Este proyecto implementa la plataforma de auto-gestión **TelcoX**, permitiendo a los clientes consultar:

- Consumo de datos y minutos
- Saldo disponible
- Información actualizada en tiempo real (simulada)

El **backend** está desarrollado en **Python 3.14 + Flask** y dockerizado, mientras que el **frontend** se construye con **Angular 16** y se sirve mediante **Nginx**.

---

## Configuración del Backend

En `src/environments/environment.prod.ts` se configura la URL del backend en producción:

```ts
export const environment = {
  production: true,
  apiBaseUrl: 'http://localhost:5000/api'
};
```

---
## Instalación Local

Clonar el repositorio:

git clone https://github.com/AlexRamirezAbarca/frontEndTelcoX.git

cd frontEndTelcoX

### Instalar dependencias:

npm install


### Levantar la aplicación en modo desarrollo:

ng serve 

ng build --configuration production

---

## Dockerización

Construir la imagen Docker:

docker build -t telcox-frontend .


Levantar el contenedor:

docker run -p 4200:80 telcox-frontend

---

## Mejora y Escalabilidad

Se recomienda apuntar a un backend real en producción.

Configurar HTTPS y variables de entorno para diferentes entornos (dev, staging, prod).

Agregar logging, interceptores y manejo de errores para mejorar la experiencia de usuario.

## Autor

Alex Ramirez


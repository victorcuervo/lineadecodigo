---
title: "Básicos"
description: "Aprende los básicos de Flask: instalación, configuración, rutas, peticiones y respuestas para crear desde cero una aplicación web funcional con Python."
date: 2026-09-25
updatedDate: 2026-09-25
tags: ["Python Flask","Python Básicos","route","api","server"]
slug: flask/basicos
type: category
topic: flask
id: 51e836c5-8d4e-4940-bd3b-fc6ad16ae16c
author: victor_cuervo
---

## ¿Qué es Básicos Flask?


Los **básicos de Flask** son el conjunto de conceptos necesarios para instalar, configurar y ejecutar una primera aplicación web con este microframework de [Python](https://lineadecodigo.com/python/). Incluyen la creación de la aplicación, la definición de rutas, el acceso a los datos de una petición y la generación de respuestas.


Flask se denomina _microframework_ porque ofrece un núcleo reducido para trabajar con la web sin imponer una estructura completa. Proporciona enrutamiento, gestión de peticiones y respuestas, plantillas y un servidor de desarrollo. Funciones como el acceso a bases de datos o la autenticación se añaden solo cuando el proyecto las necesita.


Una aplicación Flask es un objeto que recibe peticiones HTTP y decide qué función debe ejecutarse para cada URL. La asociación entre una URL y una función se llama **ruta**. El valor devuelto por esa función se convierte en la respuesta enviada al navegador o al cliente de una API.


## Características de Básicos Flask

- **Instalación aislada.** Es recomendable crear un entorno virtual para que Flask y sus dependencias no interfieran con otros proyectos de Python.
- **Aplicación explícita.** `Flask(__name__)` crea la instancia principal. El valor `__name__` ayuda al framework a localizar recursos pertenecientes al módulo, como plantillas y archivos estáticos.
- **Rutas mediante decoradores.** Decoradores como `@app.get()` y `@app.post()` relacionan una URL y un método HTTP con una función de vista.
- **Rutas dinámicas.** Los segmentos variables, por ejemplo `/usuarios/<int:usuario_id>`, permiten extraer valores de la URL y convertirlos al tipo indicado.
- **Peticiones accesibles desde** **`request`****.** Este objeto permite leer parámetros de consulta, formularios, cabeceras y cuerpos JSON durante la petición actual.
- **Respuestas flexibles.** Una vista puede devolver texto, HTML, un diccionario serializado como JSON o una tupla con el cuerpo y el código de estado HTTP.
- **Configuración por claves.** `app.config` almacena ajustes como el modo de pruebas o la clave secreta. Los datos sensibles no deben escribirse directamente en el código ni guardarse en el repositorio.
- **Servidor de desarrollo.** Flask incluye un servidor para pruebas locales con recarga automática. No debe utilizarse como servidor público de producción.

## ¿Por qué aprender Básicos Flask?


Conocer estos fundamentos permite construir aplicaciones web pequeñas y APIs sin depender de una estructura generada automáticamente. Las rutas muestran de forma directa qué función atiende cada URL, por lo que resulta sencillo seguir el recorrido de una petición desde su entrada hasta la respuesta.


Flask también permite practicar conceptos web que se aplican en otros frameworks: métodos HTTP, parámetros de consulta, códigos de estado, JSON y separación entre configuración y código. Comprenderlos facilita detectar errores como utilizar un método incorrecto, no validar un dato recibido o devolver un estado HTTP inadecuado.


Estos conocimientos son útiles para prototipos, servicios internos, APIs REST y aplicaciones que necesitan elegir sus propios componentes. A medida que el proyecto crece, la misma base se puede organizar en módulos, plantillas y _blueprints_ sin cambiar el funcionamiento esencial de las rutas.


Aprender la configuración básica también evita prácticas problemáticas. Un entorno virtual mantiene las dependencias controladas, las variables de entorno permiten separar secretos y ajustes, y el modo de depuración queda limitado al desarrollo local.


## Ejemplo de Básicos Flask


Primero se crea y activa un entorno virtual y se instala Flask:


```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install Flask
```


En Windows, la activación del entorno se realiza con `.venv\Scripts\activate`. Después, guarda este código en un archivo llamado `app.py`:


```python
from flask import Flask, request

app = Flask(__name__)
app.config["JSON_SORT_KEYS"] = False


@app.get("/")
def mostrar_inicio():
    return "Aplicación Flask en funcionamiento"


@app.get("/api/saludo")
def crear_saludo():
    nombre = request.args.get("nombre", "visitante").strip()

    if not nombre:
        return {"error": "El nombre no puede estar vacío"}, 400

    return {"mensaje": f"Hola, {nombre}"}


if __name__ == "__main__":
    app.run(debug=True)
```


La primera ruta responde a `GET /` con texto. La segunda atiende `GET /api/saludo` y obtiene el parámetro `nombre` mediante `request.args`. Si no se proporciona, utiliza `visitante`; si solo contiene espacios, devuelve un objeto JSON y el código de estado `400`, que indica una petición incorrecta.


La aplicación se ejecuta con:


```bash
python app.py
```


Al abrir `http://127.0.0.1:5000/api/saludo?nombre=Ana`, Flask devuelve una respuesta JSON equivalente a:


```json
{
  "mensaje": "Hola, Ana"
}
```


El bloque `if __name__ == "__main__"` inicia el servidor únicamente cuando el archivo se ejecuta directamente. `debug=True` activa la recarga y el depurador durante el desarrollo; debe desactivarse antes de desplegar la aplicación en un entorno accesible públicamente.


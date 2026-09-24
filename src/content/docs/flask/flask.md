---
title: "Flask"
description: "Conoce Flask, el microframework de Python para crear aplicaciones web y APIs, sus características y un ejemplo práctico con rutas y respuestas JSON."
date: 2026-01-06
updatedDate: 2026-09-24
tags: ["route","get","response","server","flask","python"]
slug: flask
type: category
topic: flask
id: 2dfa9dfb-adca-80c5-9b35-e79cba132928
author: victor_cuervo
---

## ¿Qué es Flask?


**Flask es un microframework web para** [**Python**](https://lineadecodigo.com/python/) que permite crear aplicaciones web y APIs mediante una base pequeña y flexible. Se denomina _microframework_ porque proporciona los componentes esenciales —enrutamiento, gestión de peticiones y respuestas, servidor de desarrollo y renderizado de plantillas— sin imponer una arquitectura completa ni incluir de serie herramientas como un ORM o un sistema de autenticación.


Una aplicación Flask relaciona una URL con una función de Python. Esta relación se conoce como **ruta**: cuando el servidor recibe una petición HTTP para esa URL, Flask ejecuta la función asociada y transforma su valor de retorno en una respuesta HTTP.


Flask se apoya principalmente en Werkzeug para trabajar con HTTP y en Jinja para generar HTML a partir de plantillas. Las extensiones permiten añadir capacidades como acceso a bases de datos, validación de formularios o autenticación cuando el proyecto las necesita.


## Características de Flask

- **Enrutamiento mediante decoradores.** El decorador `@app.route()` o su forma abreviada `@app.get()` conecta una URL y un método HTTP con una función de Python.
- **Núcleo ligero y extensible.** La instalación básica incluye lo necesario para atender peticiones web, mientras que las funcionalidades adicionales se incorporan mediante paquetes o extensiones elegidos para cada aplicación.
- **Peticiones y respuestas accesibles.** Objetos como `request` permiten leer parámetros, cabeceras, formularios y cuerpos JSON. Flask puede devolver texto, HTML, JSON o una respuesta personalizada con código de estado y cabeceras.
- **Plantillas con Jinja.** `render_template()` genera HTML dinámico y mantiene separadas la presentación y la lógica de Python.
- **Servidor y modo de depuración para desarrollo.** El comando `flask run` facilita las pruebas locales y puede recargar la aplicación al detectar cambios. Este servidor no está diseñado para producción; en un despliegue real se utiliza un servidor WSGI compatible.
- **Contextos de aplicación y petición.** Flask mantiene disponibles determinados objetos durante cada petición, como `request` y `session`, sin tener que pasarlos manualmente entre todas las funciones.
- **Compatibilidad con WSGI.** La aplicación sigue la interfaz estándar que comunica las aplicaciones web de Python con servidores como Gunicorn o uWSGI.

## ¿Por qué aprender Flask?


Flask resulta útil para crear **APIs REST, servicios web, prototipos y aplicaciones pequeñas o medianas** sin incorporar componentes que el proyecto no necesita. Su enrutamiento explícito permite ver con claridad qué código atiende cada URL y cada método HTTP.


También ayuda a comprender cómo funciona una aplicación web en Python: recepción de una petición, extracción de datos, ejecución de la lógica y construcción de una respuesta. Estos conceptos se trasladan a otros frameworks, aunque su forma de configurarlos sea diferente.


Al no imponer una estructura única, Flask permite seleccionar la biblioteca de acceso a datos, el método de validación o el sistema de autenticación. Esa flexibilidad es útil cuando una aplicación tiene requisitos concretos, pero exige organizar el código con cuidado a medida que el proyecto crece.


Para una API, Flask puede convertir diccionarios y listas en JSON y asignar códigos de estado HTTP. Para una web con interfaz, puede combinar rutas, plantillas Jinja, archivos estáticos y formularios. En ambos casos es posible empezar con pocos componentes y separar después la aplicación en módulos mediante _blueprints_.


## Ejemplo de Flask


El siguiente ejemplo crea una pequeña API con una ruta de comprobación y otra que recibe un nombre mediante un parámetro de la URL:


```python
from flask import Flask, request

app = Flask(__name__)


@app.get("/api/estado")
def obtener_estado():
    return {"estado": "disponible"}


@app.get("/api/saludo")
def obtener_saludo():
    nombre = request.args.get("nombre", "visitante")
    return {"mensaje": f"Hola, {nombre}"}


if __name__ == "__main__":
    app.run(debug=True)
```


La instancia `app` representa la aplicación. Los decoradores `@app.get()` registran rutas que aceptan peticiones HTTP `GET`. Cada función devuelve un diccionario; Flask lo serializa como JSON y establece una respuesta válida para la API.


En `/api/saludo`, `request.args.get()` lee el parámetro de consulta `nombre`. Si se abre `http://127.0.0.1:5000/api/saludo?nombre=Ana`, la respuesta será:


```json
{
  "mensaje": "Hola, Ana"
}
```


Si el parámetro no se envía, se utiliza `visitante` como valor predeterminado. Para ejecutar el ejemplo, guarda el código en `app.py`, instala Flask con `python -m pip install Flask` y ejecuta `python app.py`. La opción `debug=True` debe utilizarse solo durante el desarrollo, ya que muestra información interna y habilita herramientas que no deben exponerse en producción.


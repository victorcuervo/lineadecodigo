---
title: "Errores"
description: "Aprende a gestionar errores Flask con excepciones, códigos HTTP, abort(), errorhandler y depuración segura mediante un ejemplo práctico y ejecutable."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["flask","error","errorhandler","abort","http"]
slug: flask/errores
type: category
topic: flask
id: 3e6a9dfb-adca-8095-a5d6-f08a06e3dab1
author: victor_cuervo
---

## ¿Cómo gestionar Errores Flask?


Los **errores Flask** son situaciones que impiden que una aplicación complete una petición con normalidad y obligan a devolver una respuesta alternativa al cliente. Pueden representar una condición prevista, como solicitar un recurso inexistente, o una excepción inesperada de [Python](https://lineadecodigo.com/python/) producida durante la ejecución de una vista.


En una aplicación [Flask](https://lineadecodigo.com/flask/) conviene distinguir dos conceptos:

- Un **error HTTP** comunica el resultado de una petición mediante un código de estado. Los códigos `4xx` indican problemas relacionados con la solicitud del cliente, como `400 Bad Request` o `404 Not Found`. Los códigos `5xx`, como `500 Internal Server Error`, indican que el servidor no pudo completar una operación válida.
- Una **excepción** es un objeto de [Python](https://lineadecodigo.com/python/) que interrumpe el flujo normal del programa. [Flask](https://lineadecodigo.com/flask/) puede convertir determinadas excepciones en respuestas HTTP o delegarlas en un manejador registrado.

Cuando una vista genera un error y existe un manejador compatible, [Flask](https://lineadecodigo.com/flask/) ejecuta ese manejador para construir la respuesta. Si no lo hay, utiliza su respuesta predeterminada; una excepción no controlada suele convertirse en un error HTTP `500`.


La **depuración** permite inspeccionar excepciones, trazas y variables durante el desarrollo. El modo de depuración de [Flask](https://lineadecodigo.com/flask/) facilita este diagnóstico, pero no debe habilitarse en producción porque su depurador interactivo puede exponer información sensible y ejecutar código en el servidor.


## Características de Errores Flask

- **Respuestas HTTP explícitas:** la función `abort()` detiene el procesamiento de una vista y genera una excepción HTTP con un código concreto. Es apropiada cuando la aplicación detecta una condición prevista, como la falta de permisos o de un recurso.
- **Manejadores personalizados:** el decorador `@app.errorhandler()` permite registrar una función para un código HTTP, una excepción HTTP o una clase de excepción propia. El manejador transforma el error en una respuesta coherente con la aplicación.
- **Resolución por especificidad:** [Flask](https://lineadecodigo.com/flask/) busca el manejador más específico para la excepción. Registrar un manejador para `HTTPException` conserva errores como `404`, mientras que uno para `Exception` puede actuar como último recurso ante fallos inesperados.
- **Formato de respuesta flexible:** un manejador puede devolver [HTML](https://lineadecodigo.com/html/), JSON, una instancia de `Response` o una tupla con cuerpo y código de estado. Una API suele responder con JSON; una aplicación web puede renderizar una plantilla de error.
- **Separación entre entorno de desarrollo y producción:** durante el desarrollo, la traza ayuda a localizar la línea que originó el fallo. En producción se debe mostrar un mensaje limitado al usuario y registrar el detalle técnico mediante `app.logger` o el sistema de observabilidad utilizado.
- **Códigos de estado correctos:** personalizar el contenido no cambia automáticamente el estado HTTP. El manejador debe devolver expresamente el código correspondiente para evitar que una página de error se envíe como `200 OK`.

## ¿Por qué aprender Errores Flask?


Gestionar errores permite que una aplicación responda de forma predecible cuando una petición no puede completarse. En lugar de entregar una página genérica o revelar una traza interna, se puede devolver un mensaje útil, un formato estable y el código HTTP adecuado.


Esto resulta especialmente útil para:

- Diferenciar fallos causados por datos inválidos, autenticación, permisos o recursos inexistentes.
- Mantener un contrato uniforme en una API, de modo que el cliente pueda interpretar siempre la misma estructura de error.
- Evitar que los detalles de una excepción, rutas del servidor o variables sensibles lleguen al usuario.
- Registrar excepciones inesperadas con su traza para diagnosticar problemas sin alterar la respuesta pública.
- Probar casos negativos y verificar que cada ruta devuelve códigos como `400`, `404` o `500` cuando corresponde.

El manejo de errores también conecta las rutas de [Flask](https://lineadecodigo.com/flask/) con conceptos de HTTP y [Python](https://lineadecodigo.com/python/). Una vista valida el estado de la aplicación, una excepción interrumpe el flujo y un manejador convierte esa situación en una respuesta que el navegador o cliente de la API puede procesar.


## Ejemplo de Errores Flask


El siguiente ejemplo crea una API mínima. Una petición a un usuario existente devuelve sus datos; una petición a un identificador desconocido genera un `404`. Además, cualquier excepción inesperada se registra y se convierte en una respuesta `500` sin exponer detalles internos.


```python
from flask import Flask, abort, jsonify
from werkzeug.exceptions import HTTPException

app = Flask(__name__)

usuarios = {
    1: {"id": 1, "nombre": "Ana"},
    2: {"id": 2, "nombre": "Luis"},
}


@app.get("/usuarios/<int:usuario_id>")
def obtener_usuario(usuario_id):
    usuario = usuarios.get(usuario_id)

    if usuario is None:
        abort(404, description="El usuario solicitado no existe")

    return jsonify(usuario)


@app.errorhandler(HTTPException)
def gestionar_error_http(error):
    respuesta = {
        "error": {
            "codigo": error.code,
            "nombre": error.name,
            "descripcion": error.description,
        }
    }
    return jsonify(respuesta), error.code


@app.errorhandler(Exception)
def gestionar_error_inesperado(error):
    app.logger.exception("Error no controlado")
    respuesta = {
        "error": {
            "codigo": 500,
            "nombre": "Internal Server Error",
            "descripcion": "No se pudo completar la petición",
        }
    }
    return jsonify(respuesta), 500


if __name__ == "__main__":
    app.run(debug=True)
```


Al abrir `/usuarios/1`, la aplicación responde con el usuario y el estado `200 OK`. Al solicitar `/usuarios/99`, `abort(404)` crea una excepción HTTP. El manejador de `HTTPException` conserva su código y devuelve una estructura JSON uniforme:


```json
{
  "error": {
    "codigo": 404,
    "nombre": "Not Found",
    "descripcion": "El usuario solicitado no existe"
  }
}
```


El segundo manejador captura excepciones no previstas. `app.logger.exception()` registra el mensaje junto con la traza activa, mientras que el cliente recibe una descripción genérica y el estado `500`. La separación evita filtrar información técnica.


El parámetro `debug=True` es útil únicamente al ejecutar el ejemplo en un entorno local. En producción debe desactivarse y la aplicación debe ejecutarse mediante un servidor WSGI configurado para ese entorno.


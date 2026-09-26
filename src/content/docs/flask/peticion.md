---
title: "Petición"
description: "Comprende las peticiones y respuestas Flask: request, métodos GET y POST, cuerpos JSON, códigos de estado y cabeceras con un ejemplo ejecutable."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["flask","request","response","get","post"]
slug: flask/peticion
type: category
topic: flask
id: 3e6a9dfb-adca-804b-972f-d0c5a1829b5a
author: victor_cuervo
---

## ¿Qué son las Peticiones y Respuestas Flask?


Las **peticiones y respuestas Flask** son los dos mensajes que forman una interacción HTTP entre un cliente y una aplicación web. La petición contiene lo que el cliente solicita o envía; la respuesta comunica el resultado mediante un cuerpo, un código de estado y cabeceras.


Cuando un navegador, una aplicación móvil u otro cliente accede a una ruta, [Flask](https://lineadecodigo.com/flask/) crea un contexto de petición y expone sus datos mediante el objeto `request`. Este objeto permite consultar, entre otros elementos:

- El método HTTP en `request.method`.
- Los parámetros de la URL en `request.args`.
- Los campos de un formulario en `request.form`.
- Los archivos enviados en `request.files`.
- Las cabeceras en `request.headers`.
- Un cuerpo JSON mediante `request.get_json()`.

El **código de estado** resume el resultado. Por ejemplo, `200 OK` indica que la operación se completó, `201 Created` que se creó un recurso, `400 Bad Request` que la petición no es válida y `404 Not Found` que el recurso no existe.


Las **cabeceras HTTP** transportan metadatos. `Content-Type` describe el formato del cuerpo, `Location` puede indicar la URL de un recurso recién creado y las cabeceras personalizadas permiten comunicar información adicional. El cuerpo contiene la representación del recurso, normalmente [HTML](https://lineadecodigo.com/html/) para una página o JSON para una API.


Una vista de [Flask](https://lineadecodigo.com/flask/) no tiene que crear siempre un objeto `Response` de forma explícita. Puede devolver una cadena, un diccionario, una tupla o un objeto de respuesta. El framework normaliza ese valor antes de enviarlo al cliente.


## Características de Peticiones y Respuestas Flask

- **Contexto de petición:** `request` es un proxy que apunta a la petición activa. Solo puede utilizarse mientras [Flask](https://lineadecodigo.com/flask/) procesa una petición o dentro de un contexto creado expresamente para pruebas.
- **Fuentes de datos separadas:** los parámetros de consulta, los formularios, los archivos y el JSON se consultan mediante propiedades diferentes. Esta separación evita confundir el origen y la codificación de cada valor.
- **Métodos HTTP:** `GET` se emplea para recuperar información; `POST`, para enviar datos que suelen crear un recurso o iniciar una operación. Otros métodos habituales son `PUT`, `PATCH` y `DELETE`.
- **Conversión de respuestas:** devolver `{"estado": "ok"}` produce una respuesta JSON en versiones modernas de [Flask](https://lineadecodigo.com/flask/). `jsonify()` sigue siendo útil para construir de forma explícita un objeto `Response` JSON y modificarlo después.
- **Código de estado configurable:** una vista puede devolver una tupla como `respuesta, 201` o asignar `response.status_code`. El estado debe describir el resultado real, no limitarse siempre a `200`.
- **Cabeceras modificables:** un objeto `Response` permite leer o añadir cabeceras mediante `response.headers`. Los nombres no distinguen entre mayúsculas y minúsculas según HTTP.
- **Negociación y formato:** el cliente puede indicar en `Accept` qué representaciones admite. La aplicación debe responder con un `Content-Type` coherente con el cuerpo enviado.
- **Datos no confiables:** todo valor recibido desde el cliente debe validarse antes de utilizarse. Convertir un parámetro a un tipo concreto no sustituye la validación de rangos, formatos y reglas de negocio.

## ¿Por qué aprender a manejar Peticiones y Respuestas Flask?


Comprender este ciclo permite construir rutas que interpreten correctamente lo que llega y devuelvan resultados previsibles. Es la base para crear páginas dinámicas, formularios, APIs y servicios que se integran con otros sistemas.


Su aplicación práctica incluye:

- Leer filtros y opciones de paginación desde una URL sin mezclarlos con el cuerpo de la petición.
- Procesar JSON enviado por un cliente y rechazarlo con `400` cuando falta información obligatoria.
- Utilizar `201` y `Location` al crear un recurso, para que el cliente sepa dónde consultarlo.
- Devolver `404` cuando un identificador no corresponde a ningún elemento.
- Añadir cabeceras de caché, seguridad, trazabilidad o información de paginación.
- Mantener una estructura de respuesta estable para que el consumidor de una API pueda interpretar tanto los datos como los errores.

Este conocimiento también facilita la depuración. Al inspeccionar método, URL, cabeceras, cuerpo y estado de respuesta, se puede determinar si un fallo está en los datos enviados, en la lógica de la vista o en la representación devuelta.


## Ejemplo de Peticiones y Respuestas Flask


El siguiente ejemplo implementa una API pequeña con rutas `GET` y `POST`. Permite listar productos, consultar uno por su identificador y crear nuevos recursos a partir de JSON.


```python
from flask import Flask, jsonify, request, url_for

app = Flask(__name__)

productos = {
    1: {"id": 1, "nombre": "Teclado"},
    2: {"id": 2, "nombre": "Ratón"},
}


@app.get("/productos")
def listar_productos():
    limite = request.args.get("limite", default=10, type=int)

    if limite < 1 or limite > 100:
        return jsonify({"error": "El límite debe estar entre 1 y 100"}), 400

    elementos = list(productos.values())[:limite]
    respuesta = jsonify({"datos": elementos})
    respuesta.headers["X-Total-Elementos"] = str(len(productos))
    return respuesta


@app.get("/productos/<int:producto_id>")
def obtener_producto(producto_id):
    producto = productos.get(producto_id)

    if producto is None:
        return jsonify({"error": "Producto no encontrado"}), 404

    return jsonify(producto)


@app.post("/productos")
def crear_producto():
    datos = request.get_json(silent=True)

    if not isinstance(datos, dict):
        return jsonify({"error": "Se esperaba un objeto JSON"}), 400

    nombre = str(datos.get("nombre", "")).strip()
    if len(nombre) < 2:
        return jsonify({"error": "El nombre debe tener al menos 2 caracteres"}), 400

    producto_id = max(productos, default=0) + 1
    producto = {"id": producto_id, "nombre": nombre}
    productos[producto_id] = producto

    respuesta = jsonify(producto)
    respuesta.status_code = 201
    respuesta.headers["Location"] = url_for(
        "obtener_producto",
        producto_id=producto_id,
    )
    return respuesta


if __name__ == "__main__":
    app.run(debug=True)
```


Una petición `GET /productos?limite=1` lee `limite` desde `request.args`. El argumento `type=int` intenta convertir el valor, y la condición posterior comprueba que esté dentro del rango admitido. La respuesta contiene un elemento y la cabecera `X-Total-Elementos` informa del número total almacenado.


Para crear un producto se puede enviar esta petición desde otra terminal:


```bash
curl -i \
  -X POST http://127.0.0.1:5000/productos \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Monitor"}'
```


La invocación `request.get_json(silent=True)` devuelve el cuerpo JSON procesado o `None` si no puede interpretarlo. La vista valida su estructura y el campo `nombre` antes de modificar los datos.


Cuando la creación es correcta, la aplicación responde con `201 Created`. La cabecera `Location` contiene la URL generada por `url_for()` para consultar el nuevo producto. Si el cliente solicita un identificador inexistente, la ruta devuelve un cuerpo de error y `404 Not Found`.


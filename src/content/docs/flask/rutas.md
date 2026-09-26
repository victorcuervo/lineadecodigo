---
title: "Rutas"
description: "Comprende las rutas Flask: define endpoints, captura parámetros, limita métodos HTTP, genera URL con url_for() y aplica redirecciones con ejemplos."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["route","url_for","redirect","parametros"]
slug: flask/rutas
type: category
topic: flask
id: 3e6a9dfb-adca-8007-9171-dea9ff687f23
author: victor_cuervo
---

## ¿Qué son las Rutas Flask?


Las **rutas Flask** son reglas que asocian una URL y uno o varios métodos HTTP con una función de vista de la aplicación. Cuando llega una petición que coincide con una regla, [Flask](https://lineadecodigo.com/flask/) ejecuta la función asociada y convierte su valor de retorno en una respuesta HTTP.


Una ruta se declara normalmente con el decorador `@app.route()`. También existen decoradores específicos como `@app.get()` y `@app.post()`, que expresan de forma directa el método aceptado.


```python
@app.get("/saludo")
def mostrar_saludo():
    return {"mensaje": "Hola"}
```


En este caso, `/saludo` es la regla de URL y `mostrar_saludo` es la función de vista. Su nombre actúa como **endpoint** de forma predeterminada. Un endpoint es el identificador interno utilizado por [Flask](https://lineadecodigo.com/flask/) para referirse a la vista, por ejemplo al generar enlaces con `url_for()`.


La ruta puede incluir segmentos variables, como `/usuarios/<nombre>`. [Flask](https://lineadecodigo.com/flask/) extrae el valor de la URL y lo entrega como argumento a la función. Los parámetros incluidos después de `?`, denominados parámetros de consulta, no forman parte de la regla y se leen mediante `request.args`.


## Características de las Rutas Flask

- **Decoradores de ruta:** `@app.route("/ruta")` registra una regla y permite indicar opciones como `methods`. `@app.get()`, `@app.post()`, `@app.put()`, `@app.patch()` y `@app.delete()` son alternativas más explícitas para un método concreto.
- **Métodos HTTP:** una misma URL puede responder de manera diferente a `GET`, `POST` u otros métodos. Si la ruta existe pero no admite el método recibido, [Flask](https://lineadecodigo.com/flask/) responde con el estado `405 Method Not Allowed`.
- **Parámetros de ruta:** la sintaxis `<nombre>` captura texto. Los conversores `<int:id>`, `<float:valor>`, `<path:ruta>`, `<uuid:identificador>` y `<string:nombre>` validan y convierten el segmento antes de ejecutar la vista. Si el valor no coincide con el conversor, la regla no se considera válida.
- **Endpoints:** cada regla tiene un nombre interno. De forma predeterminada coincide con el nombre de la función, aunque `endpoint` permite establecer otro. Los endpoints deben ser únicos dentro de la aplicación o del blueprint correspondiente.
- **Generación de URL:** `url_for()` crea una URL a partir de un endpoint y sus parámetros. Evita duplicar rutas literales y mantiene los enlaces correctos si cambia la regla.
- **Redirecciones:** `redirect()` devuelve una respuesta que indica al cliente que debe solicitar otra URL. Suele combinarse con `url_for()` para no escribir el destino manualmente.
- **Barra final:** `/documentos` y `/documentos/` son reglas distintas. Si una regla termina en `/`, una petición sin esa barra suele redirigirse a la URL canónica. Si la regla no termina en `/`, solicitarla con la barra adicional produce normalmente un `404`.
- **Organización con blueprints:** en aplicaciones medianas, los blueprints agrupan rutas relacionadas y anteponen el nombre del blueprint al endpoint, por ejemplo `usuarios.detalle`.

## ¿Por qué aprender Rutas Flask?


Las rutas definen la interfaz HTTP de una aplicación. Permiten decidir qué operaciones ofrece cada URL, qué datos deben aparecer en el camino y qué métodos pueden modificar información. Esta organización es necesaria tanto para páginas web como para APIs.


Los conversores evitan procesar manualmente valores básicos. Si una vista necesita un identificador entero, `<int:producto_id>` descarta las URL incompatibles antes de ejecutar la función. La vista recibe un entero y puede centrarse en buscar el recurso y construir la respuesta.


Separar los métodos HTTP ayuda a representar la intención de cada petición. `GET` consulta un recurso sin modificarlo; `POST` suele crear o iniciar una operación. Limitar los métodos aceptados evita que una vista procese peticiones para las que no fue diseñada.


`url_for()` reduce el acoplamiento entre el código y las URL. En lugar de repetir `/productos/15`, la aplicación genera la dirección desde el endpoint y el identificador. Esto resulta especialmente útil al reorganizar rutas, trabajar con blueprints o crear redirecciones después de procesar un formulario.


Comprender el enrutamiento también permite interpretar errores habituales: un `404` puede indicar que ninguna regla coincide; un `405`, que la URL existe pero no admite el método; y un error al usar `url_for()` suele señalar que faltan parámetros o que el endpoint no existe.


## Ejemplo de Rutas Flask


El siguiente ejemplo define una redirección, una ruta con un parámetro entero, un parámetro de consulta y una operación `POST`:


```python
from flask import Flask, abort, redirect, request, url_for

app = Flask(__name__)

productos = {
    1: {"nombre": "Teclado", "stock": 8},
    2: {"nombre": "Ratón", "stock": 15},
}


@app.get("/")
def inicio():
    return redirect(url_for("detalle_producto", producto_id=1))


@app.get("/productos/<int:producto_id>")
def detalle_producto(producto_id):
    producto = productos.get(producto_id)
    if producto is None:
        abort(404)

    incluir_stock = request.args.get("stock", default="no").lower() == "si"
    respuesta = {
        "id": producto_id,
        "nombre": producto["nombre"],
    }

    if incluir_stock:
        respuesta["stock"] = producto["stock"]

    return respuesta


@app.post("/productos/<int:producto_id>/reservas")
def crear_reserva(producto_id):
    if producto_id not in productos:
        abort(404)

    cantidad = request.form.get("cantidad", type=int)
    if cantidad is None or cantidad < 1:
        return {"error": "La cantidad debe ser un entero positivo"}, 400

    return {
        "producto_id": producto_id,
        "cantidad": cantidad,
        "estado": "reservada",
    }, 201


if __name__ == "__main__":
    app.run(debug=True)
```


Al abrir `/`, la función `inicio()` genera la URL del endpoint `detalle_producto` y redirige a `/productos/1`. La regla `<int:producto_id>` convierte el segmento en un entero antes de pasarlo a la función.


Una petición a `/productos/2` devuelve el identificador y el nombre. Si se solicita `/productos/2?stock=si`, `request.args` lee el parámetro de consulta y la respuesta incluye también el stock. Un identificador que no existe provoca `abort(404)`.


La ruta de reservas solo acepta `POST`. `request.form.get()` obtiene `cantidad` de los datos de formulario y la convierte a entero. Una cantidad no válida produce un estado `400`; una reserva correcta devuelve `201 Created`.


El ejemplo puede ejecutarse después de instalar [Flask](https://lineadecodigo.com/flask/) con `pip install Flask` y lanzar `python app.py`. Para probar la operación `POST` desde una terminal:


```bash
curl -X POST -d "cantidad=2" http://127.0.0.1:5000/productos/1/reservas
```


El servidor de desarrollo y `debug=True` son apropiados para pruebas locales, no para desplegar la aplicación en producción.


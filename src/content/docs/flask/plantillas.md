---
title: "Plantillas"
description: "Aprende a crear plantillas Flask con Jinja2, pasar variables desde las rutas, reutilizar HTML mediante herencia y generar páginas dinámicas de forma segura."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["render_template","template","html","jinja2"]
slug: flask/plantillas
type: category
topic: flask
id: 71eaf98a-37ed-41f4-8488-c1860366f42d
author: victor_cuervo
---

## ¿Qué son las plantillas Flask?


Las **plantillas Flask** son archivos, normalmente [HTML](https://lineadecodigo.com/html/), que [Flask](https://lineadecodigo.com/flask/) procesa para generar una respuesta dinámica antes de enviarla al navegador. Permiten separar la presentación de la lógica escrita en [Python](https://lineadecodigo.com/python/): una ruta prepara los datos y la plantilla decide cómo mostrarlos.


[Flask](https://lineadecodigo.com/flask/) utiliza el motor de plantillas **Jinja**, conocido históricamente como Jinja2. Este motor combina [HTML](https://lineadecodigo.com/html/) con expresiones delimitadas por una sintaxis específica:

- `{{ ... }}` muestra el valor de una variable o expresión.
- `{% ... %}` ejecuta estructuras de plantilla, como condiciones, bucles o bloques.
- `{# ... #}` añade comentarios que no aparecen en el [HTML](https://lineadecodigo.com/html/) generado.

Por convención, [Flask](https://lineadecodigo.com/flask/) busca los archivos en el directorio `templates`. Desde una vista se utiliza `render_template()` para elegir el archivo y pasarle valores. Jinja crea el [HTML](https://lineadecodigo.com/html/) final con esos datos y [Flask](https://lineadecodigo.com/flask/) lo devuelve como respuesta HTTP.


Una plantilla no ejecuta [Python](https://lineadecodigo.com/python/) arbitrario. Trabaja con las variables, funciones y objetos que la aplicación le proporciona. Esta separación mantiene la lógica de negocio en [Python](https://lineadecodigo.com/python/) y limita la plantilla a decisiones relacionadas con la presentación.


## Características de Plantillas Flask

- **Variables dinámicas:** una ruta puede enviar cadenas, números, listas u objetos a la plantilla. Jinja permite mostrarlos y acceder a sus atributos o elementos.
- **Control de presentación:** las etiquetas `{% if %}` y `{% for %}` permiten ocultar, repetir o adaptar fragmentos de [HTML](https://lineadecodigo.com/html/) según los datos recibidos.
- **Herencia de plantillas:** una plantilla base define la estructura común del sitio y declara bloques reemplazables. Las páginas hijas extienden esa base y completan solo las zonas que cambian.
- **Inclusión y reutilización:** `{% include %}` inserta fragmentos compartidos, como una navegación o una tarjeta, sin duplicar el mismo [HTML](https://lineadecodigo.com/html/) en varios archivos.
- **Generación de URL:** `url_for()` construye enlaces a rutas y archivos estáticos a partir del nombre del endpoint. Así se evita escribir rutas rígidas en el [HTML](https://lineadecodigo.com/html/).
- **Filtros:** expresiones como `{{ nombre|title }}` transforman valores para su presentación. Los filtros no deberían sustituir el procesamiento que corresponde a la aplicación.
- **Autoescape para HTML:** Jinja escapa por defecto los valores interpolados en plantillas [HTML](https://lineadecodigo.com/html/). Caracteres como `<` y `>` se convierten en entidades para evitar que un dato se interprete como marcado. El filtro `safe` desactiva esta protección y solo debe aplicarse a contenido [HTML](https://lineadecodigo.com/html/) previamente validado y de confianza.
- **Contexto de plantilla:** [Flask](https://lineadecodigo.com/flask/) incorpora objetos y funciones útiles, como `request`, `session`, `g` y `url_for()`. Las variables específicas de cada página se pasan normalmente mediante `render_template()`.

## ¿Por qué aprender Plantillas Flask?


Conocer las plantillas permite construir interfaces que muestran datos reales sin generar cadenas [HTML](https://lineadecodigo.com/html/) dentro del código [Python](https://lineadecodigo.com/python/). Una misma vista puede representar productos, usuarios o resultados obtenidos de una base de datos manteniendo el marcado en archivos independientes.


La herencia reduce la duplicación. El encabezado, la navegación y el pie pueden definirse una sola vez en una plantilla base; cada página conserva esa estructura y aporta su contenido. Cuando cambia el diseño común, se modifica un único archivo.


Las condiciones y los bucles resuelven necesidades habituales de presentación: mostrar un mensaje cuando una lista está vacía, crear una fila por cada registro o adaptar un enlace al estado de la sesión. La ruta sigue siendo responsable de consultar y preparar los datos, mientras la plantilla decide cómo representarlos.


También ayuda a mantener límites claros entre responsabilidades. Las validaciones, consultas y reglas de negocio pertenecen a [Python](https://lineadecodigo.com/python/). El [HTML](https://lineadecodigo.com/html/), la accesibilidad y la disposición visual pertenecen a las plantillas. Esta organización facilita probar la aplicación, localizar errores y trabajar sobre el diseño sin alterar la lógica.


## Ejemplo de Plantillas Flask


El ejemplo muestra una lista de cursos y utiliza herencia para compartir la estructura [HTML](https://lineadecodigo.com/html/). La organización del proyecto es:


```text
mi_aplicacion/
├── app.py
└── templates/
    ├── base.html
    └── cursos.html
```


En `app.py`, la ruta prepara los datos y los entrega a `cursos.html` mediante `render_template()`:


```python
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/cursos")
def mostrar_cursos():
    cursos = [
        {"nombre": "Flask desde cero", "nivel": "Inicial"},
        {"nombre": "Plantillas con Jinja", "nivel": "Medio"},
    ]
    return render_template(
        "cursos.html",
        titulo="Cursos disponibles",
        cursos=cursos,
    )


if __name__ == "__main__":
    app.run(debug=True)
```


La plantilla `base.html` contiene la estructura compartida y define dos bloques reemplazables:


```html
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{% block title %}Academia Flask{% endblock %}</title>
</head>
<body>
    <header>
        <a href="{{ url_for('mostrar_cursos') }}">Academia Flask</a>
    </header>

    <main>
        {% block content %}{% endblock %}
    </main>
</body>
</html>
```


La página web `cursos.html` hereda de la plantilla base. Sustituye los bloques y recorre la lista recibida desde la ruta:


```html
{% extends "base.html" %}

{% block title %}{{ titulo }}{% endblock %}

{% block content %}
    <h1>{{ titulo }}</h1>

    {% if cursos %}
        <ul>
            {% for curso in cursos %}
                <li>
                    <strong>{{ curso.nombre }}</strong>
                    — Nivel: {{ curso.nivel }}
                </li>
            {% endfor %}
        </ul>
    {% else %}
        <p>No hay cursos disponibles.</p>
    {% endif %}
{% endblock %}
```


Al abrir `/cursos`, [Flask](https://lineadecodigo.com/flask/) ejecuta `mostrar_cursos()`. `render_template()` carga `cursos.html`, Jinja aplica la herencia de `base.html` y reemplaza `{{ titulo }}` y los datos de cada curso. La condición controla el caso de una lista vacía y el bucle genera un elemento `<li>` por curso.


Los nombres pasados a `render_template()` forman el contexto de la plantilla. En este caso, `titulo` y `cursos` quedan disponibles en Jinja. La expresión `url_for('mostrar_cursos')` genera la URL usando el nombre de la función de vista, por lo que el enlace no depende de escribir `/cursos` manualmente.


Para ejecutar el ejemplo, instala [Flask](https://lineadecodigo.com/flask/) con `pip install Flask`, ejecuta `python app.py` y abre `http://127.0.0.1:5000/cursos` en el navegador.


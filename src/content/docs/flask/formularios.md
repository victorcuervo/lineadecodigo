---
title: "Formularios"
description: "Gestiona formularios Flask con métodos GET y POST, acceso seguro a campos, validación del servidor y respuestas claras mediante un ejemplo ejecutable."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["flask","form","post","request","validation"]
slug: flask/formularios
type: category
topic: flask
id: 3e6a9dfb-adca-80de-b861-ceb8e1d85ccd
author: victor_cuervo
---

## ¿Qué es la gestión de Formularios Flask?


Los **formularios Flask** son el mecanismo mediante el que una aplicación web recibe, valida y procesa datos introducidos por el usuario en campos de una página. El navegador envía esos valores en una petición HTTP y [Flask](https://lineadecodigo.com/flask/) los pone a disposición de la función asociada a la ruta.


Un formulario suele utilizar dos métodos HTTP:

- `GET` solicita o muestra un recurso. Los datos se incluyen normalmente en la URL y se consultan mediante `request.args`.
- `POST` envía datos para crear o modificar información. Los campos de un formulario convencional se consultan mediante `request.form`.

Tenemos que saber que `request.form` es un `ImmutableMultiDict`: una estructura similar a un diccionario que puede contener varios valores para una misma clave. El método `get()` permite leer un campo sin provocar una excepción cuando no existe, mientras que `getlist()` recupera todos los valores de campos repetidos, como un grupo de casillas.


Recibir un valor no significa que sea válido. La aplicación debe comprobar en el servidor los campos obligatorios, longitudes, formatos y reglas de negocio antes de guardar o utilizar la información. La validación del navegador mejora la experiencia, pero puede omitirse o manipularse.


[Flask](https://lineadecodigo.com/flask/) permite procesar formularios directamente con `request`, aunque la extensión `Flask-WTF` simplifica la definición de campos, la validación y la protección contra ataques CSRF. Un ataque **CSRF** intenta que el navegador de una persona autenticada envíe una operación no deseada; el token incluido en el formulario permite verificar que la petición se originó en la aplicación.


## Características de Formularios Flask

- **Rutas con varios métodos:** una misma vista puede responder a `GET` para mostrar el formulario y a `POST` para procesarlo. El argumento `methods` de `@app.route()` declara los métodos admitidos.
- **Acceso diferenciado a los datos:** `request.form` contiene campos enviados como `application/x-www-form-urlencoded` o `multipart/form-data`. Los parámetros de la URL se encuentran en `request.args` y los cuerpos JSON en `request.get_json()`.
- **Validación en el servidor:** cada valor recibido debe considerarse no confiable. Las reglas deben comprobarse antes de escribir en una base de datos, enviar un correo o ejecutar cualquier operación.
- **Protección CSRF:** `Flask-WTF` genera y valida un token asociado a la sesión. Para usarlo, la aplicación necesita una `SECRET_KEY` segura y el formulario debe incluir el campo oculto correspondiente.
- **Mensajes de error por campo:** los validadores pueden asociar errores concretos a cada entrada. La plantilla puede mostrarlos junto al campo para que el usuario sepa qué debe corregir.
- **Patrón POST/Redirect/GET:** después de procesar correctamente un `POST`, se redirige a otra petición `GET`. Esto evita que el navegador reenvíe el formulario al actualizar la página.
- **Separación de responsabilidades:** la clase del formulario describe campos y validadores, la vista coordina el flujo y la plantilla [HTML](https://lineadecodigo.com/html/) presenta controles y errores. Esta división facilita las pruebas y el mantenimiento.

## ¿Por qué aprender Formularios Flask?


Los formularios permiten implementar registros, accesos, búsquedas, perfiles, pedidos, comentarios y paneles de administración. Conocer su flujo ayuda a decidir qué datos aceptar, cómo comprobarlos y qué respuesta devolver cuando son válidos o contienen errores.


Su manejo correcto resuelve problemas concretos:

- Evita guardar cadenas vacías, valores demasiado largos o datos que no cumplen las reglas de la aplicación.
- Reduce duplicados provocados por reenviar accidentalmente una petición `POST`.
- Protege operaciones que cambian datos mediante tokens CSRF.
- Permite devolver los errores junto al campo correspondiente sin perder los valores ya introducidos.
- Mantiene diferenciados los datos de formularios, los parámetros de consulta y los cuerpos JSON.

También conecta varios elementos de una aplicación [Flask](https://lineadecodigo.com/flask/): rutas, métodos HTTP, objetos `request`, sesiones, plantillas y redirecciones. Comprender esa relación facilita pasar de una vista estática a una funcionalidad que recibe información y responde de forma segura.


## Ejemplo de Formularios Flask


Este ejemplo utiliza `Flask-WTF` para crear un formulario de contacto con validación y protección CSRF. Instala primero las dependencias:


```bash
python -m pip install Flask Flask-WTF
```


Guarda el siguiente código como `app.py`:


```python
from flask import Flask, flash, redirect, render_template, url_for
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Length

app = Flask(__name__)
app.config["SECRET_KEY"] = "clave-solo-para-desarrollo"


class ContactoForm(FlaskForm):
    nombre = StringField(
        "Nombre",
        validators=[DataRequired(), Length(min=2, max=60)],
    )
    mensaje = TextAreaField(
        "Mensaje",
        validators=[DataRequired(), Length(min=10, max=500)],
    )
    enviar = SubmitField("Enviar")


@app.route("/", methods=["GET", "POST"])
def contacto():
    formulario = ContactoForm()

    if formulario.validate_on_submit():
        nombre = formulario.nombre.data.strip()
        mensaje = formulario.mensaje.data.strip()

        # En una aplicación real, aquí se guardaría o enviaría el mensaje.
        app.logger.info("Mensaje de %s: %s", nombre, mensaje)
        flash(f"Mensaje recibido de {nombre}.")
        return redirect(url_for("contacto"))

    return render_template("contacto.html", formulario=formulario)


if __name__ == "__main__":
    app.run(debug=True)
```


Crea la carpeta `templates` junto a `app.py` y guarda dentro el archivo `contacto.html`:


```html
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Formulario de contacto</title>
</head>
<body>
    <h1>Contacto</h1>

    {% with mensajes = get_flashed_messages() %}
        {% for mensaje in mensajes %}
            <p>{{ mensaje }}</p>
        {% endfor %}
    {% endwith %}

    <form method="post" novalidate>
        {{ formulario.hidden_tag() }}

        <p>
            {{ formulario.nombre.label }}<br>
            {{ formulario.nombre() }}
            {% for error in formulario.nombre.errors %}
                <span>{{ error }}</span>
            {% endfor %}
        </p>

        <p>
            {{ formulario.mensaje.label }}<br>
            {{ formulario.mensaje() }}
            {% for error in formulario.mensaje.errors %}
                <span>{{ error }}</span>
            {% endfor %}
        </p>

        {{ formulario.enviar() }}
    </form>
</body>
</html>
```


`ContactoForm` define los campos y aplica validadores de contenido obligatorio y longitud. `validate_on_submit()` solo devuelve `True` cuando la petición es `POST`, el token CSRF es válido y todos los campos superan sus reglas.


`hidden_tag()` incorpora el token CSRF en el [HTML](https://lineadecodigo.com/html/). Si hay errores, la vista vuelve a renderizar la plantilla y cada lista `errors` muestra los mensajes asociados a su campo. Cuando los datos son válidos, la redirección aplica el patrón POST/Redirect/GET.


La clave incluida sirve únicamente para ejecutar el ejemplo localmente. En un entorno real debe generarse de forma aleatoria, mantenerse fuera del código y cargarse desde una variable de entorno o un gestor de secretos.


---
title: "Sesión"
description: "Comprende cómo funciona la sesión Flask, configura SECRET_KEY, guarda datos de usuario en cookies firmadas y aplica medidas de seguridad con un ejemplo."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["session","cookies","flask"]
slug: flask/sesion
type: category
topic: flask
id: 3e6a9dfb-adca-8007-adc0-d1c945278edc
author: victor_cuervo
---

## ¿Qué es una Sesión Flask?


Una **sesión Flask** es un mecanismo para conservar datos asociados a un usuario entre varias peticiones HTTP. Permite que la aplicación recuerde información como el identificador del usuario autenticado, una preferencia de idioma o el estado temporal de un proceso.


HTTP no mantiene estado por sí mismo: cada petición es independiente. Para relacionarlas, [Flask](https://lineadecodigo.com/flask/) entrega al navegador una cookie de sesión. En la configuración predeterminada, esa cookie contiene los datos serializados de la sesión y una firma criptográfica.


La firma permite detectar modificaciones realizadas por el cliente, pero **no cifra el contenido**. El usuario puede inspeccionar los valores almacenados aunque no pueda alterarlos sin invalidar la firma. Por este motivo, la sesión no debe contener contraseñas, tokens privados ni otra información sensible.


El objeto `session` se utiliza como un diccionario dentro de una petición:


```python
session["usuario_id"] = 42
usuario_id = session.get("usuario_id")
session.pop("usuario_id", None)
```


Para firmar la cookie, [Flask](https://lineadecodigo.com/flask/) necesita una `SECRET_KEY`. Debe ser larga, aleatoria, privada y estable entre reinicios y entre todas las instancias de la aplicación. Si cambia, las cookies de sesión existentes dejan de ser válidas.


## Características de una Sesión Flask

- **Almacenamiento predeterminado en el cliente:** los datos se guardan en una cookie firmada. El servidor no necesita mantener un registro de cada sesión, pero el tamaño disponible es reducido porque los navegadores limitan el tamaño de las cookies.
- **Integridad sin confidencialidad:** la firma protege frente a cambios no autorizados, pero no oculta la información. Solo deben almacenarse datos mínimos y no sensibles.
- **Acceso mediante diccionario:** `session` permite leer, asignar y eliminar valores durante la petición. Los valores deben poder serializarse en el formato utilizado por [Flask](https://lineadecodigo.com/flask/).
- **Sesiones permanentes:** al establecer `session.permanent = True`, la cookie utiliza la duración configurada en `PERMANENT_SESSION_LIFETIME`. Sin esta opción, la cookie suele expirar cuando termina la sesión del navegador.
- **Configuración de la cookie:** `SESSION_COOKIE_SECURE` limita su envío a HTTPS; `SESSION_COOKIE_HTTPONLY` impide el acceso desde JavaScript; y `SESSION_COOKIE_SAMESITE` restringe su envío en peticiones iniciadas desde otros sitios.
- **Detección de cambios:** las asignaciones directas marcan la sesión como modificada. Si se cambia un objeto mutable anidado sin reasignarlo, puede ser necesario establecer `session.modified = True`.
- **Eliminación controlada:** `session.pop()` borra una clave y `session.clear()` elimina todos los datos. Esta última operación es habitual al cerrar sesión.
- **Almacenamiento del lado del servidor:** la implementación predeterminada puede sustituirse mediante una extensión o una interfaz de sesión personalizada cuando se necesitan datos mayores, revocación centralizada o control de sesiones activas.

## ¿Por qué aprender Sesión Flask?


Las sesiones permiten reconocer al mismo usuario durante una navegación compuesta por varias peticiones. Sin ellas, una aplicación no podría recordar de forma directa que el usuario inició sesión, eligió un idioma o completó un paso anterior de un formulario.


Comprender dónde se guardan los datos evita un error frecuente: tratar la cookie firmada como si estuviera cifrada. Guardar información confidencial en ella la expone al usuario. La práctica habitual es almacenar solo un identificador y consultar los datos sensibles en una base de datos protegida.


La configuración de la cookie también forma parte de la seguridad de la aplicación. `Secure` evita que viaje por conexiones HTTP, `HttpOnly` reduce el acceso desde scripts del navegador y `SameSite` ayuda a limitar ciertos envíos entre sitios. Estas medidas deben acompañarse de protección CSRF en las operaciones que modifican datos.


Las sesiones también obligan a definir un ciclo de vida claro: cuándo se crean, cuánto duran, cuándo se renuevan y cómo se invalidan. Una duración excesiva aumenta el riesgo si se roba una cookie; una duración demasiado corta puede interrumpir tareas legítimas del usuario.


Conocer este mecanismo ayuda a decidir cuándo la sesión firmada de [Flask](https://lineadecodigo.com/flask/) es suficiente y cuándo conviene usar almacenamiento en el servidor. Este último permite invalidar sesiones de forma centralizada, pero requiere persistencia, limpieza de registros y una estrategia para varias instancias.


## Ejemplo de una Sesión Flask


El ejemplo implementa un inicio de sesión simplificado, una ruta protegida, preferencias y cierre de sesión. La identificación es deliberadamente básica para centrar el código en el uso de `session`:


```python
from datetime import timedelta
import os

from flask import Flask, request, session

app = Flask(__name__)
app.config.update(
    SECRET_KEY=os.environ["FLASK_SECRET_KEY"],
    PERMANENT_SESSION_LIFETIME=timedelta(minutes=30),
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
    SESSION_COOKIE_SECURE=False,
)


@app.post("/login")
def iniciar_sesion():
    datos = request.get_json(silent=True) or {}
    nombre_usuario = datos.get("usuario", "").strip()

    if not nombre_usuario:
        return {"error": "El usuario es obligatorio"}, 400

    session.clear()
    session["usuario"] = nombre_usuario
    session["tema"] = "claro"
    session.permanent = True

    return {"mensaje": "Sesión iniciada"}


@app.get("/perfil")
def mostrar_perfil():
    nombre_usuario = session.get("usuario")
    if nombre_usuario is None:
        return {"error": "Sesión no iniciada"}, 401

    return {
        "usuario": nombre_usuario,
        "tema": session.get("tema", "claro"),
    }


@app.post("/preferencias")
def actualizar_preferencias():
    if "usuario" not in session:
        return {"error": "Sesión no iniciada"}, 401

    datos = request.get_json(silent=True) or {}
    tema = datos.get("tema")

    if tema not in {"claro", "oscuro"}:
        return {"error": "Tema no válido"}, 400

    session["tema"] = tema
    return {"mensaje": "Preferencia actualizada"}


@app.post("/logout")
def cerrar_sesion():
    session.clear()
    return {"mensaje": "Sesión cerrada"}


if __name__ == "__main__":
    app.run(debug=True)
```


Antes de ejecutar el programa, define una clave secreta distinta para el entorno local:


```bash
export FLASK_SECRET_KEY="una-clave-larga-aleatoria-para-desarrollo"
python app.py
```


En la ruta `/login` se valida el nombre recibido, limpia cualquier estado anterior y crea una sesión permanente de 30 minutos. El navegador debe conservar la cookie devuelta y enviarla en las peticiones posteriores. `/perfil` comprueba la presencia de `usuario`, mientras que `/preferencias` actualiza un dato de la sesión. `/logout` elimina todos los valores.


Para probar el flujo conservando la cookie entre peticiones:


```bash
curl -c cookies.txt \
  -H "Content-Type: application/json" \
  -d '{"usuario":"ana"}' \
  http://127.0.0.1:5000/login

curl -b cookies.txt http://127.0.0.1:5000/perfil

curl -b cookies.txt -c cookies.txt \
  -H "Content-Type: application/json" \
  -d '{"tema":"oscuro"}' \
  http://127.0.0.1:5000/preferencias

curl -b cookies.txt -X POST http://127.0.0.1:5000/logout
```


En producción, `SESSION_COOKIE_SECURE` debe activarse cuando la aplicación utiliza HTTPS y la clave secreta debe proceder de un gestor de secretos o de una variable de entorno protegida. El ejemplo no sustituye una autenticación real: antes de crear la sesión deben verificarse las credenciales del usuario.


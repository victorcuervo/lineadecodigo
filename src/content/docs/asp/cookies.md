---
title: "Cookies"
description: "Aprende a crear, leer y eliminar Cookies ASP con Response.Cookies y Request.Cookies, controlar su caducidad y evitar errores habituales de seguridad."
date: 2026-09-13
updatedDate: 2026-09-13
tags: ["cookie","request","cookies","response","session"]
slug: asp/cookies
type: category
topic: asp
id: 3daa9dfb-adca-80da-b62b-e3a4be58f9c3
author: victor_cuervo
---

## ¿Qué son las cookies ASP?


Las **cookies en ASP** son pequeños datos de texto que una aplicación web solicita guardar en el navegador del usuario. El navegador conserva esos datos y los devuelve al servidor en posteriores peticiones HTTP cuando coinciden el dominio y la ruta definidos para la cookie.


[ASP](https://lineadecodigo.com/asp/) permite escribirlas mediante la colección `Response.Cookies` y leerlas mediante `Request.Cookies`. `Response` representa la respuesta HTTP que el servidor envía al navegador; `Request` contiene los datos de la petición recibida.


Una cookie puede almacenar un valor simple o varios valores asociados a claves. No debe confundirse con una variable de sesión: la cookie reside en el cliente, mientras que el estado de `Session` se mantiene en el servidor y normalmente solo utiliza una cookie para identificar la sesión.


## Características de las cookies ASP

- **Escritura y lectura en momentos distintos.** `Response.Cookies` añade la cookie a la respuesta actual. El nuevo valor estará disponible en `Request.Cookies` cuando el navegador realice una petición posterior; no aparece automáticamente en la petición que ya se está procesando.
- **Duración configurable.** Si no se asigna `Expires`, la cookie suele durar hasta que termina la sesión del navegador. Una fecha futura crea una cookie persistente. Para eliminarla, se envía de nuevo con una fecha de expiración pasada.
- **Ámbito limitado.** La propiedad `Path` determina para qué rutas se enviará la cookie. También puede establecerse `Domain` cuando varias aplicaciones de un dominio necesitan compartirla.
- **Valores simples o con claves.** [ASP](https://lineadecodigo.com/asp/) admite `Response.Cookies("preferencias") = "valor"` y cookies con subclaves, por ejemplo `Response.Cookies("preferencias")("nombre") = "Ana"`.
- **Dependencia de las cabeceras HTTP.** La cookie debe escribirse antes de que ASP envíe las cabeceras de la respuesta. Con el búfer activado, [ASP](https://lineadecodigo.com/asp/) puede acumular la salida antes de enviarla y facilita evitar este problema.
- **Datos controlados por el cliente.** El usuario puede modificar o borrar sus cookies. No deben guardar contraseñas, permisos ni decisiones de autorización. Para datos sensibles conviene almacenar la información en el servidor y usar un identificador aleatorio que se valide en cada petición.
- **Tamaño limitado.** Los navegadores imponen límites por cookie y por dominio; como referencia práctica, un valor no debería acercarse a 4 KB. Las cookies se envían en las peticiones, por lo que almacenar información innecesaria aumenta el tráfico.

## ¿Por qué aprender sobre cookies ASP?


Conocer las cookies permite mantener preferencias entre peticiones sin recurrir siempre a una base de datos o a `Session`. Resultan útiles para recordar el idioma, una opción de visualización, un consentimiento o un identificador temporal.


También ayuda a comprender el ciclo completo de una petición web: [ASP](https://lineadecodigo.com/asp/) crea la cabecera de respuesta, el navegador almacena el valor y lo devuelve después en la cabecera `Cookie`. Esta secuencia explica por qué una cookie recién escrita no puede leerse desde `Request.Cookies` hasta la siguiente petición.


Dominar su caducidad y su ámbito evita problemas frecuentes, como cookies que desaparecen al cerrar el navegador, valores disponibles solo en una ruta o intentos de borrado que no usan el mismo nombre y `Path`. Además, distinguir entre cookies y sesiones permite elegir dónde conservar cada dato y reducir la exposición de información manipulable en el cliente.


## Ejemplo de Cookies ASP


El siguiente script guarda una preferencia durante 30 días, la lee en peticiones posteriores y permite eliminarla. Utiliza una cookie con clave para que el propósito del valor quede explícito.


```javascript
<%
Option Explicit
Response.Buffer = True

Dim accion, nombreUsuario, rutaActual
accion = LCase(Request.QueryString("accion"))
rutaActual = Request.ServerVariables("SCRIPT_NAME")

Select Case accion
    Case "guardar"
        Response.Cookies("preferencias")("nombre") = "Víctor"
        Response.Cookies("preferencias").Expires = DateAdd("d", 30, Now())
        Response.Cookies("preferencias").Path = "/"
        Response.Redirect rutaActual

    Case "borrar"
        Response.Cookies("preferencias")("nombre") = ""
        Response.Cookies("preferencias").Expires = DateAdd("d", -1, Now())
        Response.Cookies("preferencias").Path = "/"
        Response.Redirect rutaActual
End Select

nombreUsuario = Request.Cookies("preferencias")("nombre")

If Len(nombreUsuario) = 0 Then
    Response.Write "No hay una preferencia guardada."
Else
    Response.Write "Preferencia guardada para: " & Server.HTMLEncode(nombreUsuario)
End If
%>
```


Al solicitar la página con `?accion=guardar`, `Response.Cookies` crea la cookie y define su caducidad y su ámbito. `Response.Redirect` inicia una nueva petición; en ella, el navegador ya envía la cookie y `Request.Cookies` puede leerla.


La opción `?accion=borrar` sobrescribe el valor y asigna una fecha pasada. Se conserva el mismo `Path` usado al crearla, porque una cookie con otra ruta se consideraría distinta y no eliminaría la original.


`Server.HTMLEncode` codifica el valor antes de mostrarlo. Aunque el ejemplo guarda un nombre fijo, una aplicación real debe tratar cualquier dato procedente de una cookie como entrada no fiable y validarlo antes de utilizarlo.


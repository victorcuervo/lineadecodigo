---
title: "Visitas de la página"
description: "Cuenta visitas con ASP mediante Application, protege el contador con Lock y Unlock, e identifica las diferencias entre páginas vistas, sesiones y usuarios."
date: 2010-03-22
updatedDate: 2026-09-11
tags: ["application","lock","unlock","session"]
slug: asp/sesion/visitas-de-la-pagina
type: doc
topic: asp
id: 2c8a9dfb-adca-81f7-be17-dbc06d8099e9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/tree/master/usuarios/visitas-de-la-pagina
---

No encontraremos nunca a una persona, que haya publicado una página web en Internet, que no este interesando en saber cuantas visitas recibe. Y es que la creación de cualquier sitio virtual encubre deseos personales, profesionales y en muchos casos monetarios. El número de visitas o “impactos” que recibe nuestra página será un buen medidor de la eficiencia o empatía que esta tiene en la red.


Existen diversas formas de controlar el número de visitas. En este caso vamos a explicar como hacerlo con el objeto `Application` que nos ofrece [ASP](https://lineadecodigo.com/asp/). Esta no es la forma más eficiente de llevar este control, pero es una de las formas y qué menos que explicar su funcionamiento. Otras formas de control de visitas de la página y que, seguro, serán estudio de un artículo en [Linea de Código](https://lineadecodigo.com/) son:

- Control mediante ficheros
- Control mediante bases de datos
- Lectura del log del servidor web

## Visitas de la página con el objeto Application


En [ASP](https://lineadecodigo.com/asp/) clásico podemos crear un contador sencillo mediante el objeto `Application`. Este objeto almacena valores compartidos por todas las sesiones mientras la aplicación permanece activa.


Antes de implementarlo conviene distinguir tres métricas:

- Una página vista se registra cada vez que se solicita una página.
- Una sesión agrupa las peticiones asociadas a una misma sesión de [ASP](https://lineadecodigo.com/asp/).
- Un usuario puede generar varias sesiones y muchas páginas vistas.

Por tanto, incrementar un contador en `Session_OnStart` mide inicios de sesión, no visitas a una página concreta.


## Contar páginas vistas


Para contar las solicitudes recibidas por una página, incrementamos el valor dentro del propio archivo `.asp`.


```vb.net
Dim visitasActuales

Application.Lock

If IsEmpty(Application("visitasPagina")) Then
    Application("visitasPagina") = 0
End If

Application("visitasPagina") = _
    CLng(Application("visitasPagina")) + 1

visitasActuales = Application("visitasPagina")

Application.Unlock
```


El valor se guarda en `Application("visitasPagina")`. La función `CLng()` lo convierte en un entero largo antes de incrementarlo.


## Proteger el contador


Como varias peticiones pueden modificar el contador al mismo tiempo, debemos proteger la operación con `Application.Lock` y `Application.Unlock`.


`Application.Lock` impide temporalmente que otras peticiones modifiquen los valores compartidos. Después de leer y actualizar el contador, `Application.Unlock` libera el bloqueo.


El bloqueo debe mantenerse durante el menor tiempo posible. No debemos realizar consultas, escribir contenido ni ejecutar operaciones lentas mientras esté activo.


## Mostrar el resultado


Una vez liberado el bloqueo, podemos mostrar el valor almacenado en la variable local.


```vb.net
Response.Write("Páginas vistas: " & CStr(visitasActuales))
```


Cada recarga incrementará el contador, al igual que las solicitudes automatizadas o realizadas por robots. Por eso esta cifra representa solicitudes de página y no usuarios únicos.


## Contar sesiones iniciadas


Si queremos contar sesiones en lugar de páginas vistas, podemos utilizar el evento `Session_OnStart` del archivo `global.asa`.


```vb.net
Sub Session_OnStart
    Application.Lock

    If IsEmpty(Application("sesionesIniciadas")) Then
        Application("sesionesIniciadas") = 0
    End If

    Application("sesionesIniciadas") = _
        CLng(Application("sesionesIniciadas")) + 1

    Application.Unlock
End Sub
```


Este evento se ejecuta cuando [ASP](https://lineadecodigo.com/asp/) crea una nueva sesión. Un mismo usuario puede generar más de una si cambia de navegador, elimina las cookies o deja que la sesión caduque.


## Ejemplo completo para una página


El siguiente código incrementa y muestra el número de solicitudes recibidas por una página:


```vb.net
<%
Option Explicit

Dim visitasActuales

Application.Lock

If IsEmpty(Application("visitasPagina")) Then
    Application("visitasPagina") = 0
End If

Application("visitasPagina") = _
    CLng(Application("visitasPagina")) + 1

visitasActuales = Application("visitasPagina")

Application.Unlock

Response.Write("Páginas vistas: " & CStr(visitasActuales))
%>
```


## Limitaciones del contador


Los valores de `Application` se almacenan en memoria. Se perderán cuando la aplicación se reinicie, se recicle el proceso de `IIS` o se detenga el servidor. Tampoco se comparten automáticamente entre varios servidores.


Para obtener estadísticas fiables y persistentes es preferible utilizar una base de datos, los registros del servidor o una plataforma de analítica. El contador con `Application` resulta útil principalmente como ejemplo del funcionamiento de los datos compartidos y de los bloqueos en [ASP](https://lineadecodigo.com/asp/).


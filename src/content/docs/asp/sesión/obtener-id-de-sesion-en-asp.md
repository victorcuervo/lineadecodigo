---
title: "Obtener ID de sesión en ASP"
description: "Obtén el identificador de sesión en ASP mediante Session.SessionID, muéstralo con Response.Write y conoce sus límites para identificar usuarios."
date: 2009-09-21
updatedDate: 2026-09-12
tags: ["session","sessionid","response","write"]
slug: asp/sesion/obtener-id-de-sesion-en-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-8189-9887-cdc497563d94
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/generales/id-sesion.asp
---

En [ASP](https://lineadecodigo.com/asp/) clásico, cada sesión activa dispone de un identificador asignado automáticamente por el servidor. Este valor permite asociar diferentes peticiones con una misma sesión mientras esta permanece vigente.


El identificador se obtiene mediante el objeto `Session` y su propiedad `SessionID`.


## Obtener el identificador de sesión


Para consultar el valor basta con acceder a `Session.SessionID`. Podemos mostrarlo con `Response.Write()` de la siguiente manera:


```vb.net
<%
Option Explicit

Response.Write("ID de sesión: " & Session.SessionID)
%>
```


`Session.SessionID` devuelve un valor numérico que identifica la sesión actual dentro de la aplicación `ASP`.


## Qué representa una sesión


Una sesión no equivale necesariamente a una persona. [ASP](https://lineadecodigo.com/asp/)  clásico suele mantenerla mediante una cookie enviada al navegador. Si las cookies están desactivadas, se eliminan o se utiliza otro navegador o una ventana privada, el servidor puede crear una sesión diferente para la misma persona.


Del mismo modo, varias personas que compartan un navegador podrían utilizar la misma sesión. Por este motivo, `Session.SessionID` no debe emplearse como identificador permanente de una cuenta ni como sustituto de un sistema de autenticación.


## Limitaciones del identificador


El valor de `Session.SessionID` solo es significativo durante la vida de la sesión y dentro del contexto de la aplicación. Puede dejar de ser válido cuando la sesión caduca, se ejecuta `Session.Abandon()`, se reinicia la aplicación o se recicla el proceso de `IIS`.


Además, los identificadores pueden volver a aparecer con el tiempo. No deben almacenarse como claves permanentes para usuarios, pedidos u otros datos que necesiten conservar una identidad estable.


## Uso seguro


Aunque resulta útil para tareas internas de diagnóstico o para relacionar temporalmente peticiones, no conviene mostrar `Session.SessionID` públicamente ni incluirlo en direcciones `URL`. Exponer identificadores de sesión puede facilitar ataques de secuestro o fijación de sesión si se combinan con otros fallos de seguridad.


Para identificar a una persona autenticada, debe utilizarse un identificador propio de la cuenta, almacenado y validado de forma segura. `Session` puede guardar temporalmente ese identificador durante la navegación, pero no sustituye al proceso de autenticación.


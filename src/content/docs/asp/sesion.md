---
title: "Sesión"
description: "Comprende cómo funciona la Sesión ASP, cómo guardar datos por usuario, controlar el timeout, contar visitas y cerrar el estado de sesión correctamente."
date: 2026-09-13
updatedDate: 2026-09-13
tags: ["session","timeout","sessionid","abandon"]
slug: asp/sesion
type: category
topic: asp
id: 3daa9dfb-adca-80eb-98b7-da7a57f4ef15
author: victor_cuervo
---

## ¿Qué es la sesión ASP?


La **Sesión ASP** es el mecanismo de [ASP](https://lineadecodigo.com/asp/) que mantiene datos asociados a un visitante entre distintas solicitudes HTTP. Como HTTP no conserva estado por sí mismo, cada carga de página sería independiente; el objeto `Session` permite recordar valores durante la navegación, por ejemplo un identificador de usuario, sus preferencias o el número de páginas consultadas.


Los datos se almacenan en el servidor como variables de sesión y se consultan mediante una clave: `Session("nombre")`. El navegador recibe una cookie de sesión, normalmente llamada `ASPSESSIONID` seguida de caracteres que identifican la aplicación. Esa cookie contiene el identificador que IIS utiliza para relacionar las siguientes solicitudes con los datos correctos; no almacena directamente las variables de la sesión.


Una sesión pertenece a una aplicación [ASP](https://lineadecodigo.com/asp/) concreta y finaliza cuando supera su periodo de inactividad, cuando el código ejecuta `Session.Abandon` o cuando el proceso que la mantiene se reinicia. Por tanto, no debe considerarse un almacenamiento permanente.


## Características de la sesión ASP

- **Variables por visitante:** cada sesión dispone de su propia colección de valores. `Session("idioma")` puede tener un contenido distinto para cada navegador.
- **Almacenamiento de distintos tipos:** una variable puede contener cadenas, números, fechas y otros valores compatibles con [VBScript](https://lineadecodigo.com/vbscript/). Conviene guardar datos pequeños y simples para no consumir memoria innecesariamente.
- **Tiempo de inactividad:** `Session.Timeout` indica los minutos que IIS mantiene la sesión sin recibir una nueva solicitud. El valor predeterminado habitual es 20 minutos, aunque puede cambiarse en la configuración del servidor o desde [ASP](https://lineadecodigo.com/asp/).
- **Identificador de sesión:** `Session.SessionID` devuelve el identificador asignado por [ASP](https://lineadecodigo.com/asp/). Sirve para distinguir sesiones, pero no demuestra que una persona esté autenticada y no debe utilizarse como contraseña ni como autorización.
- **Limpieza de datos:** `Session.Contents.Remove("clave")` elimina un valor, `Session.Contents.RemoveAll` vacía la colección y `Session.Abandon` termina la sesión cuando finaliza la solicitud actual.
- **Dependencia de cookies:** si el navegador no acepta la cookie de sesión, [ASP](https://lineadecodigo.com/asp/) no puede reconocer de forma estable al visitante entre solicitudes y puede crear una sesión nueva en cada petición.
- **Estado temporal en memoria:** las sesiones suelen mantenerse en el proceso de IIS. Un reinicio o reciclado puede eliminar los datos, por lo que pedidos, perfiles u otra información que deba persistir deben guardarse en una base de datos.
- **Bloqueo de solicitudes relacionadas:** [ASP](https://lineadecodigo.com/asp/) puede serializar peticiones simultáneas que usan la misma sesión. Las páginas que no la necesitan pueden desactivarla con la directiva `EnableSessionState=False` para evitar ese bloqueo y reducir consumo.

## ¿Por qué aprender a manejar la sesión ASP?


La sesión permite crear flujos de varias páginas sin pedir al usuario la misma información en cada paso. Resulta útil para conservar preferencias de idioma o localización, mantener datos temporales de un formulario dividido en etapas y recordar el estado de navegación de una persona autenticada.


También ayuda a interpretar correctamente métricas como las visitas. Una variable de sesión puede contar cuántas páginas abre un navegador durante esa sesión, pero no representa visitas históricas ni usuarios únicos: el contador se pierde al caducar la sesión y una misma persona puede iniciar varias sesiones. Para estadísticas persistentes se necesita registrar los datos en una base de datos o en un sistema de analítica.


Comprender su ciclo de vida evita errores habituales. Los datos pueden desaparecer por timeout o por reciclado de IIS, y almacenar objetos grandes aumenta el uso de memoria. Además, una sesión no sustituye las comprobaciones de seguridad: antes de mostrar una zona restringida, la aplicación debe verificar en cada solicitud que el estado de autenticación esperado sigue presente.


## Ejemplo de Sesión ASP


Este ejemplo utiliza variables de sesión para contar las páginas vistas durante la navegación, recordar cuándo comenzó la sesión y permitir que el visitante la cierre mediante el parámetro `cerrar=1`.


```javascript
<%
Option Explicit

Dim visitasSesion
Dim inicioSesion
Dim cerrarSesion

Session.Timeout = 20
cerrarSesion = (Request.QueryString("cerrar") = "1")

If cerrarSesion Then
    Session.Contents.RemoveAll
    Session.Abandon

    Response.Write "La sesión se ha cerrado."
Else
    If IsEmpty(Session("visitas")) Then
        Session("visitas") = 1
        Session("inicio") = Now()
    Else
        Session("visitas") = CLng(Session("visitas")) + 1
    End If

    visitasSesion = CLng(Session("visitas"))
    inicioSesion = Session("inicio")

    Response.Write "Páginas vistas en esta sesión: " & visitasSesion & "<br>"
    Response.Write "Inicio de la sesión: " & _
        Server.HTMLEncode(CStr(inicioSesion))
End If
%>
```


`Session.Timeout = 20` configura un máximo de 20 minutos de inactividad. Cada solicitud reinicia ese periodo. Si `Session("visitas")` todavía está vacío, el código inicializa el contador y guarda la fecha de inicio; en las siguientes solicitudes incrementa el valor existente.


Al abrir la página con `?cerrar=1`, `RemoveAll` elimina las variables y `Abandon` indica a [ASP](https://lineadecodigo.com/asp/) que descarte la sesión al finalizar la solicitud. En una petición posterior, IIS creará una sesión nueva y el contador volverá a uno.


El contador describe actividad dentro de una sesión concreta. No debe utilizarse como total de visitas del sitio, ya que caduca y depende de que el navegador conserve la cookie de sesión.


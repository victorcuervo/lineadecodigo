---
title: "Inicializar variables de sesión en ASP"
description: "Inicializa variables de sesión en ASP desde global.asa con Session_OnStart, configura Timeout y LCID, y gestiona el cierre mediante Session_OnEnd."
date: 2009-12-02
updatedDate: 2026-09-11
tags: ["session","timeout","lcid","lock"]
slug: asp/sesion/inicializar-variables-de-sesion-en-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-81cf-b793-ea2f5dfc6f2b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/tree/master/generales/inicializar-variables-sesion
---

Cuando un usuario inicia una sesión en una aplicación creada con [ASP](https://lineadecodigo.com/asp/) clásico, puede ser necesario asignar valores predeterminados, configurar el tiempo de inactividad o establecer la configuración regional.


No conviene repetir este código en cada página. [ASP](https://lineadecodigo.com/asp/) proporciona el archivo `global.asa`, donde podemos definir eventos que se ejecutan al iniciar o finalizar una sesión.


## El evento Session_OnStart


El procedimiento `Session_OnStart` se ejecuta cuando el servidor crea una sesión nueva, independientemente de cuál sea la primera página solicitada por el usuario.


En este evento podemos configurar propiedades del objeto `Session` e inicializar variables propias de la aplicación.


```vb.net
Sub Session_OnStart
    Session("autenticado") = False
    Session("preferenciaIdioma") = "es-ES"
    Session.Timeout = 20
    Session.LCID = 1034
End Sub
```


La propiedad `Session.Timeout` indica los minutos de inactividad permitidos antes de que la sesión caduque. Por su parte, `Session.LCID` establece la configuración regional utilizada al formatear fechas, números y monedas. El valor `1034` corresponde a España.


`Session.LCID` no detecta la ubicación del usuario. Para elegir el idioma o la región es preferible utilizar una preferencia guardada por el usuario o, como valor inicial, analizar de forma controlada la cabecera enviada por el navegador.


## El evento Session_OnEnd


El procedimiento `Session_OnEnd` se ejecuta cuando una sesión caduca o se abandona mediante `Session.Abandon`. Puede utilizarse para realizar tareas sencillas de limpieza.


El siguiente ejemplo actualiza un contador compartido almacenado en el objeto `Application`:


```vb.net
Sub Session_OnEnd
    Application.Lock

    If CLng(Application("usuariosActivos")) > 0 Then
        Application("usuariosActivos") = _
            CLng(Application("usuariosActivos")) - 1
    End If

    Application.Unlock
End Sub
```


`Application.Lock` impide que otras peticiones modifiquen simultáneamente los datos compartidos. Después de actualizar el contador, `Application.Unlock` libera el bloqueo.


El evento `Session_OnEnd` no debe utilizarse para operaciones críticas: puede no ejecutarse si el proceso del servidor se detiene, la aplicación se reinicia o se produce un fallo inesperado.


## Ejemplo completo de global.asa


Para mantener un contador aproximado de sesiones activas, primero inicializamos el valor en `Application_OnStart`, lo incrementamos en `Session_OnStart` y lo reducimos en `Session_OnEnd`.


```vb.net
Sub Application_OnStart
    Application("usuariosActivos") = 0
End Sub

Sub Session_OnStart
    Session("autenticado") = False
    Session("preferenciaIdioma") = "es-ES"
    Session.Timeout = 20
    Session.LCID = 1034

    Application.Lock
    Application("usuariosActivos") = _
        CLng(Application("usuariosActivos")) + 1
    Application.Unlock
End Sub

Sub Session_OnEnd
    Application.Lock

    If CLng(Application("usuariosActivos")) > 0 Then
        Application("usuariosActivos") = _
            CLng(Application("usuariosActivos")) - 1
    End If

    Application.Unlock
End Sub
```


El archivo debe guardarse con el nombre `global.asa` en la raíz de la aplicación `ASP`. De esta forma, la inicialización queda centralizada y se ejecuta aunque el usuario acceda directamente a una página interna.


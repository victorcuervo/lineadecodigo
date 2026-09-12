---
title: "Numero de usuarios activos en ASP"
description: "Descubre cómo medir el número de usuarios activos en ASP con global.asa, usando Application.Lock para contar sesiones de forma fiable y optimizada."
date: 2009-09-24
updatedDate: 2026-09-12
tags: ["application","lock","unlock","session"]
slug: asp/sesion/numero-de-usuarios-activos-en-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-81fb-b18c-d23ff069c880
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/tree/master/usuarios/numero-usuarios-activos
---

La idea de este ejemplo es mostrar una estimación del número de sesiones activas simultáneamente en una aplicación web desarrollada con [ASP](https://lineadecodigo.com/asp/) clásico. Para ello utilizaremos el archivo `global.asa` y una variable de `Application` que mantendrá un contador compartido.


Aunque tradicionalmente se hable de «usuarios activos», este contador mide sesiones, no personas únicas. Una misma persona puede iniciar varias sesiones desde distintos navegadores o dispositivos, y varias personas pueden compartir una misma sesión.


## Eventos de sesión en global.asa


El archivo `global.asa` permite definir procedimientos que se ejecutan durante determinados eventos de la aplicación y de las sesiones. Para este ejemplo utilizaremos `Application_OnStart`, `Session_OnStart` y `Session_OnEnd`.


```vb.net
<script language="VBScript" runat="Server">
Sub Application_OnStart
    ' Inicialización de la aplicación
End Sub

Sub Session_OnStart
    ' Inicio de una nueva sesión
End Sub

Sub Session_OnEnd
    ' Finalización de una sesión
End Sub
</script>
```


`Session_OnStart` se ejecuta cuando [ASP](https://lineadecodigo.com/asp/) crea una sesión nueva. `Session_OnEnd` puede ejecutarse cuando esta caduca o finaliza, aunque no está garantizado que se invoque después de un fallo del proceso, un reinicio de la aplicación o determinadas interrupciones del servidor.


## Inicializar el contador


La variable compartida debe inicializarse en `Application_OnStart`, evento que se ejecuta al arrancar la aplicación.


```vb.net
<script language="VBScript" runat="Server">
Sub Application_OnStart
    Application("usuariosActivos") = 0
End Sub
</script>
```


Los valores de `Application` se conservan únicamente en memoria durante la vida de la aplicación. El contador volverá a cero cuando se reinicie la aplicación, se recicle el proceso de `IIS` o se apague el servidor.


## Incrementar y reducir las sesiones activas


Cuando comienza una sesión incrementamos el contador. Cuando termina, lo reducimos sin permitir que el resultado sea negativo.


Como la variable `Application("usuariosActivos")` es compartida por todas las peticiones, la operación de lectura y escritura debe protegerse con `Application.Lock` y `Application.UnLock`.


```vb.net
<script language="VBScript" runat="Server">
Sub Session_OnStart
    Application.Lock
    Application("usuariosActivos") = _
        Application("usuariosActivos") + 1
    Application.UnLock
End Sub

Sub Session_OnEnd
    Application.Lock

    If Application("usuariosActivos") > 0 Then
        Application("usuariosActivos") = _
            Application("usuariosActivos") - 1
    End If

    Application.UnLock
End Sub
</script>
```


El bloqueo debe mantenerse durante el menor tiempo posible para no retrasar otras peticiones que necesiten acceder a valores de `Application`.


## Código completo de global.asa


El contenido completo del archivo `global.asa` sería el siguiente:


```vb.net
<script language="VBScript" runat="Server">
Sub Application_OnStart
    Application("usuariosActivos") = 0
End Sub

Sub Session_OnStart
    Application.Lock
    Application("usuariosActivos") = _
        Application("usuariosActivos") + 1
    Application.UnLock
End Sub

Sub Session_OnEnd
    Application.Lock

    If Application("usuariosActivos") > 0 Then
        Application("usuariosActivos") = _
            Application("usuariosActivos") - 1
    End If

    Application.UnLock
End Sub
</script>
```


## Mostrar el contador


En una página `.asp` podemos copiar el valor a una variable local mientras el contador está bloqueado y mostrarlo después mediante `Response.Write()`.


```vb.net
<%
Option Explicit

Dim sesionesActivas

Application.Lock
sesionesActivas = Application("usuariosActivos")
Application.UnLock

Response.Write("Sesiones activas: " & sesionesActivas)
%>
```


Este resultado debe considerarse aproximado, ya que `Session_OnEnd` no siempre se ejecuta y una sesión puede permanecer abierta hasta que vence `Session.Timeout`. Para obtener métricas fiables y persistentes conviene utilizar registros del servidor, una base de datos o una plataforma especializada en analítica.


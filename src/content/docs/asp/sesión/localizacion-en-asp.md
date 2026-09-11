---
title: "Localización en ASP"
description: "Descubre cómo configurar la Localización en ASP con Session.LCID para mostrar fechas, monedas y textos adaptados a cada región y atraer usuarios."
date: 2010-04-18
updatedDate: 2026-09-11
tags: ["select-case","session","lcid","response","write"]
slug: asp/sesion/localizacion-en-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-8165-8fcf-f793402cf109
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/usuarios/localizacion-en-asp.asp
---

La configuración regional del servidor influye en cómo ASP clásico representa fechas, horas, números y monedas. Si la configuración predeterminada no coincide con la audiencia de la aplicación, podemos establecer una región concreta para cada sesión mediante `Session.LCID`.


Conviene aclarar que `Session.LCID` no detecta la ubicación geográfica del usuario. Su función es definir las reglas regionales que utilizará `ASP` al formatear valores.


## Configurar la región de la sesión


La propiedad `LCID` del objeto `Session` permite asignar un identificador regional. Por ejemplo, el valor `1034` corresponde a español de España.


```vb.net
Session.LCID = 1034
```


Si queremos aplicar esta configuración al comenzar cada sesión, podemos incluirla dentro del evento `Session_OnStart` del fichero `global.asa`.


```vb.net
Sub Session_OnStart
    Session.LCID = 1034
End Sub
```


A partir de ese momento, las funciones de formato de `ASP` utilizarán la configuración regional seleccionada.


## Adaptar la región a cada usuario


En una aplicación con usuarios de distintos países, podemos recuperar la preferencia regional desde su perfil y asignarla al iniciar la sesión.


```vb.net
Sub Session_OnStart
    Session.LCID = 1034
End Sub
```


Los valores deben proceder de una lista controlada por la aplicación. No es recomendable asignar directamente a `Session.LCID` un dato recibido sin validar.


## Comprobar el identificador regional


Podemos utilizar una estructura `Select Case` para actuar según el valor de `Session.LCID`. En este ejemplo mostramos el nombre de la región mediante `Response.Write()`.


```vb.net
Select Case Session.LCID
    Case 1034
        Response.Write("España")
    Case 11274
        Response.Write("Argentina")
    Case 16394
        Response.Write("Bolivia")
    Case 13322
        Response.Write("Chile")
    Case 9226
        Response.Write("Colombia")
    Case 5130
        Response.Write("Costa Rica")
    Case 7178
        Response.Write("República Dominicana")
    Case 12298
        Response.Write("Ecuador")
    Case 4106
        Response.Write("Guatemala")
    Case Else
        Response.Write("Región no contemplada")
End Select
```


La estructura `Select Case` compara el identificador actual con los valores configurados. La rama `Case Else` permite manejar cualquier región que no esté incluida en la lista.


## Aplicar formatos regionales


Después de configurar `Session.LCID`, funciones como `FormatDateTime()` y `FormatCurrency()` generan resultados acordes con la región seleccionada.


```vb.net
Session.LCID = 1034

Response.Write(FormatDateTime(Now(), vbLongDate))
Response.Write("<br>")
Response.Write(FormatCurrency(1234.56))
```


Así podemos mantener una presentación coherente de fechas y monedas para cada usuario sin depender de la configuración regional predeterminada del servidor.


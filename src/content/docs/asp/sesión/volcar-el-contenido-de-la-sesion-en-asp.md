---
title: "Volcar el contenido de la sesión en ASP"
description: "Descubre cómo volcar el contenido de la sesión en ASP de forma segura, detectando arrays y objetos, para depurar rápido y evitar errores sin complicaciones."
date: 2010-01-20
updatedDate: 2026-09-11
tags: ["session","response","write","lbound","ubound"]
slug: asp/sesion/volcar-el-contenido-de-la-sesion-en-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-8174-aa29-e4ac6c4a07a2
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/usuarios/volcar-datos-sesion.asp
---

En [ASP](https://lineadecodigo.com/asp/) clásico, el objeto `Session` permite conservar información entre las peticiones de un mismo usuario. Sus valores permanecen disponibles mientras la sesión siga activa, hasta que caduque por inactividad o se cierre mediante `Session.Abandon`.


Si conocemos la clave de una variable, podemos recuperarla directamente:


```vb.net
Session("nombreVariable")
```


Cuando desconocemos las claves almacenadas, podemos recorrer la colección `Session.Contents` para consultar su contenido.


## Recorrer las variables de sesión


Un bucle `For Each` permite obtener cada clave de `Session.Contents`. Para mostrar valores escalares utilizamos `Response.Write()`, `CStr()` y `Server.HTMLEncode()`.


```vb.net
Dim clave
Dim valor

For Each clave In Session.Contents
    valor = Session.Contents(clave)

    If Not IsArray(valor) And Not IsObject(valor) Then
        Response.Write(Server.HTMLEncode(CStr(clave)) & " = ")
        Response.Write(Server.HTMLEncode(CStr(valor)) & "<br>")
    End If
Next
```


El operador `&` concatena cadenas en [VBScript](https://lineadecodigo.com/vbscript/). `Server.HTMLEncode()` evita que los valores dinámicos se interpreten como [código HTML](https://lineadecodigo.com/html/) al mostrarlos en la página.


## Detectar valores de tipo array


Una variable de sesión también puede contener un `array`. Antes de convertir o mostrar el valor, debemos comprobarlo mediante `IsArray()`.


```vb.net
If IsArray(Session.Contents(clave)) Then
    Response.Write("La variable contiene un array.<br>")
End If
```


Si intentamos convertir directamente un `array` con `CStr()`, se producirá un error de incompatibilidad de tipos.


## Recorrer los elementos del array


Las funciones `LBound()` y `UBound()` devuelven, respectivamente, los índices inferior y superior del `array`. Podemos usarlas para recorrer todos sus elementos.


```vb.net
Dim indice
Dim datos

datos = Session.Contents(clave)

For indice = LBound(datos) To UBound(datos)
    Response.Write(Server.HTMLEncode(CStr(clave)) & "[")
    Response.Write(CStr(indice) & "] = ")
    Response.Write(Server.HTMLEncode(CStr(datos(indice))) & "<br>")
Next
```


Este ejemplo supone que los elementos del `array` pueden convertirse a texto. Si contienen objetos u otros arrays, será necesario tratarlos de forma específica.


## Ejemplo completo


El siguiente código recorre todas las variables de `Session.Contents`, distingue entre valores escalares, arrays y objetos, y muestra la información que puede convertirse a texto.


```vb.net
<%
Dim clave
Dim valor
Dim indice

For Each clave In Session.Contents
    valor = Session.Contents(clave)

    If IsArray(valor) Then
        For indice = LBound(valor) To UBound(valor)
            Response.Write(Server.HTMLEncode(CStr(clave)) & "[")
            Response.Write(CStr(indice) & "] = ")
            Response.Write(Server.HTMLEncode(CStr(valor(indice))) & "<br>")
        Next
    ElseIf IsObject(valor) Then
        Response.Write(Server.HTMLEncode(CStr(clave)) & " = [objeto]<br>")
    Else
        Response.Write(Server.HTMLEncode(CStr(clave)) & " = ")
        Response.Write(Server.HTMLEncode(CStr(valor)) & "<br>")
    End If
Next
%>
```


Volcar el contenido de una sesión puede ser útil durante el desarrollo y la depuración. No conviene utilizar este código en producción si la sesión contiene datos privados, credenciales u otra información sensible.


---
title: "Fechas y monedas multi-país con ASP"
description: "Descubre cómo Fechas y monedas multi‑país con ASP simplifican el formato regional usando Session.LCID, ofreciendo precisión y velocidad para usuarios internacionales."
date: 2010-04-22
updatedDate: 2026-09-12
tags: ["date","formatcurrency","session","lcid"]
slug: asp/fechas/fechas-y-monedas-multi-pais-con-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-816e-afad-d6c086a8b5fa
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/usuarios/fecha-moneda-multi-pais.asp
---

La propiedad `LCID` del objeto `Session` resulta útil en [ASP](https://lineadecodigo.com/asp/) clásico para controlar el formato regional de fechas, horas, números y monedas. Al cambiar `Session.LCID`, las funciones de [VBScript](https://lineadecodigo.com/vbscript/) sensibles a la configuración regional presentan los valores según el país o la región seleccionada.


`Session.LCID` no detecta la ubicación de la persona que visita la página. La aplicación debe elegir el identificador regional a partir de una preferencia explícita, de la configuración de la cuenta o de otra información validada.


## Consultar el LCID actual


Si no se asigna otro valor, la sesión utiliza la configuración regional predeterminada por el entorno del servidor. Podemos consultar el identificador activo de esta forma:


```vb.net
<%
Response.Write("LCID actual: " & Session.LCID)
%>
```


El valor devuelto es un número que representa una configuración regional concreta.


## Funciones para fechas y monedas


La función `Date()` devuelve la fecha actual del servidor. Cuando se convierte en texto, su presentación depende de la configuración regional activa.


Por otro lado, `FormatCurrency()` convierte una cantidad en una cadena con el símbolo monetario, los separadores y el número de decimales correspondientes al valor de `Session.LCID`.


```vb.net
<%
Response.Write("Fecha: " & Date() & "<br>")
Response.Write("Moneda: " & FormatCurrency(50000))
%>
```


`Date()` utiliza la fecha del servidor, no la fecha local del navegador. Si la aplicación trabaja con personas situadas en distintas zonas horarias, deberá gestionar también la zona horaria de forma independiente.


## Identificadores regionales del ejemplo


Para comparar varios formatos utilizaremos estos valores de `LCID`:

- `1034`: español de España.
- `2057`: inglés del Reino Unido.
- `1033`: inglés de Estados Unidos.
- `1036`: francés de Francia.

El identificador regional modifica la forma de presentar los datos, pero no convierte importes entre monedas. Por ejemplo, `FormatCurrency(50000)` mostrará el mismo valor numérico con símbolos y separadores diferentes; no calculará tipos de cambio.


## Cambiar la configuración regional


Podemos asignar un nuevo valor directamente a `Session.LCID` antes de utilizar las funciones de formato:


```vb.net
<%
Session.LCID = 1033

Response.Write("Fecha: " & Date() & "<br>")
Response.Write("Moneda: " & FormatCurrency(50000))
%>
```


El cambio permanece asociado a la sesión hasta que se asigne otro valor o finalice la sesión.


## Ejemplo completo para varios países


El siguiente ejemplo conserva el `LCID` original, muestra la fecha y la moneda con cuatro configuraciones regionales y restaura el valor inicial al terminar:


```vb.net
<%
Option Explicit

Dim lcidOriginal
lcidOriginal = Session.LCID

Sub MostrarFormato(nombre, lcid)
    Session.LCID = lcid

    Response.Write("<h2>" & Server.HTMLEncode(nombre) & _
        " (" & Session.LCID & ")</h2>")
    Response.Write("Fecha: " & Date() & "<br>")
    Response.Write("Moneda: " & FormatCurrency(50000) & "<br>")
End Sub

MostrarFormato "España", 1034
MostrarFormato "Reino Unido", 2057
MostrarFormato "Estados Unidos", 1033
MostrarFormato "Francia", 1036

Session.LCID = lcidOriginal
%>
```


Restaurar `Session.LCID` evita que el ejemplo altere el formato regional utilizado por otras páginas durante el resto de la misma sesión.


En una aplicación real conviene validar cualquier `LCID` recibido desde formularios, cookies o parámetros de la petición y limitarlo a una lista de valores compatibles con el servidor.


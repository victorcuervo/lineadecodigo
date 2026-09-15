---
title: "Básicos"
description: "Comprende ASP Básico: ejecución en servidor, sintaxis VBScript, variables, objetos integrados y un ejemplo práctico con parámetros y Response."
date: 2026-09-13
updatedDate: 2026-09-15
tags: ["variables","response","parametros","hola-mundo","vbscript"]
slug: asp/basicos
type: category
topic: asp
id: 3daa9dfb-adca-80fe-bd07-d9a57132300e
author: victor_cuervo
---

## ¿Qué es ASP Básico?


**ASP (Active Server Pages)** es una tecnología de Microsoft para generar páginas web dinámicas en el servidor. En su versión clásica, conocida como ASP Classic, el servidor web ejecuta código —habitualmente [VBScript](https://lineadecodigo.com/vbscript/)— dentro de un archivo `.asp` y envía al navegador únicamente el resultado generado.


El [código ASP](https://lineadecodigo.com/asp/) se delimita con `<%` y `%>`. Todo lo que aparece entre esos delimitadores se procesa en el servidor; el visitante no recibe el código fuente. Para ejecutarlo se necesita un servidor compatible, normalmente Internet Information Services (IIS) en Windows.


[ASP](https://lineadecodigo.com/asp/) incluye varios **objetos integrados**, disponibles sin crear clases ni instalar bibliotecas. Los más utilizados son `Request`, que obtiene datos enviados por el cliente; `Response`, que construye la respuesta HTTP; `Server`, que ofrece utilidades del servidor; `Session`, que conserva datos de una visita; y `Application`, que comparte datos entre sesiones de la aplicación.


ASP Classic no debe confundirse con ASP.NET. Aunque ambas tecnologías pertenecen al ecosistema de Microsoft, ASP.NET utiliza una plataforma, un modelo de ejecución y APIs diferentes.


## Características de ASP Básico

- **Ejecución en el servidor:** IIS interpreta el [código ASP](https://lineadecodigo.com/asp/) antes de responder a la petición. Esto permite consultar datos, aplicar condiciones y generar contenido distinto para cada solicitud.
- **VBScript como lenguaje habitual:** las variables se declaran con `Dim`, las condiciones usan `If...Then` y la concatenación de cadenas se realiza con `&`. También es posible configurar JScript, aunque [VBScript](https://lineadecodigo.com/vbscript/) es la opción más común en aplicaciones ASP Classic.
- **Integración con HTML y HTTP:** una página `.asp` puede combinar contenido estático con bloques de código. Los objetos `Request` y `Response` permiten leer parámetros, cookies y formularios, además de escribir contenido o configurar cabeceras.
- **Estado opcional:** HTTP no conserva estado entre peticiones. `Session` permite asociar valores a una persona durante su visita, mientras que `Application` mantiene información compartida por toda la aplicación.
- **Acceso a componentes COM:** [ASP](https://lineadecodigo.com/asp/) puede utilizar componentes instalados en Windows, como ADO para trabajar con bases de datos. Estos objetos deben cerrarse y liberarse correctamente para evitar consumo innecesario de recursos.
- **Tipado dinámico:** en [VBScript](https://lineadecodigo.com/vbscript/) una variable puede almacenar distintos tipos de valores. Activar `Option Explicit` obliga a declarar las variables y ayuda a detectar errores de escritura en sus nombres.

## ¿Por qué aprender ASP Básico?


Conocer **ASP Básico** resulta útil para mantener aplicaciones antiguas que todavía funcionan sobre IIS, como intranets, formularios administrativos, catálogos y sitios conectados a [bases de datos mediante ADO.](https://lineadecodigo.com/asp/bases-de-datos/) Permite entender código existente, corregir errores y planificar una migración sin tratar la aplicación como una caja negra.


También ayuda a comprender el ciclo básico de una aplicación web del lado del servidor: recibir una petición, validar parámetros, ejecutar lógica y producir una respuesta HTTP. Ese modelo sigue presente en plataformas actuales, aunque cambien el lenguaje y las herramientas.


Dominar `Request` y `Response` permite resolver tareas concretas: recoger datos de una URL o un formulario, decidir qué contenido devolver, redirigir una petición y establecer el tipo o la codificación de la respuesta. Al manejar datos externos conviene validar su formato y codificar cualquier valor que vaya a insertarse en [HTML](https://lineadecodigo.com/html/) para evitar resultados incorrectos y vulnerabilidades como la inyección de scripts.


## Ejemplo de ASP Básico


El siguiente archivo `saludo.asp` recibe el parámetro `nombre` desde la URL y genera un saludo. Si el parámetro no existe o está vacío, utiliza un valor predeterminado.


```javascript
<%@ Language="VBScript" CodePage="65001" %>
<%
Option Explicit

Dim nombre
Dim mensaje

nombre = Trim(Request.QueryString("nombre"))

If Len(nombre) = 0 Then
    nombre = "visitante"
End If

mensaje = "Hola, " & nombre & ". Esta respuesta se ha generado con ASP."

Response.ContentType = "text/html"
Response.Charset = "utf-8"
Response.Write "<p>" & Server.HTMLEncode(mensaje) & "</p>"
%>
```


Al abrir `saludo.asp?nombre=Laura`, `Request.QueryString("nombre")` recupera el valor `Laura`. La función `Trim` elimina espacios al principio y al final, y `Len` permite comprobar si quedó algún contenido. Si no se proporciona un nombre, la condición asigna `visitante`.


`Response.ContentType` indica que el resultado es HTML y `Response.Charset` establece UTF-8 para representar correctamente los caracteres. Después, `Response.Write` envía el saludo al navegador. `Server.HTMLEncode` convierte los caracteres con significado especial en HTML antes de incorporar el parámetro a la respuesta; esta práctica evita que el valor recibido se interprete como marcado o código ejecutable.


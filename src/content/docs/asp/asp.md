---
title: "ASP"
description: "Comprende qué es ASP clásico, cómo procesa peticiones en IIS y cómo usar Request, Response y Server con un ejemplo práctico y seguro en VBScript."
date: 2026-02-05
updatedDate: 2026-09-14
tags: ["request","response","application","server","ado"]
slug: asp
type: category
topic: asp
id: 2fea9dfb-adca-8059-8de0-ff45c8800071
author: victor_cuervo
---

## ¿Qué es ASP?


**ASP (Active Server Pages)** es una tecnología de Microsoft para generar contenido web dinámico en el servidor. Su versión original, conocida actualmente como **ASP clásico**, se ejecuta en Internet Information Services (IIS) y procesa archivos con extensión `.asp` antes de enviar la respuesta al navegador.


ASP no es por sí mismo un lenguaje de programación. Es un entorno de ejecución que permite incluir scripts, normalmente escritos en [VBScript](https://lineadecodigo.com/vbscript/) o JScript, dentro de una página. Cuando llega una petición HTTP, IIS ejecuta esos scripts, construye la salida y devuelve al cliente únicamente el resultado. El código del servidor no se expone al navegador.


El modelo se apoya en objetos integrados. `Request` permite leer datos enviados por el cliente; `Response` construye la respuesta; `Server` ofrece utilidades del entorno; `Application` comparte datos entre las sesiones de una aplicación; y `Session` conserva información asociada a una persona usuaria durante varias peticiones.


ASP clásico no debe confundirse con ASP.NET. Aunque ambas tecnologías pertenecen al ecosistema de Microsoft, ASP.NET utiliza la plataforma .NET y un modelo de ejecución distinto.


## Características de ASP

- **Ejecución en el servidor:** IIS interpreta el archivo `.asp` y entrega al cliente el contenido generado. Esto permite consultar datos, aplicar reglas de negocio o personalizar una respuesta sin revelar el script.
- **Modelo basado en petición y respuesta:** cada acceso inicia una petición HTTP que puede leerse mediante `Request`; la salida, las cabeceras, las [cookies](https://lineadecodigo.com/asp/cookies/) y los códigos de estado se controlan con `Response`.
- **Objetos integrados:** `Server`, `Application` y `Session` proporcionan servicios habituales sin requerir una biblioteca externa. Conviene limitar el estado compartido en `Application` y `Session` para evitar dependencias difíciles de mantener.
- **Lenguajes de script:** [VBScript](https://lineadecodigo.com/vbscript/) fue la opción más utilizada, aunque ASP clásico también admite JScript si el servidor lo tiene configurado. El lenguaje puede declararse con la directiva `Language`.
- **Acceso a datos mediante ADO:** ActiveX Data Objects permite abrir conexiones y ejecutar [consultas contra bases de datos](https://lineadecodigo.com/asp/bases-de-datos/). Las consultas deben parametrizarse para reducir el riesgo de inyección SQL.
- **Tecnología interpretada y orientada a IIS:** los scripts se procesan en tiempo de ejecución dentro del servidor web de Microsoft. Su despliegue depende de que ASP clásico esté instalado y habilitado en IIS.
- **Plataforma heredada:** continúa presente en aplicaciones existentes, pero para proyectos nuevos suelen preferirse tecnologías con soporte y herramientas actuales. Mantener ASP exige especial atención a validación de entradas, codificación de salida, credenciales y componentes antiguos.

## ¿Por qué aprender ASP?


Conocer ASP resulta útil para mantener, auditar o migrar aplicaciones corporativas que todavía funcionan sobre IIS. Muchos sistemas internos conservan páginas `.asp`, [acceso a datos con ADO](https://lineadecodigo.com/asp/bases-de-datos/) y lógica escrita en [VBScript](https://lineadecodigo.com/vbscript/). Comprender su ciclo de petición y respuesta permite localizar errores, corregir vulnerabilidades y modificar funcionalidades sin tratar el sistema como una caja negra.


También ayuda a entender conceptos transferibles al desarrollo web del lado del servidor: parámetros de URL, formularios, cookies, sesiones, cabeceras HTTP, códigos de estado y generación dinámica de contenido. La relación entre `Request` y `Response` muestra de forma directa cómo una entrada del cliente se transforma en una salida del servidor.


Este conocimiento facilita una migración gradual. Antes de trasladar una aplicación a ASP.NET u otra plataforma, es necesario identificar qué lógica depende de `Session`, `Application`, componentes COM o consultas ADO. Separar esas dependencias reduce el riesgo de cambiar el comportamiento del sistema durante la modernización.


## Ejemplo de ASP


El siguiente archivo `saludo.asp` lee el parámetro `nombre` de la URL y devuelve una respuesta de texto:


```javascript
<%@ Language="VBScript" %>
<%
Option Explicit

Response.ContentType = "text/plain"
Response.Charset = "utf-8"

Dim nombre
nombre = Trim(Request.QueryString("nombre"))

If Len(nombre) = 0 Then
    nombre = "visitante"
End If

Response.Write "Hola, " & Server.HTMLEncode(nombre)
%>
```


Al solicitar `/saludo.asp?nombre=Ana`, el servidor responde con `Hola, Ana`. Si el parámetro no existe o está vacío, devuelve `Hola, visitante`.


`Request.QueryString("nombre")` obtiene el valor enviado en la URL. `Response.ContentType` indica que la salida es texto plano y `Response.Charset` establece UTF-8. Finalmente, `Response.Write` envía el resultado al cliente.


`Server.HTMLEncode` codifica caracteres especiales del valor recibido. Aunque este ejemplo produce texto plano, aplicar codificación de salida es una práctica útil cuando un dato externo puede terminar en una página HTML: evita que el navegador lo interprete como marcado o script. La validación debe adaptarse además al uso real del dato; para [consultas ADO,](https://lineadecodigo.com/asp/bases-de-datos/) por ejemplo, se deben emplear parámetros en lugar de concatenar texto en una [sentencia SQL](https://lineadecodigo.com/sql/).


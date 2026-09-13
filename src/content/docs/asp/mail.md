---
title: "Mail"
description: "ASPEmail permite enviar correos desde ASP mediante SMTP. Aprende a configurar el host, el remitente, el destinatario y el mensaje con un ejemplo práctico."
date: 2026-09-13
updatedDate: 2026-09-13
tags: ["mail","smtp","email","send"]
slug: asp/mail
type: category
topic: asp
id: 3daa9dfb-adca-809e-83ba-c7df30144b9b
author: victor_cuervo
---

## ¿Cómo gestionar Mail en ASP mediante ASPEmail?


ASPEmail es un componente ActiveX para [ASP](https://lineadecodigo.com/asp/) que permite enviar mensajes de correo electrónico desde el servidor web. Fue desarrollado por Persits Software y se utiliza mediante el objeto `Persits.MailSender`.


ASPEmail no forma parte del lenguaje [ASP](https://lineadecodigo.com/asp/). Es un componente instalado y registrado en el servidor que utiliza el protocolo SMTP para entregar el mensaje a un servidor de correo. SMTP es el protocolo que se encarga de transportar los correos desde el servidor que los envía hasta el servidor del destinatario.


El flujo básico consiste en crear el objeto `MailSender`, indicar el servidor SMTP mediante la propiedad `Host`, definir el remitente y añadir una o varias direcciones de destino. Después se establece el asunto y el cuerpo del mensaje, y se llama al método `Send`.


## Características de ASPEmail

- **Integración con ASP:** se crea desde [VBScript](https://lineadecodigo.com/vbscript/) mediante `Server.CreateObject("Persits.MailSender")`, igual que otros componentes del servidor.
- **Configuración del servidor SMTP:** la propiedad `Host` identifica el servidor que procesará el envío. Debe ser un host válido y accesible desde el servidor donde se ejecuta la página [ASP](https://lineadecodigo.com/asp/).
- **Remitente y destinatarios separados:** `From` define la dirección que envía el mensaje y `AddAddress` añade la dirección de la persona destinataria. Se pueden añadir varios destinatarios llamando al método más de una vez.
- **Contenido configurable:** `Subject` establece el asunto y `Body` contiene el texto del mensaje.
- **Envío desde el servidor:** el código se ejecuta en el servidor, por lo que el navegador no necesita conectarse directamente al servicio SMTP.
- **Dependencia del componente:** ASPEmail debe estar instalado y correctamente registrado. Además, el servidor SMTP puede exigir una configuración específica, autenticación o restricciones para aceptar el envío.

## ¿Por qué aprender ASPEmail?


Conocer ASPEmail resulta útil cuando se mantiene una aplicación construida con [ASP](https://lineadecodigo.com/asp/) y se necesita enviar mensajes desde el servidor. Algunos usos habituales son los formularios de contacto, las notificaciones de una aplicación y los mensajes generados a partir de datos almacenados en una base de datos.


El componente evita tener que implementar directamente el diálogo del protocolo SMTP. El [código ASP](https://lineadecodigo.com/asp/) se centra en preparar el mensaje: seleccionar el servidor, indicar las direcciones y definir el contenido. Esto facilita integrar el envío con `Request.Form`, validaciones de formularios y otros objetos habituales de [ASP](https://lineadecodigo.com/asp/).


También ayuda a distinguir dos responsabilidades que suelen confundirse: ASPEmail prepara y envía el mensaje, mientras que el servidor SMTP se encarga de aceptarlo y distribuirlo. Si el correo no llega, esta separación permite revisar de forma más precisa si el problema está en los datos del mensaje, en la conexión con el host o en la configuración del servicio de correo.


## Ejemplo de ASPEmail


El siguiente ejemplo crea un mensaje sencillo y lo envía mediante un servidor SMTP. Los valores del host, el remitente y el destinatario son de ejemplo y deben sustituirse por los datos de la instalación real.


```javascript
<%
Dim Mail

Set Mail = Server.CreateObject("Persits.MailSender")

Mail.Host = "smtp.ejemplo.com"
Mail.From = "web@ejemplo.com"
Mail.AddAddress "destinatario@ejemplo.com", "Persona destinataria"
Mail.Subject = "Prueba de ASPEmail"
Mail.Body = "Este mensaje se ha enviado desde una página ASP."

Mail.Send

Set Mail = Nothing
%>
```


`Server.CreateObject` obtiene una instancia del componente `Persits.MailSender`. La propiedad `Host` indica qué servidor SMTP se utilizará. Después, `From` define el remitente y `AddAddress` añade la dirección de destino junto con un nombre opcional.


`Subject` y `Body` forman el contenido visible del correo. La llamada a `Send` realiza el envío; si la configuración del servidor es incorrecta o el componente no está disponible, la operación producirá un error. Finalmente, `Set Mail = Nothing` libera la referencia al objeto.


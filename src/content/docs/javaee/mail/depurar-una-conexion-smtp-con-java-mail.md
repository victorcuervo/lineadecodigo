---
title: "Depurar una conexión SMTP con Java Mail"
description: "Aprende a depurar una conexión SMTP con Java Mail: activa Session.setDebug(true), interpreta la traza y localiza errores de autenticación y envío."
date: 2011-03-29
updatedDate: 2026-10-31
tags: ["smtp","mail","session"]
slug: javaee/mail/depurar-una-conexion-smtp-con-java-mail
type: doc
topic: javaee
id: 2c8a9dfb-adca-81a3-80f3-d2485940fa2c
author: victor_cuervo
download: http://code.google.com/p/lineadecodigo/source/browse/trunk/lineadecodigo_java/src/com/lineadecodigo/java/mail/DepurarSMTP.java
---

Cuando estamos trabajando con [Java Mail](http://www.manualweb.net/java-ee/introduccion-a-java-mail/), por ejemplo para [realizar envíos de email](http://lineadecodigo.com/java/mandar-emails-con-javamail/), en caso de fallo con el protocolo SMTP puede ser complicado encontrar la solución. Es por ello que es bueno que sepamos cómo depurar una conexión SMTP con [Java Mail](http://www.manualweb.net/java-ee/introduccion-a-java-mail/). En una gestión de errores basada en excepciones, cuando se genera un fallo aparece el código asociado al problema. Por ejemplo, si no se puede verificar el destinatario, la excepción puede ser la siguiente:


```text
javax.mail.SendFailedException: Invalid Addresses;
	nested exception is:
		com.sun.mail.smtp.SMTPAddressFailedException: 550-Verification failed for <yo@lineadecodigo.com>
550-No Such User Here
550 Sender verify failed
```


Pero ¿qué ha pasado hasta entonces? ¿Qué se ha negociado en el protocolo SMTP? Para depurar una conexión SMTP con [Java Mail](http://www.manualweb.net/java-ee/introduccion-a-java-mail/) simplemente tenemos que activar el modo de depuración de la `Session` con el método [`setDebug()`](http://w3api.com/wiki/Java:Session.setDebug()).


## Activar el modo de depuración


La llamada a `setDebug(true)` hace que la sesión escriba en la consola información sobre la conexión y el diálogo SMTP. El ejemplo original utiliza `mailSession`, una instancia de `Session` ya configurada:


```java
mailSession.setDebug(true);
```


Con esto conseguiremos ver en la consola el intercambio del protocolo SMTP. Por ejemplo:


```text
DEBUG: setDebug: JavaMail version 1.4.1
DEBUG: getProvider() returning javax.mail.Provider[TRANSPORT,smtp,com.sun.mail.smtp.SMTPTransport,Sun Microsystems, Inc]
DEBUG SMTP: useEhlo true, useAuth false
DEBUG SMTP: trying to connect to host "mail.lineadecodigo.com", port 25, isSSL false
220-box548.bluehost.com ESMTP Exim 4.69 #1 Sun, 27 Mar 2011 17:35:58 -0600
220-We do not authorize the use of this system to transport unsolicited,
220 and/or bulk e-mail.
DEBUG SMTP: connected to host "mail.lineadecodigo.com", port: 25
EHLO vivaldi
250-box548.bluehost.com Hello vivaldi [89.140.22.132]
250-SIZE 52428800
250-PIPELINING
250-AUTH PLAIN LOGIN
250-STARTTLS
250 HELP
DEBUG SMTP: Found extension "SIZE", arg "52428800"
DEBUG SMTP: Found extension "PIPELINING", arg ""
DEBUG SMTP: Found extension "AUTH", arg "PLAIN LOGIN"
DEBUG SMTP: Found extension "STARTTLS", arg ""
DEBUG SMTP: Found extension "HELP", arg ""
DEBUG SMTP: use8bit false
MAIL FROM:<yo@lineadecodigo.com>
250 OK
RCPT TO:<destinatario@email.com>
550-Verification failed for <yo@lineadecodigo.com>
550-No Such User Here
550 Sender verify failed
```


La traza permite ver hasta dónde llega la comunicación. En este caso, el servidor acepta la conexión y responde al comando `EHLO`, pero rechaza el remitente cuando recibe `RCPT TO`. El código `550` indica un rechazo permanente en esa conversación; el texto concreto del servidor ayuda a determinar si el problema está en la dirección, la política del proveedor o la autenticación del remitente.


## Configuración actual para probar SMTP


El registro original muestra una salida de JavaMail 1.4.1 y utiliza el espacio de nombres `javax.mail`. En proyectos actuales de [Java](https://lineadecodigo.com/java/), JavaMail se conoce como Jakarta Mail y las clases pertenecen normalmente al espacio de nombres `jakarta.mail`. La llamada `Session.setDebug(true)` mantiene la misma finalidad, pero no se deben mezclar dependencias `javax.mail` y `jakarta.mail` en la misma aplicación.


Una configuración habitual para probar el envío mediante el puerto de envío autenticado `587` y `STARTTLS` es la siguiente:


```java
import jakarta.mail.Session;

import java.util.Properties;

Properties props = new Properties();
props.put("mail.smtp.host", "smtp.example.com");
props.put("mail.smtp.port", "587");
props.put("mail.smtp.auth", "true");
props.put("mail.smtp.starttls.enable", "true");
props.put("mail.smtp.starttls.required", "true");

Session mailSession = Session.getInstance(props);
mailSession.setDebug(true);
```


Este fragmento solo crea la sesión y activa la traza; no envía ningún mensaje por sí mismo. El host, el puerto y la exigencia de TLS deben coincidir con la configuración del proveedor de correo. El puerto `25` se utiliza con frecuencia para el tráfico entre servidores y puede estar bloqueado para conexiones salientes. Para el envío desde una aplicación suele utilizarse un puerto de submission como `587` con `STARTTLS`. Algunos proveedores ofrecen el puerto `465`, que usa TLS implícito y requiere una configuración distinta, como `mail.smtp.ssl.enable=true`; no se debe combinar esa modalidad con `STARTTLS` sin seguir la documentación del proveedor.


## Cómo interpretar los errores SMTP


La respuesta que aparece en la depuración combina información de JavaMail o Jakarta Mail con códigos definidos por el servidor SMTP. Algunas pistas habituales son:

- Un `ConnectException`, un tiempo de espera o un error de resolución de nombre suele apuntar al host, el puerto, el DNS o un cortafuegos.
- Una respuesta `530` o `535` suele indicar que falta autenticación, que las credenciales no son válidas o que el servidor exige TLS antes de autenticar.
- Una respuesta `550` durante `MAIL FROM` o `RCPT TO` indica que el servidor ha rechazado el remitente o el destinatario. Conviene revisar las direcciones y la política del proveedor.
- Una respuesta `421` o `454` suele representar un problema temporal, un límite del servicio o un fallo al negociar TLS. El texto de la respuesta y los registros del proveedor son necesarios para confirmar la causa.
- Si el servidor anuncia `STARTTLS` en la respuesta de `EHLO`, la aplicación debe activarlo cuando el proveedor lo exija y debe comprobar el certificado y el nombre del servidor.

La depuración de SMTP resulta especialmente útil porque muestra qué ocurre entre la llamada de envío y la excepción. Conservar la traza, el código de respuesta y la configuración efectiva permite localizar con más precisión los fallos de conexión, autenticación y entrega.


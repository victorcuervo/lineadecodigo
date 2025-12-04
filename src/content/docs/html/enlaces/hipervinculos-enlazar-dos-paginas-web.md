---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCF7AG4T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnUczPiKUgc4rZUC4r5kqGCY2EnpGHf1ggyhkAv%2FhzjAiBzUluTDOfR%2FWXDtuSGjKt5LCc86RJEGCs2b7q0pTtBaCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMKtufkHR79as%2F9gjqKtwD73OZaknmbXT%2B0Wp0HOpVj%2FMfXdZe8SQHPeDQfGZpYRZAlxhz0B82KBqkmm3waiMSyOMH89w96RMw4el03Lg92jlemy%2F3C3qfzVRi3qVW4wYc6J8Ramk41FDNsCbR8HwMZD2NoG%2BC0v0BxKI%2FbjlR6mJ5Wxd2X2p1R7cVBebe0FBKf9d3lBO3m%2FF%2Byx2mwl0VbkivEYiVfNLDtPYA%2FbIg2LM7v1rwerRC4sB1eixJB0h0pNVoGp8P1uFiss9CoiLpVDTgVMzfmrPGyYH3m4z2euF%2BoKXNgExYmifnD7Tt5kHbI4b4Uq62NLTGbWWg%2Fg74K%2Br7sxd2a7v90LFXyHnWA3T26%2FrocJMI9Msw1laIHuLtSskO1lfUdJxUbPt6Hvlnj8UPe6rTlREUMmlYuR2LmMjPwBLMqv6l34UNKfa7Pz49Xm6i7jHU%2BQqddtlsU3XyWZgxiQjU9l563MzQ264xr%2FtQjAKsi1PzR8MFq4XnbxR7MniUsXU%2BmuPoJ5AXUYZFILaGOjWd9UHJeA2KDE08NHfHKULXbx%2F0ZsvuObDGZWFt6s1o8LXZs0r%2BWzgs7lyOtkthfyfY%2FH8dfWd5zAxqH8zIr6cO%2BW43d2C8p%2B20%2Fj9jtZXk4hGDDoSqZBkwk9zGyQY6pgEn2QSdZlnThfQvOrYUG8IuEUZfLBl47eLrMcipCAv4SaW5fWV%2FcqxZ%2Bh%2F7AErPnP9Ap2mZ4v58r3FCky3iTCPqijuincRrlTA42BZ7BUW5V06pSBdPr%2Bvc3w0NxlQ1RujVWw%2FU8cjNfPxxFP9RtGVvG83F2KL4xK3XeHAzY6wRONaMDd98YSCp5zHMMSDwvT8w%2FPfjFVqBkeJpCUJlw6B%2Fs5BUqMde&X-Amz-Signature=c94a0e35ed27fef52d5cab7908e0278ca27a73c2867b228e349acab201141890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


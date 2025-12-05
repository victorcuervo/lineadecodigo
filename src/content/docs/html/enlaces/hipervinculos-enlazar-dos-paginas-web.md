---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPDMIJM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkyU8zhCgeN6pgJZrkiQKhnekU2qEE521gEGbRdqIj%2BAiBKi%2BGwkacgGGoGQPkZxzjvwL3w%2FrCgp%2FX32cgFwRJa8yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMVSm32IZVhbh7wDUrKtwDi4WVCtqiZT8b7lw47Ikvv8e%2Baj7QyC8gEftCqvMvPGngM0AnINImC4%2Fh20DbZb64V3L9l0P%2FWgn9TYJgyKBnBY1csvNKk6jN3vNSoj5HW0vfdCPKmYwhCgr7bQoccaLfc%2Fdxl3%2FtEy%2F7XpiBD7hYjc3CyGA3%2FAorwLaUwaUXiYBBz7zTnS2p7RNXOe%2Fz3necCZbSnBGiTodQgnaV2wiIU7b0%2BsxMb7xLQo9k79SnhBSjTvThFAklfCMQ4xDb7%2FP7n1n2C8wao3pSF5MSC8A6DO0OdaPVeRF%2BNyhgxNtag%2Fdm5%2Fk1w3ClEerX8l1MNW2g%2BUF5ThR%2B01QyzT7X%2BtdAvf5k%2Fv8PE5B8Ru8H%2FyDDljGs%2BBjGsg%2BfaR3QkapOeHXl2PYFQcT0wfg7Lr7%2FWQDIGsCA6Iybfz%2Fdv2cmIu5JPDm2Enz4RJzYJa3mfNLuN9CwCxh%2FtPcw0Gy%2FHS0UqJrn1ppyUbogALzaoypBnXfGtkkF20IjHjqQkW5FjpFSCPgHh1W5gQ4kSaIm3weONBu64sb7XWxneFde4okUU5agyUjIlv1MT1%2FLtuCGdzkHg%2FsKpDhu0IszwqR4T0LGoicXFcsscdWj%2FolY0yof%2FI8ky8lXntvUQL%2BP3YEX400wqa%2FJyQY6pgGn1UuF0o0I1G7jVTjnEBmklkmDPKqW8YHh5YcjaaDNqJl7gbQ2zwv2E6QR4w%2Fehlps2IQJtM9jVrNOrJBaM0ooZpjZzheSkIneNr5f25qPnX6UBhnDH7KtWamZt8VDObiyNKnWTjq76eMXUTw%2F0x6UR9dmlF9FWKeFb%2FS%2FqYDU13joJXsVlYBV07VoJtKSLnqBxmYB%2FSo2hj7amxuY3LA0q936Pes8&X-Amz-Signature=4cee56b1eab3cb4aa5b7d6bec9c8ad8b4535ae106aaf41a20e2173d716a10f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


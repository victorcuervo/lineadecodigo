---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y6ZTF2Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T225757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcB8E%2F9luUlG8ihXLH6lR77Xu4ACK2%2F%2Be%2FmFFaEdR4RAiEAkuvlAd5u8if1jX%2FyZzSGWQxOF5uzyfYdnl3qMEeUuoYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPW9ePL6qMjHcNWKCyrcAxMe%2Fs%2BvJHFNe7cGKKlSINjkOda4uDszHPrI1wuRVqls3Y8rCsUqeV%2BAqa8ak6qWmkYNDPkpD4b9jXcrDKj0U62BTJ7jtuLTFGQk7Fd884J9I2qugeAcBGqmceZ6Vo62lJ9a6EgNiu646Y5QTheUGvvFCqpz4PpozGSSyef9e87uDrp7MOk%2Bjnoq%2BL09sGSmJw2exzktqgkPchQGgNtyoNXw%2FbmJ2CG17NEdc4YpzxHoMyIMmVLJRLQHmoEcAnVHmw05qRFvp%2Fa3%2BqBjSaBlmDPMmmkKhuG5PgkoEm1G56H9FBLQL9OpWXbtycgXdk2RnEK2iMedAEIwbp73PdxU%2BexTuWilagAu43xd%2BBJj18%2B9lxXXoeN8n9QFKF21Skw%2FFLsG9tI2Pr9NcGssIEtpgXThxVB%2FtMnud%2B3C6%2FuA2Qg0iabVc7XwLzobMCyNz2xMmwH%2Bc3jb1856EjUfE4WFMA2bM987oS9ou2xz0BmhC1qWioOeNp0T2sSGnvguNln7pWABqOyU%2Bg8TewICk3pgI2KMTaKSmSSP4BM4pl9NfLsQuYh0jHJdUsUYpktTD%2BnONKewRgAAC1yhE%2BO5FNJ%2BV8J7ArKLQ1DjLnc0Gw3F8xbk2gfGU%2FM%2BXO%2BPaOXmMK7D4skGOqUBBKy%2Bs8hrls%2BJONnx6brsBX7VzwnwHYc%2FB8Pyte704F4hO3aqwA8o8KZCvoX15RYkUDPGu2tTT7MeM0dZOd8utu0zi2BqL6dU4yQIOZ4XDXBGVowygRwwv43Qa%2Bjzl%2BwstGBACmg8MAbVUUg%2FTjHeISpW9I4qc9T3nUjPLhh767sFGYUCTuocvT39vi%2FQ1wGkj2NYcrciePf6WmfijZzR5LUEWLJF&X-Amz-Signature=4c7f44af608d20be4997e52c51bcb9a41253cbac9ea9922f872834d7a3e12f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


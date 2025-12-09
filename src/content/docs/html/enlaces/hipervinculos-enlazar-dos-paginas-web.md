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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDTFOWR7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T195931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOvESp%2FgzgHfani9IghV949RUVXQZ365uGnJGq3jUBTAiBKr6FNliKRfdEB3qpx%2FRe0QSk5CfhsM69IVJ7GF2wApyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGD4YD8As1HFd5kKPKtwDDzCR%2FM%2FnE%2B7gM2BIumIv3Z1WYNh0j0R1%2Fq9Gq%2FYOjUhhXccFx7EgMJfKAjKuSRFyuDMmTekwMx2ebcd1HQto8wz%2FOp7eWQb33GGWhroPVIsSkydRJCZDNfb6wE%2BtB59zXCibIDV18S103b9MU3QYDL32RIQr8lRHTj%2BN7X%2BCnSHOCacg4Kjy8O%2F4u19x0ESot9TXiTi844RIKCseV%2BIJhOQyzqgkdq9UcaO%2BqOyftCsoVX%2BxrK%2F%2FZGqne5M6RZY9%2BanqzKBQn18z5micwxh5ep%2F6szXbxUUTGSuHcLhqKBIwVT%2F9DtzWe6k5krEya%2F03m1CoSd8LE46MuXZoSpvV%2FGMSbt0tYVRnqJu2AF7t49UOLK0XBt0u12JbJja0Lbxgq1Shl3EFdQMcL3Pt2uJylIotgMUKXxaciqtYPJMZFc8cZYeJMMDR%2F91X9UHnBLho1a%2F03Sql3nHp771FxcYqXN6Ur5ZwROaui7j5j56Ir4f3I1ovO4E%2F2MUnbuIej3Sz0JNOtqntvZiDS90Kp69%2B%2FthefJAmOuU2D%2FE8C9%2FkPh3jNNDrnMrw0P3qi0hv9uE%2Bg0hSdbF4NYYNc59ZBk1zrNlkWrAkyF59n8AZFho%2B2sDGMXDHjKNl1BWuB2gw2t7hyQY6pgG4aViMXNjGYFA9brkshWDSpskp4BBT8Uwjx1V%2F1WohLhnxd8zn%2BV%2FL2i43o717B0pSlx2Aypx2iQwYFmo1q9x3Tubiu6U9CJzAAX1hNknEDqXH0NbxafKxw2%2FSOy12mDEmdoX%2Bya4G4qVWKTUHKpWxlo4A89SiO4STa0aInPa%2FOQYemK4Ww1exbbEb1vqO3QH0BljydqJvUwHsfQ10PD7fC1oZ9r8t&X-Amz-Signature=0847fc858525b0ff6a054d71732653d8316cc98cae936c16022b7d3f0ac86a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


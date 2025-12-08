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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q73AMEXW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyn1MFIC%2FZN6OhhklFO3EICx7Cj9XMpKnzKNaLaTVKWAiEAn2z33g5Rqtv%2BRntCe55g80GYhxZkZwOhuenT5iPP5kIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGA6HcYFj9g4cQKryrcA6Hn3kJC4PALW3rLhp9lQ40VZ5N%2F5OwpwO0uGBkpv0IT1hWTINv%2BdozosMxF7GL1HHRNGir6uCGbvbCRrh50wd0bceTet4Lg1GfSBjUWl4xCICUL0aNtpl3l5Fj0RkTG5Rws58mWbpfHgh9B0uJJyoEGwQ3fHEmTC%2FOY1yU4Y2GRksojJBcgoEzKrpTo9aMP03KM9gShvoklsK0M07Y1CNH8d7bGj99j%2B4ecdUeIXj71JIBqAePFF8SY7%2FcM1%2BSt2g6ZPMSDsiLUk2MzVrDSyui6h%2B08Axq1hnsTqldgYuSUUmw7O5NaFH9bnnqy0E6XJ3hw1yZQGXTMNBJbifSb5SlQ3rMGWgONpJAP2dZvKhnu%2FU8w1NUQoXqGuy7mBvx%2BBKkLT2vNnp1gr%2BaT2sM3nEXBrmYVe2Nw33Czq8PahHa8wLzlGnbS8xqYH0iDQGcJ6ROgqTDeMIWPnq0H5fCd%2BvnHQpXt6r%2FURuQPEShKn3nAudTu3dIHGvAis2vtvsdtnRYQ5zwr1E78OaCkKIDMNGhs3VPNR%2Bk1xtCxB8FUgW79CyGK1gxXmoRwMwWs21pjpdZ3si7pkFASxNe5YxNBhRbTmzH2NccdqRjZGWm1uHWZiXzkWkiiPJ8raOocMMTt2ckGOqUBDRtvfnYffm58hLOxOI0kPkQrg9ZS0lWUz8fa%2BFZeI9s2SEbG3nIeb228Nor3feuPifwXwwtu6C4Edx3jNYe4CxFqAc4aLH8Fdy3pB7dfXpNak7oV1psmpTI2fEyKK2DvfnW67hxQROUyI5EpbxCsvEFa3beV9SNbMsx5BRhtE6iDM296wdBwwtPKtos2FdAoyRQn3FtGmo9EnF%2BW%2BuQ36sK%2BSGZd&X-Amz-Signature=935f3842e6ee423af226aa749f02e5f14c9f4a5d9c867e94887ad486eac1fe5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


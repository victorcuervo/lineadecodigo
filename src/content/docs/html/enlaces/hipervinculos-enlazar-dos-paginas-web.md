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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UCS6BXK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG68vq1amzL0I5RrnrpR5pa8uAzHLRPUHxZbVkuEOci2AiA91iuLrMFKzjmOX4wyJW%2FG7s3n7zSQ4JODXRKTcyBfESr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMU%2FocfgRlfJ%2FplD9QKtwDI3qdyqvo1DTsoQzgJ9Tubsmvx82TGySNgs%2FiMT0U7CWh5nqVPwR4L9mKYL4XMLr2EwSpHZmaaCSlPzqaviutss58krd%2B4TyLslgEbLIq9ekQkghe7VF%2FswiJuGJbCbZxHbQaK6iMpBscvGgOnSpHtxYh3qhLnaRHSVqXH8A%2BNvowuP2UuX37qxMKjE4TomBXv3RQdRARunB5z%2FQ%2FrX5%2B69ffxl0p0CB%2BnXKAFnzc%2F%2B44s0%2FGGXdsYjQCkAbqNgArv2IDKbqqtEQ1pB93kIuqj0TdmnC5qV9yAGpxw%2Bq8%2Bz9172aliJcf86z%2BhJV7tcdRgNFxqq4U2occOKTaFQb%2Fx3S9YATfrnjf3a6f%2FbpxN596hw8fZr%2FbmklUwRNTWzu06FKn4IT0iXSqtPennpbfdTO5PBFQzRu8KArI9WQJdW%2BDyoSLLqkVqUmC1%2B8KqZWICqft9HbAQra2o%2B7RV7ASM2YToQuc8R9GdG9vmaCFmHG5ktJf5rOB7gWINcLBoL5WJ%2FoLGNL47AC4FBnw6pXwqnLNX%2FsK4NbGaIPH%2FpEzGY177%2BRfTshZxEg4m15bUlzEH%2BORCiKhCXhNW33%2BG4aQikPZcjE4E0zVHb1wFTR5ImMJQSz0NCMZGSjtq%2Bcwqv3OyQY6pgH7Hd%2FBWxWi4cWfnZWWvsLvKE95RvMOAAJB3IaVktGmI4T65MEQwfolEAbJDMoaEs%2B%2F6ljVediz17Nj1cY%2BoD%2BiZ%2BbL8Lxfx3ctZIxF%2BnTsa8lyJZPPBCVqhx2hW8GVLbp3ffRd7Q61%2BgI7SmtblJT9SJt1r96B7rxgBxNTfY%2Bps837afkPqLxg9L9FB7GQtYHd4idTQv58IBo%2FZy%2F1ofe3ovY9N5xD&X-Amz-Signature=03c2a9fcdded93f00186c3dfcf751650df74c311dc40f5eee95efdb4f029d993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


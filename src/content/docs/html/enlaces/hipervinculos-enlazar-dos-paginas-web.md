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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QE2K4N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T180552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6n8JXNoIs5Z20zcTcJgQK3uD1Zy3zW0d5ht9hBNlWBAiEAyPtNRmluk6%2BDFUaa5CHFO6Akz%2B7BQlXk4wWZLz8uv0oqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNClh0%2BO%2FLPctWv2SrcA%2Fd90gfwJLZQXuqI2fdBRAZsx87YeXEfdfsOWTn0uxyKrB3I%2F3z5t8dJQ5WbKpKhxDb0sZw%2FCvoM91Xd1jYe%2BUY5%2BMWXUMln06fpYPh79ShABpNnMxQcjTzBSoyGhe0lEGoLNPMaoT4Gr6gsDpjap6VJFrq2uRqw2HYVylHWeNGlGdn9xxbkjZvqeoKg4Gt34IpcHJhXpmD3%2FyJzrrXvITtQ1kvuhYHxkVjlb6rU7JeCHf104i4mJr%2FMzhIERidQfFXceaGcWirqFomI1HUEhwaYgBaZFEfZrzDlmoaQHm1TB2I%2BfPvFAIPmjApomQFWHb5SOdDYTSuOiybrjM67LjOVUDyDTZJ4655qz6nlb34P6RIUC1NOyQ3qaXkf6xgCgKwLNarvIMiP0m8%2FoDbKtzT%2BnqOl3%2FtPGgzIZrIiIR7TVUuGhPjLdYRnWx2YJD2W93GYbVK%2BkbKFisf6kB%2B7fP2GO4Yg6m53q%2F2ZKQMc8hzC5IO2QT2P8NTYUgdxhTnEROfbPwBEWvhnDUfBR1ZPBXwQIsEr%2F53Zw%2FMMcsVFXKb1idGmD%2Ffcde3WomlU99XYFk7oCrGGO3XoHIYinMqM1L%2FRUuTBq4L46w25MKUyzqesLSUpu%2FhNxi4Ik3rQMKO94ckGOqUBVv1K2e%2BVuJr6IxWVx47GtIk%2BIaE3ZRVNABDZMgEHTAWPDScpkQA8U502eE8mdg5GJV2fLEB3mHr9w3facpOS14De69uL%2BokAb4EGqWD7GiPgI6fHFBlj0v5wYwDN1Hid1A1Ytq6QhBNsfke%2FknlmGc1QPm6sxF8vzepFdGz%2BS%2BA0fQfFd8sCRGllfqZxcUAeumgTQx3J8hjelk%2BJCgb6l67gZ1y9&X-Amz-Signature=055b2d50a2d6052796cf4817cf076873dac680861e76c63d29803b344f13a04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


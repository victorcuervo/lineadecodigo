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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRGYXIAA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T181542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBESpZPtGIvOyYkcu12RRmjFMpaGN0HJ5MdAyOEoNMt7AiBV4aVtAq1J1DttgQLNftjv8DoRdjzSn5JkPv8Qj4Nv8CqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjoYd%2F3rrz6LyDmSGKtwDi1ApkXXTdAYW2D8ZLlNZYzeLXY%2Bdhxy%2FfOb76JjdH0qln4xgpgPU2i6e4EChBIyFUEkPkVtCX%2BQ6ZKzs9gLv9GlQzWJseboEU3U62K8oMDymqlONb8bGI5m03YQh%2FpDDIG8Y6xpn1Oo4%2Bxrle1nZblyPh6v51uY2F6UDadxcNaQMNDmplabw2ATx5UlA%2FKk9ejm5OhIniyq4cn49V7l%2BCQUmnovhd2wtucxzDaWOxsYvx3655D9zrhLgGzYh6QFZO1CbFSJMdl9FOw%2FQBURURFhxQK6hmjiVL2qg12bk8LOC2Iz6zNfaOqsKmczcMFJWSdxVw05blcT6sgegFbRh%2BzQqQ9S%2B5GQ%2FwFeP9PsvROOQ4Ex2uWe8WKT2dnMtInHXuUZaN2CiRtXe4VnywgXnOwC8rQm3LcRMVua13sH1%2F0AIdKSyqNiQRH553pRPOfkjZ7TODK3VGm8wJuVpVlOpz8WxLrOo%2F669D5kex%2BQSw5kzW8GT2M6SKTa9E6kcmUM%2BjyDUKVyoRgHQlZDvkDkboG9P4QcB7WT3gvxmngYSKRZoyEpv0fG1p9Fykc0kB7QGv7EgHJYk1A8i4YJ6gSGBtjqVwHxsDJs02a3v5kgpTvo%2FavQKynrfwJYqjyUwvL3hyQY6pgGG0w4J2n8Q1JLXqaWdm8NdYQn%2ByVpF9BZlxkXLXmZaHwJoyTh70Y2gPJHWs9sS23jIwHKrenQxMEbPa4PVkTbGw0rum7qo3%2F9S%2BkeNKTevLlv7AkiUBKdbPA6QXpWnPgOykIO6cMk%2BgrAbXz5lV4gOzDsd5jaWZcsFei2di2f0dISLVV3GYkCkCGHiNmspxqMgm5i5cw5lQEBfX8tZ3f95cspZ%2FDkj&X-Amz-Signature=8139c16d5f989add38045a8a9e3c16d732091b5268e424ebe64ec31a0bdd47ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


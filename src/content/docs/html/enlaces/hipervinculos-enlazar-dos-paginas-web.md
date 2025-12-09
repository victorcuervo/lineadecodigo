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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIAJWAX3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6a442nu5g3ubhJtIhaYE6W9FXjoamz4fVPcJWbUIubwIhAN1Hd%2B%2BYglPBc0nXi7NLBQTNzoTf5vKpzh7OyT0nkpHuKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQm4%2BTmaqC2Ne9i4sq3AOBIX9qTxDiFPLmF2nBB5iW5WAtCN0MmcjHV36zp2aqpHzo4lJcN6U1DM9wNOUkHjQCS%2Fai3Vl%2FsM2DcyzblC%2B1ORFgD355QtG2JvHgCw0rdlUvhRlGIFr%2BgN1%2BPSsggJ9lvUL0WG23c7wmUuSse9u0SXIdYsXuuA%2BZ1CBQnkVQLqN3RBDUlgM9aq8g5dPYXqR4Q96GLwpFwQniFOpZN3a558IDLaICOqWyFOpz%2Fea4c9KWPil0lvRDcpa2Mljdox4iXzhyav8dLoN%2BXmWrubUafsYqblE6Ljmz5cKGjPJgCD4t9SyD7Zrk8%2B8jvexqWZl3OD9dHUUmiFYgcTEwY%2FeidkEYax9rfjgYM9%2FS8nmoSFaqndgL1n0cLLG4QhWjF6%2FqsmhK7zfc7iDhVZHoFtPPmCIdRV%2BWOy6lHkbOXBJRzfdihVOCOHAsWTKhDxRYODyYQHSERNGgC7JhtutX83GUsrUNfy0JAmWg3tz4PWt6zzMobO68Z61Aj797UrmnwcVoxIWUyBubcFReVf9AEZqNq2%2FwTfXNsLoxJNVzh4T6KHFH4LuL0sRkREa1coMb3pFf0mHgi0omX24bDGxVa%2BYzaEVWvATU0DBQ2Cgiz%2Ff4hUliVKpzuoAJQW3%2FXzCHw93JBjqkAa2%2Fn4c3%2BEFFxT8DndZxlZcbKFrvjU6c20OxYo2G453pyMwg6R1AUBShaal0IZUkR2a%2FBxAAAHtgW0YwdY2BeJkUzTUZp%2Bou0z%2FY45HZ8PZjDKKDDk8wNwcsSQ8MrmUmXoMCQUyzl5EVqkgI9FVSFVZgQOEG0urnbSE5pKu15A0Uk7zcFExv9JWkaFlEgdGNGu4NA5af4P5QMvd3DgO9Yy4dDDL%2F&X-Amz-Signature=2fa55a5ea209df8c0e2d9737d83cee299bf5b7bfa273d0e743d2ddd906774d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


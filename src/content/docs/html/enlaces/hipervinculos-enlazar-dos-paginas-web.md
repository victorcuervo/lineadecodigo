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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YBUSN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEO5Ln18edWJezp2kz8cy6iRo5GsmJvoA2OxUbO%2FlhQcAiEAzom%2BPo7HeNt5LJXFjFG7RHZQiPhMD0l5N9mEMk3PGwkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJhCOcLC%2B6GpKAfwvCrcA2RzCH6UMqqhDkJvkbqmIZg3L7M3%2BJWMpLkwL3hA2HxVCpNfIM7JG8alywtju%2FeWkRAlo6UVqZPReuSE8uyrUW4tdq2ZJOZRc2M3kduCj%2B4LoxNoQyg3Fx7QdozlWfv0Dx3lWOMRKKWzf4IJxKGqHC24rUZ4Yq8zsULNoUjXwVhR6kc%2BxEESLvxwHWF9TCJ%2BX2TRNO20%2F35yIHgu44RreWhF%2Bc7Z2Av37dZI%2BDzUYlWcLK%2B1wnZ4J%2B2Fh6dAa%2FFjHVIUInTgLxNX7BvHvcqeV79cMz4%2Bqk8spiamu7o6CG6TxNALeVjSmi56eoyS6DZllAdJAa69E0ZgrATKO5mWEf1Igj40RU6I%2BwvwC6Q082S3iGlyZjJdbZaYBuL8ypB3X8NeSNkWPSwULvYLwGokDLRZ2Kqq8fR4J51WGUpsS2HTifu%2FJC3EOEgYk8Nrw0p0vpsRyVNgVCBuX6ZXt%2BHWMejqUTptk8G4Wir4w8qzlQda5HNlNCowLk2k9ea5tNQ3QBoCGA%2Fg40hMKjC6CKTyrwSQtQ07WIo45%2FW32EzA4kZpm2HpdKjQbhhFRGGmfaWIdiSlj0vIZGg%2FTE7cwusPmelMxRLePkzJFNyGq7Dhc5ADNF3I0bDyGm631AEyMIDwzMkGOqUBGxngliZGsKxxiaaoOCXKP%2BIh6B1auUFb9KRyjB3kJPXF4U4Xu0v7J1cgmi%2FqV2Wl8wznxOwhwKUYWttdWo32ERZTPhYtB%2FhkYJ%2B6gVqbHwRYU6MS7efG2JwxlWXOTlSOS2z1ezgRkk7Bj3PdIvfhynA%2FnSuBaL%2BdO43Soe02yl8mLprIYMisazPjSIV0avhuDjR1FW57%2FL%2Bk9OPP7oSEt5IKap7N&X-Amz-Signature=1a79053b8772ee013f9e0e1fdbcaeb14a83996f401f69f0189173aa5221dd9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


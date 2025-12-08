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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AVI322%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5t6ahMbL59UjpgKyQMjmumP5LS6JlP0VI9ZL9Gk50AwIhAOjqRIYiVOc%2BeX7gJ5n0CHHNT2YmHEgionqVd2dEdn%2BgKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0R00p8PICyfoGTtIq3AMbWNRpZo4IdzqR2kRjagN%2Bld3HiiM06ZiXznaLAjudNVuRnx3nxboQlsrPuRweXyfuH763OgQxgQ7eMybahJqMnF%2F3wHfrmKCKJFr4Q9P2auuYKq3TvcYvwN64bv9zC1Ll6JD1c0EojPikQarOT7uQYiGZV2HpAzhdiIpRRhflRbU3cMUBXlvlc1v8GRIvsk%2BC0MKXzDItPAutLLvgVTxhqmNx8REupXQADxUIzRdKI5z6wEfhhEBKfxni%2FDteN9Dbiq2g4J7%2BUv4n%2BxegFz2qVl6YmtbyUKMnjrj96ansQ8LxueALLBXm1KXnmkj3FSGctAJ1EhyK%2B7VvgpWtgsqvV2r12i8LVAQEL%2FKUeC7ZRggu68rOzA6l%2F60s09EzcOR852UNew%2FjLEh6f%2FNzsPkFg%2BG0vT7GgbxtqGGSqObQ%2FvIAS5y2hX2Vyzq6ma7L7sO%2FvqlzjBN6myNUi1UmqlN2uArQGY4tJWsw3%2Bc%2Be11XNfHeD%2Fs2vqmjWpGm9L5WeaU9dIT3%2Fbgb1H%2FDTE%2BskItvgIyEYPjrORQtTX96hJ3FvCzPHCLxbPSAl4K%2BhfMn8pr1IAvPzNoGxhygiT76IkwGCrBQdRAxsDnloIeBv%2BUvMqPqhVBS0A1rGLyHpzC6odjJBjqkATJBqgbgePGlskQo6g1yiGPeLZ8FaazTcblse9o2GWWE%2BOymk6DsFkhgPfBuzjm36U17Ur05kGu3OoXBrJfhzjvmwQ9h7rBUjJ17m1eyldO85avOrT5Oxs5ixe7WVLstPebl0jUmEtSEPy9EYX5iKRNQo9brTW%2BNSUaiOEpeRNeQZ6OZVX0u1Cbf6TzSlyh9MKvAw%2B6dIP2GnPUGSHmQq2Twa9tb&X-Amz-Signature=e272315e7ea886afa5a680e612a9bb25301a623e49947212cca54c01a05c11ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


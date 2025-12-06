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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJZBCLQ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbwfFe8bO2TeHjH5778ToN3OCrSs2cfKrBONiIdlrsIAiAQFAUy0PvVgTb4zoovQF2d8lyEzeTZFpMVBt8DfZX9Iyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYIbkw2x%2F%2F8dHIr5GKtwDs3xvb6LJjkz%2Fvf6%2Fo3X4%2FLQi%2FCX1696LDVfTEgTWFSks659n4zxiPflqXuOIGBfs9puEH2dhUl0H1%2FzwtP37ZgKDDdf04Zxo9wMADumf8rd4KzqfsTZn2fCRuPeDW4Z6Cs5ffgsHDiO5fL3aed6roQE%2FxdzoZr2k19OLSQpNBEPiGVctdo32TF6rKLf7SaWiSOYejoOl3mlmQ1mXySaW%2Fww2tnQo%2FMejPCc5NWKBOBlTKhqdycMf%2Bi5hh5jqUgNSjJ9Gq0WZ%2Bra2IcpTZRSh8StiGU16w4oVLggN1vA5VH68oGKb1LAGVkHjNG420laG9CsBmoEqqfkroB8ct3wceM03Iu1M75O8dkh%2FN5u%2F8%2BO20PkE6Y%2FrYdBUi%2FyahbxQb1xFgQp3FVDbRujnR3LoD33oMYKoadUfhoWxA95oSw64c43ODkltdQSdOiB9NVBSnz2U%2FD9WKDfcocx8AWOFCqWPoUK8RI5zw9GxlESYEylZocH6m5s4gaErNt%2Fg9jR%2FCubdv%2FvqvYqKBdtENCpO7fY%2BC7QUhRBiUs9HLnbT8MJOf2eBLpwpuQPKXdVsiVF0Yzcl9eBaSJdJ%2Fmu%2B2rSVZCdtCrH6qTXw2J1R6xI6ZY42c1sBLj4UntgdvqYw7qbQyQY6pgHVB5ewGhOy1Aky92h4MlZ4mOkJpOotTq0hFW55GFc9NUFXZlN3Ci8fvhVLiZdr5hK7liy8OOY%2F0Cocwbe23oBqSNRcvewfALY7a7%2BgMriCp04nwtyYsGdsYWeQSNEW2T%2Fj2I3o9anxCcAVyiXdyi0l%2F77hyhk8abrzOlSIdcc0Ot2KKYDo8z2xdzIxE1RTtSxOnZHi3oRg3Zd4pW7zc3wWIB6ya5Uo&X-Amz-Signature=a0c982f6fbc805c4dcb0ee127956db71fc8ebc3d50c3a1f1e9ea6492d04d7c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


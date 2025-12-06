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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXVARP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSoblDnZ707cBFNjgCfUa7AGK9ngLQAbLPhESI25yR%2BgIhAPyTAnSHu34mw05XLE503ZLYK4UseSahi65X8lL0Z%2BueKv8DCG8QABoMNjM3NDIzMTgzODA1Igw0cqQNniqUvYBCLKMq3ANmUjg9f4WPFAncedBxiwTfUXViHI1aTu6qOEF2ULhGl3NclO%2FmSnfcnrHuGTL8ruFXlWre4ttomrs%2BUU1KH69l6xTTGQb40LTUmKBO%2FFDse8EambsFsfhAqF1ORPpNeB7hJSihKv7oEsUlCb0S9VdPX%2BclqAYG61%2Bx%2F7Cc52KPoeoqGeral%2BaTDKQvFUhUNeaTiudcDPPFRziSkW25aApzb4At0xyBCq%2Fymq%2F4U%2BKO41HNf3wrCb7RIGNLS1W3Imxa849jFH8PPFbJG58vAo%2FqwjPD1aqa%2F6VIBLTqwfF%2FKvUXRtOZWMh3bWkhOE3XMlfL6NSkh12y8W527wnNYZ8LwpDoT3bscQ4F4Q7jabwHZH2%2F%2B%2BB1%2BFUXABuhXVU9u5H5bLgBqqpjRTyXL3YI2Q10Lex1BIlELucuqv0wx5slb52tCNrXL8MXjJf5RDq8NdA1Njt%2BUWCuEseC7MoqKHKvsHIFNLelHGfVRGJGjFZSEWLmJ8Cn5D8BFGpdgxrC7V9IsDEoauPUQm8zFGS376zGUhyRQkN02CIbgl7dNZSAE%2BljjkMsCEhA4hPG5fwbNdZpqYrCvEA5xb%2BJ2un55Eww53aG%2F29ZlIvE3sUwZ%2Fs6uzNjZKjNSrtCOBmRHTDW%2Fc7JBjqkAZjb%2BuMId%2F55G3toGkyB94SwhrHmP9ppW7Mh%2FFqkjc%2BZW4j988Lg%2B3FA%2F6%2F9o8fMndnENE6aeHACGAZIx40vKUKRxV5fV8gEBQyOQe3h5w5zVazMgt%2FxpTOtuCN2FxwgPHSyR4T6J9a7mZ4uFlzQ%2BdkPk3tgXmzx1m0EjgqpMk2kVSgaocCTsU9Ab3VDnBjMBg71XHmaGmZh6GyT40qKJ6s46h6L&X-Amz-Signature=a31561b4a0a5dfe3cefc261b1a2970aef28faf4458825fff7dcd24131a70e93c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


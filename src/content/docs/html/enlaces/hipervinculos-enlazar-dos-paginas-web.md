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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3SOJZL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJcaGTlsIxL5TO9OEidwZPSZ9J8s97q2sB7abuabw9VAiBiaRHxGp2HSfjVhOmkOZNFEg5ZPqZMe1ZIqJmmh0PnTyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM%2BqBSX3XHI0SDB6AKKtwDLdKrKwqs9kwXMqcZTNzO1HnlhsH23hH%2FErC4vlmLuDCpYcyKIhzjlIjgQyFNPukciPp9u9yTcacsZO0gObyMGrMuorpXa3y1yE4h6%2FMa1PxM89BslpvMk8Da4tQ%2FW%2B1suQq7yn8pfjd9F4SfROv0eM4szbPadUcKUKESJ%2BTzGJJ4lcbuuvzVrgasPdC6VHMGZB45hSLeTkfn%2BBYf3dnDRtSOXIPTrPqI8yl2LPyWdJLEfOiFXOdpa52vHIii1ThP9XOOUaH4SpPzUm3xCg6lqghSg9g5BDG%2FsdJ1W9f5d3Ur6GRv1HB8TTQhetopaQI7qFGGKe34RNVdx6qycy0oprTEhxXSClIdlc0kLA3jg3s9hkLkb62ifQr3Vm643GdQnbs6E4YtDXjMji3uCVGpFlCTAXmYKQq3hWAkNzRuAFnyD8C4WjU7UR8r9NyD2%2B6q4fyJN5gp%2B%2B0%2BKZywLojkN3dPCynqW1f294VZJzAM2dpNPpTeMC1z5H%2Bsy9Ofdjboa6dKjlfL007o8JRK5WgQwsUDkfnIfqT22xxPAu6DXDGzwK87J%2FTED2KsEdolcV0qq8f%2BzXXV7Tgw%2F%2FI%2FK09kpMVmzL7tKwb%2BAC72m2mHWxWWNWgbmO4jYk8X%2BQcw7ozIyQY6pgHKxHkRjzoUC2Eyd90X8oxPaXBSTim5PDwNKdEM8MbRu%2BEmmopZ8KMSUoeH7pEiXTN2I%2F9Z%2FFVOG4tUREXOG9NkuioIrZjmB4dg%2FHS%2FQtUGWHmOgdEKCvgl2lsrBCvXyW7Ha%2BGSfflN6tu9pryrgjLw7XM7%2B4761ehrnm7ni4WnLRkX8dYfRN2D0JrT6WwaGKpR5IZqiisTDLObxPdF6qnnsmp%2FADoK&X-Amz-Signature=b60b49b210a221a2d08496a1bb419fda6f926b3a02b562ca825e516214ca0bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


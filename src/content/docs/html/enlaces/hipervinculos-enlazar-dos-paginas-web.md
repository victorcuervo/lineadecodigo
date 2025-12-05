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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EK63SGU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgDTBkAnHozevy7FM0x4xJFiUh88nB4%2Bm%2BfHYcgO6R6AiBqv0HnSP9oKZ4YaYuhQsQVD9mFOFoUiRjy3b%2BmymCJDyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMqSP3niMmYDyYT2oqKtwD5QImnq8xk4zcJasnk1ZgbV5B%2BP2Iq8INXaylVXHNBh4kMCRjBULHRgXOwbJXyMoFphQJj%2BKslRMAqVIwOdMnz%2FuDRA4BINTvQGqJZMxI%2BmpbiafmhjFRcaJSdKwY6JQfBxVuMtUCITlHbggbgwYDTB%2F59M99qPkhfq0lc%2FB5i1BjYRgAPEN8Dnx3EgkICgPhi5o%2Bm2vq6Oxz7OYGjMWRagFaQyiWKPvLd9ByzcwHvumKrYxYWDoejwgx53%2B9TLSche44xyu9nZqqAzaLyZqXYCIFCnROOYaHLy%2FIoz1UH21tKj5L0keN76GBMxOGI37Jb0GTZ6%2BxnNXFm6fw%2FesM6FMVFqaPORzNB3KSHnxF0nHco%2BSouaJ%2Fc2etdZEEIO6wg4sUiy63iibspGOeH%2BCTraU5P%2F6U47tgIkitQw%2FZORv%2BdSAhpttDgoUSCTnEruZXKUVEUoXw71yT3m9tCzvwEAY%2Ft1ie9bPyigI%2Bxeds%2B1502XtshM9al%2FPg5DPGMQrrCIgaMECqhDz1%2FEbYjyYZyssisDrCR0qaEUwuXWLzs9sycYMc%2Byg3oCJTD1PnJ9fCi71r6HOgQMkry2IcC7TXZ2gU6eTucbbFh%2BalzKN1o4hPrvMO3MDrQiuPGKMwzqrJyQY6pgGXJrewofovANulop2a4vZv8LddWmRDy%2F4i9Uo6B%2BXF5CyDz4b51ghESA6kd16CvFNcOsW5V%2BbswDTop8UwtjyL5E9YVvKTamY0%2Bmx9d84ct3ISL9qT8%2Btwg8Cd%2B7uU7dYmfon75PWBJ7XR1T1BBuwHIgKbLOosYRKIo0jTN4hTplCzH3gGD9Yo9WP5WPTlY3wWgL5za6JoOrDHAS6bv6KgefEET%2Fch&X-Amz-Signature=f72a80a07ddd7eb4469d3fb5fe1cd049ea677eb122c0d53909b43b60918c5afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


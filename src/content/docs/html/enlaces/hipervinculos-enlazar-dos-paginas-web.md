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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7VFVSW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJTTUks5tRsRuWzMaAC%2Bkq4x8gy6NdQlRGLMer4CbpTAiAjAspJs%2FRfveXoUcc9%2BcT2bsCCEOY2oHWAAP6bBIdCVSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BGC8F91g9LIt2V17KtwDqiVRjRFbMhVYk1tUBCqMmEYU8C1AuTez65E7cubEdlrkDiVB92zlvAaUzYYRTNjWOmR7V9%2F0PgsvVEMlFD3tUmlot5wzt7nZEjwCRUinrj%2FZFxjhNC3wtZ24x9W22Tn%2FIw6ZAPldS5HME4qzRVnwI%2Fab0XYlru%2FIyofY0IpoNKjoeLlN2cY5tQYzw0VdFR6Vb6INHC9TPiMQ%2F6cECZe%2FjOOqcccmojHlr9FgqDSCR8NL%2BhQiSxny%2BG22fzNi%2FIT56QUT5U2yH04mFV5TIkZz1K0st5UyLNLxEQApx9c1PZuOuI4AauQXhVFschWVub8zeUr3lUv5zasbEAuA90yA1e%2BfEoFnTJPsa5Nn8dcCX%2FiKsQ26S5XOOpKL8h4rmzRYh0hXU1G2%2BalbR53kZ8Y6Y1NXheZQlc4njRRjcvJ8knMTKDoL2dkaW16lbZx05BOtZCYnaBG%2FHR5wYXA8ro%2FyT4EUBPOt56oWbcFml4shyYyhzbqUQyiG5J7j5LbVqt5JHzgIOR14P99QG2zza%2F9%2FLlzgIDRli48rVdhnOFQs0LxY1Xy%2FeWCGxE0Jenxj81U%2F9qDc5IZlB5VYErHPxAJWMHL3rGq4PmxGV1EuCG9fJ%2F2D4s936ZC2Rm8oo2kwvoXYyQY6pgHTE3oY2JjOVw86B0jQZtSDDNaa7yQvB6lKga77vE%2BWD7HShLX1cTwUJA7UFkrfbBBQvQ7QZ%2BczpvLivs%2FtPk6RSP7lGoFE%2FbeZdA4DNCgq7i6xONy5UcR8oylvw4uvdI%2FqLYCA9o99dqVmEkCiyIkt2hZlNUF6Qzsbmwo8%2FAVMKVEgfeq3RxXpB50bSxx7ZIwifKhaDWsL31NbIqZ5emOuXRwhx3eE&X-Amz-Signature=4b8d2a99d2b0777ac3894e6d130940c600d921012396c39d7a0f046414d6affd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


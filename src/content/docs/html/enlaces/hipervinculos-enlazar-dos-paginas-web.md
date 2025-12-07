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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQ4UGKM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy5s%2FHOWbc5bsBnBsuMCuzMEyV%2FKVjdXtK7X6WG9t6uQIgVVzTsZRchBpDNESuKIowJUQUf0WYe4ZlNHmGsx5ty8EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8jGMmjABoBOzwD6yrcA0GuQC2Iby91QTaPYsupV2O1B4w2RYhQbccXdunPrB1H8O6EJQfY%2BoVP%2BOljHYgqi9LA6AHShkh1IYtRg1ROYiEUTRPzjMQPVu44fHtgED5rRkpjOqrahU3oZwhJA2kenfg0zMKe3n2hHgxPqE6SNPvJQiDKdkfTfqZcu8HmPbh3Qmk%2B8NtBfcEgfWRpVb3Nq68%2FmHg9TVYX%2F7DCIU72Cjn3I8x%2BY6vcFsIPK2a%2FYbCUF39hprqt0puxg%2FPo93Yt9x35ks%2FB5VaWxW5uSPKzvFuxjaShTDnkD%2B5qgJSOlNq0H%2BUkrgzug6TYO7rloitpesa4VHEIon7khs%2FX3d%2BHf9B6Y57d7Iwh2IBOJoI%2FH%2BRpLLKNzkVDpp6q5L%2Fdxg2Ye7mDFKj4d%2F5nVyzzLhxYVu6zaX3t8pM%2FhuDSvRUrLSXYkuwvTvepjoj3UrWRKm%2BzflWH71p7Wjq3EmfrpIhALMZHA78LC6jZrm2uPTd3a48r6cW1MvrDUFNDh2Rm%2FbAU0rr6WOAmjcAiJrtI4BaXdseHhkovfgY7secBkbqkHo9Q3aiDxXO8A83w3EM3CLdHvvWeK5NaG7122Ukl%2FEqX5cQrR0xRK2Jpf47kO%2Bpe4e8IE5evKCG%2FjA9L0ThkMI%2F90skGOqUBbC%2FJSepJm5TTIcZisUzEj17Jl1hBHU2E%2BKVPpOAGuZaLWrp0qUNYTQxY3voY0VzjYgESielk1KITpxHZTbUvBa3Q3H3%2FQ%2B58ADO%2BlV5nT1lZOGQkBolphTGBvNP6e%2FAaGkNTJjRRYiKDlvmfGMDJ1g8mmCDH48yS4T%2BWYx7i9SCqx%2BX%2BJPApTR2ncPRHz97CWeeqldAq%2F6udv7aRgs%2FlnRXQFR%2Bj&X-Amz-Signature=161d29795fce483d7ad015d59b081b2a50dc54e91f8419403307fa409d9c6fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


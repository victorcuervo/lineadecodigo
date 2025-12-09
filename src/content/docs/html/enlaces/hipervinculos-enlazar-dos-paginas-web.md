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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFHAVBLN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T223651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkNNOFJyvY8HbhVjCtHPb7w5KlvNWgRhASowdshkw%2FOAiBno5BZAC0pLU19yPZhF2ojGPvQOgyYZRRw3Q8P82bVQyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlKE41bN%2F2UtFfIy9KtwDkKsprSsJW7ZGnRb60jI1toYvWLMZ3NKE5ajv8ni1%2B%2F5JOkFfXqlN35XUnao1tXLK%2FzQSjAYqAqJTfRnCuEvY2JIirnivCX8zmPTXFnc4MtNqdwm8vveS9TNXP8yfPeJGPr8bHlxG0bmleF0xdpL3g5B0YBKx%2FHt68pInRvK04QbmlUtK1a3V5BiW%2BiplFQLeULAfDYtlug7E0Zykc6CsF1bd7qaiy4AV6Gmo5HM8A7MHYogm2u3wu7zTcIah0MjOeDA2Ougs4obyAQViZN%2BkY5TkwyhAOFAavs6XSkih%2FjG9BskeRJz3cIYF%2BMGJeDV%2FKiJgCaUAdlum39o2KO516RAE67Wm8vWYZ64cFFQULM0lk96R2OwZAK6aojy%2FXx3nKYu8m7muQBedWs512fah%2BCGOmM7nuCp4pwLOORZ1VjD4Lk4h8Gf%2B%2F8juTKlCTbyF2DJvwxtnc%2Fh5Df4InmnwWVeuCfjfmCNFAzurf21CbWeZ%2BIG6eDD%2FBian59cMakFJ0tP7NMmihy0jWCXZTxtf9t%2Ff6%2BjKJL2o4mcv6%2FLIQcyFSmxqONk6JXw9ifZJ4QpGERhzdatWHLWfv18MeweFhnlXwymvegaY2ELzBbtL01NWRGVzcrpQpImFnL8wl8PiyQY6pgH4xHFbC3W%2BsrMF09trYEpr9Rf7nlC%2B0KZzXx4E466PYTYh%2F%2B1se7XF%2BwOACpgewqJfC%2BW5rxCakawulxaWdVhyy6Lfmg6FmFfmFt2MpsigXfxYh%2BCREFZ8Z0SGLbjd4O3UtaOP8LHEU9e%2BydCwQ%2BvtMYN0vI5LRAh10qg8af6oiKQpq%2BgpZTCrqidiJrG9m3teraHxhckpf%2BM2MtQs%2Bs6USE50Dj2b&X-Amz-Signature=357edcd5415d237d66d92a564131bc707825d86425c7b9275aa5b95734bcd66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


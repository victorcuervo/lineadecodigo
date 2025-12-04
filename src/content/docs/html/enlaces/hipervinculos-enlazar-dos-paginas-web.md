---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNF5LCYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkXEL%2BmZ%2BLSHIwgcuzEK9hu%2BSAzHImTYd8uawK8RnH1wIhAOCrbqtVKujyG92dLIqdZLyaeseQbP5ZsZVlcozG6x8OKv8DCD4QABoMNjM3NDIzMTgzODA1IgyGrzvyp5zMb1muyggq3AOXNOHnS9g%2FcayrLxeP1rvip2OiRZFoEVxonUWT1f566zOMh%2Fc8KwcHhEi7yuLiM%2F0jqSxyOGrOYIecKYw0gduZXPIEgn%2Fgs3jA2KlmNUt7QThbIzC9Hn%2ByOR3oiERChrLFh8Ul2SXD1J4tHGhGJNS53%2FnvEFnDsc38qW%2FViCfHbPhcE5tzfR7GgvoS8fTbODpY5fWiisWLlyUcDD3XHiGqsXPTutuxDHT7KedGtI9dZrkq7eE7FjZ7pwt7du2%2Fc0Pi0ZutNV%2BACxUc6aYfzIzXToh6myTtXXRcYUhlI%2FV4A58rIZD9A7c0bk6fmhPIQ98hz66iWu3n5BryiHgey8HmZX3iZt%2B4Q10me69FXWlpZGCVSfGRC4aXfEKjVBAt2gBHsBZoY6RnqJjcElw8XG2KmHVtLFJ3mNy88HtJniK8U582DKB%2B191fmMI%2BcsFMUffnULLFmhj30JG%2BP%2F4eC8XckNjWVk%2Bx1jsPDyY7CahNFQ3f6NqWHHRQc7lm%2FxlWieeW0E5ZaOnsD5IAl5JNo1uRTn0m4v3HGzW7peXSKvkBTouSU%2BLumltT5ASEp5PoYldKAt8dby%2BJRsClRs4HQLcwz5zc%2BwL0lk%2ByH6C0%2BJhVbcPbW2tpHdbXBh%2FyqDDyrsTJBjqkAQM%2BBL4EWXB5fq%2FKEgT9mz6OjJnsjDnjp6iYV71AdMWOPp5ve2Q8geuy6SUNsq%2Fs7dv%2F2IM%2Bi5lJCE4944ZxMGVReQpiJ2mm5gHN2R7kYUuQ5HZa5SItmYg8CMYsc9UKTdF6GCFYXx5HJ8A8voh%2FW2v1uu29tQsT6SRctLytkEfGO05AAdBN0WYiNurTN5Y%2FX9VKVhOJL%2BcT1Mw3%2BbgMRbHW2tEE&X-Amz-Signature=411a0bd6c22bf74b0d8d52a534481ff5a20abe2a30cc843cbced82dbff65d880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


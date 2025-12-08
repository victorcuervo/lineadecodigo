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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URX74JSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuGWAlfFsL7QoJphNreCUCuH%2FyuQIROh30Y1SEoatNyAiEA3VxvR%2BmmaXK639ezYoPjbQ5PkGToYBO4GGtZNMaEIoAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTpHxLviLxN%2FMWqiircA7lNSxYKkFPu3pUSUeKL9cAvfw%2B6uAFZSiwEORLXpKBKIv2qMHIzVtOZTWP%2BHlebUOARdILBH%2BP5%2BEqcSDXIam3xf64EKO3sFwF7t2qCsuv7a9Gm1YrF1I%2B2nOx2zQJHQSM45W4NCl2LxstQX9eIf0gsNrzVuL%2By9FWWV%2F2ZD7y%2Bml58Dv2p9W9B0LRj3bpJRAp1Au5RbyYiLUjvurmQ9h8tWz9rGc6LIvMLaA1Qe2G0IzfGQzHBNZBODr%2Bqmra8tKgJzRGOOzHI62v51vrLgoozg%2FYQehB7ksj65FFtl0jRv2%2BgWg8lLs1NAwipI%2Br17gL6A%2FLvs3c%2FPKNMBOxBmHOisCsmKAh0c4xSUPz9BD%2FYoJALd0bWtOO%2B4eTNg0bLDRNVNSChxELQT2jLa9FnY5cNG2xrAfjixgqSbzCMBKk5wj3W5blTQh3o1sV%2BMGwHoSjrY43U6Gd3RXN3Dwco1E2U0LfySum2I0DYgRc96Y7AvdDzJrzjcNdfgcGqr5j98aBsY2o3uYhT591KHkZYtolg2udal6uouIOAjD2Aug3%2FTyfuCYBxCQbrF4VKoX1jLnT%2BZxX2H9NiHeu%2BOxVXiP3s%2BwBWfQ%2BJskWFaXgaMJ0aKwm6%2Fliv%2B6f74Nn2MLGz3MkGOqUBdKw38EkQ8v8nVe8vtrmyO1tLVaW5QcaS%2FgVY7AUM4J4dgsq%2B1sSijox3bdb%2FkOnBUFRmfmHyzGgY3dbGikwfccr6RbXiiDeiuKKyZCVa8rCoNpu3nN%2FqHcdgexxTMg9RkWE31C6x6PXQxJ%2BK8i6dPZsxhsBEqjVsWWOpymA5lnXmhGjHxfesE3yOZ7t6%2BM6jDFtCrqyPTf%2BoW4nQZ8fv5ze1v1C5&X-Amz-Signature=016f9268da9af92b034ca3ead3438fedbace2592899658249a13a21ff7b49580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


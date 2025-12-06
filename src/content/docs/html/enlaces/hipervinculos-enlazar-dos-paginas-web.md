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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVFW6K7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl99LInJK7ieUdeiB65DVVNSMvmK75eyLVNqPafohBQQIhAJ%2F%2FHXnvvovw3h26rZMwQgV8X%2FfOqztxHSKo6XWUGQ5EKv8DCHUQABoMNjM3NDIzMTgzODA1IgywDJkNMA9OL65VGusq3AOXBjeZOA%2B5RSwmkTdNREu3xWZOmsCnKXlLMHJEI4bDm%2BDy2LEJ3IhL3ayS0wpFT3I9ADDGy8OXdJ3w7l4xOMnZ0BzKkv170isUKDoxfDnlB3qay%2F93bSj2uBk36qNGo1Vpki58vPRyQFA%2Fbbj8glL9s85uSozs8zqS8g3sYda69TA4WDjkivj4X3y1j7vXiSm03gkDtQDG0tR9simgOmgCgFMdOdGHjKae0%2FcaXa37U5PYe2GkZk3MrWOhkU%2FNK5pLkDThnmIyB0Qc9cI%2Fl7HouNlr2RSjy%2Fj9jEz%2FYRI2F2W6gcZNMYNvqENtIHZ%2FiwZu2sxQJ6XgwIRIifakar12OR0hTB8Fd68JN3KGE%2BrDDTfenJhj0jWZLYvcSTZLjB3edyrVYHVhIvTU5lWZ%2BcFHwJjU4c%2FmfAjWmhZtmrMIKRUQMlxga3zA62hl6hvllMb8qJhU%2BPJPtJn%2BBCwePg30xtQ8zL9uK79eLfJqGV8u%2BjvCVEm%2FQIpIbsCHLm9xK1xN7M2k5%2BkdgXxLEV0fCrgyw3E1hvPmraQ8jXw9I6ojf14NF30gnes27kIrkLfRtWc4nnxc4ZtB4l%2BzogFBKQ%2FBqS0JOHF6%2FMcDHL1lCG84RYSH9rV010gypZVK9DClptDJBjqkAVNhc1GE52xK6Zt3FLYQ%2F6TThl9G79DxPlcPrJ7eK67gQFcZ%2BlPar5L7TaQi90bnD2vxFvP%2BXm1FlntrEvxc8ycliKlvoNd2ScIAQDyK1uxLVqFeQtW4T7U19%2FqViimuQiXchNEOb02rPkyKeSzt%2FC3kltw1HfRv5fol1eyv1DIWvFjwh65YWC3AS2ISd099Xgdyv4%2BtBSjSvJ36W3vXMlyyQGOW&X-Amz-Signature=f4d28b4d17c0cad270dd48ebc7477cb1be2be1f7bf76c721754a3efce952ef57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


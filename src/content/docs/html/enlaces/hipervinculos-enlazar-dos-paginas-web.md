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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ65FSWJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd9j8gXSaUJPYzhsdSmF6u0yLRo%2FeoHEidwB%2B9unOd3QIgTfPHtoIgEI5puuXwsBY7%2B4CgYurvcYd%2B8VY98SAQWMAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGBla9pbKqNduqJW1yrcA7W70BY5fualqHE7Fb52J8oep1NbRr8DGuAy0Kzu20G3XrIDSd6DdDtqSD9vUF2FkPdNUd53iurVx7eaT11KFf%2FeH2Tr3B4nT238M2Q8SBgpPJlDQohP8ZmUG14B42fZp1iavCY8kSDl%2Fr3M7HcaGf0Wjpp0HlxQ02BoiIrfBcZx5cFtQ7H6JXtDdkQMbc5wXwYh%2FPo7GiX21XJv6NdIYMFJ34th5DLijVp2oFzT9%2FsFIz5wqvQPznXh10JLlOyKzdkgCAU88yTEUvplBKGMksxXwGIyJKNckqxTOppoVg0V%2F7fE7JjJ2d2vOkXrA%2FLmd13UiK7tsX02FDvTtEWFZXAwrQZFOoutyaqNJeBN4shBcGUyTtOzjR3BY7t4dJzQwoCB05RdUmZ%2BTsx1FRAQy0dfbuC2FmeTHKCNXE0wqaNnMeVHEM52SGs%2FiWiCKWTX6GWo6dFiM%2B5jpoLZVw1x7S8fG870R1z6T8GkBmXlJrpJB4yRuz%2FI7e%2B9Cmxa4EgmAKQdaA0NBxjqc30sn%2FJcRfPmuVaEcgvniyexqPjZb1JrbAbioTfp65M%2Ff9SZWvXOX15a6QaDDEGCfXZP%2BXo1%2BTabJr%2Bhfc2iuZSsICjTBtt117aQbYLgAQh%2BGvb3MNr8zskGOqUBEjPHfDL3WqwxvcDXjgb4eMpQ7GKb5uuyFfn4pgiyzQ5oTSMLID4rfAOlrB1xZ04o4QeOenuzHMgP0u1kEHM07iORwXIRAgl95Wh5FgQa9Smg%2BcX80vzvpuK%2F78%2BI%2BHgFtYHyvxApJV55M9%2B7TodGATq%2FiaRJbxnV80Y8o%2BvpWLBlHuCNXKBscZJU3RFcCzIkpZ6LQlUIOmX5kglpa47V8bnI4mL4&X-Amz-Signature=0afa136c8e851882e5d32de406f7af73d3c2e138d2d172baf155b87a481b8857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


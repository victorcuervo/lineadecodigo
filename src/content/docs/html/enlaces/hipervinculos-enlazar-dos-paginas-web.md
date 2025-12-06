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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JCJG7M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUsq%2B47h5026TOkMD%2FG0EQK9uMLgL4H3EWjiS0Col8BAiEApXjixkaF0rkVW8tqsHiK6Oxmpask0lATgGyr3ZJkqwAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOC3MAI%2BPNmL5cGF8CrcAzkd0RmFymgKNHqUAJS7WadwO7%2F6yY0wHHtlpSQliZfehBUs1aoAB9hJ5%2Ffia6Rbm0YlDJD89eqsT6StkKvfvFeDvitB5CrJ%2F1fNVsePpCHjyVnHXHILGzZCaVZ8YdbyP2LGJ1gQzULfRoXCc4JBImKAmxBo1ZVIAdhLbekB8GTw%2FBbejCeQYX4eGZF9rF%2Bn0%2FuWoL66HbDWG7uei6e04CXrwAzojvTyHCIyGl2dq6qA2NivTQJKGQYxjnRLxplciKqYVxUwwP3Fcx8T4ratjJtYGXCfJJWrighvCyQ7LaR91l4MuZQgv%2B3xA2vRaIhR0LMWsYUtRcLm4BPDRF9vJgWnsnP1B519z90UD2JH8m5rt8OhaYoWy8L%2F7iZxrjylBZ7u9MUid1CSGtCwp9AiH1Ek835QC5wI30rCwnMjhZn47oe4X9ZMlymT6ZWOznxMHGTrzbZzKmCduF%2FOFhgZsyDeSUaRkhi9W8mm6X78gKlHsF6%2F6HqXUHO8yfqn6qJoOZT1uW4wacqckTvHhVg%2FBu2TDabP6%2BY4L4aGsRNmnb2triPvmqRrRlwOxjNQY3prUHmC%2BWtf1utknGYLLCZ3rwVw%2BwNNYhuESHzZ8uvr6umWRMIkirOAt56UY1eYMO6m0MkGOqUB2aOgxnR5ckYLlSJxtKepbJRxpUbw5RMibPyQqmuD7iVEm5g8KU10nlxZxvWD8XZf0S051yIz9J5k%2B%2FxCIlTJMd%2Fvj2ngs70hIhWhSCBmueBPOKK9nKOsUvx8mdV7h%2B9xPyX7zAnf%2B5qYjytDoWRbFQv0WeH0j%2FrQSA0vCQ6URAPVy4UssJX7cbUym8W8Tugxs1JsS4eo2LJ%2BWh7SgsHHX6rzjURb&X-Amz-Signature=2012fd34dfcf758cb0d336756f8ef81717df1d61bce472de13b442ab0020da7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


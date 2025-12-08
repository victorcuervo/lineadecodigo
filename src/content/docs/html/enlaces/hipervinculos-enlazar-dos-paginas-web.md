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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ255CB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAy3m5BsXtQaTJ52v8ZNULHoR%2BuGx4wBRfEPUTQNdMhAIgKe3eQwFG4FLfycUAQMzUdqdnHHGCTUU2DnpKTyjbX5AqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWythGNrQfmpi4d8SrcAzJAuSD4l%2FY44IIuBjTJSBf0KuiA2wLSrA54hXxcDy8PFuqRI%2FMF8oeTZXQz9lkhC1ek3hjHgN2XimtTXE8ho51yKr6ZcqGMghjWot86JjZMEacM0ltLb7UDrJ6R9%2BZpImh3G3%2BrilfhfOJo3Cg8W9OmkR3667CJYDq6AlsB3w%2BGVJgWozdcPC9RBImDGeullbaq0ni79trbplBb0Ug6UINxF8y2sW2EdJuGYvtR9vPxlyx7E9Rsc55s7jcD2SnEMPWwFKEahkGUZEFyLHnukadmXP%2F4vV5STBIv1wj8jRSaB7LdtNgpCdqHcUeLRCL%2FdDkjn%2BoUFG%2F%2BjoGZrzMefKNJ6XGRKi5GVhpeLIa5zncXCRDrtbhrNYkRKa6TL4gh%2Bu%2Flq%2F0Ro8vF%2B528vIlbWzBWe%2F9CjbHNbjRZer35nQT2BPjseorOnKmjO5OprEZGca%2FGzOUQPm63iwAa%2Bay9XRFwbJOos91QGZLAalCXbA7HyPKMrLshzwN4MkwovGtEAgJvxUKrMhvzMMAU4%2FD8AEV%2BWtXU%2FnggNbIB1mqVe9pW%2B3jMOpZfFT%2FlsdU9aDrwkcbzzMK98xjrZE65z3mRUkYE4O0fQu%2FPmwEke4GjNbCq5hyZO8jEUrqrM7pkMLu02ckGOqUB6O5cIei9qzpA1s9BsTbJAAfx%2F6v4xn5gMKG6R9LKugaMI%2FjDSIN7uA7%2BYgvZAI3ah9bddzTw%2FG%2BtLirdIKX6jwGNJmUqs2sXvFVANwEiGdn%2F2U2%2BlNEKNH26Z3%2Fn%2FLCSV3ahbhq2VcQkySRaEjFccJlbME0G4sZ89W490ZTaScm80MZsTxF0WztPmzvLCSPdFNetnBm0W69XSOV0TkQBIA5lWxxW&X-Amz-Signature=043db505672c6ff80983addb5425fa462bbbe9a50e479c4726fb4b0840c12ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


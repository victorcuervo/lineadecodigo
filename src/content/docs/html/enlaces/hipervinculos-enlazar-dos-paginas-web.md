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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KDQ5QU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICn3cDO8bqa9YnHrezfEEwj%2B0OVcEaKhXdKAjBt82z5IAiEAzhK7oF5pyq9Di0pfaU8h77OdSkJ5gwrZuSTBRRK6GlwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhpWs6ZLLTgzjt1RSrcA58XoaQlii37n6S%2BIk7NQoEPWWQzkL8WNPV6IPg%2FkHbQUN1Qh5BRuxKzNR7yE2KjOZQmY6OF59bCSoNVx94GgieVVd3ccNq9DC6%2F8Aq8pQJmetcSK7eOfEDSlwqUiQ6zmDlgKN%2FWy1%2Fz%2FWvCw5GQF5WOaOkcQvF2Upi1uQoSUYe24nrr7mUhi5UIyr4EF3SQkKGPLa3HmiVt71cZ5ARHyluAq8wtNauovRcO8fdtP8t8x%2FNLYFWqI%2FQgwXvXe0JphE%2BaQREap89f%2By5ectk7ackWle%2F5zCM4xjMhMcfug7S2cMJuhQb2SbkIj7pKOCGjooJlEsAa8t%2FO4wC%2FCw%2FJ9N3%2BcXddyTh03hCs%2F4aSktN%2Bz6zEabsSklWn9BeG2xHxoE8nw8cihdIew3sg43S44%2FhM7KGuv%2FHxKu%2FiCjugH8L1DAdjitWQxiBcrvIUslPqOGa7tJQCTMHbqMMSwuxy45pf6d9x802Gjx4kN%2BVw6a2OzZl2%2FmqosBMJChIL1FvIxetbSIjvmqIYBs0g0alK1jF9CCgFTEFmJ96%2BhgV2muJZAEc34PuyuL1q2nltG0KvNZ0wXnEYm%2FhXkNKZRpgeLcvj45JwJpN4zf3F17I7dLnp2i6KmpCOt78lmXgGMOKo18kGOqUBP9m8GWprxeVGc2gQ%2FThtma2fNnUvFGXjVNcmSWknqyU%2F4HU0TptiBW0Nl4JqB69jbgoXL39108KrpuvRBKd6%2FPp8Gavd8%2Fwa%2Bz3mqKzgwztFr4DeMV97Iv7Xw8PvmRZEtmuCUoPTzTC9X%2BlIZT99C1G9oUTXpH8ize41xuhDPrkLt%2BvtLVcyYEGhhBwOHkAXubn3zMF4yJJFIVq18TI3R9OymRRU&X-Amz-Signature=ec1417506b444697a74faef6ed16badb8de2494800ab5937ba865e38e64c8b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


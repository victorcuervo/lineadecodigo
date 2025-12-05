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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZB3SGH2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFejE0HO8BbVqswIhpVCLed1eX6rTCl9zq6S6TakkKE7AiEArXU4GEo%2FDJqiQLw87c4iLMaIdcSvVJRLm68lYETvfDYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNyHwaa8%2BxcuCFVmBCrcA0kzZUKQeh6%2FxeZ2aP5UOE48%2Fao2BJQMM7%2F65g59C9pZfQic8LvD9bUINlK%2FfYz3hC9zBTloUF29nqvmvCgvq32SP6ZUVaIjGvVO%2FgJxFEhHN4vIw17t9f8Zwp9aZlMr7Y%2FVoZ44KLq1eNO8aH4eDsXOou%2FN4iT29eaLfKVhkF8Ku00KzCwbR2uU5E8d%2FHX1PfR7lFDgWkfEvmme34%2Fm8yNtqOCbvdSqVVRjH%2FhPpUCcVhrrjEGFO011t8qLseFS0DAhc0bdd1wYlVIK%2F9SibfVyT1nw1dyvJxI7oXlFWvrKWd2%2BvNNnS9Nb2BAP9aI3ADt2r7PkVNbzxqCmgbw%2F54gc1pZyzy%2BObJxLIjVOdZu4oHNedkf2fGBDVII95%2BIJtwzMu%2F8rYHgc7AAtFBYKGsIXXsfwMxAaWGFkL98UE83euuXR7K5Br7VDFjDELvqBS5dxsQACtkq9iT2AUBv%2F%2B8BCMxT3xMWz%2FOW6Odleq5G6MNRO65SOQxxkK94ewH%2Bc%2F4ECEb2fCn0pIWiCqK1pKrd4%2Br5cjLhK1onPCsJz0ohd9vOwvLXFGgxRBzXVeWxcYg93uXkb5UPwZ04M6AUR2cvDO5mfye6l9Qq8O3Hmie6v8P6525ZCrCO29ipqMPXOyskGOqUBDNkGR%2B%2FDxxeCIJxBIRZKTzD0BUFqaNrtY4XvT8VidZeo%2FSJ20JXSila2RGL173Fd9yXpaS0AUm%2Buaa2%2BUab1p%2FbS2sXvzW08oWu1Iu%2BaHkVskz5bmP%2FrP8wAuUdvZsukfFwEoVb0Y5zNXvUbp9ou2glzyvtbC3ROkdDw5nQixDVwwIQJzRgJxWlMZ%2Bu7nxTb9LBxBg5dKofZTTelUqXcHP2NJPbr&X-Amz-Signature=f267c109e78567e83a972222bdabc17c89904e37437ee782e57852cebf8b321d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAVBAS4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUZS0fBro2xDNmU%2FTIGfudxaEPhB9S5fRT3bWmHwE9qAiEA84MZ7gI5G8DxdqbbRtTI7FHlPUNfT2epCEcRvxYUDF4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR4UP%2FYl8zFINT3ZSrcAwoqArCcFmyHeWX5SKUhAXYftQGpIWvSY8LAcrBBVZTY0i1RnMQlw7q%2F14B0tav4s6P9RieDEGoo46Oq93Geh6tRaGPfT9qns5isqlVCFHlQAa6t2PXghVd0uNkolCg9JoCvFgVfYn0q6cEnbPmGXEDD5edjKhBA%2BhsVCjcqlo9yN3c4Di7r%2F41LQj8ZNCFgLy7ToZTbVLgvt2nOoWtotjr%2FbVRzfyuqsv3C9fHLzDxVTQxKDArcpoxPLKRneByZ02ePhmE7inssjoGsosJFIrocvE76Jt7Bn%2BkaZ4qLFOQdAvIi4rEvNnnNTxE7LvoAhl2vSaI6pCcu9IJc8Tmx4dMD0W2hitR2zw4nGAIm7waoH5CyvSeXJIh28c6Rpl3eK2YTCI9pR3eTW8XcNbZsh3OaT2%2F8LZ15FWeNE7d%2F3%2F0N4g3JfFDxfSnqVrzn4JhTVjm8Sx0zVBFan1eJ3mXjiFxQsp5ojZemPOrI8Th9qRQeFAkc2YA8HOUZrJkZjHaUV7F7tfg2cWO7oiin2Tc%2B3tYJbNktjh0PzpYIlkmjBGHHOvYUfhpz%2FWNzMA8rogM0%2BC0834QN8J3W3JaapvLRfQ7Zp2KETdoAhmZ%2BXqc7P%2FoY47p%2BO05Uo2Qs9bMFMJOH38kGOqUBSFnQ8w2L1KBAnQuJQL6B6tJDLOmykIHp6p0f4x%2FBz4QDe0PXztYxi4Vxd7jlMNw7AXo3cFWhTg0C0noflBusMiY%2BAV1lL%2BlqoY8C6ZTdQB7efsXq7c%2BKQ0SBgb6Xv0Ipu6JgWdk2beha96cNfF56GEAC86EkA1R4rf1ONt1UU3KXdKSJtQVXdf4dKQTNgkMq7YjqpRwtotuIgUbZecJUD2gcqHDS&X-Amz-Signature=dcecc17a56acaa31291a053bc7e0f361e95120c43a21ee0366169e2e686dbda0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZRXUFX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2zT225QPTkCX9XomM8v86VC8TkzIhm7N%2BhohKXq5EQAiBer9mr1S1dYCbHq2eEuLj4zNWMCuYAT2zTlfUgTW6fyCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkKltSOpt5E1EvRPKKtwDYGCd7mJJGlKvFzPcdz8v3urubDxL9Sjb%2BifwXISmMEcR%2Fvm1jlJN%2BG1WEUpZ3dV58Ps7%2BzR2ciiZvO5peXr%2B5C%2FyL%2B2E%2F86QNj1iAnJWxBOdvr%2ByLyLciqQ8j38OJN%2FWVzhtExChM9WaiXKMD20P4azcGFNpR2M%2Bc3lBFT5TaIbf0zJRpWK3o7u2v5xdY8K0i13Jl6K%2Beox3RgpjyxgQMr2vyEw4KaRd86cOOMpVeXW4L0x3IIKdmumlWZvse7dQhe6IJYQDZc8qt79LmM8ApKd3HAuKWOLYSTW1r4ERyXEfHoRglTjcG17mXnU%2FvBMsp9idtxNVfigUG1ZKS2OLAhc2Wd0PyfhQ4eAURLoJDEVTH%2Bkvmxi9mDQBTjWQ8yVe5zolIEQEVXX0PV6X4e7sn0xXxX%2FDwPSGykhh1Wk%2FHKuDeqWCfxbx%2FGj2gu3IQdj3iGZT8eLLlfVjr6qLmdy5vzdaX5B5X4C1dQZPwft2Inl8wHOGrhduOYm6IE9o9wYGD2BArI%2BZiiKozLMrIrsF4NgbgBTsRpk%2B3BzRJZ%2FlVe2v%2B%2FL0ipBSzdjEB0gwZqxY%2FPn1jtJNGX4rI6Wl88hE0FxVnzRBW3fVqZW7Hi6ry0WEBA%2F%2F3oVeC733ikgwu6HUyQY6pgHClbspW8OcvHiaEaA1wx7Y%2FAqrSBswZjzDkgmgOHz92B2SQ4fVXAYBZ%2BmK%2F8dLUOsN5fjVzTDaj1PFZEZRlcRemtMuYRLATzc5DWikto9uXt70WzppXtiB8YfCIeXluNwY1IQYeZmJZZLnTJyLnSfXfbUtfQ6pNkOVhQmBpH58VFS3woEfu0TbElyXVuQ34Q4AjSjnQ5ZIhO5ETE7D2NBQkmZ8QHt%2B&X-Amz-Signature=40e43c0490a5fb13b7d25ef8ef641938c9ecf69066d417d88705b18d9a257e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


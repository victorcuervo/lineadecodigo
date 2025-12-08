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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JJD7XYV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcNHlJ3nOxnbI4%2Fa4YwS6w%2B1DLB1GlmaRhfq92odTA%2FgIgFka3cZvH96YMo4wx2MrlGGUq2AtowN5JC5cJkYRW0MUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2LcpcaWduPN1pPTCrcAzSdX%2FZCkMvUJ4O4A28%2BCdJqqCYZwuuwhLJGutdAkiezmZHHxLf6D9X1sI89Rv3TEs5PjcnuS%2Fg9U7YJv19buqaP%2FDz5aVyOoXCXrlcwMM893vpf5wvDPuYwEieUjRi8JX0ryVhhgINgDgg%2BrTjSBtExSNfsu54Z5kkaZrJVwmt7BATjw%2B06v95rgbIHuEUzhunA4xohVZ8fXrF7QAF9FMoFUs%2FrGbx%2B7RkH4y%2BWSgYVPCSVtt%2Fc%2BVVyZrsVPgRsUo4ZGkWzftkMRWa25qDTiCf4PUZ59WsjMr0Wwr4OsOvk%2FrTln%2BohJwUv31KpaXGVC7kLq4hg5UYiHUeuYHyP5SzrSbmSjMfEihWJeMuOHyRoqnAPPDuPfijqmUSQKqS%2BkJ4sldzDUopqK%2Btk%2BBbF7%2FGXvOFPKNF%2Buis05F4B%2BPcLRG2WhWxlemlUDnOXTkzgYSQYdA5xV7d8HQoC3gDO1AgvbP5%2FpaYBZTQIsvKtxkCKBBlcsnJyJ3FEcB3pm%2Bhu9gI9RRHlqCyofJslj6dPBz7m1mG4JQuM7h8L9Nd%2B4U%2F9ufYGE96XyqvDIIWm102mHkGUUlGPlvHyPUXuZYE6xS6usfI%2Bh%2BrZOEdzoG5F%2F7G0pZnDmAtiIw8e70i6MKWi2MkGOqUBqkkX5A49pzHZVsJ7uuvB9DNlbtfF6U8kpWl8MMpTOxFKqK9A0fUCIEAXtbYAh1ye4jZJIemlI8ugHMpxv0X1kRPDams0iAfMr3R9maUB4bXEpZNQ4N7IYIUpx1VvzpAGdrNlB0DDQLeBr2jitslYgr2ckrqfcFFJ2p0ngW1ZLxzRgMXVjWOxdHw125xtGrw4iTrGqfb4OGLouvA42M9zyOR5gKDa&X-Amz-Signature=270ccb0282c2412c345f4e96af150a3431e04907f524bf265438107a7d0ff89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


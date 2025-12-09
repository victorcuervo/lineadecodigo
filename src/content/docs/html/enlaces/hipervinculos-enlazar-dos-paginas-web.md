---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MIACXRK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOxzS0Q2UWfFWrAkpQkJSqacej1xLEVVduGzQJ3tvPiAiBc8zGcTQc6EFqmRVyTgDagOqLjcN4YjFX%2FJwf04OqBxCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2FO70nkCmbFUfcuBKtwDPUDeClCeKx5A17VuMDffNUFbn1rmpek5ptztAwzIk3Z%2F9eak86x%2BvY1z3uHD7Wv1NXrWZcBzYPDSqT1tfJVZDwVE8aCFSuRFsxNgBirMLwY8bNnJtSLjiIlCRdigktyW7qHbOpwtiizIIYI3EaGy8gqMtXb3RIsJZ%2FouVVpFU9jsSx2LHxMSqEzGHXv%2FDO1JQiFPjrsrHHV9u31RR7fLmkqC9tA8RNO2mEuOpwTS5SW5qfDtKi7MRo6j2cC9M1NcNH%2Fh7bEiw6adoUSqIkN2Y2OehcPiOtLdmJmof7IrNiNzR%2F3vJn%2F6MaGMoyJDCJCXK5BnZC7gn0gNZeIN88dW2IGSMjOzNoDrGF%2B%2Fl2r39nTMtA8Gc%2BWS1is1W%2BPkrRqGQZjRvI1ERDFlRgbayHuoQTsPNlTbKKmPUdc9w9zP1B9kW0HelFQNSsR3gDPb1hEkOHB4aixebZuN%2FDHwrUzMLsBaaz9afqOgqo4KnjUqg0WlIWYzqfn%2BoA%2FgHsx4XK5MPwts%2BvTrOsPPjqwMg3KnlnLH7nslp6GFQg0uG2Emu3vN8UiXfTRK6MXsQTTq8GzA3RdTLoSQly9QP%2BBok9qkbX8aMrNm9ZiJFY4FsG0VySuE3iFTg5y%2BqbrUp7Ew%2B5%2FiyQY6pgH850Gsb5X3iBCFnm0l51HgeBxV8IlAmBthyQkvdcObmNX7ctSPXFjWl6mxr8yitn5gYA0JAPa993BBonlvaliYHShRIIpRE5qhV45tRUZrycgnV5XU0j17rrApSvol4QULGFLNG39PrFKT3IkasI5pMoR9cJgzckXX0BY7mVODfcWe2SMtskRqIXJVA2UgyQ1%2F5UyFlFARWhoucb7tDyIeaKNOjRIZ&X-Amz-Signature=10e1dc4654310b4cbde4fbd9ad4455aaa5511664583366a3d5eca3584e3355ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


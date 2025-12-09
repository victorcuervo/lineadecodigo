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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYEDPLUT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqprZ1wWiXTwWOdVsWWXueQDhLGs0fwsOCLdwb4Fe2yAiAdDB3Q6FjcZhRMWIGiOGfcikVpTryjyVhGcAj02%2FpgdyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgOrI5YsrTXxnbAgiKtwDgky3AF0JmTXaMm3Oe5QF1eo0AAvq2UNYwuEB4PgZesE1dEDnHXCHMMCDh%2BJQ7UUijHs7SVxaDAMmf%2BfAqnLLCQoQy9Dhijw16YUA18p3TUz%2Ffi0xjdm2QGlrxRCpp%2BzNq%2BFuMGZG%2B9Q%2FwyPjl1xq4vDu9OF2lBOeGxCR3aGnsGWyTD2g7gxVIViWSGdD3TECCHd8OX4R62LSQQQPx4ToQMjA8K6tN%2Bml4EZWaSmccQ4Wiiqt7opuqs6Sf%2FoV%2FBOqnSnlzYdox9GUPirUyRojcIBQCNDGPowng1gdRbjFTr9R4uRQYpBwJ4lvERvuPotbfWc2Z5sBkDZUDq%2FcsIkO8PgeHNK0CZN4paMPcL3osym4LhVICcl0DtKrLN8%2BQM2qFXBM3yACM%2Fx%2B%2BfftZ%2FakTlkOP5Lq%2Bx7rouewdrfmjQvoSxknng7lMZNq0BP0LKwXLKGwEFBaqAg8KMWBXjZxQkSkiXo9jWuelK0qd08IJSBhOrFcMgm5h%2BbKHC9vVqWl9j6%2B5rzHoCnklAT%2F%2FsLuyBpjakSFnqJZIzucI1mHcBViQMWgy0OyRFxcvXVPAHwc5xAslHUQIg6GgdXZ4iPguzyj60yPPFp6uQBHiaxbwq4VCo%2BcvqmX79W2qzAwxNzgyQY6pgGhAs7Ga0j1ELORIDPJP2AXCa%2FF3LWNgcvRzQdOzIrfp6fwN0gEiGFS%2F9%2BGgZ39sH1cSb01CRn2etC0ImXHbHtKaIdUBxqXhjB8Ue%2Fsnh4VQhkXcJ%2BC1ms3Y7hBrLdBWyr6dbjnACrn%2FJ4OYyBnrqxsDBhKk%2Fq6FstEX6LjdJDwleZwKiaG1d3RB9VrsJeD9YmEZzFCtEnj%2BpiO%2FHReP7YlKoqQqNch&X-Amz-Signature=10d6a189761a2d23a2a7f920dbe99805628e992e60706bb37e438123cb709c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


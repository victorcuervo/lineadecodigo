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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBUB5NR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDev5Ij5XrlRrMqL4xB6DmofIpEHkp5SLBsCy1KZirXGAIgfgQwRPY2XDUw5nisWzrq%2BQ2nhigd37sPIcC78lxVyOQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0wyeH1C7QCeCA0qSrcAx0oxw9ljJ%2FIujX2te62bpHPYKSfrPVF3NtXYMN8WrXslJIHdu2T0Lz1ifWZ5hWC07pl8qQNA1kGcwVp%2F3nX4pP7ZAdH%2BWZRjo7nn9tWWGKOmj2A%2B6Q7GNxIlOGAkkigzYGttWepL7nyMYLbUMZ2MZwk1S9lpr0yZp3XOyjfVweI2GLxcQ1Uf8OZvGWyCCstjORvzR%2FowwxMHwxe06lC%2FxnmTUYYii3zuEY67XWFJ2ld7RKh8Z5Y2VP30kZ%2FbjD58%2BeHZ%2FPaP7THEFZL%2FACIG7pqAe96sivhgqbsSKX4N9S%2BeUTKlHg4dm4gFBwRUjWW6yR9yvxVYw4zrc2%2FkWJXkc8l78kypplQgKiAHKMedrCNdv6uPpuPfqWlaXkxN8pv6Ap9CLD%2BTLRPiQeJJ1gIK%2FpzeuoEAfapWBgXzxu9DvqCyKTnjpQVZExJw8ii8nEoiNGDDpkXRo33iYaKG%2BXqQ8INU6vmPjInxjABnPMS8UhSfO2d35S%2F3fHYOhmB%2BuXFH6EXyO8Y3USTEH7vGlZZye5nbTdGYU6H3PRXRkZNs0t7ZxRezwWCtPMRpSmMEY3%2BSv8Z6rV1xlaOBUshqWHX1F7B2HPx88mgoKOmZt%2BjKcSMQm2ZqPUW6L73l3rIMJXt2ckGOqUBHH7P8IrVmbIDtRUFPIjgbLMIpKc%2Fo5qRYOAB5jz2dMYStNhACfsuiT4i19HwddbeZf6paRYYOLMWAvBx%2FvNbO4dOQ37jCxP%2Frlry6tQliUClnIvfJFa%2FVa95%2FdwJYiCNSqwTUx5fTfi325T4pWkxolaDCQXjFRo8ThzA9CLFoKJCC4BC6R9iGXZ0dE4%2BZ%2BDwdKCRjRgQ%2BOidiIf%2BxK0qXI3b84Hh&X-Amz-Signature=8b50f620f624bf1a0525b3463884146fa8b8aa1fbb3eaf7a31c0e2249eb54add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


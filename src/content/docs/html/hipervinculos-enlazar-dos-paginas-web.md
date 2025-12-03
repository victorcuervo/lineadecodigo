---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVFVLEZH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDPlr%2ByoH2m2BgTtoVXb6VBnTNfHm1lqZQCJ2IzZwhEgIhALlFylvVsiI3eLO39yMO2LdBjdNP%2FWSWhD2LfYl2ejJuKv8DCDQQABoMNjM3NDIzMTgzODA1IgwHq0y0lZVy5Fy6T14q3ANk5xAakNZ8bLmp%2BHM8oOuPeloS4r%2BryxmwHt7%2BgIlAEcEncjYwqIpt6vpOrE6JQKbZCul%2BBIVpC07hRba5JpeY7xy9ncHLc%2FAWERhAalcOfTF1O5vQrGKUwjxa1V0uLviCfpt8xr%2FW1jFSlrh3yT%2BY2eB%2Ft0ESOLNTsoaWXGUfkSWF%2BezEB2arIaCXPEi%2Buuf16wZQcZgwy8ET2U2ppWYuk9PAvqvMHqenKFtYtm2MJlwZUhMY2UtHelEMwVPI3ehiLpyQDFimuNy92aI8mB%2FB%2BpEY%2FZ643K2xYQMMsXhYYGTjP83GH3xq54%2B%2BzNlOA9bruXgzcWxJ9IM%2BrD7SiKXDICSCZpVyNt7%2BYLDWevoePfrBsmaAP9cZYVqA5SewGprUHM145qTJ3WYx4LrmR4jECT2W69vR01PtkKDjXFbffDHRze0musqoY2bf5KoKVUMDAIJq4X0l9RadHpPEMPPqP7CL9tMm9d9Lp8zXcVeE3zWaBd7irvI45GbhpedHDIXJSiymd%2BjxUbpzZOCQtsbsoVxWCycPMy4MwPN0DMdM3d9a%2FztUBqfCxD6fwF%2BKGH1KqC1zDmClkI8aMs5DO5cjX2vw75ZYgEOqWzf5Cegfj9%2FEnq4xM%2FcRMDgZuTDckcLJBjqkAaZThm1l%2BgyecHDJP5jwF6HlAzQj1N8rWf%2FrxGrFQGAOH65jocDRV95Wzt7d55CCWD7t7wq1juzIrYJk42eyU%2Feat62skwWMpaDyYleGEyCWO2q4lt4aF1dIRYbzn%2BzwwjNqMpoZB4Zvc6ot7x%2Bh4o6WZFq2lQOM49wBktHaVnQWFZd6%2Bp6fie31r4ciGCap1gGVOJqw7lU3vSSvC7FHBQU5Lw2e&X-Amz-Signature=51195425a4faae2d987d86768633d0d8c5a5adcc140334aba099f6807db578be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


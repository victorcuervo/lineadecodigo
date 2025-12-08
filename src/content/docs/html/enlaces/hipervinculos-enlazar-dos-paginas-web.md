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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZJTP2D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAaYbQs1Piw9uRR4wLHWP0iuPIsaRQDfBhTMZ17%2Fa%2F3gIgXaCQL2%2BnLtG7OJ1sezEsxxhf32UU6QNhu8ifvUkk6CgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8KIj4fi6CTA3WQMCrcAx7WPfmr6bzpqspYT4MDLx7T7lFgyTyn8yA3GQnjSxYEF%2BRshyjgdsyz%2FwbyHNyGFk9Yc%2FZhy8r%2FDPqyuE9wvVGKIKZTlQsJ4bsROCo%2FJH%2BWu7%2FFzXK53OrosEKOjM%2BvGNvTX8pP3e6RpWCtO8y0TQcNKv5DWlCKgIsxcxuYKnANcznv2W8Fe6tCRTmOCaAQEu8WOFA431wXw2ArAb2zUl9wtJ2FOVxHtjTKETlXp4iytwu1Z%2FB1t6ODfe2ntNgUWFa0GmP9ywutvwmS%2FQDU12QRt4ILVWHZhcCLfiTpEFYF4p1FK5D%2FOLN6RBtdCb3b2slSGi6yJ3R2YrDXnFB4Kx0I%2B%2BCMvR8qoj5pP1gv9nuo78suTNhKZA1DDHwI8%2BiYE%2FZ7cqOkKZcGfUZTXqinmYWc07Gkb1tMrr4OqJVtGnr8AQpCwbnLhTOmKN4xRgOD%2FPRmx6IOzvfmTkzNJ6nFiwzN%2FZMjO3La%2BKCEtNbi4wLpPwHTHkx%2FbY3NKQDZJdHUOJ%2F%2BNKUvxWYjf6Rbj27MZiNqlWXeAc2baSPvYKcBJuHZdiQn%2FXMBNW4KyO89jhrRE2oQHeY%2F%2F7VxBbpKlv1jT9eGQJ1c5k9bjTdWduz1Pyd61PbWT%2BSdd%2FK71jUBMOjt2ckGOqUBVg9EzQQZIjJGosbI5Dc03Ndu0Yhv6NrMxiGNHVfbHJTbuD9Xt3clQ9nTQOpzxDyAjnlF7otzN3pCH0XpRYnV2wRtB8xFgPBi7IJ%2B6%2BVo2h3sueZkMSW40nF4VZ6UOJUBhQa%2BIKOKMUI4nHwieTkzk6knErzV0Z2SokF5%2BUQbPJdf76Vmk8YI%2F2bd8pR3sx26DXBimUDefFdCLsATPMKrJ7iDl1Oj&X-Amz-Signature=4dbac2335319b481fdab6d88d97d84f6df3dfeb4a000c977a6e2372b526605c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


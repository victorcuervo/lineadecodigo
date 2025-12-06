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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJQFH5F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV213PEDk%2FvA3zFnbCRRcRm6Sk5IKEnjPQ81PDj2QIMAiB7UXaRfGwEP9wF1wFaGPym%2Fe6KlHjZQ8UKEm2AE6eGgir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIML4WykU3NkPIOYBvpKtwDW2Mj5ynEhnWxqoc%2Ba3Hk6YmDbA0686gBz22Ll9BVCZCoK2NauS8abyLAuCX8SI%2B4X3GnWW%2FP7dN926wo3Qj9TVuDqXFhR0fbRsbZpYSwQWRu%2BuH7A6M9%2FcJW8haAL86SHm7U19LYpT6dnTT%2F0gdiZlkY18RNrhpv2GyL4Ty14B1paQE6IoRoYr22vHqs%2BeIHbLZV8Gl1MW%2BpxIyW4JPB1bj54xflP%2BskkF93bCsF0zMkagXzYqY5wdR6waDk1Q%2Fmxi8qpBL0vuip1%2BuEz%2BPU9BaUzeJNbskEEtA%2BHQodtkAK8f8DWoeNqB%2FYnjO0kQNLbdV6WMN91wcp8KCiQ1fUm6EenSmJFd4Eyot6WPIsgs4k7l6SXW6lzlcIzvgYhCM%2BiqHHgHP1GJZtQgV5pd1OYaR77bOum%2FOgy%2Fn%2FW3ms%2Fy0QH%2B1tRPM24B9h%2BFcHI%2FnNxwN4MWobs5ykvwx9UNsHn03r1Ax%2F3mlbk7AZfuLTq%2FwSHne561Vx9lIuIvDlnfo%2BN7F0sYHf6KMdJETgE5Zqv576aUijMyioRG6phGGYXTABV2hXrHx7ihu1GtM715jacraM6zgst%2BUg2HpnnkLqC%2FUcZYYbqYkW3BhXP0CGp2FGZ%2F0fEmrvsMh374Qwo6bQyQY6pgEGS49pIGUN4cdZkc%2FYrafq%2FL6dc5yGX4%2FAPNDN0g03JpVeOZdlnbjmu8ckoGUt%2FMBoVRZJyxlukLkae60zkwoOt7Di%2BXBD94DLSWUZNYv2Cw%2B%2FJgO%2Fzeyws8wYNUlJcS%2BtpoCZ0r1EAeIvEVMeGVnLmaeXgg%2B4tfDDXFUF4OeWmTpKNbhRhJx9rWbaHze3PJP3SQXfTKrl%2BwXlcp23pSWMQG4kMyXW&X-Amz-Signature=2d4ba6d4ebd5c61389ec5e2555aa1e85683d4e4fa2033899a6cbe6ab3fde85f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


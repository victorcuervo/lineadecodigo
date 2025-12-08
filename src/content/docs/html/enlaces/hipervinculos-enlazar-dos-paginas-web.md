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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM4UXZYS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT49I6zLPCT5kESIlmF2Y5BqUwUO8%2Bjj6XK6kdba0BOgIgZ2UyKRIGlHwaAC4SwORVdTx9eHypGbEhEk6QvfVB6QwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErIXk8c%2BF7AL608JircA0FWvyfvUU1ylk3fOtLyFcdubfAy7oFXoWyurh%2BFqgbWT4vU%2FkaPj7GocEs6LfvMDdDLCPD4BEi1BkjbcP5%2FTCc91zFRo60SB3YMOgHKKg0eVGzwFdQfI3bEE1MmW9cXDnRj%2BwGcU5E9g6y%2BJMUpiKsBPCG4MY6Viy20uu8Zc36wF9up6afFBI1Z147%2BXD%2BUO%2BXs3xx9NivnCoiUbzfz5tPUWCsecw9gUSvDGpGoHnZYRZzrYy98NWEva03oiDNV3%2BFRmfdZH%2Fct1ZAyEtZ09Ejt68KrMsP2JkQx%2F2eud0RQ2nxiuFUB5yn7BmCAyXwDmX1VwCslKWXeskOuz4vVgNkV0l3jve0ZEWDEu9KZ%2FRNDqMJzn8qIt7LC1ASQFreGwnf0BwAWgDNsfRdG3vW%2BQMCz6d5flACQPCgxzXomZSaDUbbYRp6ZL6yls%2B73QpjaGxDr7vwlWG6eIu6K7LEYy7qz5rkB0J6AAeWhPQ1ZQ%2BX3%2Fp90b95JPFJU9WI%2Fwtyu0Mpt13TTMxNRkMjck9ERApqs4xmHDlJKiruMvYWgFefELyVzrD5gJPESP1YZiOW%2BDDoLo%2F5ovpvaDizp2dA7RLJdwGFH%2BqSvo7kIVtYonwl9pff3fXo%2B%2BQY9QyKKMLXR2MkGOqUBsDXkUBCtD9xfIqUqMRMESouhPnZtg6%2B8twbdWCtdJcYsU1tm6cof7BXpjMcMp1lbxIWQyHECtSsxwNfUfRb4iEeCUH1Hm1tDRFPmIX9%2BsCkLTLusHf5Nz6%2B5cIZknNnWXzYe98kF3XpzAsKgrV6vxWYj0JHUKSXgXklwB2FnFCW%2Fn6MdL4eERuW3i8KlagSC7tXrS%2FuCF1E6lNLDXiPLWCiXQ%2FRX&X-Amz-Signature=a7f370af6516aac872aa9a691b39c0346e614b2a72c1a6e51211b507862b4cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECT6A36%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuRoTBs1H5C8JwZkTPwyZnSFOqCutXzKlxjqIG3sI1ngIgB1MrfUS9pdNGCGdq%2FPBoatG2urEPJEj59d434ITLvGAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJVnT5KnCoMYv3tyircA%2FGyXWs594kjxLZ9i%2BGelT%2BzE%2BUUvF2LXmm9uVSrs6OjnqS%2BJnO7egdB0zGgqGVc%2FGhq56l%2BggI6%2BqNJLYqJk1zYEDsRj8nln6xHJ3dPzuvj1CgLD4VIUUVitVhzFcCBUewz%2FVyyoqC0nmnhDVCgYnsBuzm7EXPVrRwO19jxtGGONMQ3fqJJmMdOYwL%2FD01QN1OhJUT%2Fd8Vney1qvwgqgcOzI7PEw%2BPvLY7WJDG1sa%2BMWXBJWWzaUu9Q23J3Hfpy%2BgF4Up8tdjKTZE0iHCZwMm1GSm6CavKlmU2%2F33KDrMdnd2aW5gehkAMLoCxMJclTzv7NfGNeYOnm8JsEPFLZt%2Bm7lvp%2BG2B4e6afm76s5pbfU8sfny1Sb4qukDLCBSUcPs57jmWbkBTYDe9vd%2Bt7DYQb15xtJ6AiS5OeOfXTcDIFy16PKiuFUqu9%2BGmGAxtBjcAZOBcoMezfRjzhVTw%2BAchyCAcfUjc1gjwGHHgJVsGQi%2FYwMT9UFNRndmvJDVMrF16eWSbSLMDo8yKV%2Ff2hAWJV6r%2BQw%2FqRxnq6X%2FFGAK0Jthc0TtcpG7q7ny8mlm2IUAmJtBWNZYmIpqo95AWMV8uH%2BJdeHkyuunYrZhkdL%2FehVg4cTb0KfenQEaYYMLbk28kGOqUBMB4nnpbQZLNjrcQ3JYih7p34TXQWfDEDusCtqpGZKfvVS2cH71Q0k4q1UcBZMEmQ3yNaRgU81irLX5DZ9bx1gBEWbWSPt5qraufD8ld8saDvaBF7kzKp5kI8sWhv%2BzlJdfnMO%2B%2Bo3fhGVr4kNQKzAYrYkbZi8MhC2l4OpqIsA2dZ81k8h5ZIPEkoO2IHk%2FoJbT4oLquVcY41yfddogOfl8kie3Sz&X-Amz-Signature=8100da09fd2c53430c89c0ffa525fe4cf4af603ae3510bbe24f07633bb5fc151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YAPRQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfe1TaXEVRc1CHGP65jTdpPDCsPURGu%2FXySeFUGU9TYAiEAuBmRvl4SRKK6NOAajc48VMbNdv2od8hp496OQpyXDLwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiFbDIhwmnNtMeKCrcA1mkxe6Cj7o2hoMKSmXxtcOjgfChtMcQYVqqYbuqda2KwAs5ZpzhZgqmXbGtvlPHgDHAoAYli46eUj4K1o8CjG6MB%2BMZ4%2BhP3t%2F9YMOvI7JfvmRNAmZCjN9uwHfDYo54iPiB0T50O3w6aFJz5mwHNeo5KzriG%2BD5Qdvj5AV1qzOSfb%2BkgzsL11t48EmtCG%2Fh%2BGllXqirUHS7DlopYqqyI2U89GOX4YxaXhXRcaXx2am492tKcUl0A1hj9FcBpalubqfEQ0RvKC5qHldDQ0nX6p8ZMwg5GupqSshZndrHJT16gzMAiK%2FkWb9GrKe28vmdM05wRmGGHcTDZjyHe1Kz1at38nHStFb81uH9LJ6eOsnhAhpdbs2La1K93t%2FUVFmOUUR6bLpxnmP5PXeEbRSQPV49w69avX8Tbk2xPenZfY5GQuDoq4MVxf0P2jeVEbCS9JAZUNTc1LH4kko1Rcknb%2FtIxPOYGgCn89rcc%2F5neHxsQVwitu6B8dUnuOB5EOUx72gy1lG6wQPmZbISuZ%2BQiN%2Fbw46p6KhO9ktRgfapP3xY6NqS%2FilPTbj98iU8e9JxWvxEpiUOR9Z9HbD4PrC1ORWP4PKOKT0DTCWBXdFoB4RJVT%2B2CcDyL2ruj1syMOqZ1ckGOqUBFf6kfa6wwcNGrdY3tLky1moiLSPv7mhkabfNpC7OLnzO5hrYZVIp%2FqU%2B4sdXwu%2F5g4CAXfuep%2BO2V12luefi3x4wtswcC1a7KndRTZSqa4g2FIFSNwTdRrG1PwuJlAwJGfos1fVrCJj6sa5%2FqHHn867GLrayRzQXVGeubHP7lrGZCeUakCS36CMl0yHd95ySqUUtZAKVUfUssIlGuA6eupG9W6JS&X-Amz-Signature=e16189608eebc18ccb694d93752327e0b15e2260a3344ee183632b425f6c49c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


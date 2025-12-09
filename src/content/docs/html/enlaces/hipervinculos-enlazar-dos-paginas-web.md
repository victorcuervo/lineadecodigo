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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SRJOUL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDycMongdDYuUICM2H1%2FypN5zqk3rg6mBcB0rviKzjzlwIgFJ1382N%2F8ygOZd6KRRMCtwuMfRLebXVoWbtEX8Ll3JgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B2yz9QxqVJ84q3ZircA4eBMcnsLiJk%2BFUi4s6wjSUNE0O9HxJn8Pdv%2FZhlwxr6QmhDEdf65NBw5hl9fwxllto68oHXzkUi%2BpA7xEUxOtJiLTPcnRoUJZ4yBAHLAf%2FaZCbjB1Dcr7%2F4x67wHPTiQrMkxQZSh3ZrAY8Zi42g445j2dGtZAGGSXXGX8Z4w3Ea8zIgKHF3El8VWxwx2m0KJadNc7KqOKov%2FaSPqjlxrMFC8J1F6RoVRm3M1SNnJo7DQ2y%2FH8%2FohnQHsCt0OMlmPZ0cQlcSf0vLOfrTJxI3YSm%2FqA4%2FlQ5ngNNRooJ1dsPVph9hRRH1xpXCYW5Rpb%2Bj0bfNz7jjfVdiF5j9zMStaVQ3uMakOMlCGGntcRvJS38UO%2BPJEM50rthzUkCHQ10GA%2B5%2BcgFKETrXRtYARpReAqP9UGBbLgoF9chgg4EpugVhht67wwHBSt%2BsmGrQWwpEyNcr5f9oKVzA%2BYFCftU6zdaZiwCHF4KkZCBJOwyu1BKpFiOnwiatOnArHBwcBY5q26kQanvG0w47KmZfeZW%2F1hvr81iVL3ApsakEO4B2EAsbZODIkJ6Jnxs5w%2FFzzel1i1eD7CMiHPIb5SruC0cK0GDNl5fc8ft6bSjw3K2KeUlJ0xzY8izQUgPg05ZVMKjD38kGOqUBAhaGNupmiPRqRDHZQovAL9xUHegjeGN558hL4%2FAKFXk%2BevGzi1QcPPiXtQW9CzTsqllvnAxKI8p14E%2FdC3sGBS%2BxmQE9zph5RsxUUWJSJZw3UaVPRxiPWwwycJGDjTJsu8u%2BHdyvHToFvpv03lj3Ah2NnX64kE5HTyz0GRZBUA2ZRWDJv38Dnhrj2L8yBS7adjquww5r360mRdyCgyfKxzfGs%2BlB&X-Amz-Signature=bc9412e68407039276cf4abcaadb7ba46e8dd49ec9e1adad8e6412a8261d10c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


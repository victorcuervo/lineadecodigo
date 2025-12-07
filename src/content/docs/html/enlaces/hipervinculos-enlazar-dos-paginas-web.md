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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXR4RHKJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoSxygwRgtLEoeGnlieTYs9XLrMKIbgv%2BOSZeY3RauMAiEAlRr%2BhNCJ434o8McIaSCD30ilp6TBfj1c%2Bfzjdbd4UsoqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8B%2FM5MGyBBaVZP6yrcA%2F18pNeTJJ2lDzu%2FdwUtdn4UzaluWSot3BkfbA%2Fhyy7fVoQv8MDhmB6m72DN%2FqxVRKsGcQ%2FiCSmeX4gYLJ%2BJ%2F0i2KEIZFzycjcykYh6xUq1u%2BEVS0SujMR01YxR0O4BAx44%2Bf96nbZVQllU5CJJr%2FOCkZqoNPO2VuRS8r5pu4sQP0CH7W%2FEAENIlhfr6o11nDREjVm7h9vmgX08Jqf5RctFxWRbB%2BuEu%2Bi7vt%2Fr8NMCQBDLKFGqyLxEAUk04oQU4Se%2BNP1oHdg3wZVKnOm2DUmbjRpWzxgaD%2BTtC2k0eOCM2QvHLl9it2wOTV9%2BznoGYybvlcLqQ8j5CiVu2bIl1sz1pB5Q5izYH9wS3gvRvRbXJViXLT1vk3q8zGd1LYZlqnSAgPhOGcivsSTFd7QzGEMHAMtRo6Dzry0HCEGetVERS7R8Sr8b7f06q3TcSDA1w5SJtXBAot3%2F5rjfPWH0v6SEYZu0eBE6wt4GbbHgcM0WxIqKjO89eTpPlfa9UpY4OtacUB4akOebxlt%2B%2BXE4IMtJ%2BQlh154Pmg1CxFhIRmlRIVkp%2FhDEC6cn6ztkgYk6Wf1A33ZD2s75N2kRMuRUJeazYEI4X%2BkUDAx4mExOtHwPPxpWdgngdGSkOdqDSMKu71skGOqUBkFmrnSj0ovx4yuwCRgHj44f7C6TjNEAIq4N7HbQeUE9SjfrHY0jkK2rVOEPeETLp%2BOFM7cjnxXr%2F4K2RGFzY%2BRHUnw%2BZIqvrxdCrUGE4NkDVKkz3LmVCQLYxiftb9Lzldrsr8Ci4AOPQhMcohsMr8LiAM5ZD2c9I1zZss0XhM768CrEB9WprXMg7hAx%2BOE%2BXIvdQZY3U9Wd5k6XAOCmNv6219bmH&X-Amz-Signature=fc2d74547703b28bdc11bce5f0a8bd768d961bf936db6d1bb317c51ccd1a015e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


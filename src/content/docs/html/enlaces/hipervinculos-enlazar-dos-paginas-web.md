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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SUFRYWS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T230034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCliVWFETDq5Rjr%2FmEtjFJTpqAGmyddOkIJNyeqlgAXwQIgE6NTRutR0TTUjDJ%2F619Y0DqR5vIjQ9q%2BW3euhxSz2AgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEdt9VQl%2BN%2F12ltvCrcAy2WABTdpCVK0z%2Fo6wH8kP0SWXPKxb6a5%2FvIQFwGVDfe5IKH840pqacf8seBSnBVJNj%2B%2BTIV%2F%2F1sDUvfgWKtG0KgvEyCHicg0MzXWIlfEYPDyp4qr0URVeABnIeQ8N5VUnAMFtg8M092AV9Avf2EiUNEiSsMvk93bVnQJzXWL%2BvjRaHSlkpRD9b9kbug8tAbJiYuRE0HWMi986JwYeNa9rZi2T%2FXxU4%2BVh1%2FX9XSVciy6tCQnQEtaKXWJ09wkRJCSYQi2WaPpIfTBq24L4OXgToVIfO7safOyGAj4tc89vjCJ5xZdOD9EwYOfkSBqY3ic7tehGvIJD5mPRiQsdcFqLF%2FFG%2Ffnp0tsSIgP9AMI3%2FAwM6s0pA0ov%2Bfhvp7ivM77trr5tz%2FdOA0nH%2FB6wmsIudg4780BhT5lQhE31pDY17mQemNuAPbxyXpEGjtSR9qSQvrF%2FpQyaii%2FoHLOt%2F4RTRyRTHNRtDCxqmCIvZNBpJnE5Wm8vj%2FYPv18jYPpnGgxel1XgtiqWELPqIq72TSYysFfIzAPscLXuWTqvyuMghyVOWaH3O9xIuOyJcdB5JDIf%2BreCMMQRQOLpJ7auTHbsTm1rsC8NZ60kCq7pbkw3id0G7qMQ2nX1CL7LiWMPXD4skGOqUB24lPdUHm9e54g63JNgIrdBYNryYcqbvB1m3%2FtQezbjnyCUk7emyJ%2F9P2ikZQhl1xbVoVFfpKGdkMDUTKvtSTmuhK%2BlA%2BJ%2Fq4kLdF%2FzKIWvSN7cE268J%2BK0WNQEWei%2FlNjubBY2lV0XppjcnTF%2FrOWO8X6IcRAGRAzb38FOy%2FdAwfnSyJpTl1kr%2F%2B0rk78467TbFQGEoePotbrTDLk8Dm9iHBf4x6&X-Amz-Signature=607f2ceec53734ab7fb8ee15b75561f93d692ec666572b6f2f2746d35357ebf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


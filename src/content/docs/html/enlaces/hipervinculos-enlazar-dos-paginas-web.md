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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEE5M2R4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCghjUYPdCDOl79X%2Bf9Qz18C9UMW1ubg6l5UioPb2J6CgIhAPNUxSXLDxyapSjAkkpMiyKMxrJbifrYecHB%2BSW2tlJXKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxHPy3%2F%2B9LI1Uj0AMq3ANbq1rATrCWbUu6tJ8l2Ud8Bytu%2B2oB9TP1GSyCe86cnXqo08UD5ygb9wUOIwojGGYl1y7%2Fg%2FnFlMuxVIZDbvaj2n8OlcsRvFTghYek0jIw%2FVppV%2BtD3XdBDXbigT1X7iQ30a%2Fell%2Bi7uMPzv1rELzzdM3bpIsvd0mvy9xKxx%2BIWVAYT2PEogVttqNVIuoCxoY5lsAtFULiFbYYey132QbFmgJBMwPhctGBhxx9L9noJqg3codSQ%2F22Og%2Fkvr5%2F6rSTK8wuvISAYTdRhIG7c9u04F%2F2YWRvfIqKx7PpzEuqc7nf6Qy1f92EpQtHAiM3JBag%2B9hPxp125xjHFiWk3rwMhZjxvEoTtAR%2B09FwFh4%2Bgf7sbONNTzrI1RM%2BQ1B6E%2FRRvMdOrdtcFu3fXkWGkNncmsua%2FPQ%2FAdaLZQcTgiKf%2F6vQwrHLm3xvneNwfBD7s%2FOKI3QGjU3XxAmsYITi0FHzfasTnbkbZZJJBsWdFoISGelc32UsC5LDHGtA8VPnTFC%2BsrFRiwQPNR%2BvUj2ClTFnq59lFyz%2FrNtqk%2BNlkOUgfqIfxDPWYCF9tH7p%2FjvgUKysWJxZZY2FaZ1%2FlJ%2FEpf0RfS%2Fx6XO1%2BIufB3lHQjdMpgqjtaM4bCaPvmH1DzCpmdTJBjqkAbmToBdbAV3duxDnRtX%2BrGEbw4YxwKyBQQnHnu7NVUgZH2Dp4iPvfwsmfwy7d6BQhJ0MBKfSLTDCT9JUWRWBYaov2sta%2Baaz40oTXxhOCdCryZ2cev39ov8v4N6rnzdeyfqPUTw2WxxTTmvOngYLMYDAG7ZPUUf%2BzScd8x2xL8scF6LnY61mXnp0ujtngFb6ad7QZkYgZ7YMv1dBpcgIznJ%2Bcvhx&X-Amz-Signature=4611c0b16490bbc4a3d2fe7fb66ad49212a0225bb07d3064422e85cbe2aef75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTZVQBA5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm38%2FKmYbsmeWox5YN%2Bxn12evX5uxdq%2F3vxQosMfxAJAIgDaqhczXDtxUAQZBoL2yRO4hxtFFFukz9IxLzyLsbrosq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDI5OF%2Bv0dKHbg23RFyrcA7xJgrnN3bghVBvfzEEznU3RMWn5mEDTiI2R5l9qU7bA74V0tqjCRheWeTJPRuO265dlilZDJMVwK0AV76iqUe2rFZd499Upap5tvcbd8aX7Vy4mYS2puhfPNEMNf4M2DH3CedNR9b%2BUD5XcYJMRyGU%2F6g7LXWX43o%2BsmedCFUGATZ0oaKtI%2F3YddO%2FEdI0Oar2qXrrX2vuu4f0LWFsAqf0S4a%2FooeYC%2F9pj4YjdiZSx1vvIgl9aMt70YTCLhcF1nY6SoO%2FyRXerVSLSSkv01dfNAgm9RDEDXLRqCYIzH%2FCMelxZdVR%2FA01PCG3n4HpssbdZcFgYJWH10O3GDl0EMI3vaDm0eRuuzC9gPG2pnPNefg6Be3pwIZ%2BTZRdG%2FlMmCYDJOY%2BBOAuOq8Xgy7AjdYVOlGUni%2FJOFsfuhRtDHcd3OZAFHcaDiDS5ZwmDbSOtJ2g%2Fmf5qqtzy0tv4sXLJejXhvzttaKRUeYD8fsFY7P2xXLlTF83k8q350ZJevQ650P6fi07rf%2FL7GXC8GdyXbaZ05lokt5geUbqT6qgzCwjB8bFUaFwKSW1GhpZ5Tf5Qs8DD8LtkHTr5oRbvJIZMRZKItxA1QPM3iR5nV17pTWgVxf%2F5R5QVs%2BpO6DqNMJ%2FQyskGOqUBWSOgpK3hp6WgaP3NnhaIFdyqR6iQqshNl8baKdpqHOoUduLsZqL8vYck59OboyaO1ygYbMGl2Ese%2FKwlCXwSIpOymq2q%2BBMQH9Y4ENcowDzkRSnofQvRIDtUjVQ6XfT%2BcsRcYPFhnX9T5wM%2BvH37rB8RAVfAeJeDWgxsSUwhL1vOB8PLFVNWwa1mgmYdbNAr1wqVySGqy2buGPb10Vig7AjbR%2FpH&X-Amz-Signature=1691b72270453e7ec05180d4719adb9831593fc48ddd102b61ba3b43cc62c07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


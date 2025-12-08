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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHAG3RF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfsEEbPKsIPcSf28d%2B%2FDyPCSr760mDDtEnIvI8B8KjgAIgawtcCbATHj4EzR%2BJ2pPf5f%2B%2FO16HbPyXXItG8cTjbQ0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPthvnGB8sRlC4rHvSrcA%2BC2j1bhzD2kcaIanFKnhUzCrHdYfxb7UHP3vh%2B0j3iW1u%2Fp7MsKbMARmvAyNLV%2FYe3Lyxtbg0RMwa0VuZK%2FojlAbhWmiFSvlsyCoEDeucAyxVZ20XmzCJC%2BLN5XXkJzrEuiD6nMOhdAe76DSBqjm8qHluSCZN%2BI0ZPLGGqyw%2Fz3gsQrPWTL5IFT7wcgT2foUL%2F3zoiPxoger%2BR4SRJ5D7N4eqGzOItn34m1YAWCd0SzjeJSZ7xdz6TjzVyzT7jTuup9bVFwhtvJFGq0IwJiSY5az1lrL3Q59tG%2BhAgMZ5mZ42C1mN1S%2FhcEJPQE%2Fa75ufJ6zr%2FIEkoKLwu5W4jR88sh3ha2jaU20Cj9q0p30n63AZXK00pdpxY%2BdHwuFk%2FGiiHr%2FIKlVkCK4C5hUSivWAffQGDm3twfB1l%2FPmt0Dn5E8gSap4LllPXFBPHR66JvHocB9tzjZE3zH9N5FBx%2FTBf%2BNeYAfbOl20E1FVr%2BdlUYjLQKE9Apmj%2Fzo319iM6OL5%2FpYw%2FDKn4wPQZb9qtWvE%2B4SgAO8Go5rs11DohDi5cwFYGslEWAl1uESi28FP48v%2B3TpF%2B022k12I0HV5Dd5iqMqr%2FQGP3B9uQLbO6m6qTVK3msrggEzjGHYNCGMJvu2ckGOqUBSObmokSjIhFnBgUDwB6NI8wLRVR3APFQExPlXMEiGl9Bz9nUocuY3OLrudFS77w4z2CFdT%2F7TUxuYwB43TTq%2FB6kYPo8j2Mwer%2FTGuF2WT5yHJk9A5EqXx4EAytPUiOSMMONkIhztRfepJ%2B2ORmmE1aR30q6EQ%2Fx65GW2rvrVfnjXEepc6107kOrEJvQxkuhp8Dn7x%2FXONWaR2EYVDdaLxCkpx1J&X-Amz-Signature=8e235f99063368dd65d4960b5a38a927315ecbcff49b7523b3a00e1aa3448142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


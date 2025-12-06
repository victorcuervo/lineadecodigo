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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZNVHNF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmoLjlcYxdW3zGEwogz2PW1XCSZm%2BtN3hFLqB%2BXBNCkAiEA%2BlfXwhIr46w%2FhJYYN%2FURvYqgTl6EdP9R8G7fgVHeocoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDB2P1iD1CtVJsmC3sCrcA%2F393x%2F4quZ7GY0vJfY6zoDtZr4IZWGFLpvbcOm9Wt%2Ffq5UqlZOnwmPFhmgsaCb2ov3GnvSsQfdKL95nwncaCR9jEIpQmWxP8MhDgpzPOFbdMSuyX7oBorPFerEBzfyflN%2FxnNYLR9GWXHn1Io591ik%2F%2BHHyc%2FRontuXtpoCLTRCmtP%2FkALgd8HD%2FxVgHxZQde2zHrvVtPF2vdmTyzsxPZeTHHXIlTrTq%2BOugMf6trXBEhwrKJotI9RdcsW4WUuAbLn6WgQ8C8LaMY9E0aqpBuHAGbF0zr3alFBHr0%2Bv1SbMK84GvI37%2BfIClRCmw9ovs1ThnutDSn%2F9lZ0gnnGO%2BKMA5LbcepafRK23MYGYZ6MPHaU8u8Wegbc0EVV9jFn05meXZT4maeGVYpFhuLvkUpEfX%2F%2FlagkT2%2BHimFex4tsV90SpqosWYD5Wxcz1yzsyuLtwq2AjGRC2I0tRvjrRBr4FgURe7txhncPHLja6GKnoJK%2B%2F8uQ9P4%2FjDMRyM5gcCKF2GW8anE0tgsiJC0MHaHCMKfHhE6TWbRDhyOZYtOAMQaJrOg%2BPaA4Ke92tl92T5PtYWXcSF0BDo3HHtFxLAHvdgwMOTj0ulz1G%2F3n2UNAkWUpdbL1mlB41fy3xMLqm0MkGOqUB%2B8KQbIjadtgr4IR17w2tDJlwO6nB%2FRr53aWOtr0tmREB1bWJXRUNeqBF16BIHC6ikukZ7uRtum%2Bwyd%2F6v34FozFmQELmioMOSC12iyPdMQmLN8gwRVHp7G7l3BWEQiavBj6nn06YqoscRFn%2F3Gdgxw0jRywNzQ11DrjcehkHx0r2YWhGdGR0TOfZt0Ctc1JWZwwfFDBrGbPqGedzqqu3ckaJZfw6&X-Amz-Signature=cab54e9e14230bcfc9b5418e5b517092eed5424486a9c1e40862bfe889c170dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


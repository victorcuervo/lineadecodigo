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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VDNQON4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVHIpifJGx%2B8clq%2FMcm2UqiogeUcJo9XqQL8ZMUtSDjAiBaBmVndcZBs3YML9AiVQH7X4otcdp23YUjSxtDQv8YLyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbII9buVO0uiFm8t0KtwDHQdKJOGTS43mHco9LknmO%2B4560usiReaZl2FfZ6LO8JIdPhIx2L4001tWBDj9ayDAHynIpnpkrg201fqm1mlgmy1t6gEuDl1X7S3zS1OMOWySImum11nEGUKkwOsLS5pnGsAMhplOp65kTqtTtu%2FmVALQCCkVXSpVAzMzbB42SVJYqOvc3qxmY%2BDA9jqIuBRiVM6t%2FP6juasLNvg%2BMn%2F%2BOVNCfZUQfkL4qdzhHCsBfio%2FKSeAOWdt1KNwe2YqzBD0xDVxS%2BqGAb94tYhHtrVwNATWvaT%2FiYuhVCkJgRXaFU%2Bvaazvxcdkc6m2FAW%2FWuOxyE0LKXsL4koYK9IEGKjtISotV4cCcmrODcwP47VnS2jrkdWOmPJzMYz3wTvzh5xGQEpj8WXAFlx%2BKu1FH9B4OIbPMxwMKZpmF3lohTsLQ8k1qPqs16GBFepCDPEXVSAVs9ee919211ThUHBK2UCa5%2Br0d3b927KUrwL4nXDcIhOrB8LwM9fbUwWcCFPiWGJJdTpDLmz8LZm%2F%2F2PtraAU4h3I1k%2FCMvcR1%2FxkgYlqMlYWBsK7ozGkIvkEWSemuC91UkinqNytvS0hFWt35DgwulwPb4IevQdzzGta8Mb7TN5%2F5gM47Wfk9gVn0QwiajXyQY6pgEGIu1EhuSDAV%2FMqQaVdshhbqsb2zb60LBSyhNymH6upmm9CZzBr4rvX3HGyl8xoLTwD6Wgn0jyln%2B8gianjPiMiN64OAKWqyVbuk8VNS8mDDXieuJmP3ToIiQbO8WK78rZ3QXEn7Gmeli9fZoI%2FjCiBx%2Bpi3THTNzjFe37a7IixJwMPaOc%2F7Ir5vWqEnW71tdQa0odH8MzlE6pfXvlytirb4S9GjKz&X-Amz-Signature=a6fb264b36e23823e2aa364b0fa176e39510194bebe62e63fd9a3f022d11f5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


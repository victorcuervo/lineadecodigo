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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6LOPGLD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw3J%2FDjyhfI5DqXoDX8rCLOi3d%2BR0jUIDLW8N4r8eVoAiEAxqy0uPaBguZLu%2BiGT8letZeVxoVV5L750LK%2BrBzbGqsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDN%2Fw2jf36PG%2B%2FYrCuCrcAw6F5nPQ4rl%2B6Y8MTXonMV9eiMXPT6FCcrw0smEB9Ps1w%2BsAgKbiiFGehYLOJ6WOaDcOfVFVdRviThJ4M5Uyh4SDXDac7sL3X4RR8Sp7f0C9ObTQ0Jj7DCz8UXnRWbRz%2BfrmoqjtQtPD%2F987V14zmAcKp7f%2BZPC8IfLTjIvtRW0XOP6TLYgoZZripz929TVfzjYcrOIn%2FOvL63Vbohf9JpCnx5oZoTNnMN7gaEY7WAT302HU%2FuJvB%2BUo8Lr1mFsPzbF9bJcEYp1%2BlXF8jw%2B24xog59aPogfSZenaCE7P3kH6Yi9YlZRRlRH9CFci6kW1hmL2%2FH3TQk73jaRCoKW1pNdOUL7cIRO0a5j1u9WmvoRxL%2B0M4En%2FhDbctMQBrgOhhTuYBTbbI1PPhHhHbz8wZIouwg%2Fe0UhdF6RLi399O2mhCmGZodhY69ENQ5gYHBMbgG61f%2BsXaSPBiuF5sUb8SWxxMKjY2zyfoWEBopMiaoBBYaDp0n4%2FPt0AZ4GatZEH6MP4jIoEaq0KeUpBHwsrUK%2BKb82uot0zuOMP1TiH%2FmbirwZ%2B6exvDVGblITrISrpatizSPEmSdB0VvDvzSo7tDyuhyVTQLTHFchHKO6CoMBdcNT7bjgCkknvW8DnMO3tzMkGOqUB0nJ5a0NYrJset1Hvy6by%2BlWjc63GpSL%2BLTfbW2WNCBqNxHrGsHTML7ciY56XZHJvEWaeHzCUEXOYI58nEyyPRC%2BdedWtCsIbxwWKwkxnH1YjzE9jSL%2BpTulw9z3jGbuGcPl50XEiukFug1c94Tf0t0C7Imf%2B7hhqi30y357IpyzGZNSCGOUvIIK4UfvfGXmEDhqSzYtvyWyfyOznzqu9dQ%2BMb4kV&X-Amz-Signature=0dc9e23ee885487b7d796f6923080eacc5e644ed1efca4c03e07731becafb21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


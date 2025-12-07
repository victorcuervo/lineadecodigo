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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7THZLQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnWshkDyuUsRd%2BYf345FmFq%2BZp%2BGXGwumqT2ow84cfYAiEA7IPXkDjk0Bn8uZz1hY0xLfLKFjVmmXdRa2xmRXOcNMYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5s4l75DbX3SEz%2F9CrcA2%2FDBQq1D%2BKVH64QrKjS%2B5UfsPMjh9llYjyTBH7%2Bc7JGjt0%2FEOh%2B9%2FjiyotLF8030bdAzsKd5moLcGEnYO%2BL45dwJxbEBcISvyCBdbDlOrjidwKV1C9Exs0abbkeW6sn3O9i%2FJvl4toNFtS1HQ22LKTbspyfKaRPuxdH5dJWSk9jaZ87FA9z10sLB6z5iAOAtD45qMZcXhfXBlviUSx7qMBIk0OsfctkwwDkVi8V%2Bpl4PcVeoecFOCQJ8bNUr6TT8VUmDc%2BNgsm2hgrrGMVqI76cxcow0HQMjGQozk%2BQGfnki4Axtn3pFHUtT1umCJaOy8mn4HICZOKPzcxUCAEpPHIy6BNhby0RYQf8tPqmmb%2BmZVAxM%2BQP9mkKVZaQ2CfRkbu2QxgAWV%2FVMd4Tuh3Vw4ypqrfqF144xQGWPyVKeG3J1w0udxvKZzc7epPO1CeM9BXFIu0oxo4Qm71cMIMa6L7da%2FkUl8fOzpiP9Q0CoeGdjJKoq6zgV7dNb%2FP72L%2FlY2Y5tFFGv84ZR44uQS%2BwTd9Qz6lVoTrCDXE0mBGOpbBioSSRp9JundFE8xCCFsSqf9fyqR9MpIGKEmXS294m%2BKhUErEy6PHoIg8Kew0vxGrmClJywCBe%2B0GNHcYIMLj90skGOqUB08eJJZC3mDct43SO8zA0RnyRujKkbnWtiNJ5r21%2B8TPoUgAXxFpW%2FSBPSg%2FGzbzJANw8stF%2BRZzcRR878ZOQz7qjJVe%2F16Qm0H8etq3X%2BiDuhtK03GxQqlpA3cjbpFM%2BXD3kLEYA51SrkixmBjKM7NzNZxFHkv%2B8axAQZGL1Tow%2Blrv1u0p3YfE2Z0UXHCBCvx1aGG7V78Dshqdg4%2Bg5yb6keJc7&X-Amz-Signature=23986154dd0120be44a316c62b81222cc05b3724063416551c7aa8a6f253c79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


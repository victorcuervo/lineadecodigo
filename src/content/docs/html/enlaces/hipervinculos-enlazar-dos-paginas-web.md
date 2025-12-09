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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LKYIILV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZNUVAJ5qWROMKNESofCXbDLmLGohWG5pkhBE6z0S%2FJgIgFUkirsy7MzO%2FvzV5BUiyqTnof%2F1j9NpUAheoEonFz98qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeZzF%2BZY8w2zc2k2yrcA1sKXBW4S8YLpmB%2BxriZRbhVhIF7%2Bl2oYi83QhUopqOdsntOzg2o0XBAydc6d97yPOdLdWw65378yzOiMq%2FvFSNYBNVnXtGMxmSZXVHeR6CjiNcSjYHZHiXkezIym%2BXmRc%2BPWWbQl%2F9R9z7uSL0tFRdrRmbuVk3HRgs2TLfdu%2FcAMLUv7D0RAkAMoqso6BcZwqrOpIgJU42YUOnJ8XqxAfYW8kUU4gwwVoqAYAYJ6HC9vPL1MyUjPWZtlAcltVNifyGYmqHZlz8M1dL%2BunnF4DzRXHcQQ3gSaYN9L5kVmNeKe%2Fs298QOoMSgrQ8ijDzRYw6DLP19Q6ofSPZrBVrvNLJpcNylb4Y78LkzIMummURdVAfzeMsaMA%2FPII80SLcmr4XFNHBenzotH%2BwpXPgf%2FwVeeY8eoo1Vmmo%2FMoViZHa71EJFKNUZFZBK8Hsj7si1gZubvwB5pJuLLZ0dguopdkioYQtfPe3JJrP4Y5DMkqtE0klBXOL3W1TTXv%2BKOpEkY77UVuNy3BgJ4CCubf9VfHUdyw%2FmIvGw1C9mgfAWUvGMpPUWad86Ni1mi1ofVJa%2Bq2qoR4gyYgY842GlqF95ERhL0RwEZ2jpGzHtDHPaICyQu7K9KONuk8%2BQyapDMP6X4ckGOqUBvR10CDnlcHX1xZOEVjfjBhu7HHMvfPvqUsy6GV5XeUypK0SKg%2BuFrJq94KGzrk5mKQdE%2Bio24Pm63W0xDj29oBKcd4uhtN3PGXwubwWR%2Bcvy04vcPTqDOAjizR1pCrm%2B0z2HOA3o0RSwrbwYfFu3rgLCz%2F9WkN6f8rjHDoaqPLkCBs3Sehkgo7LSoTmSBI06FVUNqyntvVnH7us8aADzEeFW0Npn&X-Amz-Signature=60c854e434b25b17572616fae38cf783389e47e4d915084a29625e96d9d9097c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


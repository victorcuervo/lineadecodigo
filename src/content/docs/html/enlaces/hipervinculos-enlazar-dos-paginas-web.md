---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KFKELD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD%2FhbDetq3V3MzJNdXS6Q7CRtzBPeycayMlF%2BY0n1U55gIgUiMKqWw5WqRXnzGRz7W%2B%2FJEoLo5H0ttsGjkHcODzka8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI9hlKREf55%2B8%2FmogircA0CHtSWrcxmC6wKMjteWNvPPukLbLH9htrYrPjBuVV1Kp12wLiV8KS%2FhuIjzxRutPfruw4s1a8m5De4s74J8Izzog4Ro3OezbHwEIiWoCz9MPFSpUDmWiCyAhENVwhNPZp38%2FGTwcABYd9ldeY6vzDFOKcb8xMlhu3L2eUxAojHzpNDijBqiLgnuyOQNaOK7b%2BjG93xkm7PMs9W9Z93rvsSexEx%2Bv0m6fa5xwSQHwrL0GwqVFp1y5IxHTMa4%2BEH%2F4kkuXrp34XqCOHj2oudser8b6uGtkYGfRMbi%2F3CyU9naZbiKmySynK8ekv8yFI8sUsd%2BP86uOk2n8upMcTGzBNzcADQfpeHj0jokeAG%2FGD4LneLXOt30aVyUZPLmzgi8qR4Bsramtt4YWwrJ8GARL3fe5R4C5gUACMIfaG76L%2FnOk2aKi1YhUN61E28MIBZk5JEdhG20M7ZBKvamz55uEXTitIkfb6a%2FX0ndNjPVtg2MarNWUQmo05pz2VlVWPr89ciKCQJyyFE03wujeuG7YAATxVF0vvtVBGIZBaYFEoHvxdajRLvn02WFqMzn0aEK4UVyEhQA7vBXXmGJ0A1wdNyW%2FRxjS8tsJWz2PskpFDZf4eTtEVtK8qAHdfo0MPbUw8kGOqUBLu3u%2Fjwk1uygJGssBqa7Cym90ui8GmmVFkmhyHD65hlPtRa%2Bw%2Bvj01pOseaF%2F8xR3DcYNO6g2Q1E5%2FhAtZtEuGSeLkv%2BrNRkjKLdDxMa4YXpSD8Ollt%2FWkp%2BJICov9boQDxK78RzINeWzMIIsrvXeE%2BX701lhpH5KRXG9P8aTAD4XxVQeYZR2FdhJhOpxBtXnjK4wkzGNV7XAAwcBqU2YEEqZ1Hv&X-Amz-Signature=98542ed1b09f0a5f662bd09d5699bac6ad38757a469fcc5e4b7df85d2090f165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LRYPLBN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuj8yqRJ4zRiOH9S19G5tyiDZec8rif34nxuc4ZfsGGAiAdhXO3dOIN2KP9hwzQ3b9VFDpL1Ev80mpXwdEdKxuPfyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMe3%2FXJ96%2BIiuCTt04KtwDNQ17Xqx1pCFunhIlt27odFImoSzFVQ9fFFbcrs7AhjJOnGp4q30vYQOyISYnxVabE3RLW46AzNxHgfGEAh2KVKChdTVI%2FvNPD0rzHfhcD3dBl33L1Etfmsw24FnAoXs2Xmv1a3iK46TGkMWMmogyimwORaYn%2Bf7QcpTnk%2BTK4DBTzl%2B27tsxlc3%2BM8iWYsTZsRRPh%2B7AxtNzWhK8mMidv5AWxsVE4t4liKbLycqWgriX%2BB%2BPorbt4EUxTdHedTBHLguDHf%2BcVFMqwOoAtMFWn5eDN1QH37FD941qzFDt6rI%2FGCM0pkM7HidUH43nhNILai7QMtYcEbzpXPZG9hmw3qpJ75G4y0L1mCP3BX8g3xuxsWGaAOIfd5HuDq4Zdv1V8kQ7oe0U%2FHgBKI3d81OrTPVnhnKibRidLoteMfQvAjbeewHeQxPDhxeD5VRL4myNweaiw9aTcgZaNG9hzl%2BfRLJfQnx48f9dFPvtzC%2Ffr4WuQO05ed7XO%2FXAU2%2BGUSEsHdvsG0TYhdDgqYjK9ha5T2eUIL9vKEWlQbKF8lie%2BBDonG0Cg9x9mKaIeLesclHUHLN4wC1OoQOoS59NTBoafXeKJCcXdiLvS3yICk8du0oolHozQ9Ka5hbfqGUwhJ%2FPyQY6pgE7SIBEQJxmAEiGsk2Isfg03mEFaF5vCpzDsegmjtVylBJPj9hfXAVE38XnaPW8X48VdqHM%2F9N50aqhLG1WYxGMfcqqVmiaN46TaDI807nu94F%2FZC0RuLibHrQOlAJRaRTH%2BMlm8XIyJ9Nf8cRCA7wThExQFSktMoKgMJJmcZ0ziu3%2BugxrRl7dUmTBog6iBX%2B%2BevuthbFCjqZCvJSHI8qDOiXpWrkA&X-Amz-Signature=3246ff9e33f07a9cb20367755ff748b633d6d2c4f5c98946bb878156bd117baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


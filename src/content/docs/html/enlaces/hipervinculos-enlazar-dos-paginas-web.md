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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR77PUAV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNNJJaBRxe3O64kfiR0t5xoiRCYmsIHwWuzD2nUmpH8wIgLeKzWx6AMtNjxNM44G%2B5gAHnkqkocXzczwBQNuqMhjMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPNBL%2BYqx1p8biE%2FACrcA7K%2BwCu1U8GS62QfRzByXuKL1n%2F1pSM5g0g7hlvXcmvNqOhPUiRvIGKRTRiIfu6T4YIO4a7nYbEgANWFPcvLuYlR7j7NIFShscqEwhA8Phjn5Lzc0xli9VFb8Gt0TCVUO0Lmc6gs3ckoz1oy7NTfdF79x%2B4ITSpFFTEGIOFXI1dT59DkF8vPgxMrmcwj67KeCeCPZhZ9vNwnUx2XUSJTsDQxEO2S2QI2T0KDmdIx8hGkz5TBgMtys2yveRbaBCgys%2Bc5POuYu1ZaDj5THi1t0p8aoLr6MRwfXNOTjS%2FsKg2iJnYwCtTRwb2AKMaogE6Oo4K6mOM5ac6bWdzOZH4iNXJyC6rfiSVYCoWVJR5S9NAzN80zl7qWUqoVvZI6QumZFgHd4vyzHPEHaU%2F6BjmKVV7kC9MEDpu4X75l6T7ymKSJ%2Bg6XQU0yvZqytd0%2F162ZHOAEOAAb8ExzvMKkgGZ6qPCidcs4Bvg%2BHF9oMdbsB3i14FiJxZ4zMRWVXb9SP8tYFwbQzwqB6jXem1eynsTpumPXlst61Z71UDVHq3sbSOS8no2P0oB6lnu1wfZoZ7Al31OpdSkLvBvq3lhKXM0dDyLnYslm4a8mL4pLxpHSEhL4b%2FBcjzG4JqZiSpCTMPa8z8kGOqUBRRDGjTbZi2YHrOWOXtPLyZ3ODhf%2B4zUM62VJwoFFNHNQgpvg9ZIKcG5UaZ1dqgFdbV64vM%2F1W8g8q%2FGNcCbT2lfkunsUeXIXb1v0dJRUP7pXUz%2FZWHv1CA9s9%2BYNehIysbxW1DLLvGb46C1YpgljlM43CWMQgbCrqhzAmWca0WjJpDpQwh%2FIVLAc2IbCVvOZIP5V9lZ7eVk8qYacizpeEVkVAdX1&X-Amz-Signature=a3266860b77daec1f20239367293e533eb2b0d4a035f8451c5a795ff50ae7580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


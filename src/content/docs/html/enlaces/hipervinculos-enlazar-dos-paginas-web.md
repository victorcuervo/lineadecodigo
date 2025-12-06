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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCGZWEG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXRx2TLIxFgHTgaEvsrUKekbSGjlRrJznRWuhkhrwDmAiA%2FsfejX89y8BQ0%2FQN7u6WQNKF7TiKMRUXzMvsa8RDfkir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BxOvb0K00ZfcEQjlKtwDWVnGAg%2FAk7KOsND8Igd%2BrEiUSuuWYZRuzBQhTiXisDwi8GXnpC%2Fjgh5%2BGInPrb22XmJdSKfpoytrMu2dGcOp8vF9VVgIYw7NoUxpxl02GAcHpmf%2FUN%2FO4BmARhlNXLbcg%2Bkx93rtWnBH0hYyi7SQz6cXWxdmKNVOOlg9T%2FQ7kinAwjUsASGA5rAk49Hfp8UU07HN5ND4rCmAnS1uRj41AiZq021pGPd%2BLsCZVDG6RdCwbFyG6BWvF3GCh9jCrZprae5MzUMj0PWpFsH2VTH38XtHcvXyrkdicl6%2BYaHn02imfo%2FStluL0KMjoznaAfGO8jxMq1VoMSqW%2BCGRSPOMoUiJGze%2BBvDYvA2wpSyQditN%2F%2FCALUEEQ2obxXW8RH5%2B7AGS0YmnToTiFz3FV2pSZpHyoDp7NPoaXz2UK1epcA%2BTMRPqjTPj214l6NlMOUTCSAXIEXlmzzo2S3gd0fpkhwH6UM2Mhg3TmYat2lB%2F0%2B5SWybRDa59YLde4DQSgc%2F0M7V%2FdECShDlqLKRW1rws4WOTglWnPgkSCKSFaYOObhXu0Ym4dfsfqUH35e7uWZXw7GSqCyjNQDBSFt9OxMfl3b0GH6LL9Y6HGE62ayn0Mo7i5T7wwR4qE0TyEX4w46bQyQY6pgFeGvLgap1EgSesw2S1bbMjAPgAuBzYQ2jdmhjZNVfNVhugacgwTsjem%2BG6APMi8DwXgBW%2F29zvI0igI2HdUA6MvVqAmcnUGlYIN7r9YZ9dmPHRefLsAhtGUKRKlvviOiqKk6DeL4k560gduU6FiXNsgaI9sZFYTamIxSTpLN6P%2BPIl3oBbDzwQ5AN1QzFIzEVwjnEJYoWpb7nTlsCJ5BpyH25U6rMY&X-Amz-Signature=20686ab75aff0f66104a885e733db6a91c16afe4e0f6c227ffcaf4ebd2f32a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


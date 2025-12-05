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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYDWL7WM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3LpPqCwdLG5ciRpEDF4%2B14rJNT%2F974GmTqSViW0horAiEAwPJO3E8aqL%2FSeIBas26WMK3JPSi1Xb631tagvUyWQoAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLDsbq4QPrYVRO0G1yrcA060CcUnmcuUErc9p1ZPKixXSuoa1AB2JooSDzTYcAxqU4gEmW09IITNv2Px5BI0BCM7nWRVHDdJ8td%2BLAl8qa%2FijlBrIV9v%2B5%2F%2B%2BbX2cUwgVfTKerFwMQ13G52D3WeBURmXeKDEh5iI6yNVyZtw7qkbX4H4A5LHfLanrno2hd5r2yetNuFJxmBTuUR1LQilRe2WMW8GinKZ%2FQC%2F3obvSCHFG2CUpzhezEbZv13lnGPHgVN4YmODVEakZHUCLPCz2DeEnYczVyb5aCa3UjorV86fr7nnXizvzEBt77BD%2BXA3sdbl8OBvWbhAhO0xfn11eXvR1kvFZgYHucyOAtWPRMe5p4YqUUVv9Epd%2B4vI7R2PRysV3LuiDI%2FqoyzD%2FHkSgcso8PRTxleS1j0aA3Pd8GH4QPIc6crlZyTfL0%2BEBciThBnxnm15BXD9uCej1DmqEyGMnTxcq1%2B%2ByrXoxp%2FHD%2FrVeM%2BLK4zA97IPpKraXkHF1Qvdk2yZ%2BpLPz3e%2BaX0R6QHVqCJnN2moctinksadHyibU7pz1W0BsdqHfA9yLUS38%2B1SDhBrQOC9hbrZTMUTyRtLUCI5MktBJ5cXrwsiAUdAjDf4BMgVhYr20%2BMujG0kH%2BwvdcJOsXDUDGs3MMb2y8kGOqUBd4jfoUyOYApbDCafQ3DNLXMQMfT%2BsuN9sVTkEK8hbEaF%2BUnUFYoxHajuZJZpGy5emkWnMnFpExZeuYf2pzR4q2sx6wAXNs7bI72LLXv1c22Bgk9%2FaV7NMOx3s9TnYHu%2FDKhMWVP1HMjdltPi8Nv9OX%2F2Y67WAxcJS6cWUlOHYMVA8wF9zzUg35Izql69a4dtFSmae0N%2BGzmV9anawiVj%2FgdaigX7&X-Amz-Signature=5735febf2c2a548041c648a239ad86b93e948f7afad355bf6f2a6f97f0ff2075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


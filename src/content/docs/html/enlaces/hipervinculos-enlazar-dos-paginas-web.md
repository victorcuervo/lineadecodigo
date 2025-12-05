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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQVWV6M4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8JZct8bsljjkzbls8FmbQJM7%2Bik0fVnS8IVvW8D32EQIgRN4jheKP1uU%2FeS2TD16V06bLlJt%2BqfJHbZ38ioUgizIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHRGYTd7pC1Iko4ayircA2%2FLZvtY5xemMnkzw2EW740dtNrhIyRlVCkBWQJ09pzyXu0nEkHNpDe9NCvtAakyhI9AC1gYH8uFSyO1ydYJfAd34ko8VrcMfnPTcas60sCOuZoRm12HT0JeSjenNG0WCBIHbKQblmj6yxqPcrHkZt8i0cmUrgc9wKqUD4NaNFMM0WAplaPr24vHaH%2BRJ6%2FfxJeaa9xbUlm4%2F%2B6WHbjOzYvH5bxfeNIGAzDfXaZ2zdSptVvwV0yG1LFZt17%2BFx3za4KmRCd7LmBDBqxn4cb1SQkCM6waTe52fIP8oBy3VZZa7QQFvSXAWRIH1oEA6Cy7wt%2BPTe8v6%2F85fTJVaZR4FMDxoAChwHLb1lVJknGMz%2FG%2BqJaV3IkG9%2BW8z1FuWIwYJjWuU0%2FKRQeTF96BW%2Bh4RTsofaH53elv5bwobTLCAfh%2FGSp2ygNYxQdVH6i4CEjXx0oWydTJtlriJXC37Kpzmbns21IXVo5dhfi4mWG4wYZzy%2BrnEbNAaMrlzC9GIup1mnge8%2Fl%2FWa8KtgNpVpWUAEBgOeiNd8fADkQCZEZDgtj26Z%2FvTjJWyLz3j3JDpTir2FcGw1FSRPfNvO41jn0LHOLH8j7lwTiETDXq8u46AQTCzaqdOYB62UER3Ez8MJWryckGOqUBrk0KdfQQUIC2AiKRnxLWjcRxjEA6JTOWyVgL68S6pwgV5AGc%2BX6%2BGwy1U%2BkdWAbtbP4NrjV8qkDwZ5im00Gc2nL43DHs53qTeeW5KxLYHSMXciOgKeCjDLMo%2BiTIbun3nQhGJkHkw%2BS%2FhAk3cv953jMCFZjJZe%2F6LMCNAe5FEq9gZ9JMPjlM2CCCwehsybjbKLt88PnXOkKxqdFgUAJwgVaRbfGr&X-Amz-Signature=0339d44ab530e44026bf039f522eac4e36645f54ed1f0be096a380280649c4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


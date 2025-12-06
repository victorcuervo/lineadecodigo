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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQJIZD7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRRG2CUrrm7myGwBz59RPfDDDgIz8KxazJAVwu930SMAiEA%2FrjrqfVz6C47BTgDgnhEgVWzW1Oz5IICJiOcqGg8X%2Fkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNbAmO8mdpcUBlU30yrcA5BotHlsXiahJ%2BTgvkwPSEjjio8DjE23VPuBDcblEEDfbi5bigYb9oqueMriNWZoPOf5GiBOsXeD7VhAydZwRNsoH%2BHL%2FzdfsIqQVBNvLm4c%2BbJy15j%2Bj9gFfNMylZW7x4sD8536YbXEEKWesmLQCpG%2F4yuESkPBDRnqi4jBNF2Fqp81PB2oSK%2BNMmYPpTcsp4I8dLW44aG1HeFO7BuaL7aujEPrX2n8PPS2XXw5DIM8%2BH8VT%2BAQGYqXDDOitAdqsKY1b5TE7HoBnwje0bDcLxQNEZmKohRw6coNHfmJbYtQKunxkJwaISAuHiSmTl04LEEOzpcQ10XSuDKwKaIYaM2hdJ98rBcmayC9KbSvmkKEpC1vLFgKBYJvKzA3SBpoWG2JRZ3Y49ql6vcaWfu%2B4X93Xi%2B4vcfAjsllxpS3G1aU1%2BBeGGL51YNdUYnInv%2FNOXaOgSPHeFHbX3D0dZ7YcbJSTF0e5lak4CxD1IS2uHxbZ7ukwKBNPp0RcVpPP9Y%2BqtM%2BZAgTMH4ILvuay2gUsIoiWmZpFvIcvnyCb%2FlkMGQcIZPg0fhoxze06Qee9%2FAApC4T5IXx4%2BgPuH3%2FBkQYFP2U9a0f3g3PKWigTCk7swqjSUJYwIQaVAOCJR%2BUMMLG0ckGOqUBL2KtWnUtTXhxVLcsE0OzzlNeqDGo7jV3ZuwGU76RX4OZyYpKD0hMZyVG88GMCw4bK6Q19Ds5yYgxM%2FAuAlmS8j2Hs6Elm5Z3kfEkm323IgVOg3C93yZVM1nEe1u16SP5h9%2FiWsh71jXwwgnMLWx%2FHrOLVG%2Fkj1117ZWbWwTTBITB4opw%2BWisdacdKMWUyifxDWB7vHxu5IbtP4qqXYWr%2FOkaLQf3&X-Amz-Signature=bf85646fbb41c71174d08a98e17eca1a2b24419a3b5c272e248cb2ea7a4b880f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


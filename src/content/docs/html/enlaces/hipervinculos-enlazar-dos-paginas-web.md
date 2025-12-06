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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R36HC6U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZ3lkSgsbBXABwDAvEHuUBRQEwNFkAIFDkDc%2BofGhGwIgLksFT6gjeaAmA4qmOFfnx6JkoGSqBClhTNrwK9TIb%2Bcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDL1eAbxUFNaxLEw48yrcAwqmYU%2BfNjmW6AqWkW5xt3%2FSZLoWOklwBvT9HhdPhKdUVCO1Gz3w8o%2FQCBhW8W85aFNbo0DhY8sTFBXffPHDfTu2sODFd%2FixwVFpuXYIqbJ9IWJ%2F3sQRU%2FwbKDweuuFpKU6hsKXCncv%2FfaXjpNVhQwV8XCVVcfwQ8kymQS5DSpJSsGWP8E4HAxvsP5Zyq8lRSNm%2F37krEjxQsWbgIfctsKCYRdDK%2B2NpzILE2btMb2OkXvNm1yF5F1zjetZKFhp9DkQ%2F%2By89HihxsVXkZH10YdVp6m4u7ZojTBWFiFy1PFiYD3%2FC8Fj1%2Bw%2F%2FzOLa92rADvbrT4s7P5AX6cAxmJZzmmxg8ZoMGb9Pe84S46a7cdEGt%2F2qRpHdV5Bm552ZC67%2Bb0Y9VEUGu3UI2pShe27S8PXaiN7%2FLL%2BmNqCesjBxJLc%2F4jf2z7ZJ3AQVz6QoshZoaghvOChA9roJjcV9%2FJNdBzWEvqtd40vibIy9i%2BO8Y37ImOQp6nB1KPfgzmb5AXzfpPrf63uViCYRvWUX6hAn7aI5%2FQMFP28%2BjCA4JQywnQslW48R4WUotExj68cWeDf25N6OLiy5TUeE0hVuBu%2BkMxbOMuBOfXESf0lSg%2FtYxcxyJP%2B7Lfg98VwGHf9gMPKp0ckGOqUBk3q4PhPwikUWcNidxWh%2Fsc89pfus0DfLrWwlfoz%2FVKflXIPw23oBJZpnLf4t2vxQL94xGNP05lxl26waTqHTp2dqi5BR%2FtuAa%2BbQDW68WC1IX4qEeLl0wozgpiWf0VFgQ%2F7iDZ5g06FoV3YVQ1Sy8cM2AcaB7SAxsZ8gnGcXH1yow0v5ggRumjZMkfr1%2FNfsGTA0SHcW5b%2FGpA8Y8wyUdKoqLMRl&X-Amz-Signature=c323f37c1ad54ac15d6781fbfd95bf246e52a57b321825e7d4e06f2cf82ef35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


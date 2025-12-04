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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EGVHID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBK%2FhuM8GdehHJSJjvuznNnoGcTBXboUlFCcnReJlwg9AiEAxf9SyUi8LJ02wes7%2BD%2BWKscWsv8V1hlVde%2FVkSHtTBYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDaOAtwulFHXBnvUUircA2DzeV5n0XqZ3T0DCd8jUTpzulEsaMsKUdGi2PSI01ENq9U%2FldynwG0liUeybOKm4GzqOOwSGROnc06S2w4p5uRTi3V7aExRKazfjcnxSt5I3c0bOraZjfV6v2CV%2FVaj8wZ6ljea2kDRe%2BHkV8EneH4Nvi9P7h5Z16H%2Fbx%2Fde8kVy5IKufyEyN5k%2BJGXRohcMhpf6GwU8CAc7zfT3PNk7qYeHNsFu2y42F4rqw7AuiWQJU2YM8ZKzdtP4ttDaSx919nxG9U6Te13DjmJwCB7Xl3DrLZNCa%2FHH1sQ8WiSQjmQXpLaVBO980HO39BYGWc%2Fuo%2BAEcLjUXJIDfXVVnk9BObWTRadLBFS1EoLGIly%2BzBXSgEetcSTio6oGuGlWm0VDOQy0aCZx1bqOmcCzIINCFr%2BDCsD10zQcQ97LNswfmjJl08MAUVZBYzoHBGkj2LJ5%2FYhb5C1vv4Ap9H3gqlWaV1TDuGjj45CHkcg2aEckItKg2pVZqur9Qqly5vTsmdd3ctyvT%2FSk2Sae5wiNXkTkx%2Fv5WWMS1GiTPFyrPib4b6NPxdsqlXPhPdIDVsHnLKssbSA62213LzMds94J5dM14o%2BmcP0z07Uyq7VDimIidUFX2RWcmKymIw%2BWvUgMNLTw8kGOqUBS7h9t1MQ7NEprt3waoyZrmdM%2F5KHl07vo8zto7QL4aa89MdzG85Bz%2B2%2FTv7qhaD0W5C1Z813j3d3BeMii9PNczytQluLjKqpaD0j2e%2BQkJP9IJaSa7AK3OlTplq8euT2Xn5qVPTUNntvjNc39MHimjqc2irrbCy9eXC7Sp%2FJwte8KJlX58dySm9SYi9ox6PT95DoqmS0DnE1gSq10CAxc3blxRKY&X-Amz-Signature=0d990f2c22a730f92742f3d45c01cf0f8a6a76a89f02d6e502d35138ae075fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


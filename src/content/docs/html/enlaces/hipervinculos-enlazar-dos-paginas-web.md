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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHLBWJN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDksyIh91DtG69nVhSYIe39ZVjDgMf18hRVnfOtsXQyAiAY%2FeAsq7j6rWdVxIiBbtD7d%2BUjO6Ss1Xeufq2%2BcomfoyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8se15v7vcPZQAEh8KtwDK3a2QmrKgIkQI60um1y7Nn9kwRbjcvqCDy51TCEz3El0Y1lC4ggazMOxBIdnHZV0FVP2ADGF7qoIYY%2BSeOe%2FmA1u45p1%2BHl2cwi8NhOgCIydevSkjW0jYcwaaDWJXLcUPiD7M6tmSSOdooih%2Bd5dU462SVzBixEWe5iOdcnPYE18ZFjqozhWgzroaPgfO8MWJo20rzbfBtCyIAq%2BoH8SnxtG08ix8mfi%2F4LUSflixqV7RfDoONzmcApkorppLMrjO8G17lz02UqGFykhiUxRVt07CoUxPFrMDg1Kg7xFtVZEos2PXytHlSEfAoUmKZQx1DA9MEpZ58ydh5fAwf6YyI2rKDzXV6bb%2FrefH74EHaZmmJ7acNSnji9SxPaIGPO3wIRsAKE7dI7oLSmyfSaLzjXnSMi3BhcjD6K9YY0num9koo3dpzciFbHYy%2BmzsgoBVjmEQ5JIy9r2SaGJubxrM%2Bp7Us1GRSHiLRmvTVNf%2BdZwUnS1dZoZ55s55j3jG7L7pykO5KYQDHAqKTOUkN9hRbgk5WYhIGwijRuRMSFiirEDVLAvjk8I1GgdV4UgOtWgPuyuTxCegEJJLo5RfziA8wnjgFIBEP1MqF%2Beb7iHLt1KORSAd9lzZA2rY%2FMw79HYyQY6pgEyo94ITSPnUl%2BB6fc94YZV5WVEy5AABBXyHPjZn%2BTCSBtzlLMXA2OaQuIJpVHuQQ5KWbeIz915OmFTkBwjy8LJxBs%2FP6XWXAwIY22Xco9WWMIevkzi2Oe4eYtULMFLIu6Nl4Fh0qE868i0IJ34C4%2BUFzbP%2Fm7U5Iq5%2FFAo4i97YRunmQVEmpVwiSPWyUXUfOj8VDgszFVv%2BD0yWZZbrf1glYRzDG2X&X-Amz-Signature=32a78b7ab85424d3ca3392b769986672399ac9762a062d298d729f3e17d74768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


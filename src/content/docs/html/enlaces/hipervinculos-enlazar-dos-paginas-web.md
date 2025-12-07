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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBBR3KL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F4uZn47F4qHlxOIFm%2BJFdOzKYKuq8ebasgyFUCyHkhAiBHtbRvNi37pQOM0cHRB5GNlmsmoX5JZeHpEg3%2BaCqASSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxl20VIAorDjpAH9%2FKtwD9atTdOF8aa7tlX4X%2FCmUXKiM8V7rYnQRoNGPyo3tkh6raWf2IqW9w3jOPEbgZeImfTVf9DnTw1Kg5%2BsIDB%2BekShjJJLxYWFhxZK6UiszJbTvcfjYPyU2Mpl6gbC8tT%2BASDPIxMCQaV437lVoJ6wxwzpghimz%2BVKwzrUKXpttsbVAYCzQg5bdhhD52lunyYNZ3UUJcVOT%2Fr%2Fu4kjASsm59GZtEbSRwX7ILIraFebVzoYU0TR6fpMqPodgQ1QQzbe4q7HetJdYD1r84qHNAKPnkAPaQd3A4X%2FDoaAsFnvk8v13Wd0y6K9kG1zGVE4Ir27hlFPvPWTqRq5noBsMtssntNEIpPEPbu4lk8SeC6fHxrppA7iAjJVPNGhH7%2B5AeYxhNLbQ6HDwI%2B6XKYnbYybtb%2BA23MR%2BUqsxCPHjChELMEtK9PxTnvmhxTA09QRZVoan4DhQAuborwakNwVwkhJLaE3lu2DXTUVME6G725ma65GZh4DPMuNmAFeiUfHfc3aF9FBXp6glxOFY20ZW4Ncc4xLcHBPagxbXWTufM%2FTw%2BOd8a%2FfFpZ3K467GtEK6YvTE%2BwnoUmupy40uAnCcjMus%2BW5rhnalZ7TN75%2B8%2FG%2FJA9USco9eBXOhKOUQGhowh8fXyQY6pgFY8ehFuicrugFwAH0muNfp8P8W5DKzSvSoirP5ou0ciGOo%2BLjzh6dUnqOuK8D2gqi90Q%2BMfHzriuCuZS9QmHt1UUFS320MViljvgVn%2BZTkvraBcWbz7gJ2BVjLwsDFBk%2BAUXuiPvI5Cie8%2FUNLfc%2B2P6O12oSZ3nG80iXzNBLdsTUdzl7UvMtY7KhF7daqJSEdqRIvPSXafUgzosDLAVHRkpRDRRRh&X-Amz-Signature=b9d4972a43ec9787669cb56876ebf9aeaf5b79b3799b3a06581ac4147da72876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


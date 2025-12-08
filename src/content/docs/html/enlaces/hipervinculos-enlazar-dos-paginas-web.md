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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5BEPFN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuGuhUlQ%2FSEKp5KO65ziO9RFLcju6y9JOQ2JIW3msmHAiEAwx8LfyermopaQAEzTWKkpEOV52Sq5A6yTddUWIqiMDUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNGfR4rH%2FdZOUSUXircA4BOoUSj4Jg3Mgs9xefAo0VxjhD5L4ANoGR1vq5WNxJ52VE0EGQ64ysP1E4T%2BA8cFnE1qYTrE1fOIafNuNVzbB0FZ76LrjUEMZUrP8yY6YTXmN4%2FbEw1lzh5I%2FqfnYErADy4WWmF9VXEU6Sy1JrToRtxqSxgOs6dLInF2cfucEhAcbWHU0ih6DA6Zq2QSSDZ1%2BdyLZ0MRBubYrRlkOzBIg7Tc%2BTRsJGUDiZO%2BWcG6GMojOH38KxPP7BTQI9BNXQyX1hKDj7KY%2BcFl55cvySeUxm5Oj3JGRituqz9q6%2FkH2HKji%2Bfj7zGIxglzXKsmnIKn2CHNTrxSrnWsCV5wzPFhTqiAw%2B6n433M9oHbWKVsIVox13Ck9ePE048v4Z9cGnM9Tpl9TXnFXYFioT1vQoNiJUT%2BJ0YL8WdOsix79HmTKADmd%2FGrvV1%2B8ciTMu%2FKF6q9HzCpzc6auBByIN5WFTziwj0J9aImx39TuhL1lBuB8I4y5hK9AlM%2FC%2F6zJMwi81f%2FMCyhTZkpYYWSkGYHZD%2F5IlD%2B3L9IhnWyjMuIIZfBCStdFqTRjgq7x3j0naXIfIihn9vlevky8SfCmmEPmfGzsp3GwRBVANi270GwHTUOOvgJ2Ae98IvW1CtbncPMK3u2ckGOqUBQP1VxqlcA8oyM2cKqmSVY4QH5HWd4SMOmyXFebsLktiySDct8U2x83Bn6Y6VeYzKFwvSNvHG%2FO7v2VJCoK%2BZnwRv%2BbDP%2FpgAzaIigtmIO%2Fj56zGWtDjSJQSej1ABYC%2BBblP0X3F9YOIanStErRWzjciAWtmOvT98Q7%2ByS2T%2FMAaeTFxzRjFxLW45FFu4vIhGduo0OaDGZnaK2%2BLwICl9YHDcTDZ5&X-Amz-Signature=57078d8a9b0761e55ba045a971593e8e55651169a2552d8faceceb19ecddd166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


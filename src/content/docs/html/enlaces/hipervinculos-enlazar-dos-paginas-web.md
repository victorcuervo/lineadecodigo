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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNRE6WW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO%2Bsf1mmoW7lEUHrTlBPto6z6Q5%2FhT3bTYkQwaaLmVoAiEAsEAk%2BTCDbt%2BN1gx5QokYGYVHA6fvjbSWDbgDtMv6PYEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDHgGaJ%2FLUuqDPaG6nCrcA0I4VZpCTJr0EKg9B2mS7lfDyrkohxHDQNVtL0bLYWWrIzUjz7eEbU9VukPbbWHquYU8%2F30caVEuRiRgMUGLxBxNLWBHngr3A6GqreI8iP6ittyBkOwGXoDIexnROIiXq6VBQLGifT1X%2FCgQeAmAwmvtUkZsYctxzWACKF8IVj%2FjIjYceeDFg6LqP%2F%2BxlGasK5atAG20Yu2PfKYY3u0crLNFeDWy14UAMqkyv8vOw%2FkROy94QNyPtSI4acLoPAHdeCsxaJYZye%2BkQqf9quDUXxSsrqkTZ1AgGD3M%2F4MFrpcgHV1nganJLChIsajpM3kyTDid%2FTiFGGstsctnE7cqw99Pz5wuPKiRdNi52ncRwtCZbBpUAZxW%2FYd9c1EFP%2BsFwFgHtfDoDhCo4Z6e75SiyxDWgtaPHvplbhH3yvKRW4i8u%2Bt0eKWjY3GAMdiYTQYxStGqw0VeyUHgc%2F3IsEHkRUOjjgnn%2B3axU8459FFDa5q%2BA4YOfcEzSAgh%2B%2FHavXCLU4G%2BmYJeXIPThxhXvq6cGk1mw8jDrEfW%2BMarheKdVYF75L0epWQS%2B7MFMLruevbNEXbrYPOflRtq9qdiGW3JPTYYxQQ5n5lF7Tpj3jApIZvjhBQaChMiyGGeooebMPXFzckGOqUBH%2FZVTwF81ajnlkZZ6Ecdhz%2B8DsxdBFMwOc4alDY30DHqtjG5j77CooaZt0X95Isxh4l2efOttDTwUQbVcBwB822gLBb0zEnVfzC5a4v9TQzMOcSugXp7iqaDJII0gBhu582aGX4ESM88F51bLQ%2Fv%2B25y9vm16c%2BVNlimOB8eu3AgO34GHBvzNevxpZvsP2bA7Nh7EwoPySoq6TbQWZ7geNOouMfe&X-Amz-Signature=a560f41fa4eab41d527477757dd513c5708b14aa4bec64f1d8c791add032c4e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


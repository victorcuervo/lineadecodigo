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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NNP6NS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5Fztzx0D%2BqmEhSo6LeBgbE1zUPJ3%2FteqPEQsF2%2BfjSAiEAuaN9%2BJ%2FrNitca9%2FFA2xQEelGE25xNB1nNuQNwha1xrcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEuP7rPiAMpq%2FOFmcircA4g4D%2FBsjAupIhfYXvQ4vepR4IAd0o4rfyJTceJTtrQqGIPV%2BGFE0jgj1y5Kn8cU4Zk7RUkGDjDTOb5%2BvRiiVHWZcJAT7oew0mBRKGnN%2Buqug%2BKN9daXlJ3k3kNTKgqmDEQY8y4OjUgcqqlEgtAAgTYQGuqNoGdIrnkJlSp2mp0MF1IgLrGz1yiSlRj%2F7sztFEd%2B%2BfncRKS9Jx4A604cTdZJb0YcbqDGvPnjRlBGPpMmwiYPpq0g6ozm%2Bsu%2BLPEJ1V1q6z0%2FpKRT9m%2Fz5C%2FECliPzD4iahGMbOb9TSlLbcPrJ3gH4ftF6%2FXDtYB9koRFx%2BLExb0At5gDohnnI9gyz5I8qBqBADhtXN0KmYkHrZg3IuVXcX%2FW6ERh%2F4qdSO%2FJA7%2ByI1IHBpPCN%2F0tOHmck%2BZiAznxtUI4S46CnGTPf7pUJzOaJ70vkguifBWb6922BmkfWU4j9sqO8YGSa229Nh69cz7Lg5m5K1LMFwBb3TlPcjDnGyXCEpj6YJOZ0vHLzqSFNIF4aJ2S4igmIfeVQSPUiYGApvvbqNMJ2GXnjdyEeeuQezLo5fc3hP86BXXxCDDrENpa3mteDnj5%2B9Q55GdfZz0ZrW%2FSq1d11cLQDuujTmLwln1BndUBA9jVMNuIzckGOqUBc4IfgZZeMDO2ZKt%2BX8FTiaDTMFRIg4QR5caBQeTDr7z5dQlFKqR4BZP5m0ssx1cK7eMBASSQ0587R9eYwhzPjIxQB0y6dv2DqHncgSZYzI%2BBuIWdYqArePBXHt1Iw5LZQ9LU3AxOKR4Gzmnf4z%2FpdM4fb2VWgEudeD6uxdi1F9keYUAcpRJi0q3Prym7tlI1LstU2uREsqEcuV9rEddArGu4A5%2BG&X-Amz-Signature=9d44b4eedb358df1302c7b0f88dc18aec9c98fa0001cd325c1465fc6c82fa480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


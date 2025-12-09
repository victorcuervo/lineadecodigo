---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5SCKMH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F01PZRR9h8xR42L07k0YCIPddImU28adfS7admYs7DAiEAs5kTuzhIJ8FfXUJ5EY5gze3dOr59eLKndBDdzQZVCdoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuYeuj2kEKvssPCTSrcA34gb9ziA1EA%2Bf96grvm9X4%2BSzU66ybowNcbMKmp2j%2BlVln1JM0GO1SWtwQ8C92V%2F3DXoPTF%2BTPHj1Q0Zor0ldLm8g8PPFMtJevzcC9EOMRZrXNC37pO5Rj3GOPLblQUfXEwDTxG7LWfATHxZ6XXQcIK59cDUyhZDJb%2F0mKVNRi%2B9TP8o363%2BaQfdHBd9eDFZVRQf8EbIbmejg5kRb1mgLDuyKB9a4WX5gyJWPVyPGq%2ByPVirANJGap6Qr8dEySaJIUi%2FUWq5MIoszBGUd7l4Lvk8t1hWs%2Fwl7CZ2LGZwkCoAR6I%2BP8H%2BoxG4lx%2BZOA5O%2F7ppwCT7JvOQ8hNq5N9nVjx8yBeoXOo0xilY5gNULyrk%2Bd07VA9XZccoyMs7XiYm4qkeEsbVgRyKVWdtcA2K2Gt8lHukvXfkOijz0GUNym9V3M1LpKKFuJIaHwgUDnDtxQcsrE%2Bn%2FxKE68eA90e8UaEzBDqVZAj5VuUuY41fSo2O50iyaZo2hj9U1Uvpp2a%2B%2BGEfNDn0ZMmNBea47xCnZd8aCgORuNVUMy1%2BS2bHaHD7%2Fn9yegwWfjQLL2%2FjYS92koTAIodQ2PG3UxEbhBHTpYo1i8K63qDhbuE7keePNbuAvZAQPk5yRbahapAMNPd4MkGOqUB9Uu3Alz8AR50b5QK3EtTrran%2FyBJOk0GoQHS%2B9vE9xOUSZGmzXfgMiNbZ0gdUhHyFSbBio6ug8Irm2FPrKOmSUFcHYlAkCrN3gjN5vLLUNhFwWQ2aG9dY2VP%2FiDazvf24oWJjiQ46qCM7pkEK9q7iQwEy0j7OeEG7UFwY8ZVtsBOzjfA5B75BeRMv3S0HWVOnXbue%2Fwm9bKSorkP1ebw9du0RZdB&X-Amz-Signature=44c47b97d255c40536815c46032c196877e41b6455c42499e8b5d303eb22715e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


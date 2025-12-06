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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF7H3PC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0uNgMCuuQEYTemyXbWy1Rn7IY3XG2FEPU1Zud6SHxdAiEAsQwybYqnDOa78nAFqO9VhmUUSZmKy93oDJslMHyHG5cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLp2au%2FROMHkAqh6yircA0xDwQ%2FHf9QISIZro9sBAhopxG8mNz2G2vZ6bBeSsYm%2BH4jzwLVH5Fwwc%2B5lsFZgbMASEN5CEllo92qkQ%2BNFoGJdmOtEAX30lp3BzRIUTvloIp4gGaoQsPF%2FH4w7uBhVYfrGNhAgppEV75UQdB3BzAMtRYKjofOa1LjtoEvni%2BWm2VnWmDbMe6WpuPX0nGPhSon1noTZqPDX6HvtSnrfUGTQO3tQg1v8N7vZNF2l39YwjV1MfDpWp2Hoc54m3v7vY7dKG0geNcoWnE9cTa0pRJMvR26Uo0dzYpG9%2Bxzit9y0LAsWA0ft2hR8zNfj2vMOp9TbxJ5LlHDwZ4%2BWXX4nwE0XZg4Z6PK1ODspCY3WSaWmA8XiK6jls%2FWc2dRjzwAd30Z7w4RSp2KcA51Vfmh9ZDtUHEECdNxuMaeQ4xRgFrb%2B0QS%2BF7R6wAELTmW6U5aSc4T1C4ed3XQngGcrpa6SWoo5q0waVKC%2BDqaD%2F1wd5Xib2GNIxKMH%2FxEcbpcRU%2BbU8ZjzMCT8U4%2Fj9KHE2A%2FCw3pxYzZ6kXutVFPOGIukMHQjD73GHXWznUgAOBtD1ShrDJJNzyo05l9Mcpz6IeMyiyXDlTqnwn%2FRP%2FWHBHE7iVzzj1PQsSEvwflEYmd7MJafz8kGOqUBE6CwGDGfwGgrzEJG3YZ%2B%2BhAnivz0JZsKtQ6At1AGVLxmIIqX%2FwSJOEwHZ1XqCsFye1U4j%2B4baBQYAZQ2zo9ErNBW7KZh64KbTtTxL5o3ZLmOn92NQ7lu%2Fi23UY06%2B5O5CVQ9urRhyIArFtbizgRsjesCieUf6e1CBVrUyzdDZHmXDTuNsvezopPgwEUZzfCAPW44skbyN93AoIKYxjdk7IIjgE2e&X-Amz-Signature=3d86e06e042093e6d2b340ddb40b1bd703590cb23e8e0c73d7c9b6a081ef6762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


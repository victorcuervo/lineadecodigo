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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR5JHTE3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ8uR7Ks9HwyP%2FHSq%2Fgd3AoqleDFVknRCRXpygMqmysgIgDQjYf7NAE3Dlxr3367nna5dxsyqwC%2FfPPhNiFj8ggE0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRxw5D9nJ9j9w%2FUoSrcA62Zv%2B3LS3jrJviMhn1cErkmlUyl8fS6v15f55hWc1RpGHs860D6niglgHlEjl8ZAJ39g3bv6GO6qZ8dWR6wr1xfuiAfOAkSOmfeCxjSubLyxlSde6ktdy%2FkclxjT60f0ZOA69sjkb3EevXkBnHQdmlUazUUD%2BTLVp7UnJmLUByNlZ83cXjrGtdxSQHDChvWG1YxDlomGVB%2F%2Fsnk%2FNOc8IHsVyRUp82wkjbjbtCgwhS793HE6WL6PxZ2omA%2BwcY4uz%2FCr4T487qHZsgKUnQD6wt%2Fo4olXOTNZakgjyjr1GYn%2FcE6uGrsYGn1j40Y6UxPY4%2BzH8dGFPnu8hS9tcA6FChkbfJwYFBG7PkJPsx8L1FniYsERLbMHU6kiVNQRuakyhx4DsAA%2F19%2FeAFEcfwjF2Ra1DkUsLJLGqUP9avUZ7%2Fx%2BmQUo4gyLfPIpBk7lrBg8Q%2BGJd9s98nITeRn5yZNi1oRzj9SnsRmhxV1q%2FtGJL9SAyab7A9stJOwloNItNIkHDEKT0XCO8UtFQQ3lExF%2FtUwx74M%2BQEgxlQumulg7aHvU6tprKwLIhn0owN4Ma24bl0LqYfIYyEhKRwBPqsXTiQU%2BbQ%2F9wADp1AR36yMyzuuiHIRl%2F2wV4%2Bv8XbMMKmi2MkGOqUBPXd0R0EiteMxuR2BoSeH%2F3KbmQ2P6WUZ9PVLvMl8gLwzd60sSS7GNNzeTjxaWIDc4x9XnyYIKysnXP0c3UNSRq7jG1kHzje6RE%2FLsV50PxmNCr0%2B9QB7pQRHNckzE3Cn4dx%2FY0pxJ4EvDFUFlaGW%2F3wYOss82etha86yTNd8glu3lnuXS1QDFfGG0Sciv2cE9JUToT1PpazuwY1e1zeQVrnlOA4z&X-Amz-Signature=835bc638652b720dd92f80a47d244800e95177d69a3f0beb349915ca7aaf3480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


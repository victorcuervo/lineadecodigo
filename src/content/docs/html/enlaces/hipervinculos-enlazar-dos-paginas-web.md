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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRA55HG3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX1iLNMuMM2oZd76ixa1LvWUAEqgWvCWB9a4ctiog7UAiBguFcGhVVI0l0vaunOFdcUzHHT2DvG%2FhXiTpUKgOkBFCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMnNZmDfYcK2JqepF5KtwDPifhO6uQJDI0q66SanPHXT40ltC28nF9pNSE%2FkM%2F%2BxEVHDknXsD4Y1naVnLF%2FTY51qNld8KKn2yQ0RTbu9FBH3XucZeWlhOTNyIjPi3TZs0ISdAFFqmUwE5sxTFrLsUrLI9m9pkWWJHnyEB06wdBfR8GP%2BN3HkMdJxVJucYnjun5aOGy61IA9RbHVhyoYcv5foibn4iIopZhz6IxHQfC3BQl8dVrt7MP%2FA4Qn06CG1D9gNMwW96U6TP89imC4mcoXD2Of9xc6hCNXHs7ypWz2Y1VSbA8ITvCUrIOchkp7K5VsgKwOB8RJfE7J%2BuEl%2B28pdfoc9L3K4n8GkQR7RVw2Y0pPTDxytzXqOwY%2BTxDJKAwKndKZeHNqd9xl5UxVUPH7U8DZjP7S%2BJdrs50Whx5Cpw%2FDnh7bSFNOQGn5D6RCZFpnjcktVI1nsZNi8nhhpLjaoN0oskT%2FzT8tZmd6BtHElZai8Gjo9t4oUp3rQ2ibyuPr9NoPSprfmh0WKEy%2FCbHCfxEFBkZ2uRXvChnd3OpWh2xiH3AEDaa8uwiAo9nLiIIY6TR61%2Bh907uFK4W7hFHhI9XczRG8%2BwYYuMbemKbc4GhWI6OcBwJ6H6A1rrmxdmJ%2FSUVC%2FkEpKzXFYgw9MfRyQY6pgGlUUz96S05%2Bt0AAZOfswYOjIV%2B0daqKiRiYiZuZMgENFWvvxQbzIP%2Fai4FfI%2Bkg7TJxHwqRLR5yAWp6bMiRnzAMoT%2BBVJrhvNEIR3TCDwYyCBMBL1JS3rKdtazDeusv0K%2Bn1xMKKBuEEZ04X8uFUbDoLC%2F5Y8X91q%2FxgQsN3RK6ZDy0E%2BbnO9iSZNTI97igdom2Cmxw21bQ8nSMp7cYGANdiE%2FUMbK&X-Amz-Signature=1a1893ffbaa60295983648c9c1112cc649ae725203ecac7e1e8af4b7f9f29b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


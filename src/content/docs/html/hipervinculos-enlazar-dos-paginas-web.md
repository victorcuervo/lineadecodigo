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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WVLNWYW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDRJTsAzquvLpRHcBosIY9YS2zki91F9Nbyv1nWYGi%2FTwIgU2TcDy0yZmeg8iRld%2FxCvczcjdlvgJVZ%2BwuEiPsIwsUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMaQB5wbMJle0MD9RyrcA4tEAQXQ72te%2Ful3lQ2LeqTR0dRkBragputPhs5jXIQHXdHGJCZGNQwXvOE9Zxyt6NzacOoQk0rf9t0vPWC6NnCo%2BJVQKiI2HsT7JpoiwndAB1GvB1%2BWVQRZYQwkVTU46VEXVqsDZofgJBwY531j%2Bt2CpVGX6%2FFE%2Bcwi2Y0kkljXT8PeGl%2BN4j%2BY7ZkMzm7G6bwFTVFdEOxUyxpXEkHEAthBwrnR4%2BfrYKWhi9%2FGPa8B0yiNlM8i6ZM%2FY1TDh3rsg1vBGM3Lf4Ghg9MhAYvtzBSlgqq3eA5i%2FMD7NpBJH2Ptv9Sph5LYMVGMLx8AjhIR8nDzi23soEj6eBmOs9B9lkxDQgmMLE%2FGSpt8vARZk3NmuADysxWrDzJwq1MRgi6%2B0dXrqK%2FWBV2bJTN3iSLri4cZ7h%2Bf2o%2FJwtWde2G8UzrvQrRISH4qRx2oaf1FJiOBUAALyRzM3TVLrb5B7%2FO0N66k84G2tCnBVlxyAzHRCeA1bD6r2OMC4RwzoL1DaMw4D0WCXn2JLAAO1xaXQsy812HYCarue%2BqcuQLKDOUp0cF38jyWMtZQwGShmaTElMpWKGl4pZXB7KwE7s2xSE4mlb%2FKX31pi3kHovYCZgpr1QpTarZTZZdARsz%2FsVfZMMf3wskGOqUB4y7pQBOQRQINvpjTXWiR6l01pNTrRB%2Fhv6%2BR2qeWdm3hAyMxuTHoWmic2rV%2F8ejGj2t9ZSe%2F%2FtlvIhd4Mkz%2BYHF3w8LfNU3WE174ed4YLOWADoN3ty2EvxjYFltDoLwUEXMrWKZUT7D%2BDBovG0Iezps9z75lBENS%2BQBrVq8sByr8BIBTabUg0BD1%2FZBg68Waabp1gRPiyZi3ZPFx28z87ax0ncIb&X-Amz-Signature=ffb49c19e5379690e678bf2e0379f392667bc8ea42e6fc6c45e740e31366e98a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUWUPJXB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGwDZ8m%2BOxjx8HSOnKOo48GDTYsZJJHLopln4IhLPbFAiEAixygXMu0gCw4jFIrbzHfwihKUZnHJoFWZk28xoK2ziwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo0pj3Y7TaU8YsgCircA%2Fm%2Fa5j%2FNUkB%2Bag17YsIU5%2B%2FmHKGRNSu2ZKuXe3vNCAgeJPONGH1frwKegAIrL1krGVVV%2F8h949Ry9gfn8tyQsWAGvGR8Q7x9ttLmpm%2BVaLiuVNI4bzQ96GXL6gvUZPbYUdVWKQ3O37zfTNvpUew9%2BNw%2F7oCrpprz8HxhaFmdbLw1EgKkD1wtHHMst0UeQzeOb8ND1Rh%2BgPuPWIy5so%2BtMZE2Dcb%2FJr7njNHBN5kUDSG%2F0txvG7vKUJb2%2FB2bPUPm1sw9RC729HtduhIIEaqURBa6ktXodYxGuIoRf7Ss4Od9Hm1b9yh37dojdid2tvjb5kt%2FG7fkGsuP8rxgTKByEHUV6mK7QNBklCUBYt0ioSCu822PzU7%2FhPex5vCiLY8Fa5xBQePn91L%2BV%2Fd%2FYRrcLkuxt8nEMPyzkGku63w5%2BlJy3qzowaFTnUcvA0QOGNbdf%2F9%2B%2BPsVXIqXAn4kl%2B9CdD6ieDS3ErZH5B6fWC5VpjAnPsT5J2YS%2B%2FaCk9P9dsTBGaBImC36mPdm8lRk2GqddYEvb7u8Qpgf2hkN9M3njsk7rQR07%2BzyQ%2Bnriy3KgsDUZxl6lF0DCJUf5KAEw0dYFAaAfe00XFyoGoy9ZFXWzbvfOuBOQxw5sfnTTrXMM6h2MkGOqUBjHntL8sak20qma0FdJSTzkHstks8qyyrDvw%2FgqN8QhEFSuYD3yQpPKTcRXNTwGm%2FjuRCm3fvIPlZ1mQYDiTBQWGZ3bKm%2FExzI56uQ5YSwwMxSa4%2Fvzf6PdRpHkvh3nSyX%2BoSqog6mpAK%2FHTv%2FH7J3SKouww6W1uV%2BZIC5PxlFGYNkxoqmnYmMVyh8SEEJ4EGhUAACpvjEx9Rtjt6m01DrCUDFALV&X-Amz-Signature=21fef1709e76ac1a7651262d66769eca56cf48e3d8ac4cd38614212a9a4db95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


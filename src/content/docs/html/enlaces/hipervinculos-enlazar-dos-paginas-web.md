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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBYTOIKB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3rD9%2BtyLmMAJQ8WUIN5pnxV%2FUmIyxQirNPjZmYsiLDQIgSwHE5fHEngU6RUOz7o%2BbqOP5EfmBzbGzD8RSdyHAahcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkoUdrOpoxTOHFCWyrcA7yoWPbptw7cjeh1%2BGzK6Uy8GSY0XaHsmz14es4c%2FageQJnUfctxS990%2F6jA4yGoSSRgnDodrUWWxoBYkALuxmFpAwuHrNWRSZosJO49gPHgWkTeXV1CivvgVunU13%2FcBFqTJ86lc0BGTlgVdgVx91sTk6DnxmIkQiXl4WscNb3440LGsXZyqosdy%2FKi1ci5NGcCnvLoTLr4aObbCUS9zds7OhS8V%2BHNEbUl30vNAJggGw5MCvVYT6aYAz4wiZ3jEp2tdhS8L9%2FRByLh7aXAaVs3ZVGAE36Opr8hBN7Qyij6DCFYPoU7AJjc2q%2BpoxqLNn%2FtbWdwvQ%2B%2BHk9rMHyNRWIuY2ATlOz1VK19tsRhBKTZIHJcOkMTiYRjAfVU8C5UsFG7JGZTRfq6Rco62%2BkAQOwOrGhRx5OoZ4D6nQet2C5IcCEbO0OSmMeA%2BbQgDnR9bGKG3PLJWDSvoFk15hpyGHEvAQ7XHJuo9blxmF64LIgOZGfi1guH%2FC2LLXl66r9pcORN0%2FdITvIc0Uo6h33teqkZWoT5O48JSRmPVETBBLKmeT%2BiArq93PVeZK3cGsEjx%2B1Rcp5z80YfQ6W1CxRlkAMoczM8IAfDtej4qUY990K3Y2s%2BgJX46mY%2BN%2FhuMJWo18kGOqUBBW6%2F0RWksIb%2FQHafIDyZx50aNe%2FUFTA4JO5pneDgXDYoUGjye3XW8RRCcKfPo%2FwegaShZ6r9iND%2Fd98B7YQFhxDrn8O2BVtT%2BD7xPRmjVP0yYJrrc%2F%2BTVEIu4jQzX54y053AtcVokT8MOzsBmOLB0Kxw5iObNk03sfOLJ16gTvXIT8FTRW%2BmRUm9v6F0gJEE%2Bh85YQvPzBfVg%2FRQoBu%2Fm33pzzph&X-Amz-Signature=bc0232b25f5bd0863ed3d5688af26b7ad007bb8fbb76dd1ed2a10a37660b07b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


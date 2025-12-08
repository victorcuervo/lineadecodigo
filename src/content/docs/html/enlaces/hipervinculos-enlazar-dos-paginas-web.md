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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2NTDRF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuH6Yog94PmtPeOC8%2B6huRrkkOy48qAa9DBkh4%2Bu%2FqxQIgOasQimyO6cKzDjDFJHx6EknEoLmfNH0lad%2FhmYJLVEEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDppUYEdrzyVM67R0yrcA9n3oGAlz03xcJaqpW2SCztKJYNt70WpxMGgpx3HRUJEvDc4B8II65lPDRe3Cjorj%2FqBH2oUv4%2FqKlSJ1xhBCXH65S%2B2xwzcGdUzJPrQMsbKe4nvP%2BgVkX4IEusGjqeZjDFpUmEESEZvIcSDix6V8i3YrwT68uTfi6LFJgCVi4Ky4%2FeTEM5MOpxp5C78SNc9dcgXhhhzRCjLWQMOpAJANkmMT9OC7m5ZEgPs7LyloeBwuud52TksGOszSa5q6ZTVD7DKvgZbsEd7TDmLhtRHTGgJu6eOV7DgpT6TQf%2FDP%2BAGmGeEkKR%2FQfNpbWEY0%2Fn8Zi9URX%2F7lpCV0eO%2BlHeT5POMzNlcAS9NAj5ps2ewx9PebJTQMooPD5dEVYuKOFj64FspfQnTBECwfexID6N00bBoe5%2BZ2pcYAXO8hgr0BPpEKXvOa85u5pyzsBnp8P9YQSLP5y3VzAp%2BGBMq3dBn5S4mCqBu%2BuBCHcxELwQkaQ7pN4mOnbzeivyvMdcSdQ5rBs%2BjaYDsY49LtTOXY8QOg5IPlAR2p1zNmR95%2BClCpRyhAc5tGRhLgXy5vojBRjAwRCV3QFjiOdeMtY2JEsEAq2K2QZpeAyKWMhKHuF0BIDwmRSiPgMrg1yV0nJbxMMLd3MkGOqUBKi2p6cPmSlnq7BRZV6VtiIRhHxkYLC1fHcJoDe%2Bq5YwIlJKpEVzUREncFikcIqlIu7fLBvs22Q%2BJDjaomvMn%2B6MSJraHa3nVXyqqCCBZCia0HKZ3iGpI993bFlmZU2zmovABi0LcNQwH4KDha6TRGaj%2BJSFZ1Z5Sxweovdgd%2B87SZGM0kw%2FdcHL%2FM3N6ansPFUBRao%2BfAsIbGJlInnORRYWre11v&X-Amz-Signature=6ce46e3688a5fd2dbfa49a7c1d76335613df85b445557479b5b114e8976f3de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


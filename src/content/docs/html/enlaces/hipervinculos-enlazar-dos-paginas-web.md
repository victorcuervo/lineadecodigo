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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUNT24JH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIFysQA7Z%2B2GrIuLXX2eIz5fQWydlZoRF8PJFTSm8oS0RAiBG6kB6h78XZxmKIOiBN2FCS32%2B4Ir7TvYy%2Fzu1ZXhLjyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMjC%2FyNZ8DV9XDuE4ZKtwD90Eu3Wj8ilg2%2FXuhbEWHtF8MxYO%2FMl%2B9420XLQtW2IM5n1NH%2Fk1M5RECQwKoIVt%2FSfb36aCSAeP%2F84X1n7TwjZ1LOnZmjmZoU8%2BJwTHhaVtalRK2sKAJtf6x3cmfCrrNA6Qgcoq1L0WfBeYiT5DGxNMCbsiTyQHX8E2JfrhEH%2B8oL9lUYjWdIk4DJ7S%2BiT8zh9CHXzdvAstlImho55U9HkTmeTm0hcSITNI%2ByUsHThLZ1ul92Cy31gWzAR1aK7EewA2hKkFnhqUVfJ%2BPUCx134qV4wTIAr35E285nlnhVK%2BX6Sr84M0IaGIujQ9KPc0x1ZbeXCx0%2F3CS3u2Q%2FSK3nxJ3%2BMFK6XPnii0euxQgqhZk4MYU9OI8FIDXAQ%2Bam9vi1AjH2VqgQUptA27IZ6opeFkSlR15cGYFawnct1RAuk514AQT2f5ryi6egNgdlPmmShmvqGivVEkDOEKEKA7w82W1Al0FEoDhmZVFowZN3I0ZCjMlBpv%2Bas5FF2wL1ex%2FpBw1jV9%2Byp3VniiIVF%2BliKMo5UKaUwrHsH%2FBBRGWGOSidw2p4xFFdsg4J8tk2o9iy45MEA93QqribStNfMXgc1%2FgVBQ5J7%2F98fNvLJUt1k4LpWw4p6Y64PIAkdcwwZXDyQY6pgESpBrzkTnviHUbisl%2BxYGsrYvu9n3waoDONh3HiG4ojt2sK9rAWg7dTAstqWgb1mtGHehxJ7%2F6VmNihLiWLwLNJFouKVh%2Ff9EqaK2qkzbysE4otLe5y%2FK5GetwbLYeiRkTazDKgYWvBcmMZz2%2BArK3c9Y212TVaUTR%2FQNbu%2BZQOm0b8fHsoGY%2Br25hYn%2FjQmGF2x3V5XI5NTIP7LEudZczf4%2FTG0y1&X-Amz-Signature=0476915d231f04cafd663c3a159b3328ecbcc526de02dd36fdf6a7fe3cdea5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


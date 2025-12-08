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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CE6ZDM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1SO%2BNabPYLdcnuVintLTM%2FyrpSJtxbYBWQ79P3WpEmAiEAmQVYp1woxtD8YOaRmhF%2By2iT6AfGv8c%2BeqTD6qZAyz4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ%2BMFnWltCETdrINyrcA%2Bf98xn24mS9GgZyyozJut3Ky%2FjT755igz72gao0lbuXu%2FGcm4TgP2gqNGmtiWhpgVsQ6yyuehwEybuS2btCxuYgIcdPiSsr6VX7dVeTJU21lOfsD2hJLnZqHRrytSVCzYvL9JNDg%2Fu3wcW9k%2B9rgaqCEV9T3GvDTbD4T4mJVnnAs9eXtlSLfLteFzvbRMpGBZJcTXBP%2FxqjnUsBFip7aERt5B2muqVRZCPZg9WVxmOAs88Byld8vtmzmDiLTxO2qm5jD8Nk3rBB8u2PZAnOjY9i2CO7w%2BOvsD3UfZfr4l%2Bb%2F1zOKmseTrxWDuw%2BMh0mQJYeJCYRmEBGPA3uMmeiBWelhDfgjjlkLoNcdA%2FiszAwyo%2F4uOKhu6alp1Peqfdg5BPWP%2Br2aX9KFR8qHQ85GV5hIPL%2FSCxuUK9GhOrXcBV1VV8ye1yRyzupZYVEVacRZQZrQmFyP0PR7mnJYT%2BtFKcW02jrQVhaX%2FAEmjOOS3b%2FSyN%2F3PYct1PlpYolrA0Nl3%2BOrBvgrNNAFFTqRAukxL5ieAaUv1nq4nyNmd%2BlTgPJjV1aaaE9pKg5x%2F3WcAP1mU6N3Ce98WhILYl%2FFzw4UyDr%2FFn7weASYuR2gwTjEyWS%2FTQJdnzFoCIUWLLuMPvs2ckGOqUBo2RP15%2BOiibqytvawHgkav4KA32uQ0LNS0enzuyRq0SPoMvTBHfmU%2FYPrsvz2GpTWT%2BPETwYWpDftPd7fW4te%2BAkDEcBsMBZ6quv7G6QTfVy4JHs5vWC1ctUVY5euH%2BReokvMS3iTrCHDFNRQUgd760cXBqEc1msXZLK9LUnh6tPToT3PS1ToPZEhFAF5hV%2F29Jgo784kvX7FrIBjn%2F8qzvu1c%2Fv&X-Amz-Signature=83d3ed183d515a86731f910406f0eb447deb364f641a20dba06a320a9c3fb553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


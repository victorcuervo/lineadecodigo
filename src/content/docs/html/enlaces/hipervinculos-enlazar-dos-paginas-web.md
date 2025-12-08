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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KQHITB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTtGstNBpnTr16Ft7CkvUJIXNArJbGGigF%2Bf3ObRCQJgIgMZHK0aHy4%2Bbfoyt92c2X%2Ba0haL%2ByF09kwbDeoKwd6EMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYic7yobB5%2BMRH9DyrcA3uyNXY7pI6RAm10vCFF7rl8STdOI2ckGo4hK6%2FBYo6Lqc1ggUEOwC4xvauxg64hhtGYa7Jpffk5OLqDQyHMlRyLD1Jc9eUmXCeY5OLAP48qpWe%2F4xPfSlGsd%2BjEOIKmIoRkTiU9EMi%2BVBoLfPuo4H7rTYHkgMRssUDsriHOVW4IemMUWgx1HMEG8iW2t%2FoU415STkMYmmGpGYMcsw2c02B4U5pszKCxpeItoTh4AEAWJ3FdY10MApw0id8SREVsOGFnTFj3HlebZlrQ4x0wyho4OnfmZ0x4jdsvrSw%2FNwb8WsEBLItuH1aQM6i7Mp%2BpxDMPw%2BdJsBDIlGsmhAwMr2AzrmGFPaYFb%2FsVbjo3aaz6BOJuS71Tx2z01AVciRg022vfYsUQxBrIMJRHcLl7SkXGX2geiOKyACWNlN81XU%2Bb6rRXlTUocl6DOE1DjbUSUZP1fFg3%2FVgACksW6j8ARiM%2B0ekbTI1u44fjNnn1OCoSL%2BuH6I6VAvMcSduTl8gzWEqIER1SbEStweYa6Enfdc%2FjweGwyj3IhIm%2Bgs3wJPYcXjGaFAky5ELJxEydX1RswD26uAG7kZ7bYN9AA0OLJZvbTNlsn4EIX123Bfxroe3%2BW8aLmsnd76SlhWTHMIvv2MkGOqUBFVbWdSNrj0UNLCXU7cpF6%2BeKdyGVfA1Ocuo8f4sHG1d2Ifpu5lDeT%2BLKd2FrSZ1OLwTDydO57U3Tuks7m9YrBY4WVQ821xc2fL%2BZfWG0fBN%2BqTNmFQnT3B8CyN4jTj8N5LTRArvSsUiZMERch1nuJuSp7%2Fe0NLc51Z3SWk%2Bsf%2BYRYguPV1oIiktcf09NW%2F58PK5x9j%2FbxSKsX3tP5BLwm0Ar3FlH&X-Amz-Signature=37c964e81ed5da315fd69fa013a22a3ddd5ccd1ba474a50f196733998b4ffd1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


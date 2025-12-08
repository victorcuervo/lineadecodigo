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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGJIAXR5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuBpCdFr8WacTSAo3CQpZA3xDxjQBLWewAx5kKeESihQIhANU7HaNzzdzZZguTGOP8Y%2BIe5%2FzYQDa2e3S1Ys6%2BnBPmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5oLYQzaV89aYhJ5wq3AMoOocxNDphrRs%2BVoWYBGVXYPvWvkSxSituGoOcdKmdomytXQLMxBTcIt49Kiiks2N%2BERlzbGeck4x8J7Dmu6whMegULwIGRQHZgi3j%2BDNO9wq0Q4531zdV4KqMA0jpV3O4f%2Bf8%2FyzBVeS%2Fda0ngvUmtF7qxTEboYoEWk4yaRKbjeak%2BQS3jT4lCv56U%2BInNLnLGundQ3f%2FQV2dE5smXiOGY99rvWUGmHD0eRLCnA1wKRCufCP2kZMpjsQwioSnBz3n8Gs57AYdRR6j8HPf02gsTGCOdO8NvXiOPSQWTpbZ%2B%2BbWC%2F78VqboJif63Sux4igBPY8VwQv0tflHevEq4wV3wgue9evYnSygVTtvofL3RQk1bpGvv%2B19C%2F3nqvGUiAs4osJK4TZWq7QKU3hNBO1RVgBqhUOGElAN8UTlDSvh4bdohcWC5i6rHHiepJ1oLJ95JjRn%2BVi9hBw9isolEXI4l4JrPa0aw2oJVCNu%2Fze3x40Wwu50l9scTdk5NsFoGVryWKnUwGbYFDT0wdB92CHda0VSG0ic1uHaSN6BFpR8WtWJ6QEar6SxKPEnquq5N1ajeHb%2BTx9%2F2AJKK9v0Mgq2aWuXPTzVRFAk6gA1PxGale1DhT6W2itXgKeJfzCVtNzJBjqkAeLkM9nuKlO7SsdSWStu4Fuwk95SvvzLMpnQRVd7m%2FaK%2BKBiR4IgqzWm9qu6r%2BSwHlNUUYs4rnfkCwiswa5ugsfZMeCmHv%2FAI50upDVIWPEfHr1VQY0hZiu0PeLf%2Bt9EG3IctFAyxkFwVzt%2F5byV6FKi3QaePcLOO%2FoKLGAd9hY2lbiEAzwCNbmm%2FwfpQCFawv6c4WbxMstxDQLzmGBicE3gzKwN&X-Amz-Signature=338d1eeb8bae40cd4859806530e9d31964ba2c31c02eb0c5adaf5f2433733c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


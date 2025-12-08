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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WZKR3D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqfAZvolClg6yfKFoaU%2BRs83Pq3QA9GBVJ4k8daliEQgIgMrPKALntuliSzS45pyDLH%2BrAN8VMZioXYLHBGqsWJZMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOli5ckPqBgMKFNHjircA9lPE%2FWGACFhx%2BRWwJTUlaVfc9DnrKPY%2BxRk5eyfKw1lgH%2B501VbJ5dLIpQbdkchGRDZ1wcxE432K5hRhIPFIsYUCULLRMxvvlrCGb9Rc3TvLciJR058LfStntTNVLUpQtMA%2B1YIW%2FjhainI5MydRXu8Bwq6wks7D9Z7%2FtRku7pq67EQQH86i3cpOa5gP4K1PpNppSSCJSZ6vxWPtfiqf74yJXXPh7%2Bf%2BfIxdn57OHPodRkZ13vXOEOJopEDAbMX0M8eWUJy2elBEP0ZDBtXE3T11kNQzQY9dTJBP%2BJEoqMspQ1zOB1Fne6NI8uTjtxHPeQSqZp%2F8hvzpd2stmb7oBPmi2NTm5QSeMD38nDRWwqKX1BtsSy5FSC6HmHK86keJnnVAmzsu6a4KUdVlvP0hYUaPm80bbRgQdsDIFSIng38tvLV%2BCWOQr3DcJmuzvPr2QFAzsNZKbnWZ32m%2FV2hAxvnjhNeemS1RN%2BEPUOYKvNLx7SpRNcCuv3Erjgm2KnsDUgIPkHdBnDq1uW%2FkvWNdvdX8QSw7csWqPZSU6667tGQE%2FhCxuRtsAiJDYjxFvDu9UjEwhEa1Imf5JS4171FwwWCdWneJw7bDHWWkQw2MHQR2Lv4jBopzUHz%2B0VMMOiP28kGOqUBLe2mm7XJrddz4jBZz77icJxpFmNNudwnJCtjzFHGVwq7RSt%2B3jRGs7flm%2FWiVv90%2F6JouVTjF0k%2BeUwamau0fvbcX6Ui3wrowa1i02MdnKjihgGPUbiWv7dB%2FbpxSwC0jz2ZdVI6Ncn1vFao%2B7TfmVWRLcVGwmJOvOZwL3pqQuvGUi4w1VumrONgtBfhbkqL3MYRcjCTSYOXu6PYwJZT6Nf%2Bjeqq&X-Amz-Signature=f00a9e181965d8587a9fe5644567ef5848facd0feafc4398fcecb619f19c6fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


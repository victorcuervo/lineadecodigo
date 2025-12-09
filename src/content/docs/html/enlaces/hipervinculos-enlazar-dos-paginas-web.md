---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR26LJRH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVLakJC2g0cLKYjmMMRtNWR04WAwOlH6eAjnufhvw%2FpgIgIu133f2ODs%2BOyB16b%2BECK8dvlzpA1puUuoSCVjUZYwkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2Bj8ZX5aSbxmaEZyrcAwRm6jKDmdHEd2sP%2Bg3%2BAr4tJgrr2eXXTBZCYOrp5V8vKvGzHXSLtKOrkwk73k1YOw6u5mmtNGC1yLZk%2Fs1LNmtMiU3mjFA6iugbdrBeM%2BzpJcYrvD3RJj0ZkcN3IY%2FDqz6H%2BDJ8a%2FhX5Q2cQxAkfy7pQ%2FYpz9aHv2kO3XA5%2B3%2FRqGC6DtkDdhlbM81%2Fz3qicE1ok1HJ%2Brbg21vdCvMvbPi%2Fw5ccHCB17p7%2BU5alujChm6%2ByYR19nzhH8zWqD2ZDCdLTfwpEtgSv4nC06YvYgv18Wf2YpSZbhiUdsZxR%2FevcEqMwDYrkeQsLd4iR5mvGlx%2FdLZbOsb8qkMp%2BtmMkujP2135rhZg7KnTWPOLJn6LwYBJnZptEhv1sowC0AKOQ1dmqnhrgByeEDC4Zt7vUEpkltEMn3ya9mYZG%2FNeKH3I02ygd7uEzvT1xdyCh%2F9E%2Bdpy0oDjfJesHcDAkdEPqEcLtlt3WHWAdafxO0Q11iYl3tmG6aUgYX2qjYYioEY7Cv5uofqxbcLrQlCoTpPMr4xk5Ihvq13j4EgWbhFYgeupW47wqyrWf3%2B5AR3ZhFVQz%2FsWKcehfOnljOLTgHW%2Bj4Tod%2Bov29AwiHC5aYG3k2Ew7VM2SpW91ZGrpsgBfMPiW4ckGOqUBLSLqef6Lb4DZ3NNB16fTPp7MduGoaorZfY%2Ba8L1eZts%2B4zigAAFt9zVfSWWzWH%2FQh9xFsDsbCxm46LUIZI5QCRJq7zcqFYFaLPUUB0BOI3y2FD85RrLWU5Y%2Fv%2Brap7a8dbdPdJ%2BOu1r7mOmVZ4f2wVJxL%2Ff8bLGJU2eEQekXhYSXFj7ecJwr7VTQDDdYJUpkNWi99hBHeO11XUMYVkbRJlFZS%2FUR&X-Amz-Signature=6aa4102b50878424d2eb764a6498e69829aadf55a74d0bc63fa07e1c553abed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY43JLD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCW7f%2FHVCmCeqDmznqL44kAarwnNH4Rnu5%2FdNa4w6xMEQIgdgkUi5gj2qfKKegDhi7HlbBiqRMypGjycDM%2BKfYpmYwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM%2BDSPQTQ9XEDz1SVyrcA0YCfGutaxZUPIX%2FwdCXQBGabLtu7XilZsfqWsSl74ebG0ZfnuxqTlq7vUG7pK%2BpgemRhEnHRhTSwkUkLPoH%2Bmgs0TtUrby7iAOCnEJ58XsZ2WwT4cC9aeJ2JUWDzloXEa0q6%2FHVVvg%2F8KOvqX0gFOMUlQsKulRrvDiPdJKLdKAQGCw0oBT%2BnzM%2FNDt%2Brs%2Ft8IBDfDFKScJvVhBQtQ19rAy3RhW5kROla8aT7s%2F12iIBjG1G%2FF80Cbagiy4GZ9QrfYWQG%2B%2Ft0cun3AgwMPiTnej7JgEFW5fT%2Fq8AemJvelGxr3Ab2%2F7iX7Tu2cYIQkbmVX%2BZ6yRtVkAk7h5Z7IIAUv1%2BXwq%2BmAGNP1bN%2BYR1LQP%2B9mceXKLUJZuYK39SEny2rpFsyZXe51nPKSdpRI3oXVXSgZUo8auG2v4%2FwX5rC1Ta3DzrpN6RE07kz37sRLIdpzicRdhCEqAfZUHPZTsK0oyAP4ulUbj9EdzTT5X%2FxtP3K8tL1fqqOQV3Ape8WWFpmGDtcAil3W%2B094PAe%2FZ%2FMd7%2B1jeFQARXkQFOzn5UQrk%2Bx7tYIuqfIchngLXl8Evu4vmVOTyIkHnllp1yd2EuIHHq4tJwYTxy4i3Gr9XvrY3scV1rKkdVN6G0Y92RMNuQxMkGOqUBl7bw4oAMQmPprJdSR%2BI0TuMZaIvrfpyvEWOVxZ%2FxbybYmRE8WQod2q4v6NwVn8GprhBScr4X0HjSvAaoZ86vAwlfthMZEQskn4CJQ6JnbA7T9t%2BFrvpLc8yQMKWwL%2Bi16Yq5athUdApaiVKZ7VbxGpDpMAm0XPIcwRV4jaZQacz1ppLFlPW1L37IEWSKbWF8BvGohXqzTaXOOzrzi5mCKW%2BjcUr4&X-Amz-Signature=1c421a81245118d3889678517e60a2efea3691984e94c760437a024d0a834ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


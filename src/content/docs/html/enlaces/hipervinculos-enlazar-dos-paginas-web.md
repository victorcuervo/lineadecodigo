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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466265UYPEF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9NLild4f9T0y8C3avdN6b5dFRsLWgKQneTxLGl66PvgIhAIAKGWmFDBxl%2FK%2BwZHAvkAWcjXkyrgmNaIfpk4vJVTPeKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxigW%2FTRhp5mzSqwBsq3APH%2BQLPrMPqsl2hZ9w8PwFl5B%2BlQVWwDuqFfMttWKlnA%2Bb9qmbkjJBhvzKnnZefOhoC4qCfmk0rkRQNCVRuUwRq9hs%2BeHn%2F6bzgL0kkkh%2FDdwF2FvXyA0A%2FsWi%2Bapfgud3N6MFzIh6Dg1dFtHU50BHKXm6dZA9AI8xmdQxd5HAN4%2Bz4Ze6ckidDCZYpJv9LACxFFFb0oGT8RHhv35pIi2ZSkv64L8WJhDBLUKdwVBFfWmjZ4j4HoVgtSundfB3tTnyqg%2Firr6McJFTF%2FzgOGQFP%2FUb5NQj473Ml7AezXu8Fh5TYNS3eDCWKe9LTFGee0A%2FTjug35RoiCwuMkiWqnApR9C9NG8G%2B8RStNcH04YCcCapkMZ3eK09kGC%2BkHOg1FikODLaZ6xOcJaBmIUNNFQ%2FETDOUNXGm66nEtEU20M27OFZa9E%2BbyS308kUwYEK62TfYitDbh3NfT0nADblqifQmpx4gZJjui37MU8JN8XlXh05cQi3vQ8rTZpehtd18Xj4zd60UEYUY7j6GRpxSFZY2%2By9Zm5rgtq9JlxcTOob1R%2FmGCkSd4C8NP4VFPO46x9VSVU9eQJuluJYAbrkfQtyB4%2FdfujbCTdMGJfCJSfqQoJRTWdcrx2oI5bvTPzC4tNzJBjqkARoShQmxR0WZozA7Qj0K7aNko113GHrijixfiKAMCHxA39hDAgiqhRB%2BGdzmVnm2X%2B5WFV1Fi9bN3YQG6hRZA02feIG9MTvYFJt9AtfNkociAYtekTnLhRiHpJuuJocDYcXsu7vN9KQ6POt4vggL5Mb8YIw23C98dicpT48dsuyO%2BcwrsqU%2Fs1%2FrwUJkguWflVPCeW%2BtAa%2BSi7bkemYbGu2w%2BB6g&X-Amz-Signature=d179b372a7da32f3650b064cfb0051d0cb053a16a7f60ee7567662153edfd80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


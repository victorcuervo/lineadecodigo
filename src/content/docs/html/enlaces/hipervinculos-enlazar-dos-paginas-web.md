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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTIBXAOO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBio%2FnBHALTXhQNyPVoN4eeQaA8tahbQ520PzLTNu%2FxAiAOgrsNIZgVx5eo62zqigAd1I7crOMPiIzn%2FR4JJqmhESr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM1EmYYC4L12XrJRY3KtwDakfAC48QcHB7G%2BvklYev6QqaS0lMv%2BwQeWOw4gOvui2GtPpIcEceowVPH2XYdvpvWR7i0SvvUrytzmH4FknUYUaB26cZpzYSEH0oXj8syKHlht7jDS5zQy3M1GiBtXE4Bz%2BAFxkZG8sdiVUZ4JFNFQ47QzqRZ0s0RPJ8Z3kS9xDXBDm1rRehJowRye1P0JrmgGIQHeNg5TQSqNb7quuE51k3Q6p0c50ffex6ELLxWXU9%2BMlAiJJN%2BRPxbYFW%2B74vnUWRQEuev0j9oQ8tnhSrQKMwsOEHHoc%2BjTM%2BioeUHlNrCegPTKFx6LBWUGD91D2lyd0cVGufsrjhEEenp5NHs5R8eHSASJnbM5FNEq8ZyEb9wBkZw2ZdnhOISffDvjSXJyFnArSptb5X8D8bxsBCrS10DgLUAi3J56jbSNv7P9q%2B56DiqQyz14M6Q7N5Dh2TU2P16f5Dwyec5VNrtWm7odklQMDXfXmIQfB8X4M9bOVaNP6l6VaWg4YsvWOioxz9Iq%2FPt8pvpoqafi4jDmWxTlseuoBzMD%2BXWU2rQofa3ALyv8GD0AaF8QQ5OurBGQnT5TMyBOl8%2B3mxLwLZLEOX2b%2BLkhpnr7ypCbFTHblGFZ%2FA%2F2qesTquElDt7L8w%2BdzGyQY6pgEpFaAN3JU%2BgN9O%2B5kZP4UL9VGdCRsLA8%2Fpf%2FhLI4U%2FcHdGDjGE9QUmn6D2BseiVLtL2dQbTWpSlUoQTQTJzylPTkq8aSy0lUbR%2FzCyCEmtX4egRWoZtBHI2hs67oQ1Myt6wfNmETEBw%2F2b4BJW%2FflCFvgI34FTC1nn40g9Fil0BFjc5nzJVT3cEJsFvLs%2BwdmO%2BxTe4g3vdCuxRWDBUsYmd14osTIe&X-Amz-Signature=2a5e49d61edc70844e65ba7d91699a9f8c0bf7c473600e2d16d9ddcbcaf472c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


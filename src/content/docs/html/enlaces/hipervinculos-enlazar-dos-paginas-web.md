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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQHM2FI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDntIhIABVc1gXakZQ6cQ1UXVkGc0bMhMdE4T3pU5ht2QIhANOmTvvYDdAx0%2FxeWuXQArs4%2Fmy6%2Fbez75g2u3owlteVKv8DCEEQABoMNjM3NDIzMTgzODA1IgxCdEwP4qMl0Exb9V8q3APlN149MJIyDQYJrlh0xI%2B%2F%2B5riNN4ee9nkh%2F2zQzF82hnaSr8fUefES0xRdAAi3a8WAmTKpt1nRE9C8AVBO4b5hBPG9dSMgd6WhVJZmQsOmrT99HOAXmI%2Bj2SeE%2BXYR0b4HrU80%2B5W%2BuGBN534aGmQtvdTXmRDD3JGistNl7JtQPcRux99FlBiHJBPXvVt2WgA3osq1Ac1EN%2BfUuS%2Bof1oTF7Zpd1Go%2Fozm56FeyT2ZL50elASSH4a6npdLdAx2%2FxRP0v0G0An8Rb1%2BlRLDrHvuONutytGJo%2F3DOTjxOEtIdrNL6aMyqqNGEBJ4EqHdTWIy0aR8npquVnHPPfgNOJ0%2BYzPeermaZTC1UzrDi3t0ZfkJmL69e5oJV81DKlBlRe0bYDS8Jh%2BJeGasANtFpwJXIGfxAimGIgjbX8QcFzYgJdiSRJ7UA%2B4Hn6wVp9hlWlv7EXM1WHNV9YpTepZDhUNGSTPq6DoEVur00vS5pLHcnqEdcW7y%2BkeGl3UjlRYZ6TU6Tnvvo6qbGb%2BnhYsQWxRt%2BKqNkE%2Fn8FTfeMYUUPuD3i6F0mkkLKJo7JcmgRhpp8ZCfDHJPqYQaCmHba5cUg%2FTie3VINYbCzEsg0sQV11fpZZTKZScZ43dY5osDD8hcXJBjqkASU%2BkU2AgkSV3CzoTuNpsOd57mFWs36b5uaeVdx1I%2Bc2mwMZqAv0aipWXGYT237elyKuJnBDH2oAdcvzxVcdNoh67ZFHaXWBh%2B%2BxiEIvPNC2OmucVPXNTxQy1MUZ0sHMSUJv%2B9vrTSaDtj25I9KAMpOwYOfrE1vOoohYkVBvYixhZNCEQ3TZnzcOLHILc1T7GAxeFDugCDZ%2B6jbyuieDi6i%2BHfR7&X-Amz-Signature=8a3df1f29530a6d3c06cb86c627745653e9404a72830709a56270edab73edfd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


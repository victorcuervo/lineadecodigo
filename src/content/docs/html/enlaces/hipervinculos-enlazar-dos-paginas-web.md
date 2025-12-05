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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QU2KCED%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIATAaPMzkUiwedgkOkUff%2B0F5Q9RSqBmUaUdS%2BPs4YgIhALw6jerbROU2DOwggN24RL2iOC5RiBIUO8m2PcnslqvGKv8DCGgQABoMNjM3NDIzMTgzODA1IgxBwrodYDfR78G1n1wq3AMZea0BIeFvC61fIiXS6h8K89X51gJh7e%2F3wvNcLnbDVPCsv%2FzhZxbho%2FM0RWLhwArbXCiTYPfFix1x0P4yUZO52Xp199W%2B8yhTH8GY4%2FAoAPF3g6jwfOE0%2BA6SrnkwASUmV0AcLM8OPH2BK7PAGI6W0e0jP1Bpl2xIs4Ah7u%2FhprnH8bbYpKwMnBhz8h%2FR62sfc2x1G1R1CcJZb9lGV0c8CDax%2FfFCEu%2BeylstdbyALVMFzjuIe4sNcOAJJdIwsuBFh4bOrksToVRmrCf0Fzusr3e%2FOaMwcjGLqi47BUXhD5G2LNaTqzaL%2BFGecUjv%2F7DVbdvmTg8QYbJRAY22wZ%2BwaEtByYgq1Hgyqxl8hs5rs3lkEKHis0uYUEUMqnhFlHJQOHipmzpEzjn%2FTrHPMhlzh4iN3c0pq4Y6dlC6uw%2BKxBmmSlrPtNkk9%2BNQY2bN5kME0IBBwH2%2FlALEspjdWOBvtxPYp4TVIsgcfnq%2BLuiKs21PU3rU%2Bc8KKWkJyXeyYP5tLsG%2FBaNxgY03utgQpxPcsalSqK2GHDqOCTe0ID2SHsvuhRmSzrlUof8QxfaxljBqrFwl2rojjFVCGByVgp3uZqSIJ0ouKFnP70fCSc9iEEzxoPbx5CZnqTKmDTCHxs3JBjqkAcjAPB%2FZNEbZEKVsc%2Fd%2Bo8Wnw4zNMF1ip0kvjljAX3auts%2BJNRGxkam0EQH%2B2BJf9rsgFzaSCfLLje%2BkPOkIH1A2dxs3S24oRPFeEYMAovRX12groWD8GMcbp3RtdyU3GSmnmRZiGjS3gSF7FQwYCJ3xrUT8ESnhKcHFl1Ff5eIPb9CSlnPb27r416BLWJOjZ362OQrzD4WqRpy5kHsLCr4PxNks&X-Amz-Signature=c8e64175453313058dff7f5d2376705ac370f337a73c36615a60f267ee5259d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


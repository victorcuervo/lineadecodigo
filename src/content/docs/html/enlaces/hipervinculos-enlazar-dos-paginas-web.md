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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKPFAXQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFUotPOP1GH801JHFSbX8F%2FgwjcdYCHP9EnPB%2B6FVD0ZAiA6O9v4LqjLmvwiY94SmTn0k1rkU5aLbE3ZMT%2BkC5QhSSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2B3k9TuHXKQiD4c6LKtwD6E9hM0NRqzE%2B7dTfan5mg5NYabyXQ37uywuwIT%2Bx1o5sWtJzwJYpuLRufIJIIQ4OS9DSiZLHOdfmnP3GYco1DzZOBei%2FvbU%2BvuAqQUNHO6fzn3Xrc1gfobue%2BIGoalUtdAdUN6D63%2F7KeMf9TE0ZyLVv0s5Xj%2BV0F4785Pqlwlq0TVpXjndQksSMJhQTSq7UZH7jVFor8Dub8kyRQXUlUHwl8YKplUbki4o9SzCmQZ2MPIHXL%2BIOCcthaV%2BtP9RKaqkmVrszdDD0gE9pnsYuPpjbcMBBhJNTPh1ZDZ6QqxyC%2BJNw6e5ZA4hFEBaXy%2BfAOOH2KGlVDHFLjFR65M1e9FqQDL80tIy%2FtAfKssMV%2FWmIBa0w11%2BF0K31f3neA8ffo4iqwEdlicIYYJBL3UXeSm9nr7v81Nf0rBZUz4%2FoXu4Zp%2Fz9yrHty5fRcoai2XnbNSirVcZTFJnMgMjSz3fnNJyhw4ANtcvm2aUquzmaNOdYZoGY1iPfN1x3LwK3CfufW5alpdXpEbCRLCj5K98PCcHiYCcvqmVxrb3r06LMqWn8nj3PrlYlmbL0N49zcm5i7RgTULDDB873yZbkmGF2emXos9Te0rumNNmJuQiLns%2Fg8NTsRbf8QHPhzq4wpYTGyQY6pgEIxFd3RPu9X%2FsAbN9knCQ5dTEYHO%2BNNrMoziU2u2XFP02dpYL2Z2CPtqnsZO40ImRQ%2FbhRNmpcIUxZgTKfePFxpfbv%2Fo4S11ydjGmMN0m384I5Bu7bLw1xyl6TDY9hTTBXV1wzGV%2F6dLkB2cQ8G%2BcA%2BAeOTksHsZ9X9VBISPyhBVlalhOEOwHmeSfWVn4h4C4ic3jTiYoFmtgpCSl66Jli44NftmoY&X-Amz-Signature=2741c0a872f4e74ecc542bd39d152c19db6710dcd8592fb97ec086124db48c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


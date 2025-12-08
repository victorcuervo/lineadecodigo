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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6AEHRJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESBiwGixZv%2FAuykjatroYNKQMtPngU4055m1lwUYpodAiAqtZQ75QNLmYJJLyGQw8IQrDb0SDzTiR2jwGl8tkV1myqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BncYquI7GLYWoxyZKtwDVA8qtoygd2EPx5ebyfddBm15XWfYVzW2Si%2FhHMpFaHkkUW8xqAzwm9Vy0lw4zauXCuQKrE189jVnNFq0r%2F7yKfDAJ2RG%2FVke%2BqQoZ1sESq1dJbze9H2DD5XCuU238IqR%2Bzv7QEHgCN1xq%2F2oeYdN97t4QuNM5ugux6%2FKC%2BzMasJADf5bhMDm2jXsnpLDiVBWqZBLbXsT0TtqwYjxFIE6Bz8HYklDHS1mIzqMUuS%2FU9rCPgBIOTQ%2FTtAFFTSVxpjQbaEeH4ID0VKBgcB0j2%2FLYzSavseStuzk1rqAIAf3TDjTwonMhRJLBRc4hh2U15q2zyaVoH2YyQEc%2BZKw%2B2LhSMv%2BMj%2BeWGwYtHE5v%2Bf%2B8hMigwTuLGgNfOHaEzcZ6p20dgHXnZ9kURiw0wIgbGmoaAK3oXB99%2Bfoujtr93%2F9TG2icG6kqtGixxrQ757iosDZ%2FjJqniA%2FHMWi3zN%2FSE1YyCqhvnlBfU7tprOBo2mPx0EZbGgikJCxMeNx%2BPQteTc28jZ0ru90Kyl4MwCsQkFZ%2BesiZAvbf53xrYJoJc6v4Ke%2FfzM1v%2Bm6QEej5S51Xw%2FixFaSekIxSenw%2FlPHhxTEw0sAdslzgESfawb%2FspsAhkbxVtBC0uUpV7fu0DAw3ofcyQY6pgE3tAOclXx3SNdVOTwdYojVYAztHBgHx3G%2FuNpoaUFo1fMK6PHGn25RfVpK9TONCsfvXLv%2ByBIJWXYg4H2C%2FCjoIi%2F07H%2FNDtoBHl79VrkDFQa9g%2Bb%2F2lDxc9QMFvyeWA8PavximO%2Fv47xO3PWB5vCyBsVPCO9zvrv25uyY0RISCvm%2BFuHxvePY0P3qxznDCcQtXl7J6aEQJN4BeJWFhkF%2BcLt6NUot&X-Amz-Signature=20ce4b84280b5e035fc1384aa3207e400685b26e2be8807e33407c2686655cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


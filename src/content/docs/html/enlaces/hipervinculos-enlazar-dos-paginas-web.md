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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUIX6R3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5BPmKZTYIiIS93wrRr9NaZT8MrkJMaMMtLI1FOEYlPQIgQ3kGKTT4gJYggZBLGx3vRs1XswpzcScRvP7hCMMy9eEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6ptDZmLUbWrM18TyrcA3P%2F0v4cjaWEOhqgyChDPMPAmshGCvPq42cNNWgGbu2rWORN6BK7NkHeudcs9c6DDrNIwpL9f9L%2Bn%2B2NyvbvXJ%2BBOEPej5W9gZYru78JW6rCc4%2FJ4Fvd6m82eZK99f9tVSN%2B8M7PB3pRrSXRvWKKj3M7TYj06aK4d%2FjTSprJZvHejOcv96%2FtZ9h%2FL151wHobZJgyT%2FtZXi5qywzZy3wQOR1fOf3PCpiuFocSPsYgjA%2FCfDtVyiSaaOjuBNkNaLxS6R1Eodeui7%2FCd6VCGqUkRwIgbs3URsThzFOYSXG%2BHdpntoDlvM1IUNtQBKH6zTa4ci7PLnrUySodvOFR%2Fv8q5puO9L%2FRZIVqQjwfGHYzgsSdKmdDGBleOvvqke9H64Fk1XxNtHlwTZdWENlSuAMarbIpEwQTc%2BL5nrOhj4NWsUMUPZMF0pRZgGceb3m9wk6cKlqAMygaguZHVg%2BgpKYY1igO7WMVGd6A1z9KG2z3GlDjCM8LpHYeDdVCnWyyZzG1DHp385y841i94cFQ2jckGLvPK4JgX%2FEP0KhghrS7w77d86v5g4ZdRIKm3batmesiU6R2Wu%2BTqkRUzcfRix9NF2EZOUdGhqJr0%2B0im9h8I%2B7n%2BLLAULsfyqgbWMTGMIa91skGOqUBvysESzZgvPnBbJGcyQdEDIXWVj1MkcdAvz26YTwH7EgsIZxJS35z%2FPl%2FlCRomQlHmnGmGkTas7tsqbcKgnYqKrADztcJmMlfHVVFga0wYahwLIrUL9C2DblypIzCttbGJXE41wJvBIya%2FtkK0MZbQIfYandK%2FIWtKb60Kxqr%2FvAPrvJShEaAS0Jx2lTlZkAssF03gEsqM5WYJMgWL8veCvMCxS09&X-Amz-Signature=61d8816e1dfe19a5a3c9847eb998a74c6da2691e8046b926e46e886c84ad19fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


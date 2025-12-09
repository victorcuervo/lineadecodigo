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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHDUABB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiJHhaTvP1f4FzbcAVekW6gZs3jKjwg%2Be%2F6xLXr8msvAiBIARwITIJfjsg8OKT3iIkQfIAwe5sBbPPKizSnyCzMpyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZfJAr%2BvEdRMr3kJyKtwDNSXEXSwgTDy7C3xIEQk1C0qwBjblYDe3gEhSF5yuy1XWtZU5Z8Ep5JcGnBPCeroMRAITS1rzaoNRFayu%2BDCJyW91A2GftQJObfF%2B7mrXarW0DwrxskuCL3Gr7EggpCYd4J8c%2FVLmwD%2BqbJuoV2n4GhrsyYOWOIWXx7lxoZmnzpgqLP%2BJ7%2FLHNQGeYG8Lo8mIVKxbk2R1oSuIwUjb%2FumDoWX3%2Bam%2BIuTL3YtM1tHGXa0zspJLkkcv4d66u583LZngfRB3%2BaJwAO7VZEAFjed0XKCkxMzVnfJhDkVpiAXWuzHc3xGzZdL5ZfKffkQyjL%2Bb9YfUHC3tK1PRYOF8%2BwbeaoAtRg3AtqfJ2Fw7UR8LiOrEDPhnqbCDWwUsnYvsgFf7MrfeYMHmO7eAk%2Bp2ymEJLTOg7ssp3cC%2BieTkvif84tTGnZIZi3ik%2FA2Zog9iFoVVITgRB0wvuDiGYgr9WLLd%2B72SWcVEX4NUett1K0VFtMRwRWUvYhcgM5%2F2UhsyTldF1YTzPnAzhCqfnlCONnbPlWqHMbaCAOsIFcSl%2FFzn%2BWNTJDxZKnzp3xVTGtaQaer475qXQBUe8xIGF40%2BjA9jpcmXKJTV3Dk7rrbgymOveyF%2B0maTQURerrLydEEwsMPfyQY6pgFxQRe4qUqAnVBXI%2Fwo%2B30m%2BqusLy8x2w2VEgc3z%2BsN94YkFAr9HA1SzI4s1U1GZ7x%2BtD4n6dGqO0HtcmWu7KTAjJnU4NIkxBmwhLTIz1NT1jhD51ONS9gSC10pwPl77sEcx4Z%2B2v64x%2BgIQcDLJ%2FEIWCLmOEXd9%2BrC61J%2B9jd3tNOAtq6e2vCoWv%2FBW9JcP1eQLCGhLel%2Fy2DESFxkCl6sajPCw5Oy&X-Amz-Signature=df94854f7ddb65e3c27b3f431d44951f19a39f6b4ac16fac1decac1b226f6393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


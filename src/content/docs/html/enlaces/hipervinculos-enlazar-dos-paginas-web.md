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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVE4EEOQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICo%2FJpWnt9%2FzTwGMj%2Bt11NwDnnVyzzWnczNUbMow0MpNAiEAqj9KHtTOyXKdr3agrVGAq%2FepzwVdbZ0nkPUOGDfxMd8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKOVPwmBFqQNtCIiSrcA5zhCMzEGoasw2wFw0OPfxlAlKRs7pzgzQUYxiMeZIdRE91NkDOg7e4TQ6fKQkTKCHp2TBVVNAFQDggE%2Btf14Ea42FMnxIHkN6OPTc0MFKJLKzmAt7aZXvL0l9oRd%2BG7%2FVtSA5HnMPPtB332AxNTmUxK7Y0avErFQ%2FEeCuay2UXjzpG6kU04DCbBu8WlQoqwDlsQWrJPFICr%2FQaMXGw1Vm8ew0rcgu32tl74s04%2F9ti8PPL9X25o37Qo0b0w9iMNJO8qDb5GF2MQKxP4SQ87yEIcAUGvLuPysdDKFQXl5o48Uwqx1esK%2FLnM7vPur7FIscVajTJqfOkq0vb1NTLf9AivbAP41BWMwzkgHgCys7QP22c49ovRSrTDTHNMkII0qvrnY9ABGX7cQ%2FkxYxiYUdfII%2BiFgI3BYj%2Fw5gE8LbY8UOwkpOypCN2EM%2BPNrIEmAnjz87yMnCm5i%2F%2BB7u7owP%2FQs2XpG9ZPAEVyNFr44vBjs9doG8Ry%2BgJIGwPn1hsEk5HyyFi%2BjlYnBxIJSA5fjgMle8lXnFPWwxHwkdsSvMEtbTTeAEMDeB27ifrXq2guhKQbQyXInNjc4MbxtbWMRES0ZnWUiZNl0URkS4e%2Fg0xe53nP2dxhDRlu5P3%2BMM602ckGOqUBiDrqnOVpqMU3HzwNUti8341t8uv6STVXXKQCFvdkUE1tqM34AxS%2Bv1Yof1ocfCXpMPRKoNVf%2F8pu%2FefiEnOtb23r2y5DqAZ%2BsBdAgS1Sy76Wf9BsR%2F0NTeIWfvJpAlrwGKZ38IAMTEY2tv5%2FmR3Z%2FSz%2BJwpV%2FJbJB7F%2BwMdM64x4HpTpi0UyVnjT%2FLQJLoH3o77S6pjUDz6SYcMw18TksD9KKKrE&X-Amz-Signature=54fe5e3c0f3e1c6d57da38183215b882d5e23db3636284f98446dbbe0319a0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOZ2FRD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqXzHcKKH8oKtRfuXKuJLYfr%2FJBbWVUulo65veyD%2BlrAiEAnXd0VrqU%2F4J19dyWT6TRTyfKeMgWP%2F5atdQOQEvjze8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFM15%2F8B6%2FKb3MIe7SrcA4UZFKphzUR0s4wj%2FDljAZLUZwX%2By0k5VJAR8QD%2BYX1qS4PYDQLfsC7z1Exy269TZIeEXjtcmq8ZBFV%2BkukIJkzAH8QEPvxud5xlALqJLr5JADmVxueEunR%2Bdz5bccT%2FamsvyNHxXWhi2oLm1sSqLWXxYDxlz4LyLrVmAlA2jVIAKG984DYA%2B%2BsoA8oD1OyInW%2Btm9wjXkZo7lF6f12dXu48597GrKdYM4phMQTGHAae%2BEEJf99AyDeh7HPNwI7HpbFm4pAEc8g%2FGjBFas2fmHL%2BEbOCODrDxirsgKYs0Kn5lHQzf7idR3Bkl1GgvhrjpRvuRBSrGgsfb6Qiga8QaaTtlPnz3EH3Ldbxt9MLOwLo6wM%2Ffr5piHNtZenae7lLXjt%2BpXvn8CVtm2hpqx5Lar%2BHGOlYuA%2FzKNolTxQ7FSz%2BbrmSa7YF%2FoReAsnnmCs8YrQ8%2FD58WlBPRwA6o8l29uk8qRYeeg1o6r%2BVnDBRBsAyLNXGiP3aslunD01k0ZGYBiRGSAdCCyGlwzjdiStyLdi3Fs%2BuS5Ymlt1doWDAPs3qE4TaqshKHtPNghCB95b7bf3exmIPCnZI83zohh8l0DgVayl83%2Fhpu4NQ%2F1mQczf2WFYLuWMeOsRUJtiFMKmA3ckGOqUBg8vOjbBx05FuELapg796RcAGMxnB39Oah2Xdgypqt3vnuOVjg2lbuvIvQScWbltRUbVm%2FZE9jeaKSn0wBV4Gm6gytTJoxBA%2Bfdfi5BQ9WPKsvP5g92ktO5nBdZHmORnI2zV9o0QXxHOY3oNa%2BgzuVNrb6XhrWgsXB8gHRviyS9Y0aiQVFsGFHc8wNj8eqnLm6WM%2FvSUOUJ%2FEmKcsdNauGJRnmxSf&X-Amz-Signature=303d06cb0d81e362d2094a50e81a4afec6166766a1c334a51aac04c738024903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOP2I6XA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FQ0QJxX7elChHb%2F0tZEnSF8CinlKS96OrkwtW1JchYAiEA7ynyFh5FWKaiiwjca2HTSj31K6HZOukBuy7FQkG%2FfVQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQYO7%2BfjTkaXsxaMCrcAzxA7Yusk4v1mS92aNm69Nvir1VrAbIM1O6Yb5r9ta3KuaEze9Cu8AnZS6EEP7sdBIlDrFVDnMJ2eNW7BbG9wyzrDPQznraeOXdnOxiOcbUfqfq6QBiSlcwWa86qBsNKynkTaOCN8a7bJUiR55kEGY1M4dgyimrwHQO6lEhwZRgQNt3vFqV2w99lcNUC2ED7fvI5nA4oDwMTFCro1dFIBgmAw2BolfFIGlomjd3b%2B17zAwBr4znMvzyx8Z3R6oeM6trUU6s2Hbzi1f3JRlghYIulOQ8jIvF%2FZp2l18L%2BHE6JVmHOGQ5cWq2QdR%2BsZxjIdjaaGWN0qr8IiCy4GUPPEow7wHwOhtBlmGhCz9KtcoDcpglhpY%2B3L1p7Ct2jwYYkZLcnoUUqWfJRNT4tIy1bijde19jAklNSpqFAE6PiNuUZpmCNkeXsSmjp5tWA%2BNgjL8v8TC8zUbT%2B%2Fi%2FmPLS%2FdujeMenUMQt7l93Fg50%2BENvta5ei2VcjJxUuLgI5PxOOgwhPJZdTuCfCxYQSRQrkLRmETqu0TMxImSDnfmo%2FQ6YfxTwWQibo4kWurfI8rN0WTTpqdq3L4QZyGFHp8JEuECo2ZlCmwB0ORSvIgqzVyCLbHp442T8PATtOCXj7MOHd4MkGOqUBWDzDipWgtQNReupaQszZMvd6qWobSP%2BEDCGcSD3kFatchMB54TnmFSsrx%2FkxJLwnzi7Xzdu1lykG03S%2BiTXiiLHQhVp2Aw8a1kbOArHJVGqDjW2SxvtP1Tra7QB%2BCsabxhzt08tyXxyin1T7ty2owI9puJxKqE%2Fo5wpa%2F4%2FxWkaiDSONC0tlXQGYkc%2Fs1cvel9Pan3eH3XhYo4ozjDXmNYdsvteK&X-Amz-Signature=de328483cedd9a0e68a6fa8361e4b66b4060f1f67444c8a1dddf3340a7b76c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


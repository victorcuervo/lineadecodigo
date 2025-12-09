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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPL57GWT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuOdbfiiuhdlPGd2xEEt2T2LWqZEgyF33rmVY59f94CAIgVmRUHq9IXAuota9U9R9Fb1dyWYQ8bCtwpPfktleptr0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa%2BxdhXa351bo21vCrcA4S6eigNsg22FIncbTdTE7oY3NONv7c4%2BL%2Fh8vb9%2BoA9AzyeY9xjlrzXCirGJv%2BnrJCMyem9rplsXmKGMpH3b%2BfF08mlh0e%2BZeSWGiyMgR8dsFuPdiNPmusoQ%2FTXbRtQBgzYZs1T%2F6VIGirffX9aU%2BlG%2Bt7JzvVDdAiEUM%2F3Z%2FFgXcHFiNvWcyildL4FzniadVbWZBLO8GmPu2bJxJJvR6rn2XljpA9Ivl6%2B7AkqUfOOeWY2MTLgDkM%2FIxqy2zNu2LegkA0GmMtfYFpwhCdMbTAqEaaaU53H9tso%2F6fm6ati2MQRltVjcK4IfDXnfqhAcI43EaUOuYBlgTDekv1katJMJz7jAHTpEnEeLu%2Beiv6U2xSF2q%2Bo88h6CgO6n7nw41UmGed5e3G30lO1z1Ra3FjQWx6ZcukOpLBS5sSly6YDtmzp9gemFz9B%2BjNNcDORhvRLNGY%2FyydsbfIbvi6x%2B6JHIQTouS6rh%2F1s0O1OnE4Qk4N9PpM2tI%2FTDKKvWa2WgtxbbG8eiu%2F6yZHvq3HCFVnp8HsnlQltdVfswSk9wwOVmxJtPnvZogKB1rA95wWIA7hFBqpYYFkJ%2FPsJb6wwobHSeXuFm0DIjsjs42hKhX6G3CMwKnKa8h6YK%2B%2FxMOi84ckGOqUBm%2FTAh%2BEn03A2gUERHo58YYd1mCRftsSxcgOuveBGCK2wqHM6sWcIUSHuagd4VC8YxW4LL2c9WDNiMGrXgZmfv63hnAqUrvEdMLUFRHVCq0Y16jp0%2Ffb1IHY87GoxvQJ7d1yMapvjk53IiqAddzMShw3MxA7Wcuf0Pm8gF0tO02U6Wk78bthzfyncovcWMBHc1T3Oy68ZEZt%2Fou92Jeji5HWucStl&X-Amz-Signature=6182e97967d1ce24cd001a6a4cdfc2fba3e0ec6ff6364bcdc392d19b60a71be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


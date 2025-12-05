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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EUZ27K3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHlC1lfRfuyKZAqN9Ck7yWF06KVJrJ6qPergsyY18JhAiEA258Cncp3cl73khgGDlCRqIA26gUUlCmpAycbE6XyXqEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFENM3fk%2Brvq0WTRVCrcAygq2mbaFHM4YIf8zY6HBggh0zElYW87kbNoM5XOioGWp%2FhUDXmyXSIqsWE07RFojnX02Bv5l9UX9EcmA5Jq0kgsZPqH%2FNOFg69tM5kfgeFEX7Z8BdlSXB%2FqySyIwMhRjZ4sNJMvQaikeyND08i3AYtRatPDqq%2FZvgleJ%2F99kmu1lR04eizeKMMAIPI3BK0Tl6BHguqTWJ7dV%2FRV2OJ4SU6ih6ODywJNJf%2BX7ydEVZ8%2FxidnYtD42cYXXdCAKHedOw4ImAbHAunn1JJSTGDJgQnSpX8uC4944Ozct1SbEaaAKCR9omeNqRQioVYJZz4Fc2yq%2FwKXwsZW2CI8e0zZ3hR3mI1CyStOIDkdGYR6OeBzGkE63WpTrn2i8o%2BUkkCZ0RMjxw1qYKV%2BYU%2BOqKu%2BPDNGi%2BEcXHpsNVORGu4%2Bf05vds%2B7nibsVJwucnM2K1O1oVUAPLSG6sNDM4cWzfpZCYW2SjbPGgsHeAN8eDhHqwPn9t%2B62ei2buwJJyzgKR2fJ7UkuYdMV7p4pxZRYEgqkFQUcFC6pZBh3eQ4CxnTTTnHuvp1TlTj4Q331jHbdDtFSiYRadkmjibC4eGs7feT%2FTymqdlVosWXEOf38SlRBEAdPpIt5km%2FlliI9MKBMO%2FTyskGOqUBG5zymWJRoEp2Z12eLI25wuOq7C1UyaD9ODbHcMdKCywpBo6wkpPR38bY6llIR%2FZ6ZPApd3EGqHn90zOQ8XBdG5T4S5IgPU%2Fqls1rQryInQ9DCQgfxjQatLlo%2BE67L4apLBOACRQVuLaRVC1ytvfug3uzGtHvdm7oJ3PgtG%2BoqARi9jLBcN2V5MBYkBFwp0ikMN%2F0%2FJX5k2d8G7Tey17tzusng2ua&X-Amz-Signature=cf70f291015bb09b3fcfc5511a03acdb9a26154ac1c8b3930b87372f1d3cef76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


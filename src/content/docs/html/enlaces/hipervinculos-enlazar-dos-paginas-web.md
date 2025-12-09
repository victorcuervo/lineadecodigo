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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IAPXGPY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh3MhdbI8tsP0d2uoIdoFrPJdMCroD1OcfJXfzmqCj7QIgMM4Wq1jD6IWVzcQ0Z5Q6%2FCY%2FscGT8Cfr14uWdQWhn78qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQBKMFRiIFWh0kbzSrcA8BkgAcInJmpfOmLYVAZzNljL0V2EupJKEGTLQfGGJvAzT5KjfVl6VS0aN3MmV2qP9%2B5XRn7xdpyxOGIvkIVTDVw5ex4DHa27ZXzsnVMMU6cNeZv80o5xg2eVnuoWi7ltFUFbfVcylZMfxLy3oasXW7GnIsIWg65WbQ3s4ybDkdFsadyosyH%2FZ3CJuGQlR4KtTIc5dBPlQBH8BVgX6x5%2BVcSX7ebUw0EgSEkfs73AvHUwcE6UQm375AgI7IRBst0tmuj0mXHdGDOZW7%2B7naMcD5PQxOMhrSEgE2NR%2BJ2%2BzyAiHQCeKrmHm8inKGeFhe9BsXx67qYk2p01F4rP0CvIBOqfvaUfuN%2BQcZmGtIvQGO%2FXO2eWSQL4VoAXMFUCk6tBrE%2BnSonZtNq1itzZ5JGdxLimqJlp%2B35rKFHpV4bytKnVP3mtEutjoGIINv08vS32G8vP12s8xejD%2BGrOOBL3sZ9JY2uGk%2Fmo0bqt9FoW85dGrmp8s6bIhchhd0Z2JEjnoO%2FVu0P%2FTGMiSV0GqGUU%2BghwbTUpE2qSiolb%2BXrZOlfETv72KdnW71am6NEED%2F8ctGBE4ET4Kse0gOSbiOAy4DHsv7DO31FYjtOBElYNuqhGD0L5o%2FWSwdEX49vMPHc4MkGOqUBWzSWWOGT1724zP9IaX9ddgWRPCJQxH70zOauTPwKUU3tXnaiSBC%2FRVC4DDG6N1WvN82gtYx%2BcriGwSxHHHXDx48SmeJVghZl9dgICi39gB0k3p9DCwYsLR%2Bco1ufb3owAiUjT0crR7fj1x0TBHFM8TpGsIymIz4RtjCNyRbrA35dwY24Nm%2BXs%2BHhwltkdUGUHoPkiTAfl3WGbueY8uklOA0s0iuS&X-Amz-Signature=d108135b984dce3cbde69a210be7294cd0c4c55efb8460eca06c38518a483aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


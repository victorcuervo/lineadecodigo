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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUY2GNEF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWp%2BMdjUAwRaSGcucYAMyLRuqKH6%2BueY6uJ5atJdG%2F1AiB0g0si6ltXKRhvFm4Z3MN4tUvbiEa5Gm2M7rUsCI%2B3NyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOSdvCRscPpv3mP%2BHKtwDK8r%2BEjZzx91O4ITI9QA%2FwW226kmndHJiUo8iOGjcBRKwbvnkNAmba7mATf57hpg%2FCVndonI%2FeSlGNzc080nuICvqkxi5gcYmjLCwtxwF80pGtB%2FqZB%2F8FLsjsEtWcCSLD9TSM5X7KFjlsG75OvzC79eza1iyZiu%2B34%2F8tnE%2B2JsHTMlVQkd5SonKbP8XA%2FBD1%2BjMkGirgloy87BFl%2BHIE0FHb18kl11EXPVW2uF3A5I4g8F80duBkbho07ANRPKhpme7oc%2BCm6KmK2G1n1eDMZN9LbIrtTkM7gZi%2FOJmax2sdSFs06AiV%2FSCQZWG9yKn8JX0tewcuBwCPnd5I6mFyAgMv7Chw59kNZLhtiutCYC4AtBifUFTqfcypz0SHCi6bTWmsiU5KET6W0Sfc3U%2FtvWLgOjuAnInZr4tlXSjhCimFTGxMnRxkp7yzLvmH0m69qYBA1%2Fw41u02Hz4bt0wSKCbShk6%2BAkYWaLd%2FKX5EMQntWB1%2BIr5a1qowIRw7g9rTtrUQqG5LsadGFLZcD%2BkxNMpJBfPtReq353M9T6ceyf6pK96VAcA7gjwU3hdM%2FS13qK0VW7rlsMYNuIn68TDjdo9oudHLunuHjr1EUYBRYwe3dDT3tzfVejU%2FAYwuu3ZyQY6pgGLCxGoiwu2eDW%2BNEhaTSdeQHUSF%2BzX7h4muhK7IV2jPBRsC5ccp7UNDOgfBai5DZezoKEyK8PmweyknH%2Fwcv3sSOCw7tMWkLZmUQ7k5Xyq%2FRFD%2Fb5MMLY%2BP78XT9b5mmU%2FsG6EtPuTyZGr3HC5hnEsDYgLID2lPmll0LB4ZVJ3bTSMQ1aeONg9YLq0dK1%2Bg2L6GbimiN6TGKuU18c6k4eaCrnxLRY%2F&X-Amz-Signature=cf32ec10b4f090dd1244a800542bf96f488b911a57af901b5e457dea05823f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


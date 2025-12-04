---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTUPWIB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDomqmDFoIDI4ghBLMpuDdIdMzob4gZtYV3G4ga8pkW%2BQIhAOwhf%2BUr9ruo4PoIX%2B2cJTlCx9rgSnE%2BDpwbx2kKqRdHKv8DCDoQABoMNjM3NDIzMTgzODA1Igx%2FBm%2BFeACAI%2BcepyAq3APVyob8KrtXvMtBuM7FQrvPKhTwkymG%2BxuDdk2JylMEDhBZaGVnL4k0BHilIdr%2BDKsaKjTr1pCeI%2BOGPa5tgmuSVgE5E60Lxs%2BXuPKUQNiYqLDWTvOctKBDQwxiZdnO1rZgFIhoBjGMY3XT%2FGPUw8l6lP54PuYFaU7aXrPPwL4xA9cIZ50gdeODPe%2F5YPZi5McdZ4xQ%2BWMOkgqlWrJtk7XZzbeaEkTwLvkOPy7ufikxnuRzXHw7IO3NOryr1XNvRdd1wexlk1fNiHh28U283eNjjrFUY1t97SXfuut%2BZUzCya0YUOFPTB0XxFmy1s%2FH8Al8TiqUKKnezJvaWLTzl6BjtEJaO4MkyQaE%2FBgex4WTgQWsNdtEauhxiTQn15yl4d%2BdtSffbp8u3d5WhwfVdbk2x9BGDn1uhd9dsqgI1kcdMnXYgKXbPSuRGOCSLR%2FUJ7GyCtUvh3LDlmtmM%2FG0erYnvvfIZBHpgWmk4FAb1P5kJ19kjmTxGprThvpu7DIhfQ08Oi4f6sMCWGFA5%2BoINPMSRJn6%2FF4JDEiwitseaGB77dv5vyXX2vvVuVeeD9yvNqc8rfqOGkUfOLrtpdNlw4aIUoKSlqFzICKOxEDLFl99ZBX07I%2FwNW%2BMrLx03DChtcPJBjqkAZit3u3h3yDDi5zYnaJlHiQkyrQuD5xm1GBcC783%2BCtAooeyCej%2B74pxCrLW7Nns0%2B6gujBKyPqimJWYiAypJLiXiE%2BDGLZG%2FhVAOSND0H%2FRHeUvPrNQY0JrfnmcAb%2FVxvsVFWErI%2Fpe8vHHiwbbNl7xHJBzSWDwlf5ExJS9fcyHUVpXz0lWXqMdfHv%2BWx7GqzLuHVz7d7XSE%2FL7KXDIGb0mw8jX&X-Amz-Signature=d24a7983235689591439a51d5c83a4f36ae99226a5e058d1bbb43f1bdb9494d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


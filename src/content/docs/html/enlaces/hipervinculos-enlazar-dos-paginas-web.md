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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCGFKWV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEDdAUYRnVuz%2F%2BfjixOWebdCudLXOirymP2RiQZMIr6wIgaaT4j0KN21hnUqzYpHqjdEpnfVYh%2FID7S8xYDi7HtMcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDM%2BSO4a0RGt7EsQeIircA6sp5ycgvThsUDRwdD9a4gkRGxCRcKPPrv2diTt0Bei4dqyzIv9tkZoYx0GgN0yrLwquDcYNemqBVDdC51v85QOvZKWZYM0n4JN2T%2Fl5CisW50mTCenQqCO1B2K6YOW6NTZSGeIfhiDQJ1pTQOXNzqkmCk%2Bas2GTZJW%2Bzw28kJ6QlTXWFtPawrIGzBc7ez37PtTcj%2B167AVyZRdDXxuGpg6jr5tIWAbTWPzeVIdJd618ClYFYooBFogkirYnqt33%2FWln%2B0ROT%2Br0dMkpQXPsQ4C%2FuKhuK2nt34XRTlWlr4OAhjVocSv2QkKsbuIcF42jH0hVFnJZZiRg7bNbv2FfaWQXWZ%2BDDnP2zAqGcHnrAkEagaFOgoUqjNbMqYJQMzkTQk8DNtdM%2FVohY%2FXkapbeq%2B1lwZHyaD5eaT4WoEz%2BRywOlWRCHVzPA23VZFdoh947MrPitkJIXdXaY52a2Nzdw7JHlTxwXlUJz5mEmpbkNCg379FJh0o8jMnL8FRSGN44XGVce0kxTckKJ7%2BN5IRavBNwS9Fw9CvR%2Bg4oQgGKysBJnh0leC%2Ff47aCPiAVl%2FbZ6WvwEw6aCyeDR8kCvg%2FTyRX2LK%2BMu5HCAeDHrVp74jL%2BTOrj6jij3twX5o58MPHKy8kGOqUB0sJ95aUM0ZubYy42P9mhFVn2OM6gX8Gdqnsoj67Ip43%2BMBiVmutYt92KnVHldn%2FsyY7vfzRaRH08PvJJ5GWdnqD77hPCS4QfKYr6VykQjD2%2Br6nOoG4ozHxq%2F8lmDVlxtUsIUHXougp6aTSVUzrwmzfVco3Tl1nEhyppYiIt95CI0bd1wPtXFfBcjGiJSFHSmpHht0U2FMx%2BUG%2Bl2IDC31mdsnGB&X-Amz-Signature=5fad52e0bdbafef9a636dbad9113194485382c95cd7e5209416975ef944acaae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


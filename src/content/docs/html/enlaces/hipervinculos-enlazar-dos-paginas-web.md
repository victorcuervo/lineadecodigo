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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOPUWIL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcDgtafyd4WN1IUNvi1UtYIyuQ61hW19qzvsof7mDdBQIgNJoM3uPM8CyxdcJvGUh7XsgFKaLR07POqAbJElvC2iIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyiYXWzurv7Mab5kCrcAzIFmMYeEC%2BgCVqJ2jG7ILmoJp2Miq%2Fx23yGaH97jZqyI%2Fo0F%2FkRfZxU3IniwHJ4A4iMYsRuUXNDiHeV%2BGQXf8Mo0ZfpwHL1rkWh7CdA3HkWuTSsKAfMqKyv5SApstYlBLyHkB76K11tHhnxqZkABl6ygiXnUwiJ4aUpHbv8TmLDjxmYsInSTi0mX9Ll%2FaV7DXXO1VUYpHToZ906VsdP%2BlcqHBubjK2j876InPcWJxgTTlO3CXnRFmD5pqcCKd5ipSRorEE6dHxx69DipkTFgEu8mwVCLSoYLid3WTaiw99GKMJ%2FxPc2QGg6edQCgWyDMwq94vYXdEIJLY7zxV2SRhQ6e2RHbBJv9xMxXfv9sNpNVpyfhNIgF5qJsvLp3D8xhou2fwKIY6oVgLQxHT3Bd9t3A%2FJuucxj7n%2B1f7QpT0CxOyTChpa5gZijwpeRZGJHlu9sT3nHExah6e9IJxCMjk5FFXRj%2BrJgeHB7s%2B5LS1DRZqv1ykfjXiyTsrxgOgk3xptDiLBbLpLxkAoJqYkbCNjGr8UhUtiYJIzaEJ3Lg0rLL5rXaZO8LFCE2BqRh7Ao0t1mA6%2Fs0%2FopvNW1gTPG7QTmWmti4KLhY%2FjjYNKIPLYTZt3W3iGWpclIQaYcMPX%2F3MkGOqUB%2BjmWh0wATqtFRfe6EowwVtPb%2F7OgNZvtlVgZfb9B%2FmLkrZqOhJaYEhLT2%2FmgrQU0wCDJtluYjDn2aV7PkHIqdbVP%2BC8BEHjlLvRX3fkOtanhXzLz37cWIFgV4DP0GThIvZ38K687PZkZlDvkh9zbHzS1%2FhRNx3SKtFd7aatK8u8xU3Shp9hUfhVvoueFIfRBAWG%2FTgsdVaMC%2FOFIkwZDKixphQrv&X-Amz-Signature=d273ce551ffca0f0faa9239e9002eacb4562a1105125d5ccf8974e1d8ae70d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


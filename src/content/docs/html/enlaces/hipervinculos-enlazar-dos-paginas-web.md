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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GD2QPVN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdmo%2Brq2AwE%2FnjGeUUKnHWY9E7JRnDpYQUPWJQ5DFEeAiEAkstDspPQCBlrOPxWoxjw6gVYkHQEXXTK075x4IXB9uoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4yY%2BDQYm8V1Yn3uSrcA0HNCFsXiyBdpXmSqyUX9OGoQdlpk8%2FkH0pTzRZ1fqoTZ7OrExoPeTQjTAiarfsC5UTLSDHxemK1DdVIVZZrME2BvWGkkXJyX4EV327%2BI3WbRjQv6K5uyj3QVAHkISq9gRXUcMG9eG7YYf%2BtOR5%2FlP%2BzqI4KJoMrD40sGL%2BUay0WLhJ4DRtgX47zmfHZQ88ZJoYwNcEtuNo3xHloMNujKDrNej8eDqkMx3fSNITl%2FFuCX3fvTOMjfjWI2dyx2wgFX0p9jGxCv0DDoTrwJLQYNM2f0l8IESr4Y45QsX%2FZX741MSrZwTmmz6ZCM1T6xOcVaveB7iD4WUso3GAUl8nSmfSk9inkdt6tEPewJYvGNyDe10DUnOLeDZ2HkNqN9IT1EfcWDZICln3kTmBn56oI7l3F80irvHb6%2BxsfwMaMaXDm%2B1sxfSfBJCEmXPwZxaSsrpqez6WfzW55Cy0sS4OwLH9sYEmY0KX5uX2AXw0mWh1gK5gOQjWezsW5snhC8dTdQaEMR3qgGeLR4YqdIPu0%2BlWrdl0C%2BluSBbOCALOafgXpqqe%2BJg4fb401628oe7eM9bAS6F4nR4d3uY0i%2Fm6UorY0z9yrYD0ur6Rfn64OEFB3GpHMQQhBf4O4HQvCMKHu2ckGOqUBr4JOA8VO30l54%2F0YJMTRP019vfdBBnNkM8XppaqqTb4NlCVPv5Y0X%2Fs83e7%2BB2cNk%2BERszFBH0OmcSWcbyhm5RuH8gDaehv4vCPw52G97JfT7kpgVWCxl9BCvZ9lreQNaF8gFkjPZoqy%2B5AkQZcs4i6bYjpKlEzYhIACspBuJ6X3xe71hdZ9%2FoZaRLGnnVd6%2F1CXSctp4Gzbz6wyOv7v0xxmw1i0&X-Amz-Signature=1801b0ea94677b43fe2139061ec41682f00c7fd2b20a1e973f578195340fe38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NQIMTA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqWUR1o7beeqc21fFsgyfp96AnWvq%2BEGsBTKgLCEN04AiBRFwufrtIQ6h5Bsf1Abb8Hbmr7Odn5SmbKk1AlnuFnRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMn7r8ENkBqez8E952KtwDzKdHJXqdbYtARRiWs%2FP75DtihqdGDEJHNH2QATEWGt%2FfzjEcHl7Uq8%2B75xCQV67P3f4UoUi5o%2FxF676qlosbTPtQcP2%2BwlQ3HJan0rqP4VG6bKIMAjmb86z9fCPdvzo7iqsUDJ4Mqc7AdcQov8wGCrqJ53lHMsxssYjkQn6iA3C2PrDPOoDc1BzTNAiV5eUqjpeTgCwu58IRfIjSnXB6kYKK2hQOz82L8qRDfEQvytvE2k9eoo%2F1PUqBFnf4Fq7TaKlV%2B57w8k0dx4Tyge0Wt7em3SEe1%2BHwu1rkjkH9Pry8kZ6TsKCGVVuVA1isNg%2Blk4yberfXWV1yyktYMWxJQADFf6vzEhWk1fIyTzjhpQGKMaQwsFjf3GKiB1MBMIp7mQq1h4pZao2PFZuGVor%2F7LGjaB20rWdiSdGIdMTBIlLi6XoubZEUtbrp3SmbedEx9w%2FMrNmehhoAEPlHTuRGtRBxb56qyu5vD7Xvy1ZlYvO%2FJidfFfTqB98%2BClmHTgSf87gDyC4ym58uK2xmtsKXh04orRzq1LWZf7M4Wxtl89TWaCE8H0Ay7llm77WFxHNu9tFRvhS4jgHY9Q3h0uGobrudRVXLzmxxXtwdUrM4lsZ5fe%2Fd4kjQAjMP2JgwhLzPyQY6pgExH9WlHBJ49W1gK55k7Gowv%2FQmgnw4k8pVx8rNuz8DovVqkX%2BPjQGVnsVEtFzbpX5whxpt8m%2FFpq%2Bw%2F5j6E1TBC3uovETt65UlWo%2FeUUUOUnpLF6yTLsXPJsbdhUEqEwneSfp6xhxI8gViSSM%2BWG3%2FZh3cP01SfUsa4Arww%2BTaI5O65cEMBgfWnH6sF2xgQWK6lsFxC0rILCo9AnhVEHF%2FA93s8WZY&X-Amz-Signature=639bc815cdf4047dcd37306e28bb3d808ff0c73877b3d8ae7cda925993d0d2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


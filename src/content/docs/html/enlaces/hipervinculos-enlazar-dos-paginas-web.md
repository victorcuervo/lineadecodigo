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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHZUGVR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T195408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHdA7GAPGrImOEWy02hpvoFuMdjfAirW0S4Evp5hkjBAiBfFAJEHSiORJtiss1KiCwSOuKikbnBRdt%2BpHS3Sn9ytiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFj%2BAVGZoDGPWGcVKtwDrefPbkiowQLJqmz%2FcsMDkY%2FdR1ZblEs%2B%2BqGaJVgX%2Fh5uThv9H5Bh%2BS30R1ZK8OBupEBBMNFjG0YYd3LfkncxizKr7nMftnGFoBtKy76GvU6euXg9J9EC%2BiFQMHNmlz2XvX1pWmd6G6qsw17M4o9XQZDQo4DR1EAh8HrMsR9imhbXKXJHSLbmHlNBfnZaOPwHaGnCg3RVpaqcsCRCekUeZc6M8jtNSNTjuvwWu7AOTD9fZ6O0mxxFBVzAiaMZZZ3FhwUTBjr67rPiJSSaSTHi5LZWhedKHkaZEvzYbFjv3EM1fA7aKjGWRKYjo9dV3Yi1ylnJLDo%2BrNkGBKQmDKln7o6DMM0fY6TtlEWCR18pOBLoqq1iqaoT0eLNFVAwGs9Sm9WLNHGtmtp15ADkicgXwDqdNRtpyn9ouVK2HhoN7dW1cqZ%2ByWtahPDvROuNIc8zqtkklmRbgAQacdAdI3TG5BKdW%2BwqSpr519qSh0CP1KYPwHg1VmnXDf7bRVqIZVGhwDWVYMXF%2Bi1Js0VFGxP7e4D9PsAPZvoTpBhB4HOqExUryyjX2bQIXNWMSLp8GfXmPiOjuykMOrB1rOEWdIjBLy2SSLnaowsI7KMnU%2FSfeAtwkDeoSN4caEg55wkwsN7hyQY6pgFiqQQqd3KdhJiDiVd6ppTymA3Qh%2F5mVC8EGJVGS2Cxg2%2FQG5wLFA%2FzusEAnlBEuPEBIZ6EBQuI1ZPH%2FmYV2vE01u5DYg876%2FKzUdZzKNckADwbJ8dH8QUloXKj7MLjXidqEA%2F23YZB1dsY4qP2oeHwux%2B2OlPO0mfmaqgTTyY6fClBWhInwmP3xZvrgxgq4Gq0O0XqPzo7IZGvC9JkytBvMw3H3%2BRi&X-Amz-Signature=7a190034e3605ea29be5e8ffee085ae4460c0bb3e3c8952d168ab3b72f3b4c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


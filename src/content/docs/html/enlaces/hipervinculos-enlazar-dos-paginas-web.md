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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJ7J2QL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvfWFnW86THgfynClAtVJvoXTxSZc3BEvNuYCXkm3y1AIgItlNLw7Bftrvvj%2BqypuIaI8AS6kbQRnaBUYW%2FGzo8bsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1VJcJ8LjX%2FbFvE0ircA5lv7GlfW9Eo5CATG6Z8cnT%2FBfiVnpUmmAUb1UQJ6xTanrt2miI6yerWiHk2XG3BNJwoFmhzrwdeqH9ea522ykA7y9fvvQabF2TYbzQQB6SKkupjcwJbuwt20d97ejVz8s9rLitzlUfQTX9aj3D2W0uSgnASNJdbzQ4ldzdpg%2BND%2BPfLUH0Yq0inDC0ndPh2L9rrdBC2GqkOn0UMYFGWN33Q2tfIQjO5A8aTbUkjEkTVrT5MdOEJ1X8YTX2AvGsf9ZMuN1S9JNfaCvS%2BsE%2BB4RlKrvvpyB%2FnF%2Br0YCpwe8qlj1jfA8ImjogFqmTTdepybV7mERMo9X15nUGoeLEx1uTgoVXnMjPkxpqFQllMewE39jh8bjYOm9eIBPioAKq9gFqXoqDLJ3QJRScRWIrWHPj4eOBMY3xdN%2FzvkRHPh95onF1fzOu6Skgr37RvzJwyxThWAMe73jX8%2BICRa%2BTtkw4DY9%2BN15C%2FTzihgvMUtgTe1nv5zGNrfE97gX6ADET817LMZKoiKc7lKAMQQ%2BsJfwEDbLzoB0QgGIcxsBsoWvG71tCmB2L9iA9ggHRqtQzyMrcLlzSshKiAz%2FDLow4dsvf3ZlR7ByUWNW%2B8Zxu1MWSusYirJtJkK87uvzxQMMPk28kGOqUB%2BbE%2BIR7uGZbLU9issNDPosjkbDQpSvTf3EO74jvQ79M18h1jsjGYT%2FGoHvnbQGP8UcmcezppSKG2lq2rOHRhzRyNlFohou2DNzQq5fxpNlPurse2TS%2FV9togXrapmmr6DuSKoFuJE%2FMmJfbXjoVK29ah%2FSGMJNr%2Bve3KZsXzzM00sJVx%2B7XarRWepR%2B%2Bo5gRLmRTSMBEjIdVuQla4MxkyRH%2BgANF&X-Amz-Signature=b7c3e8d36001abb6bbb0569a744b0e4141a16f4970dec8c6f29f0a26bbaecfcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


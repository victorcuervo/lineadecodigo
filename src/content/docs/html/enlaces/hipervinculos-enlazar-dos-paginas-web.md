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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBOD3R42%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7t9jir%2Fqu2QA2aGz0FnmWZQMjD%2BM7uEmRdbHOdcCPpwIgbbKZGUHPM3EPvlfWB0PGWIIOYXForrn2sDlcB5fasNUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPU8WDV394aYYuY2QCrcA68geahrRK1HR%2BeQ3184z92XvWv7m3%2FmYp%2FMqpIx%2BUMHgWGgl%2Ba8zgTLQe1PQpbiKZy8%2FNsx48B5UBhg4dsA16FcjnJvz3Imikb8hcDOYPOXyMLGGy2CxnE7mkINWxz8OzCqL8mCdwOz0dDUbBTCB2IbX6Db8v%2ByUhoyD5WpJibEFAXQk%2BmN8wsdoZnyRPxLVslMlTv9c7kHaPbgfLxxGRc3vWq8wZYE%2FMykbXUY0U8NV%2F%2BRnCs31vSiseVdV4bL%2BRE8wpbY7iZfiRTakKIc1iAaX3NfWDSycj3qHWgYilQubWzoBQHYvcMtFEcGGz6Bt3DO6pJNEWRClrSPwr7xz0cCyhygjY3AQ7qxOsGpL00NrDSppOYf4WasuSErylbyxyVcTm1CohJYOygNVB0qUd4wPnxJ5uhWP4gRj%2BAmaO5pJFH7JCyWKwNrUZL8dp5m9F2KBwyTvsyFWAFiA0V4KW6Sy92NrNKTa4LjBCNr11r4zJw3CNwlZh%2FMone0tCcaWxXqJClk5yicD%2FK0RiSWQxSjCWJaWueeSjNoEVVJzDbyrag89w5r8Cq6k3ZmCCp30jI2G85yKCP81fMQXp8SapsONvmzNXwHiJ7TBsWaKw0ls09XfVytMuxe9HUWMMnQ2ckGOqUBDoodINzu7jZz9tze9mkCs2r1yH%2B0N3uuKP5Eh%2BWqWlIxTdsC93TeGkvSz1ZawwQbmVu%2B5rXqRKbKhQ%2BA1cwhtIKaIVZpWIk7zfNRTvWF1clQcQ3aZrq84MY98U%2F26PxTRCMuXropwDWhtXFfbJhozePtDP8JX63z0U%2BTWGPLgEFBF7hurjm74WF3J%2F9al4LvMoHwx9BgzPMwytEfi2r8eZ5Y3Rcr&X-Amz-Signature=c1c57e8ac2330145134b30c2e7095915fa1da6a9cfd23e7da38c21033f5a3a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


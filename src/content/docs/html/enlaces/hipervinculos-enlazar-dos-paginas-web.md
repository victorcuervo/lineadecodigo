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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AAXEF6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEgCtxTZq1xANGNGI9qxI%2Fk1SPUfKt9kV4LcOf1ixpAAiEA35fFqItF8un9%2BwPOTRRsykInX7wTadCh56sf73AybtEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLna3PZokOLIQAFjmircA2y9PrC74VDEFEzKEMl%2BOh5fU99TtCks59bBCuM7U17ByV8DVVBq0NgpUCSr%2BiMhLWmiwOmv5Uef3YfYs%2F%2FqdTZAuFSj%2FbMKkEIRYmOwOdeg9KNoGb%2BQhSgKV%2BtjTBMZMt1%2BsokjO03%2BUwvSz%2FbLEemrVB2MBAc%2FaQR7zhLpyptNpM%2Bj50%2Bi7SFnFkSR5RWLEBCIX3sE8Mb7P9MXQywWYjHe%2Bs3%2FfUGF9mWwzVPsP4HdpUHn9xHsQgs6HumgXa69id%2B%2BZdVGBI4Dc0FmLKid%2BS9vSXoRH0j8Cv4MjJv5xWG8QiLVgnxygvmzPcJNMBR3S6N%2Bp%2Fnid53mVfU%2F3TNGpBRXODN8ZLneI13CXPpL3fxOXHtWZ75ZoEKZGdUCgYg7BSIHIN3oGnRuMaGV%2FR%2FZK6EhVvq7bX9OyeIX3FE3Bbi9vIbaM5Wp2MVp8UsHRZmQabMXRA6B68JWhNneWJAxWJcuAV6hNdMG6m68osYsfrNl6v%2BAtpdNGtkIeh1CWuqVmwdMRxMFTgzCzuKmL0RbJ1s2LrrwM1KQCHL2uo%2FgyUM4ofWKDYK7sS4m8kdJA8UFjVN3x%2FKwMb3M8P7hPy2eHkbQxAyAbGucgRXracgG4MoNHuC36DgqJIlTQsQyMPrD38kGOqUBEKee7aRnB3jlmfVzwjHnZU8d%2B5Sn7gKDcUQ%2Bj4r8WK5dTpMUM0rtBpqTVJFfmoZlCH0t9%2BEnAKS7kNZRyHPt7nuxpBP2zUF7TRH%2B0AhMX3rEiTaoBGqNga6F4LJo3YEKLQKWfL4T1bMd8d1ZcwpirJKcOl4rlGkNSOcPlR%2FHys2n1nDN525K8NHZg0y8P%2FCCrHm8vFCkWkMOVGVmmejwMz%2FvtMz7&X-Amz-Signature=84ff4f77a703ff0d7b686442496271686ae67f73549542c3d92cabe35ff77ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


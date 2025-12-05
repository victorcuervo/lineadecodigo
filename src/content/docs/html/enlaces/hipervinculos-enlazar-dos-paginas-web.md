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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX6IUZFT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoJR%2FbSrp1NBQsT5%2BWg%2FrVe8%2BtHnc8rI61M8bVQxYY8wIgDFVXh9udn9O5jhZvg4gP8TRfwrNZjtQniOguunLOSqoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDENCmf%2BI%2BJdDA9gR%2FSrcA%2BG%2B2uuLYgfzGvRzi0uH%2FQkwaToR5JyabucH94cBmemplg34tqkldmEjQuOmQDfWvC%2BdzZ3oxwlbKbo8Iidj%2BpEtS7JH3bWNVHbQiMfMKmj53BVqso8lLZLDNXYDuBzXrbuTJGYg1ZDOV%2Bz4VXdVNDk9wVTiv7QsbgtrdekLaSH69wWmEr95zlusfhn9J43RwiDpSRPOq%2FjnYPfMWvAWbi4ikHOScf6Q1uCk3pkLeyh%2Fez%2Ft%2FLilf4hCxLj2RPRkhp%2BENRCX8q3oMn01cex%2FSg2I4UY3b2kVmXGeITjYgwtIblrqQt5%2F4RqE8%2FyhQA1wLIR%2FQAVlZ%2BHn0TpqRdmAsdI%2BE39sfJZbpXww%2BwnuUEO%2BZWs0iH4B0lH3SH2rxANvm%2FCF%2BvfnEJY2iROERhPPkACn5o8H5vA0h4VrVWO3msM4mIIMS6FB1yEb5wkbgcU%2BIx39v2FIC2m7FnCWCnMV28t9CcUmcPQ80AA7yi7ukRRGb91cfe%2BMYGtd6tOER76mBf3BNGnMosEkUtgGlA7ZyUqz2qqeA%2FFNTmUEeJgzGkscHbO92FSCR4%2BcO3Ws1T2yHoXz1Y8m0jRD5zPejGh2lqA%2F9BLTLV6R%2B3I%2Fsyozte6jjDzPeD9tVhA4qwxlMPKMyMkGOqUBATxq4yVEQiSxmQtOoQlXgPm7lsXn%2BrdJ4ngLxqua8TzQTJio%2BFTyY%2BQHetR7wwmSdTRPJDWTPzfhGfY8X8WCrTEYpSoLGSEpNgQcfwWEJiFfkIbVBifrcDFF9m3qESZkg87hy8DIC%2BDxM8etAk8qkKbRz05562tOG6UHcyRmmPtHpw6MS65CC5kSmG1htYwDQRmNS7QriU%2BGnlUeUwzJKcy6U9n7&X-Amz-Signature=ed42bafa4a01ab4bf1df0794d79a8ee15ce0e3f225b87b1292365bbaf1ca0612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


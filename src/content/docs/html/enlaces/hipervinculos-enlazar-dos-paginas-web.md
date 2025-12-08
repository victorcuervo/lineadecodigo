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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HRC7GE5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkZeI8f0mRiKaUT0FF0IEgC%2Fj%2FqPAxNcd9somXYqvnOAiEAkqZNHOsrLRQITA%2BrQtElyaS0KmGc1sUklXsX5ByaRW0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKltbCR%2FflVJNL2oSrcA9bym5d80qWbis%2BMVpYCMXsIi2UuoxPaXUdQhhNmhS12xPwF10s7X774bgD5SCkMUZREqD%2FJQiyGhKUIVVz2Uu%2FchpF9Eug0l7gRJVIlYks2MdKqxhDzQ5G0UTm7xZ44B0eUwx26uFUGerF9TFH7djaAFyzjHXF2ADUUjsfnbXt0TQdSSos7ogQz1r0ouSD2YtuIGXtn56H6W3MIcOdTWzKHn1LS7li4c8b1bpDYUbyIdDDYNxthh5X4ZURy2%2B7aJQHspo9axP78CCaI0zkynX%2FHKZHmUEjrlZoeZ9qamR77NRkAZ7P%2FNYTS79m1R5zY0H9fR4iaG1BpfXLRMzBurmIjR4YjkEBWiKvvsjCmGmTI76nq73eRA6792zUUswIrRLhnkaq9e%2FnJitC39DksAap1iqmQYB5Y3yQE4QtG7b%2BV8h9Fjcr1eZwR8XjdK4STdGHgnIcdA5KBe6C4vpRkr%2FYF8wcmHo3rri%2FCZ%2Faju2GzpM8gafFPvfmtPpD5sJD276myzecZ7SglcVFsBZ7m%2BQNqYfExdDhAOc7neQ%2BZpzCs1F0H0aIyXNN7213dNxus6J2lK3C7fGRlKBMlIYKRrFDpNLLaN9mXRC%2F3LAKg4j5BH%2Bk%2F6MiHUt1Pn3RRMK7u2MkGOqUB3eAyXAN2Hn11sNdbo2FctGiQ97%2BWCYap8PGZ5%2BxoJxTi4g24qENK41KO68GbU1WVM7xeJZKHfsJwrdG%2FDY%2FtQHUpjYA%2F2wcVBYBoFUEXJiCUhyUWOEBB6Ovu%2Ftw6xdYpv5Ag7nql4f4sUPYdPhyJuJQoJiRvrdKAOr2eaMwV5whwkhlnPOqzqM6v4inhDvf828RDIyh5NWowmlTMbJ6N%2B9vMLeiX&X-Amz-Signature=e56624697110cfc1871016a1e52651cfba3ba5fecb564b1a823a271d6ce589fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


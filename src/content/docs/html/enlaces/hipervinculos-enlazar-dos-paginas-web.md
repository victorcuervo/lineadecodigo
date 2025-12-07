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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPOJLCL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7oZqdR17n3O4j7A6JztzqxNdwbwunlH%2FILs3lqaHjqwIgNmTAmNRG%2BR9YCifK43wiXGgiL0SFvSowTE2R58CF3z8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE3sfF7e4fZh2A58ircAzDaqO22dPSHRLy3xqaghBdw3PpmC1e%2Fu4O0QataYr6bKUxipXvKqmkLWcoCwl9sNEivZ3JxZV0Z6LUtEQWpmq7rz%2B2jeuvNVSWeob1pTIJ4dloSKVxBZEmuOdF5kaBXww64DlfpOHah4%2Fp%2ByIPzbCOQGn1n4pugZbh%2BYAb65twf7RQ4SgSWn3cvxSm2IOJv%2B%2Fvm0JSvd2PeBW4%2BvzH1eJdpFG2jeYKIS%2FvdD4fS%2F%2BP3RUVYJiM25TaU%2F63nNc6YTN7osCrRxqLzbHZi40Xo%2Bx6jGfMgWXhqflXQY497rjyliHrzFC9Gh660QDRbqYG2qzXvLxTBRW6T9sIWcqCw3ZBpeNSm%2BCcJXJi1V80lrJ3YkoszCHvyT2%2FGSanxiMsB23FWydVv8HwUUDEech%2FQDNSw4hy9vQF%2FLR1NsNHH04J%2B68fcpumwvkJeK%2B3goYCFaZaWsgTA8xAJ9On11OupGKFGNGolBvVa1iRauJCRzYEFC4XrWuGhdj2b5nzS5QxA82Do9Q44FaufvVG6bUnn4KLfwpItQ9R8G5xwwCD2HsW2ifWGAG28kCEB6PM05rm1UnxxhX8g%2BBn8xQMslKijXPSLp3diR6arbkbzM%2BU7%2F%2FZzLl0euTz6YQ9opcB3MPiZ1ckGOqUBhN9cGgm7kJDEoqUvqjEUSxJDjHDt11CMYeU0FL88zo1DLezAgl6J6FyHKLz6szXt5UKB3K2nS%2FCzNprOz7agOgeVFdxsjVLWOVtm%2Bb6DPyvicdHs7P7qUCDwsX5Q0q6s8mHEIYjS7edURR1ultpzHmel4olkYesrmFp72rj1ynHSgpaw6PD%2B2z2kPDYl93eIl3Ggch3zH%2FtMyq9Pwa0nsv0EwgTV&X-Amz-Signature=ee92fa195128043a119c868eecfa28ea11a09e2b0cd175c27c91919a5b4977e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


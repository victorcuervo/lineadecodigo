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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWPCG5J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BFq3MDOpp%2F708uFGeH7gwOocxplqpz%2F%2BLyQ%2BwKq4jlAiAquLRTm550V3cKmfXTacabrzrDNXeBlwG7R0Od096MxCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXPcIKQsroKkE28vqKtwDcj8Q3x9Izi%2B3tDxDb4MlpvaYDmC08nGBVnQIHu5cCiA8xjR8cmnduRJWTwSpXhHvG7pGTSBEPtlQIr07inxKhTX0WxYwXerks7o7DA3%2BhRtT2yefLPL8yXMVaZPvqH3czffukNm%2Fqn4VhLynP18FExpX17W7%2F%2F%2B55yrRreU7k2Aym%2FBJncQ0P1zVLicS%2FDN9UOIqPPypm%2B9BWy2JGK%2BixCJ15N2ZVcREnMz11aQXX50kaK7g7BgbNrahvXoIB0xswi5uoV1m50sag43C8DPJGD92kTxoRvrR6J3sxB4bn%2FnCSnmQa7WQCwP8d0j%2FdeOOLeBCNWd2og42JCFMgVOdFRfQViFXzWai%2Fs0k48jgU6sNsOvfxkxUlTaUn8Fw%2BhBCBpAMf6j8vl8peo8wWJkzh5BFrA3EmfX7%2B8WYNtUNtomttOoeI1GftCWGAiFIN2vK%2FZCbowivQtIDhqkqyW51hrbxOSFRtIrykrYb8Vsml8ELtvmi3D8DAlC5BCR5Jx6efhvY5ODSKf7FEqGLbUolIFNA0NVyWTDWkc9EFrDrrcjAfEr%2B2Jw2YQymH3eBg7Y8I2tf3I7telCivFm4oon7iWgIS1datWN01V1fhp%2BieqC98i4OPhNjTnDAIxgw5evPyQY6pgGq3nE8apzxCnPe1ZZsJbQ1tubihbNaafRs7dBk%2B2pIKRYCro9jchA6h8Ui%2BJifGJ%2FO%2FPT%2BT4CFZkpzwgx77zqoGo2YAleyATBHGHxyrcM0HhbIFBrIqmsg5r0FsRio9db2%2F16qTIjtCST7%2FdfRinAVI964E06J9YQjE%2FvZIjbwOGtXYYOqkeAnrJDvk4nWaqzTOnYNl31ip4owcK5seSz7hS4Pjv6i&X-Amz-Signature=408e63cabc55f159bbbaa6aab34600dfe3cdcdc18fb943632c14c92ea83f6ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


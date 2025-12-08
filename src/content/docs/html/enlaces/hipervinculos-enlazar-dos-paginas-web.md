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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFLBQUX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe6fxQmvLnae1AkmmsNVsrAtMHSBzoGSgbSK5ypqiPCAiBXmRZK%2BFQ5UiFKYt%2BTdeUzxvRS9KiScvWRj0GqAwd%2FviqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5tFQAUvgYqSqryDKtwDnjGpODbuR5kzHx14nWVJLttV022NEJrhwrdSn0lSQUbRY1L8xp2fNSqEmGpm6UB3jueT7s9wXVgYX3fln5S2ZhnS%2BKDR9uY7hHFmO1W8z2%2Fxl7MjV%2BkkIQ6igw1szDZ%2F1B%2FPHbAzSuxDzcsFHroYYZZPgLnHVxt4u2yXzvpiGcfkagOgAB8eUCcPMx9715sBHkObVJxN9Au7RWCck3H4hSqf9CYPR0pX8Gj2HEYeBdsjkypkHlw%2B4IcmkouuibZz2So1ECiVkxGHSYc9W238j8o1FFVIRkzasH9zqrs6Av%2FT5FYeGOamlGBGvQ9COWrY1kGgwq4T3gKrgJ%2Bd3yTIAvJhhteZJbWkshzPs%2BSony%2BSsHG0shCmMYVVFmluFwXs1L4rejrm6%2B3lCKsC4tjY85SFBVfewa18sjsPXXML08KwCvi8wYAoEVbQ0cUvxLsQgm9SsSaV9iQQlsls03kBOWZSnaTBEzpKdNGJvjwOV2Aj%2Bsq6bxvlPtPFTbun8qhWSBnNQ3SRtH%2BM7eb6OCmzyIxSymN5cnxC4O6sGqqeW0sXSoGAGaq95%2BghnR6LRrd4h%2Bw115ZNnCeWE36q083xbx3JVCs5p52%2F1wMNH78aPsXvJ1ldczKNUdnshMIwtaLdyQY6pgGnl%2FsmyZA93gg0CtJuyy9qnKV6pFGP1YGmXoOvACThgQjeg5M6bh4vmaosUdVXFXupkXIaG3NYZECsLaQL0i5wtZAwsqL7ESaDgxDV1nYa6joq6bKgvGoQwQq50tih2I8KTS%2B6xlvljuJD4nGSBc7XcEmoug01w%2BT%2FsWjigSnVOHokIq2DCBiAg5ai2fJm9ZS8pP7i2c5tGawTl0Z2JxOqcJctHxRo&X-Amz-Signature=1327fc8a861f4fac6530ff4295396ebbd158e2c1bd7eb309fc58f347f3b2ffeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


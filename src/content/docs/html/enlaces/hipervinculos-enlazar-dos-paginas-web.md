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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WXSBED%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzbBBUmSmSlTTzngvUli7nVT%2F7ho4mC5CyXypS5EBAOAiEAgi435%2FMC2aNpPCm9sIPMRYGsLE29jnrohYBnsT4b29kqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqS7cjfcleLDGS21yrcA9OnAg2xAg2w4I0kCTfd%2BE5WoR8c2LUe%2FvctbfTnoG1vLy4WibhlZxqWiRPBL%2FK6HwPYjOLN6Z2glAUnTSrIZP59E6e5Sr5MMyyhLuskipF20A0C7B9%2B2870qKVvMcLxGgY0d2cEPxik0Fpi2SIJMQMby979gRbHo%2FwPpfTVjS1kl1WW0JiwpX5bDO5k4Ep4BzVgKdJbPs3kiY1OOb5EID6m49NVqgGVXpH5Vf0Sv1NR7HYIFghZaeU4eHq5vsQLw5YLnSxlAIQZO6wv0EJ4RSDUwja7RZd80rBnNPQOpfPx4%2FRW4hhiN%2FhVoFag1nHKMb7rB7B3LXj9eJ2wyNAWzWNP6WQsgMo828UDu%2Fr8PBSKiUWzmV%2BA%2FpoPCrFOzKRu4jkUuV6t9CSnDQvtb8jcv0ETPc8%2BSNdqLq9qkT6CcW77P6tF0cgZW2%2BWaONqvEEdhvjCzBgi1rpQJ7LM3Q9RP1jnu8abdItNNTEyfW0n4rYQb8OXhu53sBgFZ9tY%2Bq%2FpHepm1mf0cHoU7P%2FnCLUVhkWPa6p7J8sv7u%2FAcpnEE04BAaqKXO1kDtTKLycBxjBGOO7Mef3URrgBnWyA2BiZGrwytgiPz%2FDp%2B2Gk7EwNQXIhy%2FLyx%2BTxr5FokLNCMMS03MkGOqUBcH1NUAfngvP2tgr7bhMP49kw6yKwt1Y%2BJ60bsz%2BiMUs1jAPszSIwjGPQSHIIfc%2F2Xzcdm2VQwwQfP%2F2LQU0FmneT5G%2F3LMXybJ3NBlJm400jlAZ4e0yHlBbmm41ek1C89O2VbRrFJjGVgBCQp%2F19BE1YQZSo%2FYCDKxhFUfZxOM4oNNm%2FNOEfamiG4otcA5ZUIsozWOr2eTgUjP5zVoS%2Ffyrh%2BHb3&X-Amz-Signature=5a3e5d10147b4834c3e9a0a669dc5cdf92c68300f02e5d90a5d6a18f6c203c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


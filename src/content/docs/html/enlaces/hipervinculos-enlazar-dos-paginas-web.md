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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R57YGXOY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpWFqLoPkD0tfKX1ymKKip7GIg2LpyN0UddDCNjRhZTwIgIAaCJS7ADraz%2FvMSz6V3WAQ9ttsgp2ksmbg1GDBXC4gqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACiM48NDFSpWGcOUyrcAy4FhSmEQk7m8QXxSRGO3pFw20bOVhX9MTC5p20TYQp29MpGoHdDE0ZszGIDzLYqRmBiAx483K17fmzNa9xeVte2XTqqbOFE2YGU%2Bt8xb7BQUrm56o9vO30AsQlss77WlBI5jzWv6dz2E6NQvrN6gRGjOwo%2FV555mS0K%2BHmCtpzZMLx2jCX9WcZJHHwDSd%2BTK6p4gP19hcg6BUsWyvNwiuvTiDuRRYvCOZxt69Kj3jPokZ3d9gjlZARrUMEysgJUBMO7MQpMzgiykUmeY6KI07mDw24g664r855OYLPKzAUTa04ydc%2Bejovxm28VtOIXdHtcNdyEXAkj%2FR7mBN0mosAkGN%2BQj0Be9Ma%2BTw5XCKRvzWrUgxH8QRMngnZ%2FVMEo8uHC0AwYMPLpUMCZwjjIVjsy2sOQOuyMBzw%2F%2BZE9Dsgn5enmPA%2Fogr2IYEYBr3Cm2Pr%2F3FF%2FwXcEOxZkTj1Vajm0x36MMS9ktiAp6P1GsxGP0RhYipnAImmTIV08hZ1aIcX9boK5I8eFjub5%2Fjy79Q%2F0uj46cQB3rdVZe0NvcWnUCFdpL7merPOZYCRBRVaVq8AxthvMam%2BcROuBNICOP9xaod8mr1%2BBQtdl4y1vVZaEBkxdPhFRg25VDaC5MNTt2ckGOqUBRe6En2CF%2FIqtGsnYx9D93JV0ksr8YdtDT5yA9T1LjlEVYs01pAtnZrqD5%2BeP9UI3GqwZbcRbKcCJNnyr3x1vIzOqbDR1LNRFuCNkHlNrG4Xx%2BWEAvFt46HoO%2BTou7O5eLc9%2FUVEG1l8B5E7OAezuHUDLqtt35Rjz9o1rJ2oM%2B2mKfV%2B7DLTSbRCcB2mrcvDo9rk1GFDNUsG%2FnPoFq7qaB6I7bZhn&X-Amz-Signature=60adf99454021321ab5c4a31a0ca6206fedc2b09a3f49749b701964c678cf4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2K3UWK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDj4E%2FIfr%2BsqBwagF4vC2MpPBUBFDT3znILQC42AT%2FhZAiEA784iThM0vDLLt11zVUmTJE2KJIRMj3w2y9xoVD82vOEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDL4884EOu4ySe7hQuircA2Mc2jTIwE5HtmcI8Yr6y4OkDBJJs3lAAHbs7Z3Qoj2UsJBChEHSVOor03Jk7SofziBIKcEcvhq%2BhYMwrmLe8SxG1JSDGs1UWrvv6Yb%2Br6%2Fo6RCGtI1NjVYcvjIRbOhZ25lIttrJDZfFCwmPG7YkUl11FZt5wsACHBCvMEGTESlJHrUuM8r2dyvkWZrm5C0XW%2FHMj8JU6V%2BNtVodYatehiWr3jQgyy0f9lDnQeQV5PCnjUd191%2BLVKCU%2BaEVp927%2BafQ2tfRS1Eg6qlkeCSyeQsApNk%2BbYZs9mC0C%2Fop6%2FtAncCN%2FYHE2BqGRfr35jBhH28AlfpJEXXh447jTDCxKjrKk83IQxHIQKViJDDSknVsmQx%2B3KBCBiy4Jo3H3RYDYlyQePx1pdlvhPPXdRT6OGmOE277BWSTW4HocQz9By8MTZM637Ldd0vOyq%2FLtZGWxL3ThA6s0SZphIXGCD283ib09UER9WORW51%2FWw0IQPQC5N0WRZljHucHFE%2FffxK3gmjm5%2BZtP1wgSxCGbiQMDqCmjSwlMmA1I4Ob%2B4tKZ09EUbB6%2FDSFpYXT1l2xtD2X81UUn5s65RgVmXTNheJlwPmDDL9APBQHKEBJ5p7IyiRfN1Qe3HlUuehSPq7FMIDpxMkGOqUBdP%2BOS%2B5Op6DDL%2FHhKOm0Xict%2FaBrKPo0fXacNx8ncgHWnFb%2FfD2u0fynJeNLUfWSHiakGM6TvpUpBcbmgC3TNOE0889UAyKoyiwCQWOvfepT2GZeg4fGm9P5IuUWKp5Pq52Ug6B42ypxsdefwbz95VbdotZI2gQtYREBhBer7CREF3NcrkOZSJM5T3A4YbIeSk13oP3MfugfFCicPa1C%2FFm6zUR3&X-Amz-Signature=ee4d5976ac75c3315ee9df1f4982d00d457e6b252a85393e8a84be2cb29fcd28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


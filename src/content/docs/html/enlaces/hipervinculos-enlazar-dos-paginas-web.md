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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RJDOF4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvtPJhw6hbBIPQA0GvrAzL2poihLgWBP7z0PSLTEPVJAiEA9BaZ2OceodGBol%2BDzW1psf5FlgxfBXHV60zUBlUWbGcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMQ9FZq%2FqIYrjH0F5CrcA%2BZFmkXxT30wZA8K4PgQBtf9BWm29D5W9%2FpJTnnSFWvmsLPxHos6HvixVLHqSZjzm5KJmn%2F%2Btmm0x0cT5gfpPpukxFmrwwX3xoalWDxd87zA%2F3Ac6sbsmaeLtQhEyTckrXuAav2mBwzcM%2BuTcHsMuFk6Tz99YsbOkHsDzDdYPIQJRZ5oK7J6l6TJIvtO72PFo4Bz3l%2Bal4WAK1wwNITFsZt2t7mzawZfD1y%2F5lmTBgcmJlPdugfUg5E5emG0Tx%2B8ocObPU7lcurna8l1kfjXkgjVy4KyEYw%2BWOXoiXsGMJ484gbWkH3eRE5uAw%2BKbeMoBHyq7p9A3uGSSlWPPhcXXdwdvb%2Ftn8zp%2BNVmLRVYViVzMm6aoDHa56xvqvozM%2BlhP96A8IIxPtSBpoA5lHpw%2BNUln%2FcfRyZpDEAuWLp5Id6k2dP0NKHKdHgmYfXiI0UW%2B0JD58m34L3PCnHFuqDNIj5Y1sNsabjDGxyjJFYOmEnX7JfoSnVzKPbPLGLs3IQUPEPbmpOgwiC9%2BNO8o4imbLNOmsFnapj1lxmCTRCPT0hrNJ%2BJapUKhGu2jb0kjQGcHVU8SmjZTBi%2BR%2BP%2FZr06V%2BCL7ClZSuLdjbbD%2BhvB1tzuyQLhfhpRwMyDiwSMMOGMyMkGOqUBVcVQS45wNO5S%2FJtOdbHOe0whD5aynB18Sf7rJvMSjnoo5Xcl2JlRZYB45etbw5O315dzflgTYPPPOHbhUVUat2dvFTAqKIV2N8CNpFF97MQ4pqftumg7qH3lsywo2LxHVY0JddTGQKb2A0wANsYIETGEhD3I1hhijiYfchQTDdBca75j1jXnrsrpt8VPZSkmmH%2BkcPi9JtpIbFuePbFXEIraKK28&X-Amz-Signature=b29af6e5aabd6b387e8e0dfada903707550200118094798ae66f7bf83ba90445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


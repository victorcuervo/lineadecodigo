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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPQXEI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOmQfni419uYP4MdMaGpn%2FMpNJ1vJWDq1ND%2BAX%2Fu9uFAIgNsmXOAO%2Bt4Xr8QqLFXInxXIrGG78jIlwdmfeQnu51tgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFbfJNytahF8N1D%2BRircA2CBT%2FM3c0dHl3SP2lUtqYI%2BPX02vLe%2BbYlp4itmHyHcjPur%2B2Ngx7rQm7FAmvyjHBj6ZTXiEZeXBPHNk8weLCcU8Junfamn276AdRAci9fe2EFk1eo6ENa8R%2FNyJNNWiAJ7gFg5nV6iHon75JnYYnBmtCYK81u8LAlvbB8ONhYHqd2F2%2F8umT1dzJMn%2FPtCHUn2Td%2FMXR4nJ0AWbgh87smr6A52S%2FypZSmDtQnG9tfqDP1ySB3YA5LrppyzZjTM40ER0YMBR1Yr58P9toEORMqvCVRuoZfgERUwKcW5VqRdvxFjesORLVyZeSDHaKjuD%2B08VCu%2BFnFN7pvQQCYd3q2043%2FgJ9fLk8VgnQ%2BZHSsW26LoPM4P25%2F%2BjwHNWiHc%2Bqq5XeOYlPFJtRw0NTo5l5AD5l7mwf2z58r2sF2x9A3yylwCTqMO2nXemu0pmKG%2FgaULCdhbb7%2FqhwptdMhk0Pv7nPvyyUAWB6N9WhOqD1cIzMoOXNplTI9X%2Bm6Hxg38LgKys5rAGz4cAcaI%2BdZcOGSR4U0kk6SKrY9woQshteEdA%2FKvFQQD69IeC3WEjoOm69dgfcx7U7IMLmiqBNB9fV%2Ftk1JltjZRMyGhbS8SbR%2Fv51eALlL5FZxXOjDfMLGm0MkGOqUBfJCBj1OsbLb3CPDSGCSRFDPuDc1CaF%2FE0DKVqo3bbFFCdHcnJv2WGtCjR4xUKoJ4I68WNjI7csDB%2FESeZT5TvyWaD%2Fs0TGm0nWzkq8DXYcIgUckm6XHjIP67yUWbIuuWRwcgoVW4XMpoNIckhpjC46SmL8Ak3zWFL9a%2FR7IRiZwxUfIQrrJnwhQThGcC1YefIv0FHUwRAcExoErshj1BfyjhG8%2B8&X-Amz-Signature=b2d9654d06a1b0510de4c051120482928a967e6da3ab9eaaff0963f94e9c1aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


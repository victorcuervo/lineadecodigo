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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7CO2JZN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BcYy3UUb8Caaa52DOcyGTX8mS59Wodll8S%2FQYURHjrAiALdps9bejV%2F%2BPtIyWTts8NmsdrwP2GWBHlKnCFN9udwSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTjexw1bOmjwCz7yKtwDgRrog7J%2FPU7NnyTAxtBEyUfI%2Bm746J%2F0iKTtQpT%2BgfGCipJAls5l2Bn17kYA2KwGRtLS3MfLOCEzOTT6NzW0u0i%2FbHkiNzWRRZ%2F5DLiWvkCKvfaPy9TAFIENMqr0OTwzCGQwelL%2Fbi4vwL07MeIgNFMXLH07JhmoJ4Dd6bdZmAYckuHWLAd6hfh6mQRvVyGiBmHHaiMj1TnLEHG%2Bd0IT%2B5WxiM0Fh06wYKUgHrxu%2Bi5A1Bvz5p5r7YYOn%2Bi0BA5CqqiLmO7kcFm7L5O0o6q7G6IUBTdrAwgQl5jS%2FcPP%2FJBU0C%2BMQt3cYkfTMWU60D%2FmPq%2BlZGEQl%2FOANx1J4dkTnli3iMj6u3AtbpYlLXFR4uWS8t5f%2BWeem4JXrd61C9%2Fiay4KEbvwBG5gtnz5p4yQAEJmfmghFZTxIuui%2BW9akfXcxoaldMiZSYqRfwsgcZW2qY8S9%2BgReUzYXY4rsofQkQl6lnbLEaXdolH4iesAnpMQPR%2BrGjAd9Ti9WV%2FWBF%2B8lneDRvzcoecDrUlQbTtCyYlBlMGWNrkKrgMnHAtqIVzIRHBtHYZiLufFfJ7aYkdMHoeCtk8haIgfWd1edvbHdnfUM3PMmN%2BSIrWVKQDOAbkg91TwKTLmZPe%2BhYwwk53UyQY6pgHxAEZFJxCpR97c5iPzrv5TiegZ7moc9XKfe5FEs41LLWk2kh5VMg%2B6jucSCGpxBkeXtAjyA6ds2vkOw6NnuA%2FvNcb4K4Q%2BvmP37ICva0pZnK7yyS7GHPPfao63zdXdcoUhlY7plgcM6%2BQUBRbUM9P6DDxdOr7el0bYcCWwA0y6DM7Xp1Y0cXwrVGuoCC%2FeAkPS%2FTUNr0oLnF9MFKCtbwQvtGf9dHVX&X-Amz-Signature=7800b25f00a940b266547b4324c05f8104dd14fbb497313c697a9e84183f72d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


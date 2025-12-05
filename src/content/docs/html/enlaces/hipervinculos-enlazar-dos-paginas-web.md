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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27H4FWS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkVn%2BQK0tYXO3GkAZA5y8kHmmDEgt5%2Bv4ZKgZIIzd%2F2AiEArtuS0bET95%2B4%2BGnTCRqgsKSQfW0PBroJ2dGG1VyU%2B3Iq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKEibWJjGy2UJixnZyrcAx1V8FUf8QG%2BJ%2BhfGueqnBWV5UzHhlKwA4m1NXN7gz7AE4z5NQrfJHNXvQXZ2mmF4dMF2JAFMvcr1fygSltNR%2F%2BSnD5Pbmd2KR8ZgpRVEkr3J0G0CzXc91gry29Lc6uEMWvm2NWG%2Bs%2F74DUBlY2N0M7E9JAfHh%2BmbGPiXGPo7bV7xhU2ZHOLXBrcCmwr6g3NUe2zkwS%2BDiNtUVTEB4YaJYnVsZKXviREqPHP1RTXAkimXRobzFGqxlIa1O9LYnvtQzpz9pKOCjtybIAy1wgnfm7hUPdTUoTpkb2CC%2FAE7Ge29jIP9uTNCl%2FrIAGwzOLA9p8EshXwl%2BTNUWr8riob3iaP7vJzbRzzqw3SutnW2kEQd1fxKiubySWzMvJTtJOOEYM1E%2F%2FhxFjgyZMi3iFTo%2Fi5VJkOPfz6LoOBmlLVw20ZNjkL6dxTN22XYBtiAobD6NvbWM9X8aEdIyewwq7XRyqMsC7jhZnlY3JOglyU5YrwSSFAoIsGSmEljVpb7MUQJc2lfvm0d9ojpiTUtENuBTOtD71qk3IxJGxLpnMuRNf2v2WyEQtXDA1chyuc5CnHs8hn9%2Bv2odSKaTjw317Tn%2FnqAzLT71f40j8qyD%2FOmliDaIx3K0P2gJ5gUFuaMNytyckGOqUB60MJW%2FF8yhqBI3flvkAaLU9iUqVyKnBnicl3UwHNrz%2B9lMWyqczjBWfit4MMoCPCpX7nkWbMsWfovbRMXDC3%2FfLNY%2FZ%2BfxD%2Fkg1I7zwAtEETfQuWkyxH%2BLAiq4TDwdx3%2BFKop%2F9fqkRcYYlRiXPFfrrmreTA8SZVUvXciKBHv4J8MPfgLt0E0Ccbw%2FMIk%2F%2BCQ8TxiPDlGW8oBGDf9Bs3%2BaPlWS2a&X-Amz-Signature=ea1d1b21434ac0962251b3b375be62abbd6f0cd283f64a82f1aaaa1674a22d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


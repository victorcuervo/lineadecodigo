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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AJKZG7M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9hALanrvDZd%2FyLE%2BPR9WEcr7b48SXJGMOB6bxaBp4fAiB6RdDujVwfV%2Bc0GIFMA2imt%2FGpvkY9teHaZRBaFY8v2ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM3U23sjpSAj%2F2YJjaKtwDveAOXiD2l31yIFxmV7QMdBoKF1EoRSHd0TCkOlkju54dKOJ67VLV%2F%2BFwI8wHuohkaM859uTldjhNLoA5pMlyLtbND%2FsMRMwMj3sJK4JYEFgBKuhy20vfU66P9kdbNBREV4FkJSq2jGQFRRySuC9t6TaHXQngwTTAPUojfUfLZ28w6pFsYZa3wkQcq2%2Fr%2FNUyfDQs%2FZcjaa9mXHyTCCWURC%2BqX2l%2FpTZ%2FRSjL%2FwLcqL6WSbsu%2BkI%2BdlmfnqH8xBaP2SQtulSlDzopEX6Torcv5OzOFwi%2FmCf5kWuFVMorQXaIUYhMVlUIMlg6LjuUMKjXNB2aGwkzdGH8abYdjc%2F2XDhOdj08crUiKLPDIZDCjCnSwzfae9GrffSO34PKT9nk4IRi4lLRDjMTujBeMpRbwfvJKyzafQGPqvOEuX7X9gCY%2B%2FstqNmhK98iQlRxZS2K8%2FrqpzLkcYjmU45CGBMtgL1EDyL1pPiD7WeaMTcWq7DVkRb9rBii%2BUHCd56nVmacplFdPC48VPH6nrKjhazf0HniriBcAdAchj1w7EH%2Bnbnsc5Sc3sFIfS33HO%2BPa7lGCKJNKZcWZVxKrSPa8%2FpnEih3BYBB6b1Ggnl5y%2BuCYurvH1AL8AjTTEH6VJswqLzPyQY6pgGbC3tz%2FhlSbJE5eSpnh%2BWYBLmq3YFNjHk5AHu%2BstVk%2BS1NO4ouayPItJGnLEg6WRwZwkZTqZIYBEUBLqzmuQCP2To%2Bd%2FiyFQuM5AL6VO9igqPhLWlHUuELHeR2IesGlRcdMVuPsJ5b03g5pdInMyA1zMGvOA6a%2FRG4N60JUM%2ByuDjH%2Bfk84Kgpsl5qHXCKVO%2FMxp4xu3g8%2BP8tCW4MTnZ16uTflEXU&X-Amz-Signature=335f52b645a77bcf6320458a1c734a2d286cda9043446fee49f340d08ac4baa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


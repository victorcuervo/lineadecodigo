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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYC3NUWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ4Bgozl%2BkprxknRESVapbOjozWc9g2n6Kfhgmj%2FFAkwIhAIVRNh1mV4MstXXURZ5z13DVF0%2BFfpAnZ89PdPwWxLdDKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb%2BqyWPDnWlAgdGjUq3APQr8lUv9d1Bl8iwxwjC8axdV34umAwL%2FkuvlcglBEfcZnsxK3ryuTiOU0C22rwIXJjW8edsab4XzjmLAtYfw7T7XVEnRqZizV3cLmRAqqclC0lcTeYo4ANYkgtGlaz%2BvKakXJ0USf44gCnGcgDXZqL%2FVUyLT3tRV0Mlf%2FCaIvKdK%2Fl5RZe0egHnrGHNYSrJJiHZ6V6AnuFSY6USuO27sbyliP4AMhJbpczYphAsRZIvSf01TB90iTM%2BdqpOhWUOtNtIm9q%2BQR37cxrknk5JVpYUcY9Cv%2Fg8o%2BETNZqBu2RJAllKZ7rQ2aeM%2BSbu9bGpNZTVAjJl46p99EFT35gkWXkaWUUMdwTBAZCK%2Bo2BvjK%2FGQhCNrDpZGzDyWcq7Jv4pVGE82bJ6dHtRSvZY%2BNsO8BdaEcLUlgPanC3ok6gT5rj%2FQgSeQjhbFPDC3YvVjSbtqSDdPv5Yr6Ep2k2IJngjLXFx6DIJ%2BlTSgxe%2BVhu3Oswvz0KNed2IgCvPol5MNnmMdJa3QJ%2Fw8xdUwtJcT%2FDFh7PNOmOqDDl4aRG%2Bz4dQhC5S%2F1je2BknHnvBUjHFiW6cgUv%2FSUJ4beI12cS0ynLfIGDQ%2FL4Mf9VSq19K%2F%2BfAKYj%2BRQWjibhKnvZxXKPzCeodjJBjqkAWvzh2yRV9ewn%2FBhMX8s0PYAM%2BVkV6TdjrSwSGxfSBGaLumerkw16G0am5OlzjqlQaMiTTIHPnKg9k%2BDcFwbiRdvC2fpSpweR%2FQZ%2B6nLDT1ng%2BLUt%2BoLsZUkSvl8%2FE21AAyAH48SZwVTHaINysCO45IRPAMNrkUsCzE%2Bie%2B8Wkk%2BMPbDWuQHpTIDB1AU2W2pq5UnbNYN6wDRtL3Yb80VzKMMdw3N&X-Amz-Signature=2740a17046f310eff0381bf8ea62954cd43df3ce1d0d47a5da00768b621e747e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


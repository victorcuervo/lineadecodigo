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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXJHANU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR%2BtZktE7teySsAuI2%2Bs0zOVfyyqADXGbXCt7D%2B7JxLAiByE6cS3zCis2yOvpxKRc0lp%2FUAS45CPsRzfg0JfaaZiCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs77SjZ%2F%2FDgLPmL85KtwDCVP0GMBo2SZ0iH4cyIXVWL7YpG03kRsA%2BGR15HZFbsbUHmjR%2FmvX8p8zr1LoFd9JwAy8ckHeD3o3%2BeUkA%2BYMYqa8uBiexrq6ke61FMooaT5lJdvwyx5xrKMiHRlpyTnAGgDRS17uI6vzB4%2F3njDNb%2BMqNUFIsfkxTxXcGbC0PEulaAQlGue4GTI8%2BVZTgqpevwX6aIhsQHuZmkf1LuvUKktTKf0Jv61J59y%2BvLseaFkhpGV6jKCId7evgZWdiujZpu%2FvS2PcIdaCGq%2BM%2FUkMcfxWQU4dTYTphEILcrmzyJh1V1tB8a2JwBejs9cb%2BPz2b19nJQOCfoBU4gIpNFNrDVqEF%2F0Z97R%2FBl%2FHr590nmVVyf4VFOqUScxrnCFEY3DmeCBlGQC1G%2FW0wB0T9emVMJ4Kw9MA6%2BEtr5fmyHnutm0sQYw3aqmheyGYP4lRXdkoEHICd9jDW2LcfIxz3ulPdc93gyi1b3Z1Twgp6OX3DPnjWPIXEbFJgHOysepm54G26SCcpcTHi4yURYXeNK95SZ23IIVhsdnQCcyUyhg04pN4P4gSjH0w5l4tqAIhbjN3oJ3W5S7W7YWPGvi2sRZtONtV0uqs0ui0OCNGFKfw2GYayXEwlYQBXHt0D5sw2MneyQY6pgHf1OWA%2FSu1t9avhejGxUtsPk7yFT%2BJdYGdnrI835oMe6Iiys8%2FVw8%2FwpUIMhGRfJmFsvg6YOt6eEIJ%2FLn6Pzw64fu1XRbXL%2F8Yep4hehO71yfJmM4ix97AndXhRIDcjGQzVRr9zpnNQOCjeSAz7id3m57NemDq1Hg6Q%2Bf61LPApl2N0wh8Z%2B1fZorgjJzF5yMC9T09e7c2QLDBQpdMHkE3Z%2FX%2BbrZm&X-Amz-Signature=9a0f5ef176a7898b32590427e3124edc610965faf3fb6080462cf86dfe9ea851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


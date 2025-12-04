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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZ5XTV4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmFK8j%2BeLOuuuHI41yGhJCd16uaMN0ApSzuRcd13sDoAiAbjY%2BOe0HaLhGMinYoZDGS3AzQck1CfJ150PLGaHt4Yyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMtErpjoGY6gGTtE1%2BKtwDGhDCbqX%2FS%2BGeqe4DbdtHHacqN6KOzGOk3F76u0xa%2F9Nygf3nsjGB1pi83FkmdWdzNIdsQ8aIH4to3bUXSRZ4gmDeOxxzukygkD2rP5zq45C7gXv7SMLvEkx0SPlMFQDHZvfkoXTjtOE4iUwQ40vaoNw%2FYpHGf6WSN4bF9dTH3XqiIOSIeMqlrOLC1ehcmIT1BDxZNOpTXhpSZKOF8agBaAFsTo3GNYO7n8gdU4tdD5O2jTcR5%2FjMGPbsNToo5OLgZC47JzMwbu8amPFnEG68gJrKOedehfti2KcvtrGEOZfdbYmoXOCRvnZeu5R2JbtedDJ3FW%2BfGnYnzU%2BUbmH11A5jbnc35PMU0PV2eiKlsnwft4yDTaPxPJ4D8alyvI6cPb3w%2BA792ebWDqLdL1i0a5kQW7cahsvj9%2B3lv0hlKrO9ETuRof09%2BZeiOAFYzSYZdp%2Finsre41bIaeN2IubLDmYSNNOhY3dilqaZgpgOakxOQqZlbmV%2BOfW5Kn%2BRX0LLEgg1IdMN1S73x9ifXo%2BXI66pelOhJumzXswSRQAb0SZlBDVovuYsdQwDomt7UHr4X%2F76qIT34tpeWyo7I%2F6X1RF8GjXWsJVBpsbqF%2Bm0PgckxyYsCHT44BSsDFkw1NzGyQY6pgFjxFsZZ5fgLCh0CJjcG7Li048PrHgCX0RvhmROJecC46DDkKXlnmS4Zj%2BifdGXh8D9BGrSZkgC7q2LTaw%2FVMudwdHNEK0uS6rW6gEH%2FZcj0xumjbavp5voTzF7BKKCz8O7htrvdk5MTLTL6WoL2IatpFrP8jlRwe9FW%2FYELFrIE7QAoH6ip8hqJQGQaMl%2BTrBwMLxxiU4nbTizQPKijVhaWRDcyo5A&X-Amz-Signature=8b6c9fd48df46576b786f4f48b675561550f3ebe8bd260cc3808ce4b0e79bb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


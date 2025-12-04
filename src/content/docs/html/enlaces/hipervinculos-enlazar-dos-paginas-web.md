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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5PDFGQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDY5%2FpFzQHnq7XteNBTvfc5l8Nby2fBBT4I4Ylp1XkvPQIhALW0s%2FUWBUVKAEl%2Fv5tC2WJb57EpmJU%2FK1akCIbRbxKpKv8DCEgQABoMNjM3NDIzMTgzODA1IgwWv8N%2FcLiMUd2XNPcq3AMDnbwYJ%2FFXFE3HG%2FjCkMIWFmA32fpvuF7Ei4Z2ju98l6q5Tl3J6Lc80tm%2FP4AEcluw6JQkEIzInY%2FdI9TuarH99wFeg89dToFE3Z8zyghyj5%2F6NRxjaG1g6Wsu37j2CP4rS4Gpv0UojjffbUObzxKCp8LlACrh04qpW1pbDqhOpagX6G3Kbws8cUL0o7oY6lbzYM741dX4DYzRglj2c8Zd7dBQxG4l2xkZN072kK7Dl0IglnMYI9LS0UtqW6C2ZeC3HiqB1PiRKmJs%2BCn6re45bn2qrrtyIfntr2m3UwJxOHnD0Y29m9OqK3EGRO5DJkoOK%2BGqOrj1yWpPCi34mtLy5%2BYceGfJ9EvWAmm3aS2cqgWVsGCTybHgUbdrM0xTbo6u1X8PAqdrQdnSuzU71ctsnrHUOqpWT%2F74P9V5S9%2FYdjR%2FxI74%2Bi5L%2BtUZ0RgWnEQ0IB5HfOHL2vhYMhR9J2e4GzKn7rG1oMsbwwq6TRen3oYeT8jkn%2F%2FpGuMQTNYVMbp0%2FDXrd%2FWP1T2gkvypVKbnlvZvPOU%2FDAb40cY6a93a5qrzL82DUqU%2FYl1NFwJ0pcEqnFSH18rH5yQNJ7gZwdJ2D6c4BcDrcyVRbOVVG%2FGgHtB17oBkcY5kkRGMXzDQvsbJBjqkATz1Rtbsr0itcboUZkbH3ZUpwNXV3QnBzS2W3KALUo20Pr%2BEd5qos0i%2FKb%2FStTtRlA2NEaEPKlFLU59n%2BnNoWRVGecyO%2FFqAlnmeelgzc9%2F0%2BrH6%2FDlApalgb4tnkOw26nwX%2BhGq5DD%2FX2LwYe6cpZdk681p6Zze3l4IGPsABhmU5qS8ebGZ0KY3yTMT7S%2F3%2B3PXrTpMIetprWK48pehQVnL%2FPvH&X-Amz-Signature=5a7e1ed53c355530d48bd87f5faf8bce94690c102404c140295001aed26cf0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


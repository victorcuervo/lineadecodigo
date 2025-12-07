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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTR4ANYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfGKBr69LiQTO%2Boi4YTFfE42xSA1ZQPHkWNygLGx6JyAiAxdTJCTtocOwVKBezGVPiepH4M8j6cZRoDv3Npnrnt5yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgMt9zDOpv9hXfMlsKtwDRQ7ytPmpHJqbtYQK%2FzbB%2B%2F6mEp3ilUE2jOgyH9OeuwyJCA%2BMDhXODduYoY1yMSfFiLtDmjOBpksXT7qxablAxooOO1ooQaeUhr%2FP6ZiEnUmPhvi45cX9Hgkjw%2FKdbN2i69GNP%2Bel02fwaYyUYQDOzvn%2BBOC%2FRAsnRGmVO%2FuHTTXKPwh6JjxdUHUqi82AfKcIhAYIIp5FDE7SBn6rhJDUJf%2B6NXTEs8ykJb6oJSVZrgNR81BN6ocWOauq%2BdCm%2BHPhRmPgVUJWxyj6A%2FuuoY%2F3jvG0s03dPUJhqaR5aYue2NjTd5tQp7fFb2x6j%2FEyr2D7EcuFSPHEJazs6vOSQIzdawyncFl3jKvkkLqCnJ4%2BsHsS417Af04IRVfWJewtwN5KVmrps383SsfxZw6Dpd7oSkekG6hoRBcA1cI9SXsvpZbaRW72V7kg1tbzVPNQmRgG5SxNhIAMIDF4dMp27%2BXwkN4UAVFOvqYohb%2F3rq%2BmXYmeyEaS4wtdW%2BOu%2FYIiY08lmRZrESaBkzO8KO1hX6EIZ5JH%2BcVm8QSkp0U6Ux1kagTo2dAFMK5G6LU3r7Zue3jdsqnF8fblokT8kJpu0TeVEuwHWGb%2FEr%2B8IDQNuDFCoxjhHboqdrlZGZFj7h0w7aPUyQY6pgEwWzR7jSjNGC%2F5HAcEIGMG9n3IidudspwC3IeBxexVobQA0u31ANS4%2BJFasqG230NAbsAN24hm%2BY5G4IliYvZGh8UvGqkhaVxOCUBiLuUsKxbrkxOCboz2jvTr0mybWgNJoFcYbqX6kgRKAkTIZBkPA8%2BMCMZ0kkZS6Cjz2I6qxvW%2BLelNxZ9UFKfGp67ATejbwsqC2a9nPlVv6wI5mLvZz8t0YBI4&X-Amz-Signature=9f731a3c975ffecfcf0e7499b16b87b80c95eb257d4825ba12c6eb141d136731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XX4PNI2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIA%2Feg%2F24x4iW8JJOIgRC%2BccradJnCqqtCbD1JKbB%2BiO9AiEAo%2BHADMOmz9xLXxuMYDz9DLHMv0P9wroSNHBEgiC0pSMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDM%2BfXdyYCGWUeRlpMCrcA%2BR%2FdaeQe8HZu%2FHsW4IShkOtaO5qr5l5Ddl%2FBaDKIB4OxJ5upwW%2F7ED5OEVdPvBggpx1N%2BhtQ3DPjFUQwHioJB6LB7zSpETVN8fvKaKBX%2BpGqUMIX22GXh0Vdb%2BsuxHZEXAkn0bPHRwlvWcVv%2FTniIYhLD9BrqY1PqBg43xZezr%2FceYDhPvrvxWqHyAsggcxinVU%2B%2FV7B45kjg1UQmZcC1Rx2Oouf7mCsVeer%2F%2BymFxPDaBbm0PvmG3DBFSUAUFCIl%2BHDyHHJea%2FOasnD%2FTQI4nMCSuwFv1diYP2%2FGuIvYDolzE%2Ft9sR2pS5j2cuAck9nQZ6Z3EQbKznlzvRpacR0bmQDl%2FmzVgy3jnTqine9hP3azG%2B3KaoOx6Uv7QB7FZHVkITRyfB22hFv3E6G8P3YSE6ERwUR4dfV4bsw02eX%2BBpEUotCvYj9FZgr4qrBA0Jxdk6KlmU0mm8xBlCHOg4QP4LLQiKc0%2FR2TrJiZPPfDf1o7Kj4tWHkolfrpS0psuG6EVIbm7%2FDKCufA8QjUJUt6nj7J%2FhPP60pEKQ9PJOxOiV%2BjFrJMl%2FmYRVZb7w7MC4%2BmzuyCpY4NjfrVJpkZl%2B1DiwUNdJqcxtv1%2FDft%2BnjNlv2%2FN7AKnNzhflgdYpMKKDxskGOqUBKAb1B8Ok38oNDGKJRLd7FsPRmYVecOj72ivtVh7uZCKOOj6JyAtJ%2F0A6eMgcpTdt4qvIn%2F46XJ9DzyNPlapiL3%2FEOmlXDv1JkLCpCYQ4ZL6Nw3rkSsYILR4Q4TfrEjxl0JKZFq5zm%2BK5IC64Dh9V%2FLvO1NaSKR7KPPqbY%2Fmjvs3c8BxBeT9xUcVMr5A90rISIHYc4zi27XkIGE6nzO9LsgfEFxpy&X-Amz-Signature=920482a208f131515a98afd7ae2cd095ff67b6a3f0daf3096e7e630d6e93b1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


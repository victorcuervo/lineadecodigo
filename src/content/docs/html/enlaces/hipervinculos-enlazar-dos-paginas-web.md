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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HZALFU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsbKrkN7kDdXCoopkIZTtuBdDGzpoh9q3uiX8gIdXp3AiEAnYvF2XTMfB7nFpd7PPQIuITJwPvfpo7kmjGeRZ%2FrB4Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNJpRGxjxPI1BN8FGyrcA9%2BGe3OizV1Jxk9KI61hEB%2BmhM2IsrvfT7zWkJ%2BlDfLMbgvdfQXzo0Kvpw4R66MZ93%2FRqORUdQ8a82DJTV0e6zNxjZXv2lqqBsNp2FmYHSmUExk90bzVsioGvCZ6LgG1B41%2FJtUC2fg%2BTC0%2Fs83isvE9FM0DVZxkkaZc5Ld4ts56GiYx%2FCxNDLIwGH0PQLpIp4YzD%2BdqgAHzfK77Ck14I4daJq4VzUhZahXt%2FTlddQFMkSjg12GS9R4cnITn%2BFORAwCftpIHCVQAqmRxhUbBptr02WR%2BE3HUdMZBzgF%2BnyN%2BLZkK4AKcyHStYEwKHLsltd0GwlUCbysVFg17VQpHava99mnA4jvp6GGJUSHI699rms3wLoHl420dqU8M07Pd96l9jjg9LWklTlFdgiPRrQvjYNgK0vfGGWJXOMoD4s3cJ6Jl8ZGMQMLkMEeksGeQGFXWLxf%2FRVgW0JAzeNDW6axO6YOlONB54%2Bgmo0vxtGKMuRO9IP0FjJ8bV6GbVVqIIPc2IpOJEfdxbuTiSApJe7g8aX0nhD2pXPpeBelIbOpHSTw4ZQdADgcmtEntwa70ZBD7O7Xmyuz%2B75sfixNvgRDFj8pgpw70TwkTC54XFWSohKD9X7BdODMkdJ9SMM6m0MkGOqUB3zpZfkDLEO%2FfJ5imSP0oXpSyBITQVvn1fZT6ujUWGecQVP%2Bd03yw0ocYEjVj4U7pNHzxwzcxPutFRSPgzfmWULpkQPb3Vqe8nUBx8cPSNScGhWrjmqPMG3%2BGSchlidaSj8063ST3cv6tNcGsxARIkeOSFUuD8Og6et5K4WD3wkc2t3j%2FGTwBmKAcc8Ordt3PrSBWmFF8geaFA3ftV%2B9iHv1wBRzG&X-Amz-Signature=ba09be36df84ea9ba646bbf1e3b5fdad7d0a3e93d2800783eb3a067ea16b9561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


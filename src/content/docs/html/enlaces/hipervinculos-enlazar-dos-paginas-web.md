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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TUFXTSE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIC7yoj%2F24tr5sFfza5dnW0IDqOyaOYRK%2F1rJrxWl9Z%2BKAiEAh6HxpN68ZnfTb%2BT5EqhvpIpkikcjadO0T7HQJz8TVC8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGWM0upJTHLPpglkxircA943mr0yDTQgJhaTRYXV66BbrCLgeD7k2yOoXyIHa1aOvtlfGBcCVQvqsbHUF%2Fe78yD%2BUsYSwzsLZvZqouoe%2FPiflJ452x1aivDVSNzaFSDJWZdH6pICMgNZO%2BjCNCi2GI3Sgjk%2FGcqpdC9lm4KUnVv%2BPTo9HzarEn1CeEFZMtZDesP%2FDdQCYipLMP%2Bsn9MZcD1j6ISFoy%2FLdIt9hZDB0R%2FotxpCU3NKJZSi%2FF4JTatv1%2FusKjIF5FbAV0qFOUehXqzmq9gmQTc3jaxKzLH9ZsZvSb41QEJYResyrAxg1amC4epw5s%2Fw%2FsVfoqq6mM%2FpRDwa1ewKZfGUbPd%2B7dIynGU1ID9E8pdzPl1MQEkALmgw%2FPl0qzp1jRcuGys4kM3qngAIP%2Bc30hfNzMxAXU%2F5%2F9dne%2BAMjp9c3MPt5cO3NIFSxFHtvxOJm6Zg9rCmsKSfuDnFBoTCQ9If3qnpQflvZueUC48BcJcRuYY36YC3i7sJGYLpxHM%2FU2csgG21aR1Ex8MEYEiv0voAtKVkJkMHR%2BqnYpNHKBiPIVkhMiWTZu2lpaGwjOnEzaDIEFzXlAUCe%2FZpsbvl5YvEfQM0Im3G9oGqHgzT7Vy0T%2B%2FVpyKcETKSpmjqxZ2hQ9LAbY%2BiMPHUw8kGOqUBlHox4hoMvWmbtH6QoZurhjfxuVcGT8ii%2BDJJ%2Br%2Fb00lLLNYnY0ekaNl5zqsI6Pn8lLDymIoPWPMpkGHQbP8tWs8uxKT2IKCu%2ByF%2FqN%2Bg6vJMN9nNNyVGlYvuzj5uSyQy%2BJVzoDtyB8sabT%2F%2BFcXvlUDfogoDHwj83%2BEIAwN9q1MyMAyBx9BUj4g0k4otYUVvUs9tuzGuzv44XyhRh0V2I1DZEoH9&X-Amz-Signature=875dec437458f19ee1492b59a91417cf021aeea6b450023e01ccf358daea0d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


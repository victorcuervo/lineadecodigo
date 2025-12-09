---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VILOSKK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICABBBUh%2BYiqo3jqfRwcWjhylwOFAxzkAFqbxLD0LukaAiBLklJMslOeHK2%2BEiE%2Fx%2F6YcwHlhUTPsjBDU%2Bd4%2FzTvmSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbyWZ%2FkeYyQAiA0s8KtwDgQuGwL2NFuWsxQCn0F6mt6mcCgfam%2Fc9oG%2FKvqYJ%2FVT%2Big8dP9kODzHWmCkvfxi1uIal%2FkOG5r46W3SvIAMQii3xg13KlsguyNEeqGv1hHQOsw3Az%2F4pSyFSLs1AhDiMww%2FaVaOsqcQhghJXA%2Bo1yNrxIhVF9nL17gdOk343I3Z%2FmymvD5bPIil%2FvVkzQVAQK14X8%2FcUT9twQ0g%2BDO%2BY6p16jgdGA%2BtdnCj%2B5DE0oKGl%2BQzsQZQ6rGClpMYmbrSkCX1Zmb9rUqHkg1gFVQtqAoum%2BPCiAJilFRF0M%2BC4KLo4RIok2nr31d28EZ0phM%2BF1jOZk7IAvzXPgB4%2Bkz1N1cvVIvHeKI6vboiozg7eFjU8nX6kw%2FJaXDwXnVIBPjmm16%2F8zxX5s09PCm0j%2FU%2F%2BoyJ6Tgew8nP5G1bNJezoFsQxb1T8QAVreiMTw5UtgTJ5IoROmvKgJwTFDf1g%2FAahb%2B1IimcmPvn3cYYd5BNmQGmBM4yUPwD643m4Ru0n%2BqY2VoJU%2BLuBv1rv4X2rU1iQDhA9hFtn9JNRMCSC65KDMn3KBtpXm5b6KQH239wSM0IWd3CkX9Kg9tVd7kAu3lH9ydRrLg7E9kqU%2FIsFgwSrNrriNa0yYLGoV6Ja4AEw2N3gyQY6pgFUKWKZRIOyQ1BLlcF3cNKbJIAFhtOfGx%2BmBVLwu2ZyxclG0m1muVOVmRswrMRv739UlTrsG33AShx1cwzlxoz41Y5JCRoqS7kKbv%2BhqLmGQfq568ESdpCLpMQR2JSaMKZPVS55IkzoYCLvaz9ABm8s3gmB7UjhO%2F3wIp0Fq%2BasrWq4r3o9igrynChvR21a%2BGHjtZ%2FvifadMFp%2BbG9zyCk2DpBdH7WC&X-Amz-Signature=8e2e139d3f019a2f11bfd059ba2e822a3c59b1648e6a9fe969e327d35947626d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


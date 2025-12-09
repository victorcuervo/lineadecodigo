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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPYC4JL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAstPIsE1TQVncgHJ%2BSXExMXbiXySEfX%2BOuQ%2F2msQMiUAiB27U%2F2XCYAv44eRR1IHJ9CDz4KCHn2thl%2FPdFiceXJ5iqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM69VAJJHKdaSEpWCjKtwDvGqebSBa5kC%2BueMlfmQOkcylbKaFlJLtIonDP51er5U2hi9rL1Wn4kuUqbUBKXDc88R1lYmr26iab18g2aBfUQSPUOCxauKsgWSVD5eBiAPI87GZBLQk%2BheiMqCo8ZVhSN%2FZvCl89hcmvl69yhUcpeWnpdEJ17EZucQ4lekSGvOPHSCRoPzIRS%2FKNf%2FXLLS7RKcesoNfV09luLvywgC1wREkjGMECaeo7GdnzDrJPDH1HkR685L4lutfwCnRsPAdaLBNumQTRwN9JedJlU76jwBzafls6zTx%2BS1Y39bt2c5sp6rzuJJWuKTM1LkWc8IiI0Q7ydm%2B4VGfa0E8FNSYfJL%2FoFIxvm%2F9UBlPrMbCrHH2GQY8sR85xtlLWvSJE7rv4xM0x8Aa4AwqOcGIw4Ocwq9j27C5bPXHd0F7olcZxLXb2W9hYucxKpIOc0HRFtKyCtj2BpXNerj8P4wfRTRTUygNUeX5NlFHEUlCYTBcCs1OC%2BtZUfGN3e9IuRx3qhJKashbYAsfQ3mgaaGTuI76rh97JzdMx0M6pGCQm78%2BVbSjZtJNWKZxVlFhWKQkdOb9GNwj83I2e9Uc0SMbtAp5sQw28qF4smD%2FulC2WKld3HYqxB5cPZS3ThcYpE4w1tzgyQY6pgG5GVfzWOlhY3lqjBY7%2FYFPO%2FAZ7lHleL2rZRowzVGL9aSZWPgx48NG3bam8AfhYb9p%2F6vlJ9aQXnqSqCHmleIPf%2FNELQpyQh%2FZ0uIoQtmwz9p%2FzelsSN9eCcEJEmfWYNOUnRUL%2Fxz88Bf2Vca7fRc%2BWhZavrB3krJMqvP%2ByY4hWxOjbd1eXKCQfY7H4E6ST9o4l3d7dxd0vgiNayjQ74ex4LQGhugF&X-Amz-Signature=c5f4eecfed33948db39c6c794ca4b164123c4aff89b333a2f53cac43c029d0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNBLL2A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCLdeg5iTaQ33ohrHIKnx9NJ9%2BNoOGhPS1tRN5LGh8hAiA7pmF7GgU7%2FKO%2BuCmYwgJFeYQwrmgi34XNW9t3LXjEgSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMbcXDTV6KSv5dqAabKtwDJy%2FDZEQXh54UOOttHuA0iXa3V7VUgQQT2mPiZs%2FWqukzqbmVzEfWqeK8gDsLNJBLKyIVnuEGElFQPLKdzqC4Hth6Bwl2t%2BgiEcaGPTeqWx3Bu1KbsqvH9%2Fp0T4Zpfk22FdXGuhcKRHXF2oYEZHTtuRHeUvELfjjP5fMNIOs28l745tB1b7bsxiv0R6LfN9WSxlvcEhKpQQAqRoejTSAWJyDj0j1XjEQfkoFuTu2tlSDFfScuwkjfiprAvgZ7icbm54E3MzF%2BeGpNSLsFKUflepLxuAM2QoUiTM9HL8zekkTww82z%2F3AN36faxnK7tBlDOM00eY1I0j4dwaKWNCqBCYMV4ccYuMDIOlMF3YcNYzajOpXFBmsOFu8xZeev38ebARisXkoNbhu12Xr0OHG%2FUIj4pWVyoGANArIoenq7d6pfISbD9GLDACPyiOZquQE0PFKaOTx%2BNrPTzNzJuT4yzrROEpPzz8GQhNvviTEuZa3idKkohHtd%2FMciSZOikrctGeF1i8jo83yCU5bc9WA9OWxuf11RqTo0DTkdQZEMIM%2FpFRaX%2FEvUCPKlekjql4h4%2BKZZmI08HN%2FlfxNxUC9v6K1kMzMftAKI3wU0DrnJYy2XkF8DHMOwUQlYW%2F0w5KbQyQY6pgHexBupwYY9CzrhSg3AAW35vygBXgZA7oi%2F8wp6l1PI203UxbwsQD8hNow%2FMtKU2gdCi%2FHa48JrPM7Kh3nicvHpbUKUyC5wNMlpUzQl29J7qhqvMon9rujxPizyKsKwfE1fJ67imMFbufy%2FPueCeQ3UcK8Z4h7wQJq89Fgv4h5BjpdrygBg7%2BNtr3mR2gRzKLJjne9vDumFQrTwmSxjLmd2Me9a49WK&X-Amz-Signature=2487c1e24cf5be49b6158897a39398df026c3fd61b2ff1aec24f476a31965594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


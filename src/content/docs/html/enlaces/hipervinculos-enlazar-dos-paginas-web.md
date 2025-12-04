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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627N7NLK4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDhofq7%2B1ELgb1iIFO356BwJewSbCMlD3W69cyuz9yg%2FAIhAOVGQjcPh4B1pTwpWWP8GxpxviWxSuWNL1DAqG7W%2BvobKv8DCEcQABoMNjM3NDIzMTgzODA1IgwhS0m1CcBEIJojuegq3APEUbUjJIa3sFbOpOITeIqXmaCiGMfCWggvC%2Be%2FAe9Wwadd%2BAhXgl9iKhljWps6rNHYlbOmpFiqgmzRPS4bQOBOqNnhUMVoUMp6Iib4anZfJpWwRTOWanH4s%2B0aX3xI3VmUxQEOiiIfhq%2FaPpzhvhuhIsL6dqWEfnKYQ3%2FH%2FmpC1iJioZVJmo7Fs8YljHzUbvBPw3hDRLAdylyEeGBRUd%2FdQsL6yYDRTpOGg7U2Mln2U3msOtWl%2BM1%2BR3up0rx8q1UaazNgaWRTfAClxATvws%2BSscbXqZOQAbMz89EUfIr4lY%2BdGK69xsceub18CA9rOZYsQOehFBxUEL%2BtRA0uCxGTwMAHlsQd9VaxJYOkxbw4hYlZ3gbyfC8PlhqW6VEVUUvSVk1fnqxdCHcHfT%2B45vGMDdx3CwM9PulO4h4PaYte7A112XMftcb1d3nUs%2FYo0HtHfbapCI4IL8SEJMeYluhRhOuQG2xX0UO61jZU93iKryAa6c%2Bc2utYdZEAmLAIVQ7iiO5HoUTFDfq%2BOuP4uUMZnM0nIqttTqWiy4BUNgjpNF7CJOQP6Zo9upSC8zhTK1i7uLSjCrSKdCrJjlrZ2nStZKgCY%2Fze%2FONSkW4T8neLD4dQYr2jCzPOPNRNzTCoocbJBjqkASjsY62UXZQltqSX9KEHqnAjMFAgl8k%2F7OSomy0LPbMU2dNwPhCnxog5e%2B7f2wdpzEVdBCo8pqTZbVns5UHq1Mqs%2BOu0rwiUNmDs65dLujI1NJ8JfJBMh9ahAyt2pH0xCrF2IKFDJMChIfRLpA5wqKXMGxj9G%2FL0nbFez%2B7ZKBELzdWG15kYMSUszgkWZIbvMVZgaaAd8nv362G2%2FpowSyVYwjoK&X-Amz-Signature=bd1b52291d88727530e270c75f13a479c5fc6dcc7f36d75c2f1ba49055d53965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


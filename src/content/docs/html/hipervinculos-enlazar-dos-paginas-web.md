---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPC7QWZB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDH2Y%2BBgQPt5anq%2BqBLXxnH9NkLkDZTUkan0X4t0zLcLAiB8lNf6u4Or82rebXYXJ8tWELdX8cWu55T4SOHHyhuvrSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMKiPFzJKhapUaNw%2BWKtwDc3ayC7Y%2BARPRj9riVOFuxKlG27DPQondrPRkkI4vh6NXAdFeeZ4FsTqSGEhWYi0JoLmwbgHUbIMoMOnTN37hJhWetF%2F3tUI4Nllbh179SqrJiY90VRY6o436tzsvVuFgPP6geiG9U2PDbNQ6O6QTMS0BvXHd6CxpIb63EE9wd5f5BmmkCW6%2FzOcKWK5u1UJoP9NEddbuYBATaLamGzbcrmkuVeqMQGz9%2BapNq8qPoiik9VysWhjlbv22%2FlPxWzsc2Z3P%2FqZxHTdwBtTwP0CfdNYXknTRLQVpxfCVbDJiu1E%2FnPyKBYGrSrVkxfLM0JDyWsUDWM87GgYrA3LfL91SW5HogqwRJMjR0WPIWLkb%2FkXg1p1BMimClVJKs3nLqEYlJ5D3Gy8pPKAfQBGv6YfW8ic0DZq04ptKxxyGM0CylnDihmVn7SK9KSWjASy69nFeG1zZs7cwZTXZZAVuHrJ4KZOs1SuNIIogLeaDMhIdYm0BLCnNuif3K2LM4T%2BvduOoKC2zYJ0F97pB1SQxp1Za%2BhSa2t2ZsgfIBMMdj3ciSRlM%2FXYq%2FvPXMJaLKyiMMzYkZ7XRr8jfOzAzi5t8ZP111HX8ItfLN%2F5C7a7J4AfLyEWUgcPPpwTvwh8PLR4wh5LCyQY6pgEmO56CTPICQSvZcnkgzOFIvDE9%2F%2BbPh%2Bk1xDjSxJwuT1WnvLs8tfSnrSjvECyOGeCoOWuFC1Q8MljRVwmR8NRAFFOMa41a%2FcLYJNeezSavH5F36RQBf6htm24Zm1Nav8ZksucBtESbQxJCnPBm%2BFwj8LZSdDStzxQ2GUqoGT56Cv4LeY9AafdT9PFZoeraXgCxW01lvtFtQ1GLHkomgeKwiSq1%2BRza&X-Amz-Signature=f2c8dc576cf7323966686fa1135c94dc2af76835aa0201e382fe664568215cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


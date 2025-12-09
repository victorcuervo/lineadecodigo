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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEVX4EWU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDakgNxqxM1B6zezN6owFQKhRbeBURcHmUm5JjXxA4kPgIgANnOpVsu%2FI9m9Xl3R62NgtsJrHA1b%2BZ5WCUbvS9zqXIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJRb%2Bd7JFYrWfcErircA7BR919KP1pHdoKk240G1XKr9PhlPrd8MNmg8L6qTmFBsVtErwPALP57ebVNOHoTNOCQ%2BFzOZeZHNTaDUiWxkVjq6%2Fd7wo1FV9xJsJYi44u8FTr5XD9mikz6QIpJXq7TubjEVYdhL6OKxe7%2FOb4YG%2BonrYtt3xvsNLeMX9WXtk9QOWoiJxDBkuDQDqkJkGXk0YboS0xS%2BPbxDg35Wi7AWgR4cLOj9P4wu%2Fcbt68RBf92hU9TCyvYADpi6qkykje4Bijui%2BF1z%2Bex0Q0c1io5ZhNrIi%2FFWYzSVsHNiIPErN%2FkIh9IM0Z8rPwJrB0DWKj92duJXNxWTdeKjFzMYF%2BSTVf%2FLnrIw4pAvRzApChW8LytQjxA070DGH%2FrNXU2HZs9D5H5yDuIVBi%2BggDMKLx9VYTNFRpK1vt1BbUhw4TtIlpqblndaxC6PD8gb4MqNuBXutPo2tfqrET2X2Na653nYbsqdflt%2B%2FUkVSWnwQD2%2BehkpXwaKvlgQtXGFo6wRfLAft9nRv6HysGxDSms3X5C9IOxCDd46n9bb4GyVvsPY4Eo2XHYdxvHJj4iKOUtfLr3FNkTrDOwMS%2F18P1n6iutYWTmFCtZNKqFVYMEbexMAtpSOI7vSo9SWvM47djLMJ%2BY4ckGOqUBhfCpD5UzDU9P3HOe9%2BUL%2BgZvfNtbs45FXteUCqHj9Z2LUG%2BgR%2FueqbQ1RnTPqBD0A6Q8FV%2BtBZOO06l6yQKp3DqEez4lXw4ofq7Xoiyz18pbVkQSFIj3j%2BD625ki1IovF2JrI8QhrL7AS4oJG4njqml%2B%2FrWcfWs92cVqrupKahsUsisjfcvru6ICvAxVs7IhCOFju%2FhOlzDiMVTwls%2BMWhBR5p1b&X-Amz-Signature=02cc7ed453cbf0de0d8deafa3d0166c1423ac1ca402db73734b89110b6f414c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


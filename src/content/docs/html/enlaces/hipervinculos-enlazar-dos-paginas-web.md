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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J24ZUM2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfdgoAkr8A5l8uxBKpKyI5KjSv02aIYkc2Ra%2FB7ma2zQIgH%2F%2BQ%2FJhqI784Mkr2XWPV%2BoJPiwZ%2Fdz509mxZwXsw%2BO4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCvdqMN8EubTcnkpACrcA2R8KPjBMAIC2PD%2BDfbewi%2Bc0GgDGRZAS3sVHTONh%2BsjyY4shGsVPeHIrobj1Tk6KBMjj0QQVoyJWbMThj4JmVwNdRV56j88FBTQ7XKK%2BCJmKtvaz1LGfe%2BcI35LPyjSpWCH1tQn03Fj1IdXJ6OJCYEcOHnfFc5vgMBdtZezlGw4uHWyTbxPZxah%2BnhTDjo1ksXsYYWti%2ByNX0JOwfGK%2FWH%2FxEoXrJTHwnXGh1VgkyFLv5q%2BhRnuKPD8OiVEK1KKZQt19YHV9x6fwJ75GEWVBjH7m6ZyyuZ6q85FDqbp8%2FbQbZYmzXnxiDC02RAh0LNwiBL6NBIufH65r37C3kFLPR%2Fygh0%2FTsiNPbiNUhBimWe3JbM00Jheotpbbgq2223rZID5aRYlAFJJlWl32ESFQBeCRJBNzWsQrfTHX0dgccPGdD3zxliwlntCEjVMxCLCxf%2BcjucuQr0%2B8KgM4B1VDcUubn3fJFGUtmna7CFcs9NhNDfZrjHLCQBsofyHB8kpo1XfkpTD9vQde2KdxPohJ%2FkPXEIhyZnXpYen%2FfCtXzP8UWgRIcV1Lo%2B3SoDEcHmbdHj73D5aBzqpKj1BDclW7wyRLxVd4TqsQLyDbMptuCJaQ4mdZZBLZM%2BumHcJMICn0MkGOqUBBc71j3Bzuh8T6jJ%2BivzIWvyYuT2S4KWaqEoHl8sLtfZP5o0w5Y92MJ%2BqEQJIdEaHI8ek5imLB0XAmpoCLBPSZAKgd%2FbjE7xyJVPNJwOAFNqM3vhhfqCYbTUnEESKalKYlliPjrD0SquYSb8AsA7iynOXJ6C8f4GYgHizXY%2F079YUzTk4OrDXGz412EiYbF4xgG1Sd%2FyzENTxuRPSRuHPFDuV%2Fb%2Bz&X-Amz-Signature=554ee53bfb0747202b9d71bf8141d2e9e273e2f06216f912e165fbadcdbb06fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


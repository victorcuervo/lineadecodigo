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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5H2LUME%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbPiyPH2%2B9beMnd0WCymrLqsffhOczpMC1bEwbOZGEKAiEA7w4PStonZ97HJ2BBD23f78V82IQnlPH9frrB2G7%2FuEAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxO4%2Bt%2Bw5EeM8yNkircA6dxib4ojHPB%2BYp6m%2FEkQ0qBF9F1O%2BdVVvrLYojY8rFNKWfU6w9CnTwqXyV%2FJeVGh1ClAgjL5jpDFx0GXbDo8xSn0BBsQvy8LEE2BjrzCzjvJBV7Go9S9ciAVJMPUcR90urWp5fLh5g6mIwqZQCe4ecMj6WsUdYgNwVNJ8br7ekg5aqDKBF63chIvXtZhz6rbBN1dAl7q%2BRGPQavruQTmSvhwLj%2FAkly2OOC5Qqt42ZV4dTctq3BUpLfgftqc4CPzkTczZUdq%2B8BoLUbtduzn%2FyZezmsOskXGFtpTFFu1K8eTmk%2F9%2Bk8aBDiFOGpxcMyOfQdjKO7j8jkWo%2B6kCznlI7OspK7cxud1RTR3F%2F5hu0yHC5H6rNPc6f%2F1wwWGleXP2SNACd7%2F6s14xKpa0opZ19AdjjCZtDc5EVVXLI8EvsClm%2FkkY6OfCMFGkDAx8UZRVpE03GXDsrNePkBLBxSVtAuxlIycr3HimO9tMAeq7oDfqLU59rTHvwJvOVXSvRGuhavd3nN5yoh3LEL89S93M0wqMyXab%2Fwot7ue%2BKUj1mS8lvLc7YmQD%2FsIliQ7wxCFz6Afh4iOSKcqqfDbFYBitI%2BK3rPp3G6duMQOl%2F%2B6MdnfuCZWeHZqnZcBy0UMLil38kGOqUBLHSsOSH0fINnA%2B76NG%2BebuIvKDjzIxzwPLPBv2F5dGsqYCYO%2BNsgRoM%2BMSs9frNMbvdISFilVnWJ9jWIy3lMqpe3ousrArXIkF5t5ugOIBLJQo8w%2Fyd6X3xGTVlJ2kxkaSA1yyI5Had%2FL2DK4M1UbpFW2VuphFr4WWz0PRSVs3f19jlOSyhExwr9zNF2rsSazQywFjfRFCIBRg5WYaywyK81WC9b&X-Amz-Signature=9dc7631d7f76003cf433803cc754f8747e0ec283aad29bd00ad5f2fdbfdce0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWVZYYWI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwedpXAi7NdlEpA0lAZFeC5VL43Y6%2Fa%2BnLvuE%2BpUnQ6wIhAKn7iTIxXNTwOEuioxNtpKIQsffGwkub%2BIHx8tjAW05GKv8DCHoQABoMNjM3NDIzMTgzODA1Igz7sBR69UGDSyc2MVkq3AMTaoYMQdpaE42tIUt7ykEWlL4nZFbBTzmNACW8HhUYex8bMvepwQ%2FCVc4o9XHr4QW5oW3gt8oBzIFBChESx3s6tDugkDRMlP4HbxhbXKfswhaQFcgcUDeW9fOh4ry0aTffakeMWo2U1i6f4c%2F8HKsgGmsdIlM9AzXGGX7srtLv%2FfpE1nTYHJp2ZXG5S6YE%2B%2FJCQMeRPrcLQaA9mbFcXr%2BDxR0bkBlNUvV71hWlp1l%2B8qI9rCRxZNkNnF%2BGCVOJ3WoOKKpbNhCl3aQlq8c7V44OtVU36Sl6EqCry7HOl6aFD7%2BpGQTj2v%2BGQa2y3zJ4umFBqNWhr0J0u9Lo1FA%2BakcthG7kX90lmaFHtEH3lPUqxckKnEVs1kpNyaoOSl%2BfUCeas8myjivTvXYcxQOTTLqvq%2Ft8WqNWj%2Fd652EnwtgjUl1%2Box5U2M%2Bpsw4ZrBo4aMpUOI6X35xLUHYhmlJv%2Bm5BmOZqbf989%2Fnt1xnIihOT9rx%2BYB9tUnnhCnX1i%2FtWONbB3bSyaN%2FO1uP445wQ2kW%2FIpmKxJvyUCL6Wie2UbgbQy9%2Fv2sCMaHpcX1XiUKWW6pboYDeCFPvRpcqgi1BOkR%2B%2BmFqLoH5XdVqhB1i2wwCjzcJ8YO0Yf%2F6UBLBRDCzyNHJBjqkAXvf7ERHkyqGX2JszQ3Gekmn2xLsDzDpNIWrYOm09CmQq%2B5bxExh5KGwgk1X93LYa4MKthGm6VGMeCcWLXFHjGV1mymEQPg8RkNL0wa75QWkJ0ereihneW4DmSrwpvYYh849e5y4rx8DZHiDNO%2BQuoGo%2FtmWdGrux7CWNDhS3Ajaxfg12lzaMI0S2uC1yRLpCnIn6K9g1AZWguxFBFMl5JXZgHpd&X-Amz-Signature=13b4608a83bd1e4431442be45bd84d10ab3d04fbf6fce22438c63b300bd56559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


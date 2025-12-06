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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4LPYLON%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeF1I8%2BCjWktpAgclXuCO3WTxsGGnIgFj%2BIX%2BbqnY3uAiAKnQTkuci%2Fn7rKU%2Bqy4MbXN8qlNiwNGdiyDXczurGRWSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNClfqzaUdYnMtQJzKtwDbqcvbIEe6F0XyyK%2FDn1Itv96VgeLEAMD6CSIe2oKhmbA1tPg6Midodpa3c%2FvsoRcfpZYXpAGdJqPDm9t5esKpFexYAXfP9MW0T8b9l9o1Z37zqtepkws2EYmQvXE3pH2SgeAE9PjZrj%2FvG0jh5BL7ww4aLmDW58MAmIFw6ml3QDR7t7ZF%2BRFcOjHTuFPiL5%2FnN%2FCjSKylnbxF1%2BQGlhtGnV4pP3NDjFd%2F%2Balhm589cGp13IfdZ%2Fxn0f5f3DTBq1P9mL9nJQwy4gwKWWLi8S7wZJD%2FJNhFNzARs3Nqypuk2PF%2BLHk8NGfmgzoL5%2FyVpTq01x9Cv9sTJ4Y3FSJALl1Wgd8XJCKA7Z%2FAMip4ojKBLTTbe4hzKUPs5P7rGhJhaMo36XchPFGIWM5FEZZUVVOdxNMW%2F8bCTDg5fF%2BBV%2FAbKB5pQ3%2FEcsTJ9UBhPK7Vjm39rgocBKgz5BbtJtcQrjlTcoNtrPjV%2Brmdty04MwssbitFozxRPKsciTFZskfxcKNCwY0sJLAEN7cUp%2FQbGsiKuzTkgXP1YDOtnFfSRSqfQs40fEfuLkeL6zkQwhG7o%2BvV89%2FFL%2Bja7%2Fh%2BYKn98tQc5j35prhoZdKjYlADFw8YKVl2zX%2Fw8L4wqvZLN8w2KbQyQY6pgHZeARj9WkVTtSIs8FioAUMuP8GE4KBMqzcmwFYTrPfnQaX0RfFlzUdJVSN2czwDYGXjIc12VEWufrNLG%2FhdCOGL4x9EDBXz2iFFlgB4himBhVAZ3pY1bfXbKRL68PV2vXpTJgOar9ROl5l%2Bc1xkJqr3Dgi%2FTHLAGmTmoYiRul2CrhsnX9qXE8XAdvh9AemwogrH%2BnhUvgVeggy4TmcUYHQ3ZZtRZce&X-Amz-Signature=d54de0cdab71c97297dd29af901f0af47e4a1f2be9c2374aa912bc99dfb1bdc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G7CI4KS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7aWiraxqWy0MY8I1emJ9II22LmfdMZXAZcF1mi2%2FttQIgWgj4H2zK9qVh7htReqBStuKR2sJnLA9aASOPNQh9TF0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGMT9pbrdxXJRjuOFSrcA4I0Mey3cBAKJb4FqwJ03uKmJ1ixhyo9X26mMMJLQHVsI%2BQZe8gLycmAJhRITD6i9yH24zfRCxQXg2LXwpN54FOqoAf%2FkR4Yh1dLPUJcMiTTxC2xMn0wetmJzMD%2B5XmjucCrkho%2BRGIcrxbnQUpUfdbuWkQqexTaa4kVc0uVpWS3YEevZNvgXk1bLBuoyjMfVOOqhjdkAaahxV4FO2LWL44Wb43JIiQpkEcmXOo%2BaM4%2FvxD6ChR7zcYgirRnvvkrYuVLlERY3T4EqmdqhnM8Fi4%2FdrUZei%2FAPSrGG%2B7dVHOx1EldNpthRFlmzR%2B1IXcFe7dRrNx2aL3MEOVtr1vZUjYfIi%2Fs1iSFAs8L42Rm3%2BvZDYrwBTOWa3l9fSo410wX8Fsls03KCqBKssBEbfbsjLTIBS5YtyFTyXzHBe530Mpup9P%2BBEDI55YOxXGrxt%2BVKyAdOBWWmW1c1cgzTBMy%2FGoIFUnLELpQSpaYqrERgmYURATVGAQkWffkJTwAI06g4Rjh3S9e8oKOjw3yBfv34lBV1kCXwchUub5BRfBXHikPahny6BMtErVQirYZR9RefJP8QEIn0Lp1TNaazUwNOt0rMIm0759veOYkWJAtvFISqzJmeXNNSLl%2Br%2BX9MKTF0ckGOqUBH0oo9LIq0rMKcTtepo%2BrRO6z1JC2J1PWI%2BcbKf3MF2ywkyBlzYAy%2Fvc2g%2Fkyrccw3R%2BxtVDj6G3%2BGXUfAGJZKJ5db53wudwQTGMRpCXwb1mp0iZQon4MKz9HJ%2BR3IT2DnIHSL%2BUe85SiyQ9%2Ba%2Bb%2B25zUlqAjMCqOaagfn0mhna2m7q7Fy21vWkHcpvio5kIXp9SesjBx1BSDJM13pDaFR8yyls3w&X-Amz-Signature=636705ca539d466f4668d1a8e70bfec7846f9b98857d979b6aded093d7de4a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


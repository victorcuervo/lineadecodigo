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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMMSK2W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBn2MBjprLnCvRoNMJfiPsJdptjwn%2FfN08fpzBLH2Y9hAiAJtrGyzFBZbbHmbJJ4KRJemj%2BPtYcvIgC%2FHd7GLdsypiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0egh58QdPhvwLGawKtwDucd6RKotI%2FwGuWEx%2FDL9fVq7OHtov9Po2FDdweqK%2BLloV2khKmg%2BD%2BizZvFgrZnjWu6HprFgJDB%2BcJ8BMDoboeEi85cq7Wzf844FnSSNTTybucxTbIh3YIC2CqpWlk7Ceng2rq4wNyx7SCvKAq%2BwnrP88Fl8aTs2RTU9OXusU4yaECdM%2Bue24utq38zCh32BLzLnoUfwv2HLT22TP%2BNKx261LRxV9XQiFTQj3BvY1znts%2FdfpUZcXq0VV3ZFI3%2FrJVBywl%2Bji%2FXqTJe6PW1gLfDLHsWOebOLFQgkVNYlN7UjLIgi6b5idovyksweUMBS8Qbpzn8XOJmrXqGXpSuOA3nCDMnbiuGfHWPyYuPgH5dWc7RGaGglmdw3iKnUn765JnexmLpBsrESMG5UVnvWS3JmRCWHzS1iWeZ1p%2Ftttotvfzm%2Bh2vStEvmxjXphp%2BcxL1qZtIs5ZKB1Dg8uFjsQw%2B0SZOAnwSBMBoEiUqteccHvKrnbmYMicMXCe1rJUVierv5N%2F7uasEgUY5nyeEgovGM9kedOYVvItepBEqC1IlBv5G70zZB8DZUUeQ8B4KZLmzHozGvOQqICc%2B8ZL5WFLEJ0QnBsveuHJAYKWP5fQp2UNrke2mLzsWLni4w6v3SyQY6pgHkgspWQ9hfUpo54P%2FvY%2BDMcWRAcCINveruaokbjMLa%2BgH6gvgSENXSImOMUxROzotTFQJZXs913vWPQzMGg3UNtoYRH%2B4YM%2BGXTGBbMoksx%2BskEjnFLRWzUuoBOx2TXSh4x53gWROh4w%2Bbh1%2F18IhJe8V0pfX7OrhN0fdnoHhbYjkL7FTZajZ81UW5iRMPoV8PWHxg5o%2FCMyUszvqlZqaS2FDvh9JF&X-Amz-Signature=771d1826a6880b4e352d57802f9c925076b1f48e8a8fec41bcfc73d3267fbf5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


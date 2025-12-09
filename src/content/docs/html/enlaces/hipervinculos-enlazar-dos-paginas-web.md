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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSSPT6KE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmNEKOmZMON6wf0ZOJfOngndel8s%2BLFsu1Wcb8J1wlqAiAJLjrroliKAL0vS3brXg8jYrtIBo0bVJt5S%2FygxN%2BT0SqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYhEj1z3I7BomRyXLKtwDEzpY%2FY9eoiWa739rAG43z3Db2TH6uyDRyqL134t1qZgT5YLLzd%2F0kEsr%2FWqYNKycJn2zCkwSTPb8Ea94KnkY0DEF8ZQJByBRp00EhCwekDvcyldrn5NIkF90BkCJlkyDEG8lBzIdaH%2Fa4cuLuAFZox%2BPeLxir%2Bzz%2FvqRbh0NyOml%2FyncMqekMDJWkjqIN%2BTKp86da8U%2BpM1a1G6F%2B%2F1WrxcWmNRbk%2FxRQo5ktmOFwxSXBcCjWBzNL1eWwIcZY6RQNKw6Sw2nO7EfCuqn%2BBSAwQiTL5Il%2FIsLDFUAB6nLyhColcU7G1sJh049AQPEvJVUeOJpk4ANw%2Bb1w7%2Fs%2F0v8xL2VGKphtYT6AMJMqQviya7zp0CfxUZJTjIpXZii3ancRPCSpgtW0GFpcxnqcn2humo%2BSPsnsb3T%2BYz014ikznDg1K7DrHRAcancxXkBajMUF9EeQe4zIpEwVI1ZCWWVdWV0LoqyxL1moYsAeLdmAxRFI5gF2S1%2FECTaIwRWHRNjjwX%2Fd2z2pCrCf6ulkPOVRQ96jpu82mFexSN8jfCV2QsGnGKunooDBeEnFrEQRNkCWRkEVeM%2BUH2WOorcZbBg19xHxJ0el3CR849soUKB70VaMSh6NTg9v%2FeDokcwvb3hyQY6pgE%2BNo0w50gFg4482SIpTU8%2B%2B%2F03h2uroIzxlQ6TCUXhSgLXUJ7oKEdUb8k6%2BYf0fNaqBd56McySTJvM%2BAt2MGhFP7VOPpREdmXFFpe4LGVjabdv02psC9Zad%2FOiEt%2FBWQVZwjGVvQ5oZXiw0WKJgLQCLmSaVx2DL7EIrwIIHOwZKw3%2BuaRLpB314sOBfCU7bEx%2BWneaRFlaleKswmS3N5Gk48kBl%2Bug&X-Amz-Signature=3714d66540bed9dd87432ab8b45a3618cf234d57d203e87808f4c5ae70853bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


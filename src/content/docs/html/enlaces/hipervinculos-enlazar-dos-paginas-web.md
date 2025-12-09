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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CHFYE6Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnsxabcNUiTGQvcYMeoGHQ8ggx3M5lD5vNGMy0qFYlRAiA9xtHCQaL4Pb1p5OA88H2bIJiXcFD0AC7gnzuIKOhYriqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ6aGtLW2M6kJtVsyKtwDBnnDCYaIgD%2Bno0Dh8WkjE8g7t5y2qbJbTKStuyxf49WOjQXig3jYn3J%2BqFocDtZ4ONe5gQ63JiWMq6Rt11zLI6Lj3e8tfyqLZkZJiEJDTu6Hn3thlZQUCgt6xkYeody%2FK8fo95COUZn4wKmdi%2BCcssgRFf7PWmstawM%2F2jChfjEMi6O%2Bb5b4r%2Ftmja7KTP08i9U6oUdVqZDbPa2TI%2BAOwGVOsxZ7zMyytOJB1pjU1LqRaMGDkmht8z9ZUqmzrZmL1eTPAE87fTcqCBJg74VtNz%2Fyjcyg0VOg8zkwNeVGw%2FgmC%2BSNlTdr1yyTHUAHTlG2zRCnKjdgUYBtoAEbK8NzQDij4APRwayHoon%2FiP1qy1cQfnY85gPX7eFUlyVa99IbfeaWJ562EqniJfBj3NOVEfogHts347Lzol3ZZ%2BAVyMTT8%2BNzbM5259RaApqyJf%2B8qVb3LMm6xNt7mrkQsGSuzEo2YffeYS6E8WHuTOrmmBHlYcow1P8W6Wpdr6q6fUom1mG1YZF9dNYgOuQhnXVLx36jF3HnHVV%2Fh5rc3k8P9vzvqrJ6hn67GU6VpYCzL81nN9p6p38yP6Jtultrw5ywpLa4mqIU9VvYlgRssmxqmVCvN7aJDAMsLD4ceZUwtv7hyQY6pgElVkDzZVDOqKSrwwf3PLyfGxdFJ5OoBZ9VtPwF3oBcPyonJmA3S%2BDiZUE9Q%2Fti9SEs0EYuJE9gziwXGL0YX3z35s9XHM2%2BJ%2FEon8JSVbC1z9Qv3MU4FwYTPfox%2FK8u40XY%2Bq3sIUxbGtHXKR6yRR8ij8kbPujgZg%2FH1iZMxWCoA%2BA9zrObw28enZ2Fwppuv1Zc6%2B1Dwimge0Wik%2BDGdXQxg1DB24Gd&X-Amz-Signature=7ae8645badb07accd5a4112cc70ef80ffa0a7eab3ff3ee1a520f5e272cc6d66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


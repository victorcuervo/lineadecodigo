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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM4RYDYX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T234615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPNK%2BKiec57gq82InDOIGyCMN0wxkg91hPT58QfAo64AiBx4KbxrSoOeye0g8lgP1JcVJMQP5nd%2BLINOOEiSH5V4SqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZuCi%2FX02yURw52w%2FKtwD8KSIU6amV%2BaceD%2BXH81BpWNLfPs%2BHhunMxvB%2BmN1PAJ%2BPVvkOq3ysJ4XkHpYXMpZnRNGbWkTiurbdJ05hIr%2FRtu2ldp4nAxgZd%2FunNW2Xz6GvQ5mPeh%2B6JZczi3zCtw7Xt1jBi%2Fd2%2BEDepNJoely8QsVZYZvIkuJObMUX78aUoKNOmFqKeaAmxyroNbdJaj4vjuj%2F9ShkqCDlnfdL9l7yvcYDHRnjpK%2FMqvT95pumQLxd%2F%2BzlJnGAlf12ieIsaDNhlnLqJT3FiWHJ5RZ86j7DIbCiMNBAP1LoqlEIKHNsOjQNg8lMckZrN66bfqnXanJR34I1mm%2FjiYgyw1SpPFla%2BaDVcjaTEtz8hjOCNqTm6kg1aj77P%2BAAYOPk4B24ZSdIS7UEGJR9mE9Wzlgwm%2F8olBn8sbEat9UB6GZEtyg37j%2BdtkoCr%2FBZ9hfXOK8EmpBBnufRwkofgIZ3ITzl6Mi%2Fr%2B4wnHYOJx2HFv6jlgH5NgJrqP7%2Fy2sE5whszHa6KkzVclgBoWMOq96oSBkZ3qhqbwr4OyPhWc6bJP%2B3e35VbxUkWUVO8oN8tOI2j%2B4uqJS466KYZOBpc%2FeTfzL%2FpgOdych0DESSIFONZlWlKNqvT%2BmZD0JhaHlGMxkvAQwg8PiyQY6pgHFd1sTsdjYd3KVfor3kkV47dLg3RkOouFI3dwP4T1E9Xdq3f%2FfyrF6GMkzqgurdBAp2eAiNSuLHkEKn7nNlgGJkRQeLAZYZ1UC5u6uA7%2F6eVeUkWBv8Kfye00WXvG%2BThH1DCbf95CG5UKkHjM4hWiR1on2ZU9FADmLefL%2Frcsg2hXjTRNRn0E6ek07PAuqvPxnsVXgNMu2H%2BGULjK3RUlNteGddI7P&X-Amz-Signature=7fe1aeeee3e36a2b2f2c615f928a65bcf60457ec095af7d5289ca025c24206a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


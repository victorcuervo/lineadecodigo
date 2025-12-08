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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAEKUFK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpLP51xXni1xLxgqSva9O%2BTWT2NqUBbF8SzBnSnSf26QIhAJqgLV0JqXKfbjliPChU07lSYWBoT51UWjknyMh4g1gWKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoCcNmuTEpIvzFvkcq3APN0w59tzdzeO%2BDm29Aa%2BL7RvRNXcl2zGhTrCrPEeDdksjh2oULY7vTJe4CnS6Sf0sSW6jKBqcEZ2wmpeHdPTnDP4A%2BNPt5Ffa76IX1tFmDmss1ZKn1EjcO%2BmdyOzcdU6pXg2bCjEUkeiPyre7hVD8lhKocWN%2FCOC0aKwtAmcss3ehvR6%2BcmsuiOq2uIf2KqFcQvDisKTnEdLWsTT4ZAHwzLjfw4BdFihiAiXZ78uW%2FPG8Nj2xjHwT4sZ1paPkMLCChc23FLGM9rCtq5RIu5Yma%2BU%2F8F6xCQGsqJOj0a0q6duOpU3AX8pXQN8PC9G2XeSt49i%2FOtJyYogFXVyfOK6L%2BP1zXEoJ6p4BSEH9lR6uP9Y09q%2BgR7tOvl2NC2pCViQfo3oiupEXZbs24s2CIQjyZMmNovknAVyjj1TNxz0u7hT6FN1xMweNsJjDwUwAzGoTmqnJtymnjuz9bzbVKSzt2E0c%2F6ISeC%2Bt6NCJKLz0kKV9ZWEz2g3sSsaLZF872Wz9WbTbnCoDQc6L8qSt2rQQeNbIi7Oas6mWal%2Bzpr2anH0Tp1Kh%2F%2FnwMNFNZetbewEEMeb3saLA5%2FgcBMPUphB8v8zRmoNhfsb3AJEaRWF4c0n4M1Drj9l7uAc5%2BXzCakNvJBjqkAUpNLDz4yKbq5ucASnq8AhFpEW3SIWoUd2fKqf7PEOPq0d2Vlth31EmYVWkluZT5nQMLNdU5kJ14gkhMwTseOjt7AYFHv1Ne8f6QxDIp%2Bm%2Bdyc2aQ68V2rra972nXACJjQN2ZhVEsuAOJ4ZlvTuAx0gasvTXtsTZUwVV1s5FUw%2BnieD4gK8Jbdu3c0%2BV1UAH7dGMamv741YlC1UdCBOLw2bmdsix&X-Amz-Signature=0822aa93b1eb682dae8b55c8dd26f268aecf78956f6d76045f353d3cfaad9310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


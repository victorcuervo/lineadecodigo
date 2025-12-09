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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BJ47TA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T214057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJzrhEyecAZFW7%2FaWtVu%2FMZd6G%2B8Wy6wEeFUoVsbnTgIhAPt8%2BWtQiOXkWqWipBL2dwR0ijIeq1UYqtA%2Fjooi9rLKKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqrRGiyAb1UtSxVLQq3AMeaOOOmq1oyXsk38Phg6P0OFc%2F67eO4ez%2ForCmOzf77fhLiZONsSCFGtPlTQ1AB7ELCwV2DmXC8EUsceY56xuBNtbfOE2xYy0JGx%2FG8Hrop5qGW%2F8o7OjiFz5%2BM0Qkas8gReZmklsTjRlALkCtKEVOaYqvfCMbNqTy7%2BWuubLTLetyyFVicRZielvnLFvgSKBwe28ezLMhlhS7Zb4jOqv%2ByqNKC8Cpoa4UIVZQO8wEioC1IdsjRB6Ujaopq%2Fde9iMfsx%2BnFZoOgmRhuJcgcsReX3lqiBXv1Ts51JD6jZAfhBNmTKhpA4PaOZ%2BmGVQUn6FyBXLesXrn513OoLG57WVVBgwC7nWvExAMJYTNaUyUzkc8YtlZXf4esal025l5QZqYxZJHunIYfqNguwfJJZkZtyuoW4NC%2FS0n0N8Q%2Fz01UOC9w9cz1TSylXisDLP8O15KSA6llnfdRQnoVZmiUDWX0gdzLv0LXWlfNPfIEyTE0ZInzcF1JCTtqgnJMlMxn9JZsVq%2B5berP27EN3I9aJnhQSA39%2BwBrlaXKMRfBHzjrOuad%2B4Aw1CgPshE8MB7Km3VU%2B00vOepgyEPQpU8DtZjzFElkxv9Kq3swZbfYRXEbXHNWHeEUqX4nEihBTDunuLJBjqkAZarCXR8EUYyM%2FCCqJp0AiGwZ1%2BVYG4SFZr91KQpZEZPZb0Wa16%2BwUhbrNXT399KjAo0qe%2Fp36E1cP7f2nC8Bk3ehHkLXgj6XEtfnL2gGE8EX7wTfvau9Ib32EhucWGbwITTr1whUq3JMlI5JhmDpCxhTYRku1rWvfFtyLuPIqfwow1VpimakOESvQyaCX7goOwAIKWaqJXxIBVHuLnoqaTlczOB&X-Amz-Signature=f5af5bb2a842eb98e8f495979cf174fd70db422a0c95701e592ae1a1a3fffdd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


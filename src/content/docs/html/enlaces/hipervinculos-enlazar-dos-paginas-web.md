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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUBHQGWQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfXiPJHxU5O5eXHIPbAe22Pn0Ht2Zefjq4T0kTcA%2BokAiASden5Ewzm6v2y9xnLiPwgQPJskyXYMir8rSuLHzps2CqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp35GPnG3GslDxo8EKtwDQEP%2FG7Ak2a4nn2EpW%2BNyAYcSEWvmCeuLGCA9746%2FXx2YJpIrq%2FUbAvOzAtHBfRm3U2qAfE%2BvyiKxvBH9rMOVVatOsGuS2us0PJJIL8deOEaoN1VBIfAJnS2qgOyeTfJyB90Sfp8zC41qSgyhqF%2FUKwoGxJKUruCLK0KMuL0QgcuECwKtJ%2BWn4oWZWl0F0xtPw29sqCv4gXN1LDpY0tm7%2B05vyWA85ZFnO%2FY5G9fl%2FqFc6YrevNO%2BbApH47W%2FCiztp0ruQ11iJSydOISk930uKcTffO49Qhu14JTTFG%2BTbg1%2B6eZBYdw8C6VIHZ%2FtupH4W1uetb5CUjWEqbqISLhpwbUA1iLtzYB97s6F4tVAUuRUYvcSzN%2Bo4Mzqw0FyMdw8Ra%2FbEPU3tfEiP5RmTOp92uJUPMopfghbVNqdlf5HhjAtexmjohYO4%2FYp8XfoXIje1MUkW6%2FGpbS9ba3Q5CTUJu72bC03xA7lFeK5kLR6DaAQBp3MPanAmDDtr8lWNMhNCxjQIa1%2B%2Bup428qtSti9FqjkExhWmEeGI%2BJBfo4Y%2Bppv7l78vVTXK7WA28g4o%2FmgeHXAuExBrUNb8GQeajk8qV%2BYjs2eXe8SIQs3XButOH8p1c2VVyKrZDRl5Kww34fcyQY6pgEh%2FL1TBXhfb0lk2%2F7MRciZ%2F5e1vw7KDuH%2Bylldw9teuWdfp4tgcBeVCfQI1M2oa%2FvKohVMk8aYqNIn2kJmYmezcASMfQvfqzPIVEiY%2FjySjrSy80t3UnZo94b8G8KuUZg8ZKyPA2UInXcVUiqxPNwu6KKUgRQ7Gl7X4cCWh58ehg9HZrPf80vJ3QLXwLAW7lQ%2BP9ghW33hI2c6H9qOIADMdmGF%2BetH&X-Amz-Signature=4bed3dd97c06b7afa65d3886adec47ba8870722526cbc6b3c3be08d9492161c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


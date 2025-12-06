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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K74TVD7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlzE1yxn7z0ph0z6fr%2BMpeELXuD8XfEQUC1RqQTQef%2FAiEArmXzF6fRHOqonHdcGnUg10d0%2FWIbIRkHajpN5QAP9FIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBpNZncrizbfB0t4cyrcA88%2BUjdS75Ai4ugwxCJZrIgk5PQne551ZLGfO9CIqgWgeZw6dgXtzGP6rtFYnovPG2f%2FtbIn9cR7ig3OjSjFGfbt%2FR2rwjcC7ACT713KjnH2ajR%2BOdrhnJliMBSZ%2BtprWN4fb4EwkNOj%2BoMMgh2Gb9SOf7PlUm8wRAnSwtfAdx8ixSSMZ6h7bWfMcN2FsWqCSchWh%2F3BMc5NCHi7HD56NSiUVS7WrLbOxqpLy1kGP8Iubm8dgjq2L9vOWW0VDX80Y%2F4Yo5sy%2BeFWrRX6ZhIKwM%2Br61DkJDO2ApXwGkGsTzaDkYk%2Bw9m23lmy2ONXLU%2FuR6vu%2BMOHfRgVqBsxzgfR5%2BSo7mAaMIIE33n2MUVtkk%2FU3WxaYEQSsW2O8CCg02l378NUmBYL1ChR0eZW0SOiaslsijWkmD4VbMPVWSzlyFlB6O8XxN8acZ7YbYUsKDCV5W9HIlVfP%2FjzPeUQjxeSLsM46Ei4QGEqFTUOFjVQQn%2F87Gx0MIoSHIuK6gdDiXXDEr0MFVOBFHtKVhCTbQ2jwdo2OlHjfMpkE4LjZ9PxoCN1wO%2B86c7e4pAaix60YEOPc6D9%2FAGO6AcPh7BefnC9sVkwUrOf2qWgNjSDlGRtqqD0qJvbsy2yFJkOW8J5MJeK0MkGOqUB%2Bn04vBOkvFs7IdWLH8jpE9NN3Zo8La3hil42Q9NPxJoSasWSa0JmPhK%2FdM%2By1EqjB1sTYMD6TOiLSmd1YMprAm7dYhwFVSvtGFdHfnaV7kn7DR5naI60406dvbOpv4xOtTziOOYdov6i6XUQ6lhwd%2B0x6uCQuPvuRVqVuwgp343gYGy2dl%2FiFUnKWC9MY5yHh3MThUgT%2B6WJQ5y3mj1xpkC9bhzR&X-Amz-Signature=433728146ebb3ea2d57032c9a3ec4a57e39fb62061b24b31732dff67876cb1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.


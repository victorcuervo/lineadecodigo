---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHIV4IW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIA3XNc3sIAbNshej1MC8pdLYkL56vc%2F9ZwFIKVaU013qAiEAiBhlI1I1oQM1qsw93pHWU0N%2Fhx4JI27DKi4lBXg9dUoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIEi9mGUoS00HpZZRSrcAwgcpUMCg1WBChKEcaJRWpURxbmNzAJ8j7ph2jsFtC7h0zmTK4AY0%2FM0urF3GJwL1%2FZAKJdi3DLgKIvhlQ4o4QOyIZ32NKDfquQHGXDbgeDlgX%2Bnz0HXKZuiqD9TfHg2VoY9L6R1Fse1wZ1uEbWJLW3FKGXO2dOOZ6HfGC2VFoGRoe1bV6OQnMw88oYZpmdOKSoRM22jijjKfeNmGi7oWrGatBf49x2Gbp11wBVeJOGQncpFGOBdtTITlgNyVDOEZ2SDubQnpAZuhbFFgmRBozTRkmXhr0SYd971YcVC%2FwaT93Gcb6qSN0uja6WsgqsJE98OddYM960Voaygt5Z2Yl2JLKyvr4aeTnmaYg1v8XiqRyQeGR7YZrxcfsmvmQiT2YtsaZAei4oY8RMfjXjj6J3rGeaQuzVHX2xiQi2dE%2BrGVk5nP6Zv69CO7igqs0xzpEhINIGf7BJEoVtTONi08xLnivVNfc2O4pi0YpbgZw9hETKYWu2VIfaRwdl%2BddvMAnSI8fvTpTXTx65edY%2FsyqRj6BNfSF3Gc9HCrXhahXvbeFbKMhsifhp70QtEYlk8YQGisLFGcpoN77T4nj98EfdBlwNyH8343E9ela64T3DE0R7YROVTKP9ILryAMNHKxMkGOqUB01VKjMdqtLoAz7qcyAOngNREf1I9UHWCTm%2BCbk1LKBj3lMG43xGMACA9HDS3EoSE7l%2FLp04r1TiNsj4fSfztJLnVrC5HXfYTc9mFTcHX7wZU4aoJQ6ASvxdkkRa9Cx%2FC%2FXgGnGuONylZEZfpHEXPaiExTAfE2%2B8W0Umc8ZAtM7xAXmRKALjEqE311jtEphk26TvRsWdcQL8bpJdCXVASfz7P3KDd&X-Amz-Signature=2a1950837c6f1415c04767dd0b6e24485b082e3e3a1870b79fc3369b9e59e3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

